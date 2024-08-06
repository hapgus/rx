import styles from './ProductListDropdownCard.module.css';
import { Button } from '../../Button/Button';
// import { NavigationLink } from "../../NavigationComponent/NavigationLink";
// import { ImageComponent } from '../../ImageComponent/ImageComponent';

import { PageText } from '../../Text/Text';
import { GenerateProductURL } from '../../../utils/link-helper';

import { useRoutingHook } from '../../../hooks/routing-hook';
import { NavLink } from 'react-router-dom';



//DYNAMIC ADD/REMOVE BUTTONS/ICONS --DONE
export const ProductListDropdownCard = ({ product }) => {
    const publicUrl = process.env.PUBLIC_URL;
    const { title, category, subtitle, image } = product;
    const { isRoutingState, setIsRoutingState } = useRoutingHook();
    const productURL = GenerateProductURL(category, title);

    const handleLinkClick = () => {
        setIsRoutingState(prevState => ({ ...prevState, isNavLinkClicked: true }));

    }
    return (
        <div className={styles.productBuilderListCardContainer}>
            <div className={styles.productBuilderListCardDiv0}>
                {/* <RemoveFromListButton product={product} plainTextButton={true} /> */}
                {/* <RemoveFromListButtonIcon iconColor='white' iconSizeType='small' product={product} /> */}
            </div>
            <div className={styles.productBuilderListCardDiv1}>

                <div className={styles.productBuilderListCardImageWrapper}>
                    {/* <ImageComponent> */}
                    <img
                        className={styles.productBuilderDropdownCardImage}
                        src={`${publicUrl}/assets/image/products/${image}`}
                        alt={`product ${title}`}
                    />
                    {/* </ImageComponent> */}
                </div>
                <div className={styles.productBuilderListCardHeaderWrapper}>
                    <PageText type='productSearchTitle'>{title}</PageText>
                    <PageText type='productSearchSubtitle'>
                        <span className={styles.clampedSubtitleLong}>{subtitle}</span>{/* {TruncateText(subtitle)} */}
                    </PageText>
                </div>
            </div>
            <div className={styles.productBuilderListCardDiv2}>

                {/* <NavigationLink > */}
                <NavLink to={productURL}>
                    <Button
                        onClick={handleLinkClick}
                        buttonStyleType="primary"
                    >
                        See details
                    </Button>
                </NavLink>
                {/* </NavigationLink> */}
            </div>

        </div>
    )
}







