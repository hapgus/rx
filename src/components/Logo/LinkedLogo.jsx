import { useContext } from 'react';
import { RetailerContext } from '../../context/RetailerContext';

import styles from "./Logo.module.css";
import { LinkComponent } from '../Links/LinkComponent';


export const LinkedLogo = ({ type = 'lgDefault', style = 'lgDefault', portalLogo = false }) => {
  
    const { isHomeDepotApp } = useContext(RetailerContext);
  
    const logoTypesMap = {
        lgVertical: {
            url: `/assets/image/logos/lg-vertical-logo.webp`,
            alt: 'LG heritage red vertical logo',

        },
        lgDefault: {

            url: `/assets/image/logos/lg-logo.webp`,
            alt: 'LG heritage red logo',

        },
        lgRedFaced: {

            url: `/assets/image/logos/lg-logo.webp`,
            alt: 'LG heritage red logo',

        },
        homeDepot: {
            url: `/assets/image/logos/lg-red-gray-home-depot.webp`,
            alt: 'LG red gray Home Depot logo',

        }
    };

    const logoStylesMap = {
        lgVertical: styles.verticalLogo,
        lgDefault: styles.logo,
        lgRedFaced: styles.redFacedLogo,
        homeDepot: styles.hdLogo
    }



    const renderLogo = isHomeDepotApp.isHomeDepotActive ? logoTypesMap.homeDepot : logoTypesMap[type];
    const renderLogoStyle = logoStylesMap[style];
    // const renderLink = isHomeDepotApp.isHomeDepotActive ? 'home-depot':'/';
    const renderLink = '/'
    
  
    const logoLink = portalLogo === true ? '/portal/overview' : renderLink
   
    return (
        <LinkComponent href={logoLink}>
            <div className={renderLogoStyle}>
                <img loading='lazy' src={renderLogo.url} alt={renderLogo.alt} className={renderLogoStyle} />
            </div>
        </LinkComponent>
    );
};

export default LinkedLogo;