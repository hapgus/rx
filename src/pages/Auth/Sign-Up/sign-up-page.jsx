
import styles from './sign-up.module.css';
import { SignupForm } from '../../../components/AuthComponent/SignupForm';
import { LinkComponent } from '../../../components/Links/LinkComponent';
import { PageText } from '../../../components/Text/Text';
import { AuthTemplate } from '../../../layout/Auth/AuthTemplate';
const SignUpPage = () => {
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
                    Already a member? <LinkComponent href={`../login`} linkText='login to your account' />
                </PageText>
                <div className={styles.formWrapper}>
                    <SignupForm />

                </div>
            </>

        </AuthTemplate>

    );
};

export default SignUpPage;
