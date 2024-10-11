
import { useBuilderHook } from "../../hooks/use-builder-hooks";
import { useRoutingHook } from "../../hooks/use-routing-hooks";
import {useLinkConfig} from "../../hooks/use-link-config-hooks";
import styles from './ProductListDropdown.module.css'
import { PageText } from "../Text/Text";
import { LGComponent } from "../Character/LGComponent";
import { Button } from "../Button/Button";


import { CountBubble } from "../CountBubble/CountBubble";
import { ProductListDropdownCard } from "../ProductCards/ProductLisDropdownCard/ProductListDropdownCard";
import { IconComponent } from "../Icon/IconComponent";
import Drawer from "../Drawer/Drawer";
import { GridSystem } from "../GridSystem/GridSystem";
import { LinkComponent } from "../Links/LinkComponent";

import { motion } from "framer-motion";
import { AnimatedButton } from "../../hooks/use-framer-motion";
import LinkedLogo from "../Logo/LinkedLogo";


const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1 // Adjust for timing between children
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};


const EmptyListScreen = () => {
    const { setIsRoutingState } = useRoutingHook();

    const {categoryLinks}=useLinkConfig()
    const handleCloseListClick = () => setIsRoutingState(prevState => ({ ...prevState, isProductListDropdownOpen: false }))
    return (
        <Drawer>
            <div className={styles.a}>
                <GridSystem>
                    <div className={styles.b}>
                        <div className={styles.emptyProductListBodyMobile}>
                            <div className={styles.emptyProductListBodyContentMobile}>
                                <div onClick={handleCloseListClick} className={styles.mobileCloseIcon}>
                                    <IconComponent iconType='xClose' />
                                </div>
                                <div className={styles.mobileEmptyListHeaderText}>
                                    <PageText type="searchTitle">Get Started Adding Products!</PageText>
                                    <PageText type="searchSubtitle">Use search or explore our home appliance pages to find and add products to your list.</PageText>
                                </div>
                                <div className={styles.mobileEmptyListCharacterImage}>
                                    <LGComponent type='girlFull' />
                                </div>
                                <motion.div
                                    variants={listVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className={styles.buttonsWrapper}
                                >
                                    {categoryLinks.map((link, idx) =>
                                        <motion.span
                                            key={idx}
                                            variants={itemVariants}
                                        >
                                            <LinkComponent href={link.href}>

                                                <AnimatedButton>
                                                    <Button buttonStyleType="primary">{link.text}</Button>
                                                </AnimatedButton>
                                            </LinkComponent>
                                        </motion.span>
                                    )};
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </GridSystem>
            </div>
        </Drawer>
    );
}

const PopulatedListScreen = () => {
    const publicUrl = process.env.PUBLIC_URL;
    const { productsInList, listCount } = useBuilderHook();
    const { setIsRoutingState } = useRoutingHook();

    const handleProductListDropdownIconClick = () => {
        setIsRoutingState(prevState => ({ ...prevState, isProductListDropdownOpen: !prevState.isProductListDropdownOpen }))
    }
    return (
        <Drawer>
            <div className={styles.populatedListScreenContainer}>
                <div className={styles.populatedListHeader}>
                    <div className={styles.listHeaderDiv}>
                        <div className={styles.listLogo}>
                            <LinkedLogo type="lgRedFaced" />
                        </div>
                        <div className={styles.populatedListBackIconWrapper}>
                            <IconComponent onClick={handleProductListDropdownIconClick} iconType='xClose' />
                        </div>
                    </div>
                    <div className={styles.productCountWrapper}>
                        <PageText type="bodyCountTitle">Your Products</PageText>
                        <CountBubble
                            // backgroundColor="#ED0602"
                            // borderColor="#ED0602"
                            backgroundColor="white"
                            color="black"
                            itemCount={listCount} />
                    </div>
                    <LinkComponent href={`${publicUrl}/product-list-builder`}>
                        <Button
                            buttonStyleType="printDefault">Go to Product List Builder
                        </Button>
                    </LinkComponent>
                 
                </div>
                <div className={styles.populatedProductsList}>
                    <motion.div
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                        className={styles.scrollProductList}
                    >
                        {productsInList && productsInList.map((product, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                            >
                                <ProductListDropdownCard product={product} />
                            </motion.div>
                        ))}
                       
                    </motion.div>
                </div>
            </div>
        </Drawer>
    );
};

export const ProductListDropdown = () => {
    const { productsInList } = useBuilderHook();
    if (productsInList.length !== 0) {return <PopulatedListScreen />;}
    if (productsInList.length === 0) {return <EmptyListScreen />;}
}

