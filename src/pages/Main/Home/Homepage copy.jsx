import styles from './Homepage.module.css';
import { useEffect } from 'react';


import { SearchComponent } from '../../../components/Search/SearchComponent/SearchComponent';
import { useSearchHook } from '../../../hooks/search-hook';
const Homepage = () => {

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
        <div className={styles.pageContainer}>

            <div className={styles.desktopHomeSearchWrapper}>
                <div onClick={handleHomepageSearchClick} className={styles.desktopHomeSearchInputWrapper}>
                    <SearchComponent type='homepage' />
                </div>
            </div>
            <div className={styles.mobileHomeSearchWrapper}>
                <div onClick={ handleHomepageMobileSearchClick} className={styles.mobileHomeSearchInputWrapper}>
                    <SearchComponent type='homepage' />
                </div>
            </div>

  {/* <PageText type='pageSubtitle'>Your gateway to mastering LG's line of best-in-class home appliances </PageText> */}
                            {/* <PageText type='pageSubtitle'>Equip yourself with the knowledge to address customer needs effectively through detailed specifications, immersive feature videos, and customizable product lists. This platform is designed to help you build trust, showcase innovation, and ultimately drive sales by offering solutions that resonate with your customers.</PageText> */}
        </div>
    )
}


export default Homepage;