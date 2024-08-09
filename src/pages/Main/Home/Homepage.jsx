import styles from './Homepage.module.css';



import { SearchComponent } from '../../../components/Search/SearchComponent/SearchComponent';
import { useSearchHook } from '../../../hooks/search-hook';
import { PageText } from '../../../components/Text/Text';
import { GridSystem } from '../../../components/GridSystem/GridSystem';
import { categoryLinks, resourceLinks, stepUpChartLinks } from '../../../utils/link-helper';
import { NavLink } from 'react-router-dom';
import { Button } from '../../../components/Button/Button';
const Homepage = () => {
    const publicUrl = process.env.PUBLIC_URL;
    const { setIsHomepageSearchState, isHomepageSearchState, setIsMobileSearchState } = useSearchHook();
    const handleHomepageSearchClick = () => {
        setIsHomepageSearchState(prevState => ({ ...prevState, isHomepageSearch: true }))
        // setIsDesktopSearchState(prevState => ({ ...prevState, isDesktopSearch: false }))
    }
    // useEffect(() => {
    //     console.log('home search state', isHomepageSearchState);
    // }, [isHomepageSearchState]);
    const handleHomepageMobileSearchClick = () => {
        setIsMobileSearchState(prevState => ({ ...prevState, isMobileSearch: true }))
        // setIsDesktopSearchState(prevState => ({ ...prevState, isDesktopSearch: false }))
    }

    return (
        <> <GridSystem>
            <div className={styles.pageContainer}>
                <GridSystem>
                    <div className={styles.section1HeaderText}>
                        <PageText type='pageSubtitle'>Home Appliances</PageText>
                        <PageText type='pageTitle'>LG Product Guide</PageText>

                    </div>
                    <div className={styles.section1Search}>
                        <div className={styles.desktopHomeSearchWrapper}>

                            <div onClick={handleHomepageSearchClick} className={styles.desktopHomeSearchInputWrapper}>
                                <SearchComponent type='homepage' />
                            </div>
                        </div>
                        <div className={styles.mobileHomeSearchWrapper}>
                            <div onClick={handleHomepageMobileSearchClick} className={styles.mobileHomeSearchInputWrapper}>
                                <SearchComponent type='homepage' />
                            </div>
                        </div>
                    </div>
                    <div className={styles.section1FooterText}>
                        <PageText type='pageTertiaryTitle'>Find the latest product and sales resources for LG Home Appliances </PageText>
                    </div>
                    <div className={styles.linksContainer}>

                        {categoryLinks && categoryLinks.map((e => <span className={styles.featureLink}><NavLink to={e.href}><Button buttonStyleType='secondary'>{e.text}</Button></NavLink></span>))}
                    </div>
                </GridSystem>
            </div>
        </GridSystem>
            {/* <GridSystem>
                <div className={styles.section2HeaderText}>
                    <PageText type='pageSubtitle'>Showcase brands your customers want</PageText>
                    <PageText type='pageTitle'>Learning and Sales Resources</PageText>
                </div>
                <div className={styles.resourceCardWrapper}>
                    <div className={styles.resourceCard}>
                        <PageText type='pageSubtitle' >Compare products</PageText>
                        <PageText type='bodySubtitle'>Step up charts and line logic</PageText>
                        <PageText>Icon</PageText>
                        <div className={styles.resourceCardButtonWrapper}>
                            {stepUpChartLinks && stepUpChartLinks.map((e => <span className={styles.featureLink}><NavLink to={e.href}><Button buttonStyleType='secondary'> Compare {e.text}</Button></NavLink></span>))}
                        </div>

                    </div>
                    <div className={styles.resourceCard}>
                    <PageText type='pageSubtitle' >Access Resources</PageText>
                    <PageText type='bodySubtitle'>Step up charts and line logic</PageText>
                        <PageText type='bodySubtitle' >Icon</PageText>
                        <div className={styles.resourceCardButtonWrapper}>
                            {resourceLinks && resourceLinks.map((e => <span className={styles.featureLink}><NavLink to={e.href}><Button buttonStyleType='secondary'>{e.text}</Button></NavLink></span>))}
                        </div>

                    </div>
                    <div className={styles.resourceCard}>
                    <PageText type='pageSubtitle' >Leverage Exclusive Tools</PageText>
                    <PageText type='bodySubtitle'>Create your own product list you can share</PageText>
                        <PageText type='bodySubtitle' >Icon</PageText>
                        <div className={styles.resourceCardButtonWrapper}>
                            {resourceLinks && resourceLinks.map((e => <span className={styles.featureLink}><NavLink to={e.href}><Button buttonStyleType='secondary'>{e.text}</Button></NavLink></span>))}
                        </div>

                    </div>
                </div>
            </GridSystem> */}
        </>
    )
}


export default Homepage;