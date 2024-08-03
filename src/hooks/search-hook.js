import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export const useSearchHook = () => {
    return useContext(SearchContext);
}