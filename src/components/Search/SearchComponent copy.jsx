import Overlay from "../Overlay/Overlay";
import { SearchInput } from "./SearchInput";
import { SearchPreview } from "./SearchPreview";

const MobileSearchComponent = () => (
    <Overlay>
        <SearchInput />
        <SearchPreview/>
    </Overlay>
);

const DesktopSearchComponent = () => (
    <>
    <SearchInput />
    <SearchPreview/>
    </>
);


const HomepageSearchComponent = () => (
    <>
    <SearchInput />
    <SearchPreview/>
    </>
);

const searchTypeMap = {
    mobile: MobileSearchComponent,
    desktop: DesktopSearchComponent,
    homepage: HomepageSearchComponent
};

export const SearchComponent = ({ type }) => {
    const RenderSearchComponent = searchTypeMap[type];
    return RenderSearchComponent ? <RenderSearchComponent /> : null;
};
