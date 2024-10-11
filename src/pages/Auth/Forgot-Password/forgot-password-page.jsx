

import { ForgotPasswordForm } from '../../../components/AuthComponent/ForgotPassword/ForgotPasswordForm';
import { AnimatedComponent, AnimatedImage } from '../../../hooks/use-framer-motion';
import { LinkComponent } from '../../../components/Links/LinkComponent';
import { AuthTemplate } from '../../../layout/Auth/AuthTemplate';
import { PageText } from '../../../components/Text/Text';
import styles from "../AuthPageStyles.module.css"

const ForgotPasswordPage = () => {

    return (
        <AuthTemplate>
            <div className={styles.pageContainer}>
                <div className={styles.logoWrapper}>

                    <div className={styles.logo}>
                        <AnimatedImage

                            type="bounceEffect" delay={.3}
                            src={`/assets/image/logos/lg-logo.webp`}
                            alt='LG Logo in heritage red and gray'
                        />
                    </div>

                </div>
                <div className={styles.headerText}>
                    <div className={styles.title}>
                        <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.1}>
                            <PageText type='pageTitle'>Get a password reset link</PageText>
                        </AnimatedComponent>
                    </div>
                    {/* <div className={styles.tertiaryTitle}>
                        <PageText>
                            No worries! Get a password reset link sent to the email you used when you created your account.
                        </PageText>

                    </div> */}
                </div>
                <div className={styles.formWrapper}>
                    <div className={styles.loginForm}>
                        <ForgotPasswordForm />
                    </div>

                    <div className={styles.loginFooterDescription}>
                        <AnimatedComponent type='3dRoationDropdownEffects' delay={.3}>
                            <PageText>
                                <span className={styles.spanText}>
                                    Not a member?  {" "}
                                </span>
                                <span className={styles.spanTextLink}>
                                    <LinkComponent href={`../sign-up`} linkText='Sign up today!' />
                                </span>

                            </PageText>
                        </AnimatedComponent>
                    </div>
                </div>
                {/* <PageText type='pageTitle'>Forgot your password?</PageText>
                <PageText type='pageSubtitle'>No worries! Get a password reset link sent to the email during sign up. </PageText>
                <PageText type='pageTertiaryTitle'>Visit the LG Home Appliance Product Guide <LinkComponent href={publicUrl} linkText='home page' /></PageText> */}

            </div>
        </AuthTemplate>

    );
}


export default ForgotPasswordPage;