import styles from './Feedback.module.css';
import { PageText } from '../../Text/Text';
import { IconComponent } from '../../Icon/IconComponent';

export const Feedback = ({ feedbackMessage, feedbackType }) => {

    const feedbackTypeMap = {
        error: 'error',
        // success: 'successIconType'
    };
    const FeedbackIcon = feedbackTypeMap[feedbackType];

    return (
        <div className={styles.mainFeedbackContainer}>
            
            <div className={styles.feedbackText}>
                <PageText type="formMessage">
                    <span className={feedbackType === 'error' ? styles.errorMessage : styles.successMessage}>
                        {feedbackMessage}
                    </span>
                </PageText>
            </div>
            <div className={styles.feedbackIcon}>
                <IconComponent iconType={FeedbackIcon} />
            </div> 
        </div>
    );
};