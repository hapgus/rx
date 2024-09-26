import { NavLink } from "react-router-dom";
import styles from "./LinkComponent.module.css";
import { useActiveLink } from "../../hooks/active-link-hook";
import { useRoutingHook } from "../../hooks/routing-hook";
import { useRetailerLinks } from "../../hooks/retailer-hook";


export const LinkComponent = ({
    type = 'default',
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

     // Dynamically generate the href based on the retailer context
     const generatedHref = generateLink(href);

    const isActive = useActiveLink(href);

    const linkTypes = {
        trackedLinks: styles.trackedLinks,
        default: styles.defaultText,
    };

    const textType = linkTypes[type] || linkTypes.default;


;

    return (
        <NavLink
        to={generatedHref} // Use the dynamically generated href
            // to={href}
            className={`${textType} ${isActive && type === 'trackedLinks' ? styles.active : ''}`}
            onClick={handleLinkClick}
        >
            <span onClick={linkOnClick} >{linkText}{children}</span>
        </NavLink>
    );
};
