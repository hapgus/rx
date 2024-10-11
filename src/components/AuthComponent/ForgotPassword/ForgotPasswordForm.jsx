import { VALIDATOR_REQUIRE } from "../../../utils/validators";
import { useForm } from "../../../hooks/form-hook";
import { FormComponent } from "../../FormComponent/FormComponent";
import { TextInput } from "../../FormComponent/TextInput/TextInput";
import { Button } from "../../Button/Button";
import { useNotificationHook } from "../../../hooks/use-notification-hooks";

import { useHttpClient } from "../../../hooks/http-hook";

import { useNavigate } from "react-router";

import { useRoutingHook } from "../../../hooks/use-routing-hooks";
import { validatePasswordResetEmailForms } from "../../../utils/form-validation";
import { AnimatedComponent } from "../../../hooks/use-framer-motion";

export const ForgotPasswordForm = () => {

    const { setIsModal, isModal } = useNotificationHook();
    const { setIsRoutingState } = useRoutingHook();
    const { sendRequest } = useHttpClient();

    const redirect = useNavigate();


    const [formState, inputHandler] = useForm({

        email: { value: '', isValid: false },
    }, false);

    const handleRedirect = () => {
        setIsModal({ show: false })
        redirect('/')
    }

    const onPasswordResetSubmit = async (e) => {
        e.preventDefault()

        const errorMessage = validatePasswordResetEmailForms(formState);

        if (errorMessage.length !== 0) {
            setIsModal({
                show: true,
                modalType: 'errorModal',
                iconType: 'errorInfo',
                title: "Please Fix Errors",
                message: "You need to fix the following errors to continue.",
                errorList: errorMessage,
                onConfirm: () => setIsModal({ show: false }),
                onCancel: () => setIsModal({ show: false }),
                confirmText: "Close",
                cancelText: "Go back",
            })

        } else {
            const data = {
                email: formState.inputs.email.value
            };
            try {
                const { responseData, responseStatusCode } = await sendRequest(

                    `${process.env.REACT_APP_BACKEND_URL}reset`,
                    // `http://localhost:3005/reset`,
                    'POST',
                    JSON.stringify(data), {
                    'Content-Type': 'application/json',
                })
                if (responseStatusCode === 200) {

                    setIsRoutingState(prevState => ({ ...prevState, isLoading: false }));
                    setIsModal(prevState => ({
                        ...prevState,
                        show: true,
                        modalType: 'successModal',
                        title: "Success",
                        message: "Congrats! Your password reset email has been sent. It is valid for 1hr. Check you spam or junk folder if the email is not found in your inbox.",
                        errorList: errorMessage,
                        onConfirm: handleRedirect,
                        confirmText: "Close",
                    }));

                }

            } catch (error) {

                setIsModal({
                    show: true,
                    modalType: 'errorModal',
                    title: "Password Reset Failed",
                    message: `${error}`,
                    errorList: errorMessage,
                    onConfirm: () => setIsModal({ show: false }),
                    onCancel: () => setIsModal({ show: false }),
                    confirmText: "Close",
                    cancelText: "Try again",
                })
            }
        }

    }

    return (
        <FormComponent>
            <AnimatedComponent type='3dRoationDropdownEffects' delay={.3}>
                <TextInput
                    id='email'
                    labelName='Email'
                    errorText='Email required'
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                    // secondaryLabel='optional'
                    iconType='email'
                    required
                />
            </AnimatedComponent>
            <AnimatedComponent type='3dRoationDropdownEffects' delay={.3}>
                <Button type='button' buttonStyleType="primaryAction" onClick={onPasswordResetSubmit}>Get reset link</Button>
            </AnimatedComponent>
        </FormComponent>

    );
}