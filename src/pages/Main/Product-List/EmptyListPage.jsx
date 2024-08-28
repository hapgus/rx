import { PageText } from '../../../components/Text/Text';
import styles from './EmptyListPage.module.css';
import { CountBubble } from '../../../components/CountBubble/CountBubble';
import { LGComponent } from '../../../components/Character/LGComponent';
import { FeatureButtons } from '../../../components/Button/FeatureButtons';
import { categoryLinks } from '../../../utils/link-helper';
import { Button } from '../../../components/Button/Button';
import { GridSystem } from '../../../components/GridSystem/GridSystem';

export const EmptyListPage = () => {

    const publicUrl = process.env.PUBLIC_URL;

    const instructions = [
        {
            step: 'Step 1',
            title: 'Add Products to Your List',
            descriptionLong: 'Browse our extensive product catalog and add the appliances that meet your customers’ needs to your personalized list with a single click.',
            descriptionShort: 'Search for a product and and click add to list'
        },
        {
            step: 'Step 2',
            title: ' Visit the Product List Builder Page',
            descriptionLong: "Access your selected products through the Product List Builder page, where you can review and organize your list of home appliances.",
            descriptionShort: "Navigate to the “Product List Builder” page to confirm your selections or make changes",
        },
        {
            step: 'Step 3',
            title: 'Print Your List',
            descriptionLong: "Click “Print my list” and follow the instructions in the print pop up on your device",
            descriptionShort: "Click “Print my list” and follow the instructions in the print pop up on your device",
        },
    ]

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mobile}>
                <GridSystem gridType='spread'>
                    <div className={styles.contentWrapper}>
                        <div className={styles.emptyListHeader}>
                            <div className={styles.subtitle}>
                                <PageText type='pageTertiaryTitle'>Exclusive</PageText>
                            </div>
                            <div className={styles.title}>
                                <PageText type='pageTitle'>LG Product List Builder</PageText>
                            </div>
                            <div className={styles.subtitle}>
                                <PageText type='pageSubtitle'>Create custom lists of LG home appliances  </PageText>
                            </div>
                        </div>
                    </div>
                </GridSystem>
                <GridSystem gridType='spread'>
                    <div className={styles.contentWrapper}>
                        <div className={styles.description}>
                            <PageText type='pageTertiaryTitle'>The Product List Builder lets you create targeted lists based on your customer’s needs and preferences.  </PageText>
                        </div>
                    </div>
                </GridSystem>
                <div className={styles.introductionGridMobile}>
                    <div className={styles.backgroundScreen} >
                        <div className={styles.instructionsWrapper}>
                            <div className={styles.instructions}>
                                <GridSystem>
                                    {instructions && instructions.map((e, idx) => {
                                        return (
                                            <div className={styles.stepsWrapper} key={idx}>
                                                <div className={styles.stepCount}>
                                                    {/* <PageText type='bodyTertiaryTitleBold'>Step </PageText> */}
                                                    <CountBubble itemCount={idx + 1} />
                                                </div>
                                                <div className={styles.stepDescription}>
                                                    <PageText type='bodyDescription'>{e.descriptionShort}</PageText>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </GridSystem>
                            </div>
                            <div className={styles.callout}>
                                <GridSystem>
                                    <PageText type='bodyDescription'>It’s that easy! Don’t delay. Explore the product guide and start building. </PageText>
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
                            <div className={styles.mobileButton}> <Button buttonStyleType='primaryAction'>Home Appliances</Button></div>
                            <div className={styles.desktopButton}> Explore</div>
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
                                <div className={styles.subtitle}>
                                    <PageText type='pageTertiaryTitle'>Exclusive</PageText>
                                </div>
                                <div className={styles.title}>
                                    <PageText type='pageTitle'>Product List Builder</PageText>
                                </div>
                                <div className={styles.subtitle}>
                                    <PageText type='pageSubtitle'>Create custom lists of LG home appliances  </PageText>
                                </div>
                                <div className={styles.description}>
                                    <PageText type='pageTertiaryTitle'>Welcome to the Product List Builder—your go-to tool for creating tailored product lists. </PageText>
                                </div>
                            </div>
                            <div className={styles.instructionsWrapper}>
                                <div className={styles.instructions}>

                                    {instructions && instructions.map((e, idx) => {
                                        return (
                                            <div className={styles.stepsWrapper} key={idx}>
                                                <div className={styles.stepCount}>
                                                    {/* <PageText type='bodyTertiaryTitleBold'>Step </PageText> */}
                                                    <CountBubble itemCount={idx + 1} />
                                                </div>
                                                <div className={styles.stepDescription}>
                                                    <PageText type='bodyDescription'>{e.descriptionLong}</PageText>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                {/* <div className={styles.callout}>
                                    <PageText type='bodyDescription'>It’s that easy! Don’t delay. Explore the product guide and start building. </PageText>

                                </div> */}
                            </div>
                            <div className={styles.lgMan}>
                                <div className={styles.lgManImageWrapper}>
                                    <img src={`${publicUrl}/assets/image/backgrounds/main/lg-print-handoff.png`} />
                                </div>
                                {/* <img src={`${publicUrl}/assets/image/backgrounds/main/lg-man.png`} /> */}
                            </div>

                            <div className={styles.desktopCallout}>
                                <PageText type='pageTertiaryTitle'>Whether you're helping customers compare appliances or preparing a customized selection for a client, this feature gives you the power to compile, organize, and print a comprehensive list of LG products in just a few clicks</PageText>
                            </div>

                            <div className={styles.featureButtons}>
                                {/* <div className={styles.mobileButton}> <Button buttonStyleType='primaryAction'> Explore home appliances</Button></div> */}
                                <div className={styles.desktopButton}> <Button buttonStyleType='primaryAction'> Explore home appliances</Button></div>
                            </div>

                        </div>

                    </div>


                </GridSystem>
            </div>
        </div>
    )

}