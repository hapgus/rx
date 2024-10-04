import { NavLink } from "react-router-dom";
import styles from "./LinkComponent.module.css";
import { useActiveLink } from "../../hooks/active-link-hook";
import { useRoutingHook } from "../../hooks/routing-hook";
import { useRetailerLinks } from "../../hooks/retailer-hook";


export const LinkComponent = ({
    // type,
    linkText,
    href,
    linkOnClick,
    children,
}) => {

    const { setIsRoutingState } = useRoutingHook();
    const { generateLink } = useRetailerLinks();

    const handleLinkClick = () => {
        setIsRoutingState(prevState => ({ ...prevState, isNavLinkClicked: true }));
    }
    // console.log('link component',linkText, href)
    // Dynamically generate the href based on the retailer context
    const generatedHref = generateLink(href);
    // console.log('link component ref',generatedHref)
    // const isActive = useActiveLink(href);

    // const linkTypes = {
    //     trackedLinks: styles.trackedLinks,
    //     default: styles.defaultText,
    // };

    // const textType = linkTypes[type] || linkTypes.default;


    // const linkStyles = type && type === 'trackedLinks' ? styles.active : styles.notActive;

    return (
        <NavLink
            to={generatedHref}
            className={styles.navLink}
            // style={({ isActive }) => ({
            //     borderBottom: isActive ? '2px solid red' : 'none',
            //     color: isActive ? "#262626" : undefined,
            // })}
            end // React Router v6 equivalent of exact
            onClick={handleLinkClick}
        >
            <span onClick={linkOnClick}>{linkText}{children}</span>
        </NavLink>
       
    );
};
