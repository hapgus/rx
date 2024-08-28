import styles from './SearchInput.module.css';
import { useProductsHook } from '../../../hooks/product-hook';
import { useSearchHook } from '../../../hooks/search-hook';
import { IconComponent } from '../../Icon/IconComponent';
import { PageText } from '../../Text/Text';

export const SearchInput = () => {

    const { publicProducts } = useProductsHook();
    const productDataSearch = publicProducts;

    const {
        isMobileSearchState,
        setIsMobileSearchState,
        isDesktopSearchState,
        setIsDesktopSearchState,
        isHomepageSearchState,
        setIsHomepageSearchState,
    } = useSearchHook();


    if (isMobileSearchState.isMobileSearch === true) {
        const handleMobileSearchChange = (event) => {
            const query = event.target.value.toLowerCase();

            // if (isMobileSearchState.isMobileSearch === true) {
                setIsMobileSearchState(prevState => ({ ...prevState, isSearchInputValue: query }));


                if (query) {
                    const filteredResults = productDataSearch.filter((product) => {
                        const matchesBasicFields = (product.title?.toLowerCase().includes(query) ?? false)
                            || (product.subtitle?.toLowerCase().includes(query) ?? false)
                            || (product.category?.toLowerCase().includes(query) ?? false);
    
                        const matchesSpecList = (list) => list?.some(spec => spec.toLowerCase().includes(query)) ?? false;
                        const matchesSpecs = matchesSpecList(product.specList1)
                            || matchesSpecList(product.specList2)
                            || matchesSpecList(product.specList3)
                            || matchesSpecList(product.specList4);
    
                        const matchesColors = product.colors?.some(color => color.includes(query)) ?? false;
                        const matchesLogos = product.logos?.some(logo => logo.includes(query)) ?? false;
    
                        return matchesBasicFields || matchesSpecs || matchesColors || matchesLogos;
                    });
                    // const filteredResults = productDataSearch.filter((product) => {
                    //     const matchesBasicFields =
                    //         product.title.toLowerCase().includes(query)
                    //         || product.subtitle.toLowerCase().includes(query)
                    //         || product.category.toLowerCase().includes(query);
                    //     const matchesSpecList = (list) => list.some(spec => spec.toLowerCase().includes(query));
                    //     const matchesSpecs = matchesSpecList(product.specList1)
                    //         || matchesSpecList(product.specList2)
                    //         || matchesSpecList(product.specList3)
                    //         || matchesSpecList(product.specList4);
                    //     const matchesColors = product.colors.some(color => color.includes(query));
                    //     const matchesLogos = product.logos.some(logo => logo.includes(query));
                    //     return matchesBasicFields || matchesSpecs || matchesColors || matchesLogos;
                    // });
                    // if (query) {
                    //     const filteredResults = productDataSearch.filter((product) =>
                    //         // product.title.toLowerCase().includes(query)
                    //         product.title.toLowerCase().includes(query)
                    //         || product.subtitle.toLowerCase().includes(query)
                    //         || product.category.toLowerCase().includes(query)
                    //     );
                    // setSearchResults(filteredResults);
                    setIsMobileSearchState(prevState => ({ ...prevState, isSearchResults: filteredResults }));
                } else {
                    setIsMobileSearchState(prevState => ({ ...prevState, isSearchResults: [] }));
                    // setSearchResults([]);
                }

            // }
        }

        const handleCloseMobileSearchOverlay = () => {
            setIsMobileSearchState(prevState => ({
                ...prevState,
                isMobileSearch: false,
                isSearchResults: []
            }))
            setIsHomepageSearchState(prevState => ({
                ...prevState,
                // isHomepageSearch: false,
                isSearchResults: []
            }))

        }
        return (
            <div className={styles.searchInputContainer}>
                <div className={styles.searchInputHeaderText}>
                    <PageText type='searchTitle'>Search LG Home Appliances</PageText>
                    <h1></h1>
                </div>

                <div className={styles.searchInputWrapper}>
                    <div className={styles.searchIconWrapper}>
                        <IconComponent onClick={handleCloseMobileSearchOverlay} iconType='leftArrow' iconStyleType='leftArrowIcon' />
                    </div>

                    <input
                        type="search"
                        placeholder='Find products'
                        onChange={handleMobileSearchChange}
                        aria-label="Search home appliances"
                        className={`${styles.input} ${isMobileSearchState.isSearchActive ? styles.active : ''}`}
                    />
                </div>
                <div className={styles.searchInputFooterText}>
                    <PageText type='searchTertiaryTitle'> {`(`}{isMobileSearchState.isSearchResults.length}{`)`} Results</PageText>

                </div>

            </div>
        );
    }


    if (isDesktopSearchState.isDesktopSearch === true) {

        const handleDesktopSearchChange = (event) => {
            const query = event.target.value.toLowerCase();

            setIsDesktopSearchState(prevState => ({ ...prevState, isSearchInputValue: query }));
            if (query) {
                const filteredResults = productDataSearch.filter((product) => {
                    const matchesBasicFields = (product.title?.toLowerCase().includes(query) ?? false)
                        || (product.subtitle?.toLowerCase().includes(query) ?? false)
                        || (product.category?.toLowerCase().includes(query) ?? false);

                    const matchesSpecList = (list) => list?.some(spec => spec.toLowerCase().includes(query)) ?? false;
                    const matchesSpecs = matchesSpecList(product.specList1)
                        || matchesSpecList(product.specList2)
                        || matchesSpecList(product.specList3)
                        || matchesSpecList(product.specList4);

                    const matchesColors = product.colors?.some(color => color.includes(query)) ?? false;
                    const matchesLogos = product.logos?.some(logo => logo.includes(query)) ?? false;

                    return matchesBasicFields || matchesSpecs || matchesColors || matchesLogos;
                });
                // const filteredResults = productDataSearch.filter((product) => {
                //     const matchesBasicFields = product.title.toLowerCase().includes(query)
                //         || product.subtitle.toLowerCase().includes(query)
                //         || product.category.toLowerCase().includes(query);
                //     const matchesSpecList = (list) => list.some(spec => spec.toLowerCase().includes(query));
                //     const matchesSpecs = matchesSpecList(product.specList1)
                //         || matchesSpecList(product.specList2)
                //         || matchesSpecList(product.specList3)
                //         || matchesSpecList(product.specList4);
                //     const matchesColors = product.colors.some(color => color.includes(query));
                //     const matchesLogos = product.logos.some(logo => logo.includes(query));

                //     return matchesBasicFields || matchesSpecs || matchesColors || matchesLogos;
                // });
                // if (query) {
                //     const filteredResults = productDataSearch.filter((product) =>
                //         product.title.toLowerCase().includes(query)
                //         || product.subtitle.toLowerCase().includes(query)
                //         || product.category.toLowerCase().includes(query)

                //     );
                setIsDesktopSearchState(prevState => ({ ...prevState, isSearchResults: filteredResults }));
            } else {
                setIsDesktopSearchState(prevState => ({ ...prevState, isSearchResults: [] }));
            }

        }

        const handleDesktopSearchFocus = () => {
            setIsDesktopSearchState(prevState => ({ ...prevState, isSearchFocused: true }));
            console.log('focus')

        }
        return (
            <div className={styles.searchInputContainer}>
                <div
                    className={`${styles.searchInputWrapper} ${isDesktopSearchState.isSearchActive ? styles.active : ''} ${isDesktopSearchState.isSearchResults.length > 0 ? styles.withResults : ''}`}
                >
                    <div className={styles.desktopSearchIconWrapper}>
                        <IconComponent iconType='searchInput' />
                    </div>

                    <input
                        type="search"
                        placeholder='Search home appliances'
                        onChange={handleDesktopSearchChange}
                        value={isDesktopSearchState.isSearchInputValue}
                        onFocus={handleDesktopSearchFocus}
                        aria-label="Search home appliances"
                        // className={`${styles.input} ${isDesktopSearchState.isSearchActive ? styles.active : ''}`}
                        className={`${styles.input} ${isDesktopSearchState.isSearchActive ? styles.active : ''} ${isDesktopSearchState.isSearchResults.length > 0 ? styles.withResults : ''}`}

                    />
                </div>
            </div>
        );
    }

    // if (isHomepageSearchState.isHomepageSearch === true) {
    //     setIsDesktopSearchState(prevState => ({ ...prevState, isDesktopSearch: false }));

    //     const handleHomepageSearchChange = (event) => {

    //         const query = event.target.value.toLowerCase();

    //         setIsHomepageSearchState(prevState => ({ ...prevState, isSearchInputValue: query }));

    //         if (query) {
    //             const filteredResults = productDataSearch.filter((product) =>

    //                 product.title.toLowerCase().includes(query)
    //                 || product.subtitle.toLowerCase().includes(query)
    //             );
    //             setIsHomepageSearchState(prevState => ({ ...prevState, isSearchResults: filteredResults }));
    //         } else {
    //             setIsHomepageSearchState(prevState => ({ ...prevState, isSearchResults: [] }));
    //         }

    //     }

    //     const handleHomepageSearchFocus = () => {
    //         setIsHomepageSearchState(prevState => ({ ...prevState, isSearchFocused: true }));
    //         console.log(' home focus')

    //     }
    //     return (
    //         <div className={styles.searchInputContainer}>
    //             <div
    //                 className={`${styles.searchInputWrapper} ${isHomepageSearchState.isSearchActive ? styles.active : ''} ${isHomepageSearchState.isSearchResults.length > 0 ? styles.withResults : ''}`}
    //             >
    //                 <div className={styles.desktopSearchIconWrapper}>
    //                     <IconComponent iconType='searchInput' />
    //                 </div>

    //                 <input
    //                     type="search"
    //                     placeholder='Search home appliances'
    //                     onChange={handleHomepageSearchChange}
    //                     value={isHomepageSearchState.isSearchInputValue}
    //                     onFocus={handleHomepageSearchFocus}
    //                     aria-label="Search home appliances"
    //                     className={`${styles.input} ${isHomepageSearchState.isSearchActive ? styles.active : ''}`}
    //                 />
    //             </div>
    //         </div>
    //     );
    // }

};