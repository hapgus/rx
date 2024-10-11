import { PageText } from '../../../components/Text/Text';
import styles from './EmptyListPage.module.css';
import { CountBubble } from '../../../components/CountBubble/CountBubble';
import { LGComponent } from '../../../components/Character/LGComponent';

import { Button } from '../../../components/Button/Button';
import { GridSystem } from '../../../components/GridSystem/GridSystem';
import { motion } from "framer-motion";
import { AnimatedComponent, AnimatedImage } from '../../../hooks/use-framer-motion';
import { LinkComponent } from '../../../components/Links/LinkComponent';

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



export const EmptyListPage = () => {


    const instructions = [
        {
            step: 'Step 1',
            title: 'Add Products to Your List',
            descriptionLong: 'Browse our extensive product catalog and add appliances that suit your customer’s needs to your personalized list with just one click.',
            descriptionShort: 'Search for products and click “Add to List.”'
        },
        {
            step: 'Step 2',
            title: 'Visit the Product List Builder Page',
            descriptionLong: "Go to the Product List Builder page to review, manage, and organize your selected home appliances.",
            descriptionShort: "Navigate to the “Product List Builder” page to review your selections or make updates."
        },
        {
            step: 'Step 3',
            title: 'Print Your List',
            descriptionLong: "Click “Print My List” and follow the instructions in the print dialog on your device.",
            descriptionShort: "Click “Print My List” and follow the on-screen instructions."
        },
    ];
    // const instructions = [
    //     {
    //         step: 'Step 1',
    //         title: 'Add Products to Your List',
    //         descriptionLong: 'Browse our extensive product catalog and add the appliances that meet your customers’ needs to your personalized list with a single click.',
    //         descriptionShort: 'Search for a product and and click add to list'
    //     },
    //     {
    //         step: 'Step 2',
    //         title: ' Visit the Product List Builder Page',
    //         descriptionLong: "Access your selected products through the Product List Builder page, where you can review and organize your list of home appliances.",
    //         descriptionShort: "Navigate to the “Product List Builder” page to confirm your selections or make changes",
    //     },
    //     {
    //         step: 'Step 3',
    //         title: 'Print Your List',
    //         descriptionLong: "Click “Print my list” and follow the instructions in the print pop up on your device",
    //         descriptionShort: "Click “Print my list” and follow the instructions in the print pop up on your device",
    //     },
    // ]

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mobile}>
                <GridSystem gridType='spread'>
                    <div className={styles.contentWrapper}>
                        <div className={styles.emptyListHeader}>
                            <AnimatedComponent type="bounceEffect">
                                <div className={styles.headerTitle}>
                                    <PageText type='heroTitle'>Product List Builder</PageText>
                                </div>
                            </AnimatedComponent>
                            <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.1}>
                                <div className={styles.headerSubtitle}>
                                    <PageText type='heroSubtitle'>Exclusive</PageText>
                                </div>
                            </AnimatedComponent>
                            {/* <div className={styles.headerDescription}>
                                <PageText type='heroDescription'>Create custom lists of LG home appliances  </PageText>
                            </div> */}
                        </div>
                    </div>
                </GridSystem>
                <GridSystem gridType='spread'>
                    <div className={styles.contentWrapper}>
                        <div className={styles.descriptionWrapper}>
                            <div className={styles.description}>
                                <PageText type='bodyDescriptionLarge'>The Product List Builder allows you to effortlessly create custom lists based on your customer's needs and preferences.</PageText>
                            </div>
                        </div>
                    </div>
                </GridSystem>
                <div className={styles.introductionGridMobile}>
                    <div className={styles.backgroundScreen} >
                        <div className={styles.instructionsWrapper}>
                            <motion.div
                                variants={listVariants}
                                initial="hidden"
                                animate="visible"
                                className={styles.instructions}>
                                <GridSystem>
                                    {instructions && instructions.map((e, idx) => {
                                        return (
                                            <motion.div
                                                variants={itemVariants}
                                                className={styles.stepsWrapper} key={idx}>
                                                <div className={styles.stepCount}>
                                                    {/* <PageText type='bodyTertiaryTitleBold'>Step </PageText> */}
                                                    <CountBubble itemCount={idx + 1} />
                                                </div>
                                                <div className={styles.stepDescription}>
                                                    <PageText type='bodyDescriptionLarge'>{e.descriptionShort}</PageText>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </GridSystem>
                            </motion.div>
                            <div className={styles.callout}>
                                <GridSystem>
                                    <PageText type='bodyDescriptionLarge'>It's quick and simple! Start exploring our product guide and build your list today.</PageText>
                                </GridSystem>
                            </div>
                        </div>
                    </div>

                    <div className={styles.character}>
                        <div className={styles.charcterImageWrapper}>
                            <LGComponent type='boyFullCrop' />
                        </div>
                    </div>

                    <div className={styles.featureButtons}>
                        <GridSystem>
                            <div className={styles.mobileButton}>
                                <LinkComponent href={"/appliances"}>
                                    <Button buttonStyleType='primaryAction'>Home Appliances</Button>
                                </LinkComponent>
                            </div>

                            <div className={styles.desktopButton}>
                                <LinkComponent href={"/appliances"}>
                                    <Button buttonStyleType='primaryAction'>Home Appliances</Button>
                                </LinkComponent>

                            </div>
                        </GridSystem>

                    </div>

                </div>



                {/* <div className={styles.listCountStatement}>
                <PageText> You have</PageText>
                <CountBubble itemCount='0' />
                <PageText>  products in your list</PageText>
            </div> */}

                {/* <div className={styles.listCountStatement}>
                <PageText> Click <span>“Print my list”</span> and follow the instructions in the print pop up on your device.</PageText>
            </div> */}
            </div>
            <div className={styles.desktop}>
                <GridSystem gridType='spread'>
                    <div className={styles.contentWrapper}>
                        <div className={styles.desktopEmptyListGrid}>
                            <div className={styles.emptyListHeader}>
                                <div className={styles.headerSubtitle}>
                                    <PageText type='heroSubtitle'>Exclusive</PageText>
                                </div>
                                <AnimatedComponent type="bounceEffect">
                                    <div className={styles.headerTitle}>
                                        <PageText type='heroTitle'>Product List Builder</PageText>
                                    </div>
                                </AnimatedComponent>
                                <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.1}>

                                </AnimatedComponent>
                                {/* <div className={styles.subtitle}>
                                    <PageText type='heroSubtitle'>Create custom lists of LG home appliances  </PageText>
                                </div> */}
                                <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.3}>
                                    <div className={styles.descriptionWrapper}>
                                        <div className={styles.headerDescription}>
                                            <PageText type='heroDescription'>Welcome to the Product List Builder—your ultimate tool for creating personalized product lists. </PageText>
                                        </div>
                                    </div>
                                </AnimatedComponent>
                            </div>
                            <div className={styles.instructionsWrapper}>
                                <motion.div
                                    variants={listVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className={styles.instructions}>

                                    {instructions && instructions.map((e, idx) => {
                                        return (
                                            <motion.div
                                                variants={itemVariants}
                                                className={styles.stepsWrapper} key={idx}>
                                                <div className={styles.stepCount}>
                                                    {/* <PageText type='bodyTertiaryTitleBold'>Step </PageText> */}
                                                    <CountBubble backgroundColor='white' color='black' itemCount={idx + 1} />
                                                </div>
                                                <div className={styles.stepDescription}>
                                                    <PageText type='bodyCallout'>{e.descriptionLong}</PageText>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                                {/* <div className={styles.callout}>
                                    <PageText type='bodyDescription'>It’s that easy! Don’t delay. Explore the product guide and start building. </PageText>

                                </div> */}
                            </div>
                            <div className={styles.lgMan}>
                                <div className={styles.lgGirl}>
                                    <AnimatedImage
                                        type="wipeEffect" directionStart='left' delay={.3}
                                        src={`/assets/image/backgrounds/builder/lg-print-handoff.webp`} />
                                    {/* <img alt='LG rep handing off printed home appliance product list' src={`/assets/image/backgrounds/builder/lg-print-handoff.webp`} /> */}
                                </div>
                                {/* <div className={styles.lgManImageWrapper}>
                                    <img src={`/assets/image/backgrounds/builder/lg-print-handoff.webp`} />
                                </div> */}
                                {/* <img src={`${publicUrl}/assets/image/backgrounds/main/lg-man.png`} /> */}
                            </div>

                            <div className={styles.desktopCallout}>
                                {/* <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.5}> */}
                                <PageText type='heroDescription'>Whether you're helping customers compare appliances or curating a selection for a client, this feature empowers you to compile, organize, and print a tailored list of LG home appliance products in just a few easy steps.</PageText>
                                {/* </AnimatedComponent> */}
                            </div>

                            <div className={styles.featureButtons}>
                                {/* <div className={styles.mobileButton}> <Button buttonStyleType='primaryAction'> Explore home appliances</Button></div> */}
                                <div className={styles.desktopButton}>
                                    <LinkComponent href={"/appliances"}>
                                        <Button buttonStyleType='primaryAction'> Discover home appliances</Button>
                                    </LinkComponent>


                                </div>
                            </div>

                        </div>

                    </div>


                </GridSystem>
            </div>
        </div>
    )

}