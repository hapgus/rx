
import { LoginForm } from '../../../components/AuthComponent/Login/LoginForm';
import { LinkComponent } from '../../../components/Links/LinkComponent';
import styles from "../AuthPageStyles.module.css"


import { PageText } from '../../../components/Text/Text';

import { AuthTemplate } from '../../../layout/Auth/AuthTemplate';
import { AnimatedComponent } from '../../../hooks/use-framer-motion';

const LoginPage = () => {



    return (




        <AuthTemplate>
            <>
                <div className={styles.pageContainer}>
                    <div className={styles.logoWrapper}>

                        <div className={styles.logo}>
                            <img src={`/assets/image/logos/lg-logo.webp`} />
                        </div>

                    </div>


                    <div className={styles.headerText}>
                        <div className={styles.title}>
                            <PageText>LG Product Guide</PageText>
                        </div>
                        <div className={styles.tertiaryTitle}>
                        {/* <PageText>
                            <span className={styles.spanText}>
                               Sign in
                            </span>

                        </PageText> */}
                            <PageText>
                                <span className={styles.spanText}>
                                    Not a member? {" "}
                                </span>
                                <span className={styles.spanTextLink}> <LinkComponent href={`../sign-up`}  >Sign up today!</LinkComponent></span>
                            </PageText>
                        </div>
                    </div>
                    <div className={styles.formWrapper}>
                        <div className={styles.loginForm}>
                            <LoginForm />
                        </div>
                        <div className={styles.loginFooterDescription}>
                            <PageText>
                                <span className={styles.spanText}>
                                    Forgot your password? {" "}
                                </span>
                                <span className={styles.spanTextLink}>
                                    <LinkComponent href={`../forgot-password`} linkText='Request a password reset link!' />
                                </span>

                            </PageText>
                        </div>
                    </div>

                </div>
            </>
        </AuthTemplate>

    );
};

export default LoginPage;
