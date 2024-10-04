
import { useForm } from "../../../hooks/form-hook";
import { TextInput } from "../../FormComponent/TextInput/TextInput";
import { VALIDATOR_REQUIRE } from "../../../utils/validators";
import { useState } from "react";
import { FormComponent } from "../../FormComponent/FormComponent";
import { Button } from "../../Button/Button";
import { validateSigninForms } from "../../../utils/form-validation";
import { useNotificationHook } from "../../../hooks/notification-hook";
import { useHttpClient } from "../../../hooks/http-hook";
import { useNavigate } from "react-router";
import { useRoutingHook } from "../../../hooks/routing-hook";
import { useAuthHook } from "../../../hooks/auth-hook";
import { jwtDecode } from "jwt-decode"


export const LoginForm = () => {

    const { setIsModal, isModal } = useNotificationHook();
    const { setIsRoutingState } = useRoutingHook();
    const { sendRequest } = useHttpClient();
    const { login } = useAuthHook();


    const redirect = useNavigate();


    const [formState, inputHandler] = useForm({
        password: { value: '', isValid: false },
        email: { value: '', isValid: false },
    }, false);

    const [passwordInputType, setPasswordInputType] = useState("password");

    const togglePasswordVisibility = () => {
        setPasswordInputType((prevState) => prevState === "password" ? "text" : "password");
    };

    const onSigninSubmit = async (e) => {

        e.preventDefault()

        const errorMessage = validateSigninForms(formState);
        if (errorMessage.length !== 0) {
            setIsModal({
                show: true,
                modalType: 'errorModal',
                // iconType:'errorInfo',
                title: "Sign in failed",
                message: "You need to fix the following errors to continue.",
                errorList: errorMessage,
                onConfirm: () => setIsModal({ show: false }),
                onCancel: () => setIsModal({ show: false }),
                confirmText: "Close",
                cancelText: "Go back",
            })
            // setIsModal(prevState => ({
            //     ...prevState,
            //     show: true,
            //     modalType: 'infoModal',
            //     iconType:'errorInfo',
            //     title: "Signss in failed",
            //     message: "You need to fix the following errors to continue.",
            //     errorList: errorMessage,
            //     onConfirm: () => setIsModal({ show: false }),
            //     onCancel: () => setIsModal({ show: false }),
            //     confirmText: "Close",
            //     cancelText: "Go back",

            // }))
        } else {
            const data = { email: formState.inputs.email.value, password: formState.inputs.password.value, };
            try {
                const { responseData, responseStatusCode } = await sendRequest(

                    `${process.env.REACT_APP_BACKEND_URL}signin`,
                    // `http://localhost:3005/signin/`,
                    'POST',
                    JSON.stringify(data), {
                    'Content-Type': 'application/json',

                })
                if (responseStatusCode === 202) {
                    const activeUser = await responseData;
                    // const expirationTime = new Date(new Date().getTime() + 1000 * 60);//1 min
                    const expirationTime = new Date(new Date().getTime() + 1000 * 60 * 60);
                    login(activeUser.token, expirationTime.toISOString());
                    setIsRoutingState(prevState => ({ ...prevState, isLoading: false }));
                 
                    // redirect('/portal/dashboard');
                    // NEW

                    const { role, status } = jwtDecode(activeUser.token); // Extract role and status
                    // console.log(role, status)
                    if (role === 'user' && status === 'approved') {
                        redirect('/');
                    } else if ((role === 'admin' || role === 'superAdmin') && status === 'approved') {
                        redirect('/portal/overview');
                    }
                    // redirect('/portal/overview');
                }

            } catch (error) {
              
                const revisedErrorMessage = error.toString().replace(/^Error:\s*/, '');

                setIsModal({
                    show: true,
                   
                    modalType: 'errorModal',
                    title: "Sign in failed",
                    message: revisedErrorMessage,
                    // errorList: errorMessage,
                    onConfirm: () => setIsModal({ show: false }),
                    onCancel: () => setIsModal({ show: false }),
                    confirmText: "Close",
                    cancelText: "Try again",
                })
                // setIsModal(prevState => ({
                //     ...prevState,
                //     show: true,
                //     iconType:'errorInfo',
                //     modalType: 'infoModal',
                //     title: "Signsss in failed",
                //     message: `${error}`,
                //     errorList: errorMessage,
                //     onConfirm: () => setIsModal({ show: false }),
                //     onCancel: () => setIsModal({ show: false }),
                //     confirmText: "Close",
                //     cancelText: "Try again",
                // }));
            }
        }

    }

    return (
        <>
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
                <TextInput
                    id='password'
                    labelName='Password'
                    errorText='Password required'
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                    type={passwordInputType}
                    iconType={passwordInputType === "password" ? 'eyeClosed' : 'eyeOpened'}
                    onIconClick={togglePasswordVisibility}
                // secondaryLabel='optional'
                />

                <div>
                    <Button type='button' buttonStyleType="primaryAction" onClick={onSigninSubmit}>Sign in</Button>
                    {/* <button disabled={!formState.isValid}>Submit</button> */}
                </div>

            </FormComponent>
        </>
    )
}