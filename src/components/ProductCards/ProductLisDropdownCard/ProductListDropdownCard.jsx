import styles from './ProductListDropdownCard.module.css';
import { Button } from '../../Button/Button';


import { PageText } from '../../Text/Text';
import { GenerateProductURL } from '../../../utils/helper-functions';

import { useRoutingHook } from '../../../hooks/use-routing-hooks';

import { LinkComponent } from '../../Links/LinkComponent';
import { RemoveFromListButton } from '../../Button/ProductButtons';



//DYNAMIC ADD/REMOVE BUTTONS/ICONS --DONE
export const ProductListDropdownCard = ({ product }) => {
    const publicUrl = process.env.PUBLIC_URL;
    const { title, category, subtitle, image } = product;
    const { isRoutingState, setIsRoutingState } = useRoutingHook();
    const configuredProductURL = GenerateProductURL(category, title);
    const productURL = `${publicUrl}${configuredProductURL}`;

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
                <LinkComponent href={productURL}>
                    <div className={styles.productBuilderListCardImageWrapper}>
                        {/* <ImageComponent> */}
                        <img
                            loading='lazy'
                            className={styles.productBuilderDropdownCardImage}
                            src={`${process.env.REACT_APP_AWS_URL}/${image}`}
                            alt={`product ${title}`}
                        />
                        {/* </ImageComponent> */}
                    </div>
                </LinkComponent>
                <div className={styles.productBuilderListCardHeaderWrapper}>
                    <LinkComponent href={productURL}>
                        <PageText type='productSearchTitle'>{title}</PageText>
                    </LinkComponent>
                    <PageText type='productSearchSubtitle'>
                        <span className={styles.clampedSubtitleLong}>{subtitle}</span>{/* {TruncateText(subtitle)} */}
                    </PageText>
                </div>
            </div>
            <div className={styles.productBuilderListCardDiv2}>
                <RemoveFromListButton buttonStyleType='secondary' product={product} />
                {/* <NavigationLink > */}
                <LinkComponent href={productURL}>
                    <Button onClick={handleLinkClick} buttonStyleType="primaryAction"> See details</Button>
                </LinkComponent>
                {/* </NavigationLink> */}
            </div>

        </div>
    )
}







