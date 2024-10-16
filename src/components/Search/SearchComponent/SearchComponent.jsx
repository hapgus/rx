// import React, { useContext } from 'react';
import Overlay from "../../Overlay/Overlay";
import { SearchInput } from "../MainSearch/SearchInput";
import { SearchPreview } from "../MainSearch/SearchPreview";
// import { useResponsiveStateHook } from '../../../hooks/responsive-hook';
// import { SearchContext } from '../../../context/SearchContext';
import { HomepageSearchInput } from '../HomepageSearch/HomepageSearchInput';
import { HomepageSearchPreview } from '../HomepageSearch/HomepageSearchPreview';

const MobileSearchComponent = () => (
    <Overlay>
        <SearchInput />
        <SearchPreview />
    </Overlay>
);

const DesktopSearchComponent = () => (
    <>
        <SearchInput />
        <SearchPreview />
    </>
);

const HomepageSearchComponent = () => (
    <>
        <HomepageSearchInput />
        <HomepageSearchPreview />
        {/* <SearchPreview /> */}
    </>
);

const searchTypeMap = {
    mobile: MobileSearchComponent,
    desktop: DesktopSearchComponent,
    homepage: HomepageSearchComponent
};

export const SearchComponent = ({ type }) => {
    // const { isMobile, isDesktop } = useResponsiveStateHook();
    // const { setIsMobileSearchState, setIsDesktopSearchState } = useContext(SearchContext);

    // useEffect(() => {
    //     setIsMobileSearchState(prevState => ({ ...prevState, isMobileSearch: isMobile }));
    //     setIsDesktopSearchState(prevState => ({ ...prevState, isDesktopSearch: isDesktop }));
    // }, [isMobile, isDesktop, setIsMobileSearchState, setIsDesktopSearchState]);

    const RenderSearchComponent = searchTypeMap[type];
    return RenderSearchComponent ? <RenderSearchComponent /> : null;
};
