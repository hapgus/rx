import { useState, useEffect } from "react";
import styles from "./SearchFilter.module.css"
import { IconComponent } from "../../Icon/IconComponent";
import { SearchFeedback } from "../../Search/MainSearch/SearchFeedback";


export const SearchFilterInput = ({ data, setFilteredData, placeholder = "Search...", searchBy }) => {
    const [searchField, setSearchField] = useState('');
    console.log(data, searchField)
    useEffect(() => {
        if (searchField.length >= 2) {
            // Filter the data based on the `searchBy` keys
            const newFilteredData = data.filter((item) =>
                searchBy.some(key => item[key] && item[key].toLowerCase().includes(searchField))
            );
            setFilteredData(newFilteredData);
        } else {
            setFilteredData(data);
        }
    }, [data, searchField, searchBy, setFilteredData]);

    // Update the search field state
    const onSearchChange = (event) => {
        setSearchField(event.target.value.toLowerCase());
    };

    return (
        <div>
            {/* {
                searchField && searchField > 2 && searchField.length === 0 ?
                 <SearchFeedback
                     feedback="No results. Try searching with different keywords, like model title (S5MSB) or home appliance category (Laundry), or even product features!."
                 />
                 : null
            }
            <SearchFeedback/> */}
        <div className={styles.searchFilterInputContainer}>
            <div className={styles.searchIconWrapper}>
                <IconComponent  iconType='searchInput'  />
            </div>

            <input
                type="search"
                onChange={onSearchChange}
                placeholder={placeholder}
                className={styles.input}
            />
        </div>
</div>
    );
};


