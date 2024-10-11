import styles from "../AuthPageStyles.module.css"

import { SignupForm } from '../../../components/AuthComponent/Signup/SignupForm';
import { LinkComponent } from '../../../components/Links/LinkComponent';
import { PageText } from '../../../components/Text/Text';
import { AuthTemplate } from '../../../layout/Auth/AuthTemplate';
import { AnimatedImage, AnimatedComponent } from "../../../hooks/use-framer-motion";


const SignUpPage = () => {

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
                        {/* <img src={`/assets/image/logos/lg-logo.webp`} /> */}
                    </div>
                </div>
                <div className={styles.headerText}>
                    <div className={styles.title}>
                        <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.1}>
                            <PageText type='pageTitle'>LG Product Guide</PageText>
                        </AnimatedComponent>
                    </div>
                    <div className={styles.tertiaryTitle}>
                        <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.1}>
                            <PageText>
                                <span className={styles.spanText}>
                                    Sign up for an account
                                </span>

                            </PageText>
                        </AnimatedComponent>
                    </div>
                </div>
                <div className={styles.formWrapper}>
                    <div className={styles.loginForm}>
                        <SignupForm />
                    </div>
                    <div className={styles.loginFooterDescription}>
                        <AnimatedComponent type='3dRoationDropdownEffects' delay={.3}>
                            <PageText>
                                <span className={styles.spanText}>
                                    Already a member? {" "}

                                </span>
                                <span className={styles.spanTextLink}>
                                    <LinkComponent href={`../login`} linkText='Sign in to your account.' />
                                </span>
                            </PageText>
                        </AnimatedComponent>
                    </div>
                </div>

            </div>

        </AuthTemplate>

    );
};

export default SignUpPage;
