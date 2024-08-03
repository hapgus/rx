import styles from './Search.module.css'
export const SearchInput = () => {
    return (
        <div className={styles.searchInputWrapper}>
            <h1>Search site</h1>
            <input
                type="search"
                placeholder='Search home appliances'
                aria-label="Search home appliances"
            />
        </div>
    );
};