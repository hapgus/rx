import styles from './ProductBuilderPageCard.module.css';
import { Button } from '../../Button/Button';

import {capitalizeFirstLetterEachWord, TruncateText, GenerateProductURL} from '../../../utils/helper-functions'
import { PageText } from '../../Text/Text';

import { NavLink } from 'react-router-dom';
import { IconComponent } from '../../Icon/IconComponent';
import { useState } from 'react';

import { RemoveFromListButton, RemoveFromListButtonIcon } from '../../Button/ProductButtons';

import { AnimatePresence, motion } from 'framer-motion';
// import { AnimatedButton } from '../../../hooks/use-framer-motion';

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1 // Adjust for timing between children
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const MobileProductBuilderPageCard = ({ product }) => {
    const publicUrl = process.env.PUBLIC_URL;
    const {
        title,
        subtitle,
        // availability,
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
                        <NavLink to={productURL}>
                            {/* <div className={styles.categoryTextWrapper}>
                                <PageText type='productBuilderCategory'>{capitalizeFirstLetterEachWord(category)}</PageText>
                            </div> */}

                            <div className={styles.titleTextWrapper}>
                                <PageText type='productBuilderTitle'>{` ${title} `}</PageText>
                            </div>
                        </NavLink>
                        <div className={styles.subtitleTextWrapper}>
                            <PageText type='productBuilderSubtitle'>
                                <span className={styles.clampedSubtitle}>{subtitle}</span>
                                {TruncateText(subtitle)}
                            </PageText>
                        </div>
                    </div>
                    <span className={styles.removeCardButton}>
                        <RemoveFromListButtonIcon iconColor='white' iconSizeType='large' product={product} />
                    </span>
                </div>

                <div className={styles.builderCardBodyWrapper}>

                    <div className={styles.builderCardImageButtonGroupItem1}>

                        <div className={styles.builderCardImage}>
                            <NavLink to={productURL}>
                                <img src={`${process.env.REACT_APP_AWS_URL}/${image}`} alt={`product ${title}`} />
                            </NavLink>
                        </div>

                        <div className={styles.builderCardButtonWrapper}>
                            <div className={styles.builderCardButton}>
                                <NavLink to={productURL}>
                                    <Button
                                        buttonStyleType="primary"
                                        buttonTextType="action">
                                        See details
                                    </Button>
                                </NavLink>
                            </div>
                            <div className={styles.builderCardButton}>
                                <RemoveFromListButton buttonStyleType='secondary' product={product}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.builderCardSpecsWrapperItem2}>

                        {/* <div className={styles.abc}> */}
                        {specList1.length !== 0 ? (
                            <>
                                <div className={styles.specsDropdownWrapper}>
                                    <div className={styles.specsDropdownHeader}>
                                        <div onClick={() => handleClick('specList1')} className={styles.toggleText}>
                                            <PageText type='productBuilderSpecTitle'>{capitalizeFirstLetterEachWord(specTitle1)}</PageText>
                                        </div>
                                        <div onClick={() => handleClick('specList1')} className={styles.toggleIcon}>
                                            <IconComponent iconType='expand' />
                                        </div>
                                    </div>
                                    <AnimatePresence>
                                        {showSpecs.specList1 && (
                                            <div className={styles.specsDropdownBody}>
                                                <motion.ul 
                                                className={styles.specListItem}
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                >

                                                    {specList1.map((item, idx) => (
                                                        <motion.li key={idx} variants={itemVariants} className={styles.listItem}>
                                                            <PageText type='productBuilderSpecList'>{item}</PageText>
                                                        </motion.li>
                                                    ))}

                                                </motion.ul>
                                            </div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </>
                        ) : null}
                        {specList2.length !== 0 ? (
                            <>
                                <div className={styles.specsDropdownWrapper}>
                                    <div className={styles.specsDropdownHeader} >
                                        <div onClick={() => handleClick('specList2')} className={styles.toggleText}>
                                            <PageText type='productBuilderSpecTitle'>{capitalizeFirstLetterEachWord(specTitle2)}</PageText>
                                        </div>
                                        <div onClick={() => handleClick('specList2')} className={styles.toggleIcon}>
                                        <IconComponent iconType='expand' />
                                        </div>

                                    </div>
                                    <AnimatePresence>
                                        {showSpecs.specList2 && (
                                            <div className={styles.specsDropdownBody}>
                                                <motion.ul
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    className={styles.specListItem}>
                                                    {specList2.map((item, idx) => (
                                                        <motion.li
                                                        className={styles.listItem}
                                                            variants={itemVariants}
                                                            key={idx}>
                                                            <PageText type='productBuilderSpecList'>{item}</PageText>
                                                        </motion.li>
                                                    ))}
                                                </motion.ul>
                                            </div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </>
                        ) : null}
                        {specList3.length !== 0 ? (
                            <>
                                <div className={styles.specsDropdown}>
                                    <div className={styles.specsDropdownHeader} >
                                        <div onClick={() => handleClick('specList3')} className={styles.toggleText}>
                                            <PageText type='productBuilderSpecTitle' >{capitalizeFirstLetterEachWord(specTitle3)}</PageText>
                                        </div>
                                        <div onClick={() => handleClick('specList3')} className={styles.toggleIcon}>
                                            <IconComponent
                                                iconStyleType='expand'
                                                iconType='expand'
                                            /></div>
                                    </div>
                                    <AnimatePresence>
                                        {showSpecs.specList3 && (
                                            <div className={styles.specsDropdownBody}>
                                                <motion.ul
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    className={styles.specListItem}>
                                                    {specList3.map((item, idx) => (
                                                        <motion.li
                                                        className={styles.listItem}
                                                            variants={itemVariants}
                                                            key={idx}>
                                                            <PageText type='productBuilderSpecList' >{item}</PageText>
                                                        </motion.li>
                                                    ))}
                                                </motion.ul>
                                            </div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </>
                        ) : null}
                        {specList4.length !== 0 ? (
                            <>
                                <div className={styles.specsDropdown}>
                                    <div className={styles.specsDropdownHeader} >
                                        <div onClick={() => handleClick('specList4')} className={styles.toggleText}>
                                            <PageText type='productBuilderSpecTitle'>{capitalizeFirstLetterEachWord(specTitle4)}</PageText>
                                        </div>

                                        <div onClick={() => handleClick('specList4')} className={styles.toggleIcon}>
                                            <IconComponent
                                                iconStyleType='expand'
                                                iconType='expand'
                                            />
                                        </div>

                                    </div>
                                    <AnimatePresence>
                                        {showSpecs.specList4 && (
                                            <div className={styles.specsDropdownBody}>
                                                <motion.ul
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    className={styles.specListItem}>
                                                    {specList4.map((item, idx) => (
                                                        <motion.li
                                                        className={styles.listItem}
                                                            variants={itemVariants}
                                                            key={idx}>
                                                            <PageText type='productBuilderSpecList'>{item}</PageText>
                                                        </motion.li>
                                                    ))}
                                                </motion.ul>
                                            </div>
                                        )}
                                    </AnimatePresence>
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
    console.log(product)

    return (
        product &&
        <MobileProductBuilderPageCard product={product} />

    );
}


