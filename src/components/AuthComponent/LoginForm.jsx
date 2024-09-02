import { useForm } from "../../hooks/form-hook";
import { TextInput } from "../FormComponent/TextInput/TextInput";
import { VALIDATOR_REQUIRE } from "../../utils/validators";
import { useCallback, useReducer, useState } from "react";
import { FormComponent } from "../FormComponent/FormComponent";
import { Button } from "../Button/Button";
import { validateSiginForms } from "../../utils/form-validation";
import { useNotificationHook } from "../../hooks/notification-hook";
import { useHttpClient } from "../../hooks/http-hook";
import { useNavigate } from "react-router";
import { useRoutingHook } from "../../hooks/routing-hook";
import { useAuthHook } from "../../hooks/auth-hook";

export const LoginForm = () => {

    const { setIsModal, isModal } = useNotificationHook();
    const { setIsRoutingState } = useRoutingHook();
    const { sendRequest} = useHttpClient();
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

        const errorMessage = validateSiginForms(formState);
        if (errorMessage.length !== 0) {
            setIsModal(prevState => ({
                ...prevState,
                show: true,
                modalType: 'infoModal',
                title: "Sign in failed",
                message: "You need to fix the following errors to continue.",
                errorList: errorMessage,
                onConfirm: () => setIsModal({ show: false }),
                onCancel: () => setIsModal({ show: false }),
                confirmText: "Close",
                cancelText: "Go back",

            }))
        } else {
            const data = { email: formState.inputs.email.value, password: formState.inputs.password.value, };
            try {
                const { responseData, responseStatusCode } = await sendRequest(
                    // 'http://localhost:3005/signin',
                    `${process.env.REACT_APP_BACKEND_URL}signin`,
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
                    redirect('/');
                }

            } catch (error) {
                console.log(error)

                setIsModal(prevState => ({
                    ...prevState,
                    show: true,
                    modalType: 'infoModal',
                    title: "Sign in failed",
                    message: `${error}`,
                    errorList: errorMessage,
                    onConfirm: () => setIsModal({ show: false }),
                    onCancel: () => setIsModal({ show: false }),
                    confirmText: "Close",
                    cancelText: "Try again",
                }));
            }
        }
        console.log(formState.inputs)
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