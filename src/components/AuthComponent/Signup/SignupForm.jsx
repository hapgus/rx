
// import { useForm } from "../../hooks/use-form-hook"
import { FormComponent } from "../../FormComponent/FormComponent"

import { Button } from '../../Button/Button';
import { useForm } from "../../../hooks/form-hook";
import { TextInput } from "../../FormComponent/TextInput/TextInput";
import { useNotificationHook } from "../../../hooks/notification-hook";
import { validateSignupForms } from "../../../utils/form-validation";
import { useHttpClient } from "../../../hooks/http-hook";
import { useRoutingHook } from "../../../hooks/routing-hook";
import { useNavigate } from "react-router";
import { VALIDATOR_REQUIRE } from "../../../utils/validators";
import { useState } from "react";

export const SignupForm = () => {

    const { setIsModal, isModal } = useNotificationHook();
    const { setIsRoutingState } = useRoutingHook();
    const { sendRequest } = useHttpClient();
    const redirect = useNavigate();



    // const [formState, inputHandler, resetForm] = useForm({
    //     password: { value: '', isValid: false },
    //     confirmPassword: { value: '', isValid: false },
    //     email: { value: '', isValid: false },
    //     firstName: { value: '', isValid: false },
    //     lastName: { value: '', isValid: false },
    //     store: { value: '', isValid: false },

    // });
    const [formState, inputHandler, setFormData, resetForm] = useForm({
        password: { value: '', isValid: false },
        confirmPassword: { value: '', isValid: false },
        email: { value: '', isValid: false },
        firstName: { value: '', isValid: false },
        lastName: { value: '', isValid: false },
        store: { value: '', isValid: false },
    }, false); // Initialize with false to indicate the form is not valid initially

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
    const handleHomeModalClick = () => {
        setIsModal(prevState => ({ ...prevState, show: false }))
        redirect('/')
    }
    const handleCloseModalClick = () => {
        // resetForm();
         redirect('/member/login') 
         setIsModal(prevState => ({ ...prevState, show: false }))
      
        console.log('clicked')
      
    }
    const submitForm = async (e) => {
        e.preventDefault();


        const errorMessage = validateSignupForms(formState)
        if (errorMessage.length !== 0) {

            setIsModal(prevState => ({
                ...prevState,
                show: true,
                modalType: 'infoModal',
                title: "Almost there",
                message: "You need to fix the following errors to continue.",
                errorList: errorMessage,
                onConfirm: () => setIsModal({ show: false }),
                onCancel: () => setIsModal({ show: false }),
                confirmText: "Close",
                cancelText: "Go back",

            }));
        } else {
            const data = {
                firstName: formState.inputs.firstName.value,
                lastName: formState.inputs.lastName.value,
                email: formState.inputs.email.value,
                password: formState.inputs.password.value,
                store: formState.inputs.store.value,
            };
            // const formData = new FormData();

            // formData.append('firstName', formState.inputs.firstName.value)
            // formData.append('lastName', formState.inputs.lastName.value)
            // formData.append('email', formState.inputs.email.value)
            // formData.append('password', formState.inputs.password.value)

            // formData.append('store', formState.inputs.store.value)


            try {
                const response = await sendRequest(
                    'http://localhost:3005/signup',
                    'POST',
                    JSON.stringify(data),{
                    'Content-Type': 'application/json',
                    }
                    // formData
                )
                if (response.responseStatusCode === 201) {
                    setIsRoutingState(prevState => ({ ...prevState, isLoading: false }));

                    setIsModal(prevState => ({
                        ...prevState,
                        show: true,
                        modalType: 'successModal',
                        title: "Signup Request Submitted!",
                        message: "Thank you for signing up! We’re reviewing your request and will send you a confirmation email once it’s approved. While you wait, feel free to explore our Home Appliance Product Guide.",
                        errorList: errorMessage,
                        onConfirm:handleCloseModalClick, 
                        onCancel: handleHomeModalClick,
                        confirmText: "Close",
                        cancelText: "Go to the LG Product Guide",

                    }));

                    // THIS MIGHT NOT BE NEEDED
                    setTimeout(() => {
                        // alert('Product updated successfully');
                    }, 100);
                }
            } catch (err) {

                console.log(err)
            }
        }
    };
    return (
        // <FormComponent onSubmit={submitForm}>
        <FormComponent >
           
            <TextInput
                id="firstName"
                name="firstName"
                labelName="First name"
                // secondaryLabel='Special characters allowed ( / \ - _ )'
                errorText='First required'
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                value={formState.inputs.firstName.value}
            />
            <TextInput
                id="lastName"
                name="lastName"
                labelName="Last name"
                // secondaryLabel='Special characters allowed ( / \ - _ )'
                errorText='Last name required'
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}

            />
            <TextInput
                id="email"
                name="email"
                labelName="Email"
                // secondaryLabel=''
                errorText='Email required'
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}

            />
            <TextInput
                id="store"
                name="store"
                labelName="Store"
                secondaryLabel='The name of the retailer you work for. E.g.,The Home Depot'
                errorText='store required'
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}

            />
            <TextInput
                id="password"
                name="password"
                labelName="Password"
                // secondaryLabel=''
                errorText='Password required'
                validators={[VALIDATOR_REQUIRE()]}
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



            <Button type='button' onClick={submitForm} buttonStyleType="primaryAction">Sumbit </Button>

        </FormComponent>
    )
}