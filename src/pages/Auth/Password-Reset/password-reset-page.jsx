

import { ForgotPasswordForm } from '../../../components/AuthComponent/ForgotPassword/ForgotPasswordForm';

import { LinkComponent } from '../../../components/Links/LinkComponent';
import { AuthTemplate } from '../../../layout/Auth/AuthTemplate';
import { PageText } from '../../../components/Text/Text';
import styles from "./password-reset.module.css"
import { CreateNewPasswordForm, PasswordResetForm } from '../../../components/AuthComponent/CreateNewPassword/CreateNewPasswordForm';
import { AnimatedComponent, AnimatedImage } from '../../../hooks/use-framer-motion';

const PasswordResetPage = () => {

    return (
        <AuthTemplate>
            <>
                <div className={styles.pageContainer}>
                    <div className={styles.logoWrapper}>

                        <div className={styles.logo}>
                            <AnimatedImage

                                type="bounceEffect" delay={.3}
                                src={`/assets/image/logos/lg-logo.webp`}
                                alt='LG Logo in heritage red and gray'
                            />
                            {/* <img src={`/assets/image/logos/lg-logo.webp`} /> */}
                        </div>

                    </div>
                    <div className={styles.logo}>
                        <img src={`/assets/image/gif/dance-black.gif`} />
                    </div>
                    <div className={styles.headerText}>
                        <div className={styles.title}>
                            <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.1}>
                                <PageText type='pageTitle'>Reset your password</PageText>
                            </AnimatedComponent>
                        </div>
                        <div className={styles.tertiaryTitle}>

                            <PageText type='pageTitle'>
                                Enter your new password
                            </PageText>

                        </div>
                    </div>
                    <div className={styles.formWrapper}>
                        <div className={styles.loginForm}>
                            <CreateNewPasswordForm />
                            {/* <PasswordResetForm/> */}

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
                </div>
            </>

        </AuthTemplate>

    );
}


export default PasswordResetPage;