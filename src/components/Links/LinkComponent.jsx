
import { NavLink } from "react-router-dom";
import styles from "./LinkComponent.module.css";

// import { useActiveLink } from "../../hooks/active-link-hook";

import {useRetailerLinks, useRoutingHook} from "../../hooks/use-routing-hooks";


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
   
    const generatedHref = generateLink(href);
   
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



