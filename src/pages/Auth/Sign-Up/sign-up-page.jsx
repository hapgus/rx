
import styles from './sign-up.module.css';
import { SignupForm } from '../../../components/AuthComponent/Signup/SignupForm';
import { LinkComponent } from '../../../components/Links/LinkComponent';
import { PageText } from '../../../components/Text/Text';
import { AuthTemplate } from '../../../layout/Auth/AuthTemplate';
const SignUpPage = () => {
    const publicUrl = process.env.PUBLIC_URL;

    return (
        <AuthTemplate>
            <>
                <div className={styles.logo}>
                    <img src={`/assets/image/gif/dance-black.gif`} />
                </div>
                <div className={styles.headerText}>
                    <div className={styles.title}>
                        <PageText type='pageTitle'>LG Product Guide</PageText>
                    </div>
                    <div className={styles.tertiaryTitle}>
                        <PageText>
                            Create account 
                        </PageText>
                    </div>
                </div>
                <div className={styles.formWrapper}>
                    <div className={styles.loginForm}>
                        <SignupForm />
                    </div>
                    <div className={styles.loginFooterDescription}>
                        <PageText>
                            Already a member? <LinkComponent href={`../login`} linkText='login to your account' />
                        </PageText>
                    </div>
                </div>
                
            </>

        </AuthTemplate>

    );
};

export default SignUpPage;
