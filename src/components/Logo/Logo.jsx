import { useContext } from 'react';
import { RetailerContext } from '../../context/RetailerContext';
// import LgLogo from '../../../public/assets/image/retailer-logos/lg.svg';
// import HomeDepotLogo from '/assets/image/retailer-logos/home-depot.svg';
import styles from "./Logo.module.css";

const Logo = ({ type = 'lgDefault', style = 'lgDefault' }) => {
    const publicUrl = process.env.PUBLIC_URL;
    
    const { isHomeDepotApp } = useContext(RetailerContext);
    const logoTypesMap = {
        lgVertical: {
            url: `${publicUrl}/assets/image/logos/lg-vertical-logo.webp`,
            alt: 'LG heritage red vertical logo',

        },
        lgDefault: {
          
            url: `${publicUrl}/assets/image/logos/lg-red-face.svg`,
            alt: 'LG heritage red logo',

        },
        homeDepot: {
            url: `${publicUrl}/assets/image/logos/lg-red-gray-home-depot.svg`,
            alt: 'LG red gray Home Depot logo',

        }
    };

    const logoStylesMap = {
        lgVertical: styles.verticalLogo,
        lgDefault: styles.logo,
        homeDepot: styles.hdLogo

    }




    const renderLogo = isHomeDepotApp.isHomeDepotActive ? logoTypesMap.homeDepot : logoTypesMap[type];
    const renderLogoStyle = logoStylesMap[style]
    return (
        <div>
            <img loading='lazy' src={renderLogo.url} alt={renderLogo.alt} className={renderLogoStyle} />
        </div>
    );
};

export default Logo;