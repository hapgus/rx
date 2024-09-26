import { IconComponent } from "../Icon/IconComponent";
import { useRoutingHook } from "../../hooks/routing-hook";
import { useBuilderHook } from "../../hooks/builder-hook";
import styles from './ProductListIcon.module.css';
import { AnimatedComponent } from "../../hooks/use-framer-motion";

export const ProductListIcon = () => {
    const { listCount } = useBuilderHook();
    const { setIsRoutingState } = useRoutingHook();
    console.log('re render product list')

    const handleIconClick = () => setIsRoutingState(
        prevState => ({
            ...prevState,
            isProductListDropdownOpen: true,
            isMobileNavOpen: false,

        }))

    return (

        <div onClick={handleIconClick} className={styles.iconContainer}>
            {listCount !== 0 && (
                // <AnimatedComponent type="bounceEffect">
                    <span className={styles.listCountBubble}>{listCount}</span>
                // </AnimatedComponent>
            )}
            <IconComponent iconType='productList' />

        </div>

    )
}