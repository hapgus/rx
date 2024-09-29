

import { ForgotPasswordForm } from '../../../components/AuthComponent/ForgotPassword/ForgotPasswordForm';

import { LinkComponent } from '../../../components/Links/LinkComponent';
import { AuthTemplate } from '../../../layout/Auth/AuthTemplate';
import { PageText } from '../../../components/Text/Text';
import styles from "./password-reset.module.css"
import { PasswordResetForm } from '../../../components/AuthComponent/PasswordReset/PasswordResetForm';

const PasswordResetPage = () => {
 
    return (
        <AuthTemplate>
            <>
            <div className={styles.logo}>
                    <img src={`/assets/image/gif/dance-black.gif`} />
                </div>
                <div className={styles.headerText}>
                    <div className={styles.title}>
                    <PageText type='pageTitle'>Reset your password</PageText>
                    </div>
                    <div className={styles.tertiaryTitle}>
                        <PageText>
                       Enter your new password
                        </PageText>
                       
                    </div>
                </div>
                <div className={styles.formWrapper}>
                    <div className={styles.loginForm}>
                        <PasswordResetForm/>
                    
                    </div>
                    {/* <div className={styles.loginFooterDescription}>
                    <PageText>
                            Not a member? <LinkComponent href={`../sign-up`} linkText='Sign up today!' />
                        </PageText>
                    </div> */}
                </div>
                {/* <PageText type='pageTitle'>Forgot your password?</PageText>
                <PageText type='pageSubtitle'>No worries! Get a password reset link sent to the email during sign up. </PageText>
                <PageText type='pageTertiaryTitle'>Visit the LG Home Appliance Product Guide <LinkComponent href={publicUrl} linkText='home page' /></PageText> */}

            </>
        </AuthTemplate>

    );
}


export default PasswordResetPage;