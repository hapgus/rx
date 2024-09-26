

import { ForgotPasswordForm } from '../../../components/AuthComponent/ForgotPassword/ForgotPasswordForm';

import { LinkComponent } from '../../../components/Links/LinkComponent';
import { AuthTemplate } from '../../../layout/Auth/AuthTemplate';
import { PageText } from '../../../components/Text/Text';
import styles from "./forgot-password.module.css"

const ForgotPasswordPage = () => {
 
    return (
        <AuthTemplate>
            <>
            <div className={styles.logo}>
                    <img src={`/assets/image/gif/dance-black.gif`} />
                </div>
                <div className={styles.headerText}>
                    <div className={styles.title}>
                    <PageText type='pageTitle'>Forgot your password?</PageText>
                    </div>
                    <div className={styles.tertiaryTitle}>
                        <PageText>
                        No worries! Get a password reset link sent to the email you used when you created your account.
                        </PageText>
                       
                    </div>
                </div>
                <div className={styles.formWrapper}>
                    <div className={styles.loginForm}>
                      <ForgotPasswordForm/>
                    </div>
                    <div className={styles.loginFooterDescription}>
                    <PageText>
                            Not a member? <LinkComponent href={`../sign-up`} linkText='Sign up today!' />
                        </PageText>
                    </div>
                </div>
                {/* <PageText type='pageTitle'>Forgot your password?</PageText>
                <PageText type='pageSubtitle'>No worries! Get a password reset link sent to the email during sign up. </PageText>
                <PageText type='pageTertiaryTitle'>Visit the LG Home Appliance Product Guide <LinkComponent href={publicUrl} linkText='home page' /></PageText> */}

            </>
        </AuthTemplate>

    );
}


export default ForgotPasswordPage;