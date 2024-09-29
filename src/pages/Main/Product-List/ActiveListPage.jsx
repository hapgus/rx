import styles from './ActiveListPage.module.css';
import { useBuilderHook } from '../../../hooks/builder-hook';
import { GridSystem } from '../../../components/GridSystem/GridSystem';
import { PageText } from '../../../components/Text/Text';
import { CountBubble } from '../../../components/CountBubble/CountBubble';
import { Button } from '../../../components/Button/Button';
import { ProductBuilderPageCard } from '../../../components/ProductCards/ProductBuilderPageCard/ProductBuilderPageCard';
import { InnerGridItem } from '../../../components/GridSystem/InnerGridContentWrapper';
import { PrintProductsButton, RemoveAllFromListButton } from '../../../components/Button/ProductButtons';
import { useAuthUser, useLogout, useAuth } from '../../../hooks/auth-hook';
import { SaveListButton } from '../../../components/Button/SaveListButton';
import { AnimatedComponent } from '../../../hooks/use-framer-motion';
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
    const decodedToken = useAuthUser();
    const logout = useLogout();

    console.log(savedListCount)

    const { isAuthenticated } = useAuth();

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
                                    <PageText type='bodyDescriptionLarge'>Create custom lists of LG home appliances  </PageText>
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
                            <PageText type='bodyDescriptionLarge'> You have</PageText>
                            <CountBubble itemCount={currentListCount} />
                            <PageText type='bodyDescriptionLarge'>   products in your list</PageText>
                        </div>
                        <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.5}>
                            <div className={styles.descriptionWrapper}>
                                <div className={styles.description}>
                                    <PageText type='bodyDescriptionLarge'>  Click <span>“Print my list”</span> and follow the instructions in the print pop up on your device.</PageText>
                                </div>
                            </div>
                        </AnimatedComponent>
                    </div>
                    <div className={styles.buttonsWrapper}>
                        {/* <PrintProductsButton productsInList={listCount} /> */}
                        {/* <PrintProductsButton productsInList={currentListCount} /> */}
                        <PrintButton  productsInList={currentListCount}/>
                        {/* <RemoveAllFromListButton /> */}
                        <ClearProductListButton/>
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
                                            <PageText type='heroSubtitle'>Create custom lists of LG home appliances  </PageText>
                                        </div>
                                    </AnimatedComponent>
                                    <div className={styles.desktopListDetails}>
                                        <div className={styles.countStatement}>
                                            <PageText type='bodyDescriptionLarge'> You have</PageText>
                                            <CountBubble itemCount={currentListCount} />
                                            <PageText type='bodyDescription'>  products in your list</PageText>
                                        </div>
                                        <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.3}>
                                            <div className={styles.description}>
                                                <PageText type='bodyDescriptionLarge'> Click <span>“Print my list”</span> and follow the instructions in the print pop up on your device.</PageText>
                                            </div>
                                        </AnimatedComponent>
                                    </div>
                                </div>


                                <div className={styles.buttonsWrapper}>
                                    {/* <PrintProductsButton productsInList={listCount} /> */}
                                    {/* <PrintProductsButton productsInList={currentListCount} /> */}
                                    {/* { isAuthenticated === true &&<SaveListButton/> } */}

                                    <PrintButton  productsInList={currentListCount}/>
                                    {/* <RemoveAllFromListButton /> */}
                                    <ClearProductListButton/>

                                </div>


                                {/* <div className={styles.heroImage}>
                                    <div className={styles.imageWrapper}>
                                        <img src={`/assets/image/backgrounds/builder/lg-print-handoff.webp`} />
                                    </div>
                                    <PageText type='bodyDescription'>Registered users enjoy even more features benefits. Submit your request today.</PageText>
                                </div> */}

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