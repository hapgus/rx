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


        </div>
    )
}


export default Homepage;