

import { LinkComponent } from '../../../components/Links/LinkComponent';
import { PageText } from '../../../components/Text/Text';
import { AuthTemplate } from '../../../layout/Auth/AuthTemplate';

const ForgotPasswordPage = () => {
    const publicUrl = process.env.PUBLIC_URL;
    return (
        <AuthTemplate>
            <>
                <PageText type='pageTitle'>Forgot your password?</PageText>
                <PageText type='pageSubtitle'>No worries! Get a password reset link sent to the email during sign up. </PageText>
                <PageText type='pageTertiaryTitle'>Visit the LG Home Appliance Product Guide <LinkComponent href={publicUrl} linkText='home page' /></PageText>

            </>
        </AuthTemplate>

    );
}


export default ForgotPasswordPage;