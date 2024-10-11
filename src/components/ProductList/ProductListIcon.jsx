import { IconComponent } from "../Icon/IconComponent";
import { useRoutingHook } from "../../hooks/use-routing-hooks";
import { useBuilderHook } from "../../hooks/use-builder-hooks";
import styles from './ProductListIcon.module.css';
import { useCallback, memo } from 'react';

export const ProductListIcon = memo(() => {
    const { listCount } = useBuilderHook();
    const { setIsRoutingState } = useRoutingHook();



    const handleIconClick = useCallback(() => {
        setIsRoutingState(prevState => ({
            ...prevState,
            isProductListDropdownOpen: true,
            isMobileNavOpen: false,
        }));
    }, [setIsRoutingState]);

    return (
        <div onClick={handleIconClick} className={styles.iconContainer}>
            {listCount !== 0 && (
                <span className={styles.listCountBubble}>{listCount}</span>
            )}
            <IconComponent iconType='productList' />
        </div>
    );
});
