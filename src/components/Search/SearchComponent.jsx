import Overlay from "../Overlay/Overlay";
import { SearchInput } from "./SearchInput";

const MobileSearchComponent = () => (
    <Overlay>
        <SearchInput />
    </Overlay>
);

const DesktopSearchComponent = () => (
    <SearchInput />
);

const searchTypeMap = {
    mobile: MobileSearchComponent,
    desktop: DesktopSearchComponent
};

export const SearchComponent = ({ type }) => {
    const RenderSearchComponent = searchTypeMap[type];
    return RenderSearchComponent ? <RenderSearchComponent /> : null;
};
