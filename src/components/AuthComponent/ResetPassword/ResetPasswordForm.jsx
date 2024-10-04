import { VALIDATOR_REQUIRE } from "../../../utils/validators";
import { useForm } from "../../../hooks/form-hook";
import { FormComponent } from "../../FormComponent/FormComponent";
import { TextInput } from "../../FormComponent/TextInput/TextInput";
import { Button } from "../../Button/Button";
import { useNotificationHook } from "../../../hooks/notification-hook";

import { useHttpClient } from "../../../hooks/http-hook";

import { useNavigate } from "react-router";

import { useRoutingHook } from "../../../hooks/routing-hook";
import { validatePasswordResetEmailForms } from "../../../utils/form-validation";

export const ResetPasswordForm = () => {

    const { setIsModal, isModal } = useNotificationHook();
    const { setIsRoutingState } = useRoutingHook();
    const { sendRequest } = useHttpClient();

    const redirect = useNavigate();


    const [formState, inputHandler] = useForm({

        email: { value: '', isValid: false },
    }, false);

    const handleRedirect = () => {
        setIsModal({ show: false })
        redirect('/member/login')
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
                        confirmText: "Go to Sign In",
                    }));

                }

            } catch (error) {
                console.log(error)
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
                  <Button type='button' buttonStyleType="primaryAction" onClick={onPasswordResetSubmit}>Sign in</Button>
            </FormComponent>
    
    );
}