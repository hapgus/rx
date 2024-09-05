import styles from './PortalNavMenuHeader.module.css'
import { IconComponent } from "../../../Icon/IconComponent";
import { PageText } from '../../../Text/Text';
export const NavMenuHeader = ({ onClick, headerText,  iconType, isOpen }) => {
    return (
        <div className={styles.navMenuHeaderWrapper}>
            <div className={styles.headerTextIconGroup}>
                <IconComponent svgFill='black' onClick={() => onClick(headerText)} iconType={iconType}  />
                <PageText type='navTitleText'>{headerText}</PageText>
            </div>
            <div className={styles.headerChevronIcon}>
                {isOpen ? (
                    <IconComponent onClick={() => onClick(headerText)} iconType='upChevron' iconStyleType='chevronIcon' />
                ) : (
                    <IconComponent onClick={() => onClick(headerText)} iconType='downChevron' iconStyleType='chevronIcon' />
                )}
            </div>
        </div>
    );
}
