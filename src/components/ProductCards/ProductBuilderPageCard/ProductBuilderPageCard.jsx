import styles from './ProductBuilderPageCard.module.css';



import { Button } from '../../Button/Button';
// import { NavigationLink } from "../../NavigationComponent/NavigationLink";


import { CapitalizeFirstLetter, capitalizeFirstLetterEachWord, TruncateText } from '../../../utils/text-help'
import { PageText } from '../../Text/Text';
import { GenerateProductURL } from '../../../utils/link-helper';
import { NavLink } from 'react-router-dom';
import { IconComponent } from '../../Icon/IconComponent';
import { useState } from 'react';


import { RemoveFromListButtonIcon } from '../../Button/ProductButtons';




const MobileProductBuilderPageCard = ({ product }) => {
    const publicUrl = process.env.PUBLIC_URL;
    const {
        title,
        subtitle,
        availability,
        image,
        category,
        specList1,
        specList2,
        specList3,
        specList4,
        specTitle1,
        specTitle2,
        specTitle3,
        specTitle4
    } = product;
    const configuredProductURL = GenerateProductURL(category, title);
    const productURL = `${publicUrl}${configuredProductURL}`;
    const [showSpecs, setShowSpecs] = useState({
        specList1: false,
        specList2: false,
        specList3: false,
        specList4: false
    });
    const handleClick = (specListKey) => {
        setShowSpecs(prevState => ({
            ...prevState,
            [specListKey]: !prevState[specListKey]
        }));
    }

    return (
        <div className={styles.builderCardContainer}>
            {/* <div className={styles.builderCardWrapper}> */}

            <div className={styles.builderCard}>

                <div className={styles.builderCardHeaderTextWrapper}>
                    <div className={styles.headerText}>
                        {/* <ProductText type='builderProductCardTertiaryTitle'>{CapitalizeFirstLetter(availability)}</ProductText> */}
                        <div className={styles.categoryTextWrapper}>
                            <PageText type='productCardTertiaryTitle'>{capitalizeFirstLetterEachWord(category)}</PageText>
                        </div>
                        <div className={styles.titleTextWrapper}>
                            <PageText type='productCardTitle'>{` ${title} `}</PageText>
                        </div>
                        <div className={styles.subtitleTextWrapper}>
                            <PageText type='productCardSubtitle'>
                                <span className={styles.clampedSubtitle}>{subtitle}</span>
                                {TruncateText(subtitle)}
                            </PageText>
                        </div>
                    </div>
                    <span className={styles.removeCardButton}>
                        <RemoveFromListButtonIcon iconColor='white' iconSizeType='large' product={product} /></span>
                </div>

                <div className={styles.builderCardBodyWrapper}>

                    <div className={styles.builderCardImageButtonGroupItem1}>
                        <div className={styles.builderCardImage}>
                            <img src={`${publicUrl}/assets/image/products/${image}`} alt={`product ${title}`} />
                        </div>

                        <div className={styles.builderCardButton}>
                            <NavLink to={productURL}>
                                <Button
                                    buttonStyleType="primary"
                                    buttonTextType="action">
                                    See the details
                                </Button>
                            </NavLink>
                        </div>
                    </div>

                    <div className={styles.builderCardSpecsWrapperItem2}>

                        {/* <div className={styles.abc}> */}
                        {specList1.length !== 0 ? (
                            <>
                                <div className={styles.specsDropdownWrapper}>
                                    <div className={styles.specsDropdownHeader}>

                                        <PageText type='productCardTertiaryTitle'>{capitalizeFirstLetterEachWord(specTitle1)}</PageText>
                                        <IconComponent onClick={() => handleClick('specList1')}
                                            iconType='expand'
                                        />
                                    </div>
                                    {showSpecs.specList1 && (
                                        <div className={styles.specsDropdownBody}>
                                            <ul className={styles.specListItem}>
                                                {specList1.map((item, idx) => (
                                                    <li key={idx}>
                                                        <PageText type='productCardListText'>{item}</PageText>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : null}
                        {specList2.length !== 0 ? (
                            <>
                                <div className={styles.specsDropdownWrapper}>
                                    <div className={styles.specsDropdownHeader} >

                                        <PageText type='productCardTertiaryTitle'>{capitalizeFirstLetterEachWord(specTitle2)}</PageText>
                                        <IconComponent onClick={() => handleClick('specList2')}
                                            iconStyleType='expand'
                                            iconType='expand'
                                        />

                                    </div>
                                    {showSpecs.specList2 && (
                                        <div className={styles.specsDropdownBody}>
                                            <ul className={styles.specListItem}>
                                                {specList2.map((item, idx) => (
                                                    <li key={idx}>
                                                        <PageText type='productCardListText'>{item}</PageText>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : null}
                        {specList3.length !== 0 ? (
                            <>
                                <div className={styles.specsDropdown}>
                                    <div className={styles.specsDropdownHeader} >
                                        <PageText type='productCardTertiaryTitle' >{capitalizeFirstLetterEachWord(specTitle3)}</PageText>


                                        <IconComponent onClick={() => handleClick('specList3')}
                                            iconStyleType='expand'
                                            iconType='expand'
                                        />
                                    </div>
                                    {showSpecs.specList3 && (
                                        <div className={styles.specsDropdownBody}>
                                            <ul className={styles.specListItem}>
                                                {specList3.map((item, idx) => (
                                                    <li key={idx}>
                                                        <PageText type='productCardListText' >{item}</PageText>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : null}
                        {specList4.length !== 0 ? (
                            <>
                                <div className={styles.specsDropdown}>
                                    <div className={styles.specsDropdownHeader} >
                                        <PageText type='productCardTertiaryTitle'>{capitalizeFirstLetterEachWord(specTitle4)}</PageText>

                                        <IconComponent onClick={() => handleClick('specList4')}
                                            iconStyleType='expand'
                                            iconType='expand'
                                        />
                                    </div>
                                    {showSpecs.specList4 && (
                                        <div className={styles.specsDropdownBody}>
                                            <ul className={styles.specListItem}>
                                                {specList4.map((item, idx) => (
                                                    <li key={idx}>
                                                        <PageText type='builderProductCardTertiaryTitle'>{item}</PageText>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : null}
                        {/* </div> */}
                    </div>
                </div>
            </div>

            {/* </div> */}
        </div>
    )

}


export const ProductBuilderPageCard = ({ product }) => {

    return (
        <MobileProductBuilderPageCard product={product} />

    );
}


