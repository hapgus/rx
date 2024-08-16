import { PageText } from "../TextComponent/TextComponent";
import styles from './HeaderComponent.module.css'

export const HeaderComponent = ({ children, pageHeaderTitle, pageHeaderSubtitle, className }) => {
    return (
        <div className={className}>
            <div className={styles.headerTextContainer}>
                {pageHeaderTitle && <PageText type="pageHeaderTitle">{pageHeaderTitle}</PageText>}
                {pageHeaderSubtitle && <PageText type="pageHeaderSubtitle">{pageHeaderSubtitle}</PageText>}
                {children}
            </div>
        </div>
    );
};