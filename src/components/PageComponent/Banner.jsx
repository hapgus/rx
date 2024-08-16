import { Button } from '../ButtonComponent/Button';
import { PageText } from '../TextComponent/TextComponent';
import styles from './Banner.module.css';

export const Banner = ({ title, description, button }) => {
    return (
        <div className={styles.bannerContainer}>

            <div className={styles.bannerWrapper}>
                <div className={styles.banner}>
                    <img
                        src='/assets/image/gif/dance-black.gif' alt='Logo'
                        className={styles.bannerImage}
                    />
                    {
                        title && <PageText type='pageBannerTitleText'>{title}</PageText>
                    }
                    {
                        description && <PageText type=' pageBannerTitleText'>{description}</PageText>
                    }
                    {
                        
                        button && <Button buttonStyleType="primaryAction" buttonTextType="action">Explore</Button>
                    }
                </div>
            </div>
        </div>
    )

}