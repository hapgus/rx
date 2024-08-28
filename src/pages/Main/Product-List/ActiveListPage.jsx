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

export const ActiveListPage = ({ isEditing }) => {

    const { listCount, productsInList, productsInListSaved, savedListCount } = useBuilderHook();
    const decodedToken = useAuthUser();
    const logout = useLogout();
    const publicUrl = process.env.PUBLIC_URL;
    console.log(savedListCount)

    const{isAuthenticated}=useAuth();

    // Determine which data to use based on isEditing prop
    const currentListCount = isEditing ? savedListCount : listCount;
    const currentProductsInList = isEditing ? productsInListSaved : productsInList;

    return (
        currentProductsInList &&
        <div >
            <div className={styles.mobile}>
                <GridSystem containerBackgroundColor='#F0ECE4'>
                    <div className={styles.contentWrapper}>
                        <div className={styles.mobileHeader}>
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
                <GridSystem
                    containerBackgroundColor='#E6E1D6'
                    containerBorderTop='1px solid #D0CBC1'
                >
                    <div className={styles.listDetails}>
                        <div className={styles.countStatement}>
                            <PageText type='bodyDescription'> You have</PageText>
                            <CountBubble itemCount={currentListCount} />
                            <PageText type='bodyDescription'>  products in your list</PageText>
                        </div>
                        <div className={styles.description}>
                            <PageText type='bodyDescription'> Click <span>“Print my list”</span> and follow the instructions in the print pop up on your device.</PageText>
                        </div>
                    </div>
                    <div className={styles.buttonsWrapper}>
                        {/* <PrintProductsButton productsInList={listCount} /> */}
                        <PrintProductsButton productsInList={currentListCount} />
                        <RemoveAllFromListButton />
                        {
                            isAuthenticated === true &&
                            <SaveListButton/>
                            // <Button buttonStyleType='primaryAction'>Save list</Button>
                        }

                    </div>
                </GridSystem>
                <GridSystem
                    containerBackgroundColor='#F6F3EB'
                    containerBorderTop='1px solid #D0CBC1'
                    containerPaddingTop='3rem'
                >
                    {
                       currentProductsInList.length !== 0 && currentProductsInList.map((product, idx) =>
                        (<div className={styles.bannerCardWrapper} key={idx}>
                            <ProductBuilderPageCard product={product} index={idx} />
                        </div>
                        ))
                    }
                </GridSystem>

            </div>
            <div className={styles.desktop}>
                <GridSystem
                    gridType='spread'
                    containerBackgroundColor='#F0ECE4'
                    containerPaddingTop='3rem'
                >
                    <InnerGridItem>
                        <div className={styles.contentWrapper}>
                            <div className={styles.desktopGridContainer}>
                                <div className={styles.header}>
                                    <div className={styles.subtitle}>
                                        <PageText type='pageTertiaryTitle'>Exclusive</PageText>
                                    </div>
                                    <div className={styles.title}>
                                        <PageText type='pageTitle'>LG Product List Builder</PageText>
                                        { decodedToken !== null &&
                                        <Button onClick={logout}>Logout</Button>
                                        }
                                        
                                    </div>
                                    <div className={styles.subtitle}>
                                        <PageText type='pageSubtitle'>Create custom lists of LG home appliances  </PageText>
                                    </div>
                                    <div className={styles.desktopListDetails}>
                                        <div className={styles.countStatement}>
                                            <PageText type='bodyDescription'> You have</PageText>
                                            <CountBubble itemCount={currentListCount} />
                                            <PageText type='bodyDescription'>  products in your list</PageText>
                                        </div>
                                        <div className={styles.description}>
                                            <PageText type='bodyDescription'> Click <span>“Print my list”</span> and follow the instructions in the print pop up on your device.</PageText>
                                        </div>
                                    </div>
                                </div>


                                <div className={styles.buttonsWrapper}>
                                    {/* <PrintProductsButton productsInList={listCount} /> */}
                                    <PrintProductsButton productsInList={currentListCount} />
                                    {
                            isAuthenticated === true &&
                            <SaveListButton/>
                            // <Button buttonStyleType='primaryAction'>Save list</Button>
                        }
                                    <RemoveAllFromListButton />
                                   
                                    {/* <Button buttonStyleType='primaryAction'>Save list</Button> */}
                                </div>


                                <div className={styles.heroImage}>
                                    <div className={styles.imageWrapper}>
                                        <img src={`${publicUrl}/assets/image/backgrounds/main/lg-print-handoff.png`} />
                                    </div>
                                    <PageText type='bodyDescription'>Registered users enjoy even more features benefits. Submit your request today.</PageText>
                                </div>

                            </div>
                        </div>
                    </InnerGridItem>
                </GridSystem>
                <GridSystem gridType='spread' containerBackgroundColor='#F6F3EB'>
                    <GridSystem>
                        {
                            currentProductsInList.length !== 0 && currentProductsInList.map((product, idx) =>
                            (<div className={styles.bannerCardWrapper} key={idx}>
                                <ProductBuilderPageCard product={product} index={idx} />
                            </div>
                            ))
                        }
                    </GridSystem>
                </GridSystem>

            </div>

        </div>
    )
}