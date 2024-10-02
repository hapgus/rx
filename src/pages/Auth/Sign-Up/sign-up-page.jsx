import styles from "../AuthPageStyles.module.css"

import { SignupForm } from '../../../components/AuthComponent/Signup/SignupForm';
import { LinkComponent } from '../../../components/Links/LinkComponent';
import { PageText } from '../../../components/Text/Text';
import { AuthTemplate } from '../../../layout/Auth/AuthTemplate';


const SignUpPage = () => {

    return (
        <AuthTemplate>
             <div className={styles.pageContainer}>
             <div className={styles.logoWrapper}>
                        
                        <div className={styles.logo}>
                            <img src={`/assets/image/logos/lg-logo.webp`} />
                        </div>

                    </div>
                <div className={styles.headerText}>
                    <div className={styles.title}>
                        <PageText type='pageTitle'>LG Product Guide</PageText>
                    </div>
                    <div className={styles.tertiaryTitle}>
                        <PageText>
                            <span className={styles.spanText}>
                                Create account
                            </span>

                        </PageText>
                    </div>
                </div>
                <div className={styles.formWrapper}>
                    <div className={styles.loginForm}>
                        <SignupForm />
                    </div>
                    <div className={styles.loginFooterDescription}>
                        <PageText>
                            <span className={styles.spanText}>
                                Already a member? {" "}

                            </span>
                            <span className={styles.spanTextLink}>
                                <LinkComponent href={`../login`} linkText='Sign in to your account.' />
                            </span>
                        </PageText>
                    </div>
                </div>

            </div>

        </AuthTemplate>

    );
};

export default SignUpPage;
