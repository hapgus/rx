import { LoginForm } from '../../../components/AuthComponent/LoginForm';
import { LinkComponent } from '../../../components/Links/LinkComponent';


import styles from './login.module.css';
import { PageText } from '../../../components/Text/Text';

import { AuthTemplate } from '../../../layout/Auth/AuthTemplate';
const LoginPage = () => {
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
                            Not a member? <LinkComponent href={`../sign-up`} linkText='Sign up today!' />
                        </PageText>
                    </div>
                </div>
                <div className={styles.formWrapper}>
                    <div className={styles.loginForm}>
                        <LoginForm />
                    </div>
                    <div className={styles.loginFooterDescription}>
                        <PageText>
                            Forgot your password? <LinkComponent href={`..${publicUrl}/../forgot-password`} linkText='Request a password reset link!' />
                        </PageText>
                    </div>
                </div>
            </>

        </AuthTemplate>

    );
};

export default LoginPage;
