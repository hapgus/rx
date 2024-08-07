import styles from './ProductListBuilderPage.module.css';
import { GridSystem } from '../../../components/GridSystem/GridSystem';
import { useBuilderHook } from '../../../hooks/builder-hook';
import { PageText } from '../../../components/Text/Text';
import { LGComponent } from '../../../components/Character/LGComponent';
import { categoryLinks } from '../../../utils/link-helper';
import { Button } from '../../../components/Button/Button';
import { RemoveAllFromListButton, PrintProductsButton } from '../../../components/Button/ProductButtons';
import { CountBubble } from '../../../components/CountBubble/CountBubble';
import { NavLink } from 'react-router-dom';
import { ProductBuilderPageCard } from '../../../components/ProductCards/ProductBuilderPageCard/ProductBuilderPageCard';
import { PrintScreen } from '../../../components/Print/PrintScreen';

const EmptyListScreen = () => {
    return (
        <div className={styles.emptyProductListBodyMobile}>
            <div className={styles.mobileEmptyListHeaderText}>
                <PageText type="pageTitle">Product List Builder</PageText>
                <PageText type="searchTitle">You forgot to add products!</PageText>
                <PageText type="searchSubtitle">Use search or explore appliance pages to find and add products to your list.</PageText>
            </div>
            <div className={styles.mobileEmptyListCharacterImage}>
                <LGComponent type='boyFull' />
            </div>
            <div className={styles.buttonsWrapper}>
                {categoryLinks.map(link =>
                    // <NavigationLink href={link.href}>
                    <div key={link.href}>
                        <NavLink>
                            <Button buttonStyleType="primary">{link.text}</Button>
                        </NavLink>
                    </div>
                    // </NavigationLink>
                )};
            </div>
        </div>
    );
};

const PopulatedListScreen = () => {
    const { listCount, productsInList } = useBuilderHook();

    return (
        <>
            <GridSystem
                containerBackgroundColor='#F0ECE4'
                containerBorderBottom='1px solid #D0CBC1'
            >
                <div className={styles.activeListHeaderContainer}>
                    <div className={styles.headerItem1}>
                        <div className={styles.pageTitleWrapper}>
                            <PageText type="pageTitle">Product List Builder</PageText>
                        </div>
                        <div className={styles.pageSubtitleWrapper}>
                            <PageText type="pageSubtitle">LG Home Appliances</PageText>
                        </div>
                    </div>
                    <div className={styles.headerItem2}>
                        <div className={styles.pageTertiaryTitleWrapper}>
                            <PageText type="pageTertiaryTitle">  You have </PageText>
                        </div>
                        <CountBubble itemCount={listCount} />
                        <div className={styles.pageTertiaryTitleWrapper}>
                            <PageText type="pageTertiaryTitle"> {listCount > 1 ? 'products in your list' : 'product in your list'}   </PageText>
                        </div>
                    </div>
                    {/* <div className={styles.headerItem3}>
                        <PrintProductsButton productsInList={listCount} />
                        <RemoveAllFromListButton />
                    </div> */}
                    <div className={styles.headerItem4}>
                        <div className={styles.imageComponentWrapper}>
                            <LGComponent type='boyTop' />
                        </div>
                    </div>
                </div>
            </GridSystem>
            <div className={styles.listActionButtonsWrapper}>
                <GridSystem>
                    <div className={styles.listActionButtons}>
                        <PrintProductsButton productsInList={listCount} />
                        {/* <RemoveAllFromListButton /> */}
                    </div>
                </GridSystem>
            </div>
            <GridSystem>

                {

                    productsInList && productsInList.map((product, idx) =>

                    (<div className={styles.bannerCardWrapper} key={idx}>
                        <ProductBuilderPageCard product={product} index={idx} />
                    </div>
                    ))

                }
                <RemoveAllFromListButton />
            </GridSystem>
        </>
    );
};
const Productlistpage = () => {
    const { productsInList, isPrintScreen } = useBuilderHook();




    if (productsInList.length !== 0) {
        return (
            // <GridSystem>
            <>
                {/* <PrintScreen /> */}
                <PopulatedListScreen />
            </>
            // </GridSystem>
        );
    }
    if (productsInList.length === 0) {
        return (
            <GridSystem>
                <EmptyListScreen />
            </GridSystem>
        );
    }

}

export default Productlistpage;