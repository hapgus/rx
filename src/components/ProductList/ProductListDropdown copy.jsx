import { useContext } from "react";
import { BuilderContext } from "../../context/BuilderContext";
import { NavigationLink } from "../NavigationComponent/NavigationLink";
import styles from './ProductListDropdown.module.css'
import { BodyText, HeaderText, PageText, ProductText } from "../TextComponent/TextComponent";
import { Icon, IconComponent } from "../IconComponent/IconComponent";
import { ProductBuilderListCard } from '../ProductCardComponent/ProductCards';
import { ProductBuilderDropdownCard } from "../ProductCardComponent/ProductBuilderDropdownCard/ProductBuilderDropdownCard";
import { CountBubble } from "../IconComponent/CountBubble";
import { ImageComponent } from "../ImageComponent/ImageComponent";
import { useRoutingHook } from '../../hooks/routing-hook';
import { LGComponent } from "../Character/LGComponent";
import { NavLink } from "react-router-dom";
import { categoryLinks } from "../../data/PAGE_LINKS";
import { Button } from "../ButtonComponent/Button";




const EmptyProductListBodyMobile = () => {
    return (
        <div className={styles.emptyProductListBodyMobile}>
            <div className={styles.mobileEmptyListHeaderText}>
                <PageText type="pageHeaderTitle">You forgot to add products!</PageText>
                <PageText type="pageHeaderSubtitle">Use search or explore appliance pages to find and add products to your list.</PageText>
            </div>


            <div className={styles.mobileEmptyListCharacterImage}>
                <LGComponent type='girlFull' />
            </div>
            <div className={styles.buttonsWrapper}>
                {categoryLinks.map(link =>
                    <NavigationLink href={link.href}>
                        <Button buttonStyleType="primary">{link.text}</Button>
                    </NavigationLink>)}
            </div>

        </div>
    );
}

const ActiveProductListBodyMobile = () => {

    const { productsInList } = useContext(BuilderContext);

    return (
        <div>

            {productsInList && productsInList.map((product, idx) => (
                <div className={styles.eDiv1} key={idx}>
                    <ProductBuilderDropdownCard product={product} />
                </div>
            ))}

        </div>
    );
}


export const MobileProductListDropdown = () => {
    const { productsInList } = useContext(BuilderContext);

    return (

        productsInList.length !== 0 ? <ActiveProductListBodyMobile productsInList={productsInList} /> : <EmptyProductListBodyMobile />

    )


}
const EmptyProductListBody = () => {

    return <div className={styles.c}>
        <div className={styles.d}>
            <div className={styles.e}>
                <div className={styles.eDiv1} >
                    <ImageComponent position='center'>
                        <LGComponent type='boyFull' />
                    </ImageComponent>
                    {/* <ImageComponent position='center'>
                        <img src='/assets/image/gif/look-around-black.gif' alt='lg white logo looking around' className={styles.gifLogo} />
                    </ImageComponent> */}
                    <HeaderText type='h4'>You forgot to add products list!</HeaderText>
                    <BodyText type='b0'>Use search or explore appliance pages to find and add products to start a list.</BodyText>

                </div>

            </div>
        </div>
    </div>;
}

const ActiveProductListBody = ({ productsInList }) => {
    return <div className={styles.c}>
        <div className={styles.d}>
            <h1>HIII</h1>
            <div className={styles.e}>
                {productsInList && productsInList.map((product, idx) => (
                    <div className={styles.eDiv1} key={idx}>
                        <ProductBuilderDropdownCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    </div>;
}

export const DesktopProductListDropdown = () => {
    const { productsInList } = useContext(BuilderContext);

    return (

        productsInList.length !== 0 ? <ActiveProductListBody productsInList={productsInList} /> : <EmptyProductListBody />

    )
}

export const ProductListDropdown = () => {
    const { isRoutingState} = useRoutingHook();



    return (
        <>
        { 
            isRoutingState.isMobileBuilderDropdownOpen && 

             <MobileProductListDropdown />
        }
         { 
            isRoutingState.isBuilderDropdownOpen && 

            <DesktopProductListDropdown />
        }
          

        </>
    )
};