
// import { useForm } from "../../hooks/use-form-hook"
import { FormComponent } from "../FormComponent/FormComponent"
import { useAuth } from '../../hooks/auth-hook';
import { Button } from '../Button/Button';
import { useForm } from "../../hooks/form-hook";
import { TextInput } from "../FormComponent/TextInput/TextInput";
import { useNotificationHook } from "../../hooks/notification-hook";
import { validateAdminForm } from "../../utils/form-validation";
import { useHttpClient } from "../../hooks/http-hook";
import { useRoutingHook } from "../../hooks/routing-hook";
import { useNavigate } from "react-router";
import { VALIDATOR_REQUIRE } from "../../utils/validators";
import { useState } from "react";
import { Select } from "../FormComponent/Select/Select";

export const AdminAccountForm = () => {

    const { setIsModal, isModal } = useNotificationHook();
    const { setIsRoutingState } = useRoutingHook();
    const { sendRequest } = useHttpClient();
    const { authUserId } = useAuth();
    const redirect = useNavigate();




    const [formState, inputHandler, setFormData, resetForm] = useForm({
        password: { value: '', isValid: false },
        confirmPassword: { value: '', isValid: false },
        email: { value: '', isValid: false },
        firstName: { value: '', isValid: false },
        lastName: { value: '', isValid: false },
        role: { value: '', isValid: false },

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
        redirect('/hapg/')
    }
    const handleCloseModalClick = () => {
        // resetForm();
        redirect('/hapg/member/login')
        setIsModal(prevState => ({ ...prevState, show: false }))
        console.log('clicked')

    }
    const submitForm = async (e) => {
        e.preventDefault();


        const errorMessage = validateAdminForm(formState)
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
                role: formState.inputs.role.value,
                creator: authUserId,
            };


            try {
                const response = await sendRequest(
                    `http://localhost:3005/add-admin/`,
                    'POST',
                    JSON.stringify(data), {
                    'Content-Type': 'application/json',

                }
                    // formData
                )
                if (response.responseStatusCode === 201) {
                    // setIsRoutingState(prevState => ({ ...prevState, isLoading: false }));

                    setIsModal(prevState => ({
                        ...prevState,
                        show: true,
                        modalType: 'successModal',
                        title: "Success",
                        message: "The new admin account has been created",
                        errorList: errorMessage,
                        onConfirm: handleCloseModalClick,
                        onCancel: handleHomeModalClick,
                        confirmText: "Close",
                        cancelText: "Go to LG Product Guide",

                    }));

                    // THIS MIGHT NOT BE NEEDED
                    setTimeout(() => {
                        // alert('Product updated successfully');
                    }, 100);
                }
            } catch (err) {

                console.log(err)
            }
            console.log('is modal', isModal)

        }

    };

    console.log('sign up', formState)
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
            <Select
                id='role'
                name="role"
                labelName="Role"
                // errorText='Please select a retailer'
                validators={[]}
                onInput={inputHandler}
                options={[
                    { value: "admin", label: "Administrator" },
                    { value: "superAdmin", label: "Super Administrator" }
                ]}
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