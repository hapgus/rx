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
                    <img src={`${publicUrl}/assets/image/gif/dance-black.gif`} />
                </div>
                <div>
                    <PageText type='pageTitle'>LG Product Guide</PageText>
                </div>
                <PageText type='pageTertiaryTitle'>
                    Not a member? <LinkComponent href={`../sign-up`} linkText='Sign up today!' />
                </PageText>
                <div className={styles.formWrapper}>
                    <LoginForm />
                    <PageText type='pageTertiaryTitle'>
                        Forgot your password? <LinkComponent href={`..${publicUrl}/../forgot-password`} linkText='Request a password reset link!' />
                    </PageText>
                </div>
            </>

        </AuthTemplate>
        // <div className={styles.loginPageContainer}>

        //     <div className={styles.loginBody}>
        //         <div className={styles.logo}>
        //             <img src={`${publicUrl}/assets/image/gif/dance-black.gif`} />
        //         </div>
        //         <div>
        //             <PageText type='pageTitle'>LG Product Guide</PageText>
        //         </div>
        //         <PageText type='pageTertiaryTitle'>
        //             Not a member? <LinkComponent href={`../sign-up`} linkText='Sign up today!' />
        //         </PageText>
        //         <div className={styles.formWrapper}>
        //             <LoginForm />
        //             <PageText type='pageTertiaryTitle'>
        //                 Forgot your password? <LinkComponent href={`..${publicUrl}/../forgot-password`} linkText='Request a password reset link!' />
        //             </PageText>
        //         </div>
        //     </div>
        //     <div className={styles.loginFooter}>
        //         <ExternalLink href={'https://www.lg.com/us/legal'} >Terms</ExternalLink>
        //         <ExternalLink href={'https://privacy.us.lg.com/policies'} >Privacy</ExternalLink>
        //        <LinkComponent href={publicUrl}>Homepage</LinkComponent>
        //     </div>
        // </div>
    );
};

export default LoginPage;
