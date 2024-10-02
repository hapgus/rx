import { VALIDATOR_REQUIRE } from "../../../utils/validators";
import { useForm } from "../../../hooks/form-hook";
import { FormComponent } from "../../FormComponent/FormComponent";
import { TextInput } from "../../FormComponent/TextInput/TextInput";
import { Button } from "../../Button/Button";
import { useNotificationHook } from "../../../hooks/notification-hook";
import { useState, useEffect } from "react";
import { useHttpClient } from "../../../hooks/http-hook";

import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useRoutingHook } from "../../../hooks/routing-hook";
import { validateNewPasswordForms } from "../../../utils/form-validation";

export const CreateNewPasswordForm = () => {
    const { token } = useParams();
    
    const { setIsModal, isModal } = useNotificationHook();
    const { setIsRoutingState } = useRoutingHook();
    
    const { sendRequest } = useHttpClient();

    const redirect = useNavigate();

    const [passwordInputType, setPasswordInputType] = useState("password");
    const togglePasswordVisibility = () => {
        setPasswordInputType((prevState) =>
            prevState === "password" ? "text" : "password"
        );
    };

    const [confirmPasswordInputType, setConfirmPasswordInputType] = useState("password");
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordInputType((prevState) =>
            prevState === "password" ? "text" : "password"
        );
    };

    const [userId, setUserId] = useState(null);
    const [formState, inputHandler] = useForm({
        password: { value: '', isValid: false },
        confirmPassword: { value: '', isValid: false },
    }, false);



    const handleRedirect = () => {
        setIsModal({ show: false })
        redirect('/')
    }

    useEffect(() => {
        const fetchUserId = async () => {
          try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}reset/${token}`);
            // const response = await fetch(`http://localhost:3005/reset/${token}`);
            const data = await response.json();
    
            if (data.error) {
              throw new Error(data.error);
            }
            if (!response.ok) {
              throw new Error(response.statusText);
            }
    
            setUserId(data.userId);
    
          } catch (error) {
            // setShowModal(true);
          console.log(error)
          }
        };
        fetchUserId();
      }, [token]);
    

    const onPasswordResetSubmit = async (e) => {
        e.preventDefault()

        const errorMessage = validateNewPasswordForms(formState);

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
                userId: userId,
                password: formState.inputs.password.value,
                passwordToken: token

            };
            try {
                const { responseData, responseStatusCode } = await sendRequest(

                    `${process.env.REACT_APP_BACKEND_URL}reset/${token}`,
                  
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
                        message: "Congrats! Your password has been reset. ",
                        errorList: errorMessage,
                        onConfirm: handleRedirect,
                        confirmText: "Sign-in",
                        closeText:"Close",
                        onClose: handleRedirect
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
        console.log(formState.inputs)
    }
    console.log(isModal)
    return (
            <FormComponent>
               <TextInput
                id="password"
                name="password"
                labelName="New Password"
                // secondaryLabel=''
                errorText='Password required'
                validators={[VALIDATOR_REQUIRE()]}
                secondaryLabelToolTip='Password must be at least 8 characters long, with a least one number, one lowercase letter, one upper case letter, and one special character. Your password should not contain spaces.'
                type={passwordInputType}
                iconType={passwordInputType === "password" ? 'eyeClosed' : 'eyeOpened'}
                onIconClick={togglePasswordVisibility}
                onInput={inputHandler}
            />
            <TextInput
                id='confirmPassword'
                labelName='Confirm Password'
                errorText='Password confirmation required'
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                type={confirmPasswordInputType}
                iconType={confirmPasswordInputType === "password" ? 'eyeClosed' : 'eyeOpened'}
                onIconClick={toggleConfirmPasswordVisibility}
            // secondaryLabel='optional'
            />
                  <Button type='button' buttonStyleType="primaryAction" onClick={onPasswordResetSubmit}>Reset password</Button>
            </FormComponent>
    
    );
}