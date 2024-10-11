import styles from './ActiveListPage.module.css';
import { useBuilderHook } from '../../../hooks/use-builder-hooks';
import { GridSystem } from '../../../components/GridSystem/GridSystem';
import { PageText } from '../../../components/Text/Text';
import { CountBubble } from '../../../components/CountBubble/CountBubble';

import { ProductBuilderPageCard } from '../../../components/ProductCards/ProductBuilderPageCard/ProductBuilderPageCard';
import { InnerGridItem } from '../../../components/GridSystem/InnerGridContentWrapper';

import { AnimatedComponent, AnimatedImage } from '../../../hooks/use-framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import { PrintButton } from '../../../components/Button/PrintButton';
import { ClearProductListButton } from '../../../components/Button/ClearProductListButton';


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

export const ActiveListPage = ({ isEditing }) => {
    const { listCount, productsInList, productsInListSaved, savedListCount } = useBuilderHook();
    // Determine which data to use based on isEditing prop
    const currentListCount = isEditing ? savedListCount : listCount;
    const currentProductsInList = isEditing ? productsInListSaved : productsInList;

    return (
        currentProductsInList &&
        <div >
            <div className={styles.mobile}>
                <GridSystem
                // containerBackgroundColor="#F0ECE4"
                >
                    <div className={styles.contentWrapper}>
                        <div className={styles.mobileHeader}>
                            <AnimatedComponent type="bounceEffect">

                                <div className={styles.subtitle}>
                                    <PageText type='heroSubtitle'>Exclusive</PageText>
                                </div>
                            </AnimatedComponent>
                            <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.1}>
                                <div className={styles.headerTitle}>
                                    <PageText type='heroTitle'>Product List Builder</PageText>
                                </div>
                            </AnimatedComponent>

                            <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.3}>
                                <div className={styles.headerDescription}>
                                    <PageText type='heroDescription'>Create custom lists of LG home appliances  </PageText>
                                </div>
                            </AnimatedComponent>
                        </div>
                    </div>
                </GridSystem>
                <GridSystem
                // containerBackgroundColor='#F0ECE4'
                // containerBorderTop='1px solid #D0CBC1'
                >
                    <div className={styles.listDetails}>
                        <div className={styles.countStatement}>
                            <PageText type='bodyCalloutTitle'> You have</PageText>
                            <CountBubble itemCount={currentListCount} />
                            <PageText type='bodyCalloutTitle'>   products in your list</PageText>
                        </div>
                        <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.5}>
                            <div className={styles.descriptionWrapper}>
                                <div className={styles.description}>
                                    <PageText type='bodyCallout'>
                                        Click “Print my list” and follow the instructions in the print pop up on your device.
                                    </PageText>

                                </div>
                            </div>
                        </AnimatedComponent>
                    </div>
                    <div className={styles.buttonsWrapper}>
                        <PrintButton productsInList={currentListCount} />
                        <ClearProductListButton />
                        {/* {isAuthenticated === true &&<SaveListButton/>} */}
                    </div>


                </GridSystem>
                <GridSystem
                // containerBackgroundColor='#E6E1D6'
                // containerBorderTop='1px solid #D0CBC1'
                // containerPaddingTop='3rem'
                >
                    <motion.div
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <AnimatePresence>
                            {
                                currentProductsInList.length !== 0 && currentProductsInList.map((product, idx) =>
                                (
                                    <motion.div
                                        variants={itemVariants}
                                        className={styles.bannerCardWrapper} key={idx}>
                                        <ProductBuilderPageCard product={product} index={idx} />
                                    </motion.div>
                                ))
                            }
                        </AnimatePresence>
                    </motion.div>
                </GridSystem>
            </div>
            <div className={styles.desktop}>
                <GridSystem
                    gridType='spread'
                // containerBackgroundColor='#F0ECE4'
                // containerPaddingTop='3rem'
                >
                    <InnerGridItem>
                        <div className={styles.contentWrapper}>
                            <div className={styles.desktopGridContainer}>
                                <div className={styles.header}>
                                    <AnimatedComponent type="bounceEffect">
                                        <div className={styles.subtitle}>
                                            <PageText type='heroSubtitle'>Exclusive</PageText>
                                        </div>
                                    </AnimatedComponent>
                                    <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.1}>
                                        <div className={styles.title}>
                                            <PageText type='heroTitle'>LG Product List Builder</PageText>
                                        </div>
                                    </AnimatedComponent>
                                    <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.3}>
                                        <div className={styles.subtitle}>
                                            <PageText type='heroDescription'>Create custom lists of LG home appliances  </PageText>
                                        </div>
                                    </AnimatedComponent>
                                    <div className={styles.desktopListDetails}>
                                        <div className={styles.countStatement}>
                                            <PageText type='bodyCalloutTitle'> You have</PageText>
                                            <CountBubble itemCount={currentListCount} />
                                            <PageText type='bodyCalloutTitle'>  products in your list</PageText>
                                        </div>
                                        <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.3}>
                                            <div className={styles.description}>
                                                <PageText type='heroDescription'> Click “Print my list” and follow the instructions in the print pop up on your device.</PageText>
                                            </div>
                                        </AnimatedComponent>
                                    </div>
                                </div>
                                <div className={styles.buttonsWrapper}>
                                    <PrintButton productsInList={currentListCount} />
                                    <ClearProductListButton />
                                </div>

                                <div className={styles.lgManImageWrapper}>
                                    <div className={styles.lgManImage}>
                                        <AnimatedImage
                                            // type="wipeEffect" directionStart='left' delay={.3}
                                            src={`/assets/image/backgrounds/builder/lg-print-handoff.webp`} />
                                    </div >
                                </div>
                            </div>
                        </div>
                    </InnerGridItem>
                </GridSystem>
                <GridSystem gridType='spread'
                    containerBackgroundColor='#E6E1D6'
                >
                    <motion.div
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                        className={styles.innerGridWrapper}
                    >
                        <GridSystem>
                            <AnimatePresence>
                                {
                                    currentProductsInList.length !== 0 && currentProductsInList.map((product, idx) =>
                                    (<motion.div
                                        variants={itemVariants}
                                        className={styles.bannerCardWrapper} key={idx}>
                                        <ProductBuilderPageCard product={product} index={idx} />
                                    </motion.div>
                                    ))
                                }
                            </AnimatePresence>
                        </GridSystem>
                    </motion.div>
                </GridSystem>
            </div>
        </div>
    )
}