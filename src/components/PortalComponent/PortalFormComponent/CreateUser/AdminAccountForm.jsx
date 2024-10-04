
// import { useForm } from "../../hooks/use-form-hook"
import { FormComponent } from "../../../FormComponent/FormComponent"

import { Button } from '../../../Button/Button';
import { useForm } from "../../../../hooks/form-hook";
import { TextInput } from "../../../FormComponent/TextInput/TextInput";
import { useNotificationHook } from "../../../../hooks/notification-hook";
import { validateAdminForm } from "../../../../utils/form-validation";
import { useHttpClient } from "../../../../hooks/http-hook";
import { useRoutingHook } from "../../../../hooks/routing-hook";
import { useNavigate } from "react-router";
import { VALIDATOR_REQUIRE } from "../../../../utils/validators";
import { useState } from "react";
import { Select } from "../../../FormComponent/Select/Select";
import { capitalizeFirstLetterEachWord } from "../../../../utils/text-help";
import { AnimatedComponent } from "../../../../hooks/use-framer-motion";
import { FormSection } from "../../../FormComponent/FormSection/FormSection";
import { useDataContext } from "../../../../hooks/data-hook";
import { useAuth, useLogout } from '../../../../hooks/auth-hook';

export const AdminAccountForm = () => {

    const { isManagedDataState, setIsManagedDataState } = useDataContext();
    const { setIsModal, isModal } = useNotificationHook();
    const { setIsRoutingState } = useRoutingHook();
    const { sendRequest } = useHttpClient();
    const { authUserId, isSuperAdmin } = useAuth();
    const redirect = useNavigate();
    const logout = useLogout();



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
        redirect('/portal/overview')
    }
    const handleCloseModalClick = () => {
        // resetForm();
        redirect('/portal/admin-directory')
        setIsModal(prevState => ({ ...prevState, show: false }))
    }


    /* --------------------------------------------------------------------------------------- */
    /* HANDLE NO AUTH REDIRECTS*/
    /* --------------------------------------------------------------------------------------- */
    const handleUnAuthorizedAccess = () => {

        logout();
        setIsModal({ show: false })
    }




    const preFormSubmit = (e) => {
        e.preventDefault();
        if (!isSuperAdmin) {
            setIsModal({
                show: true,
                modalType: 'confirmationModal',
                title: "Error",
                message: `Please contact an administrator.`,
                cancelText: "Close",
                onCancel: handleUnAuthorizedAccess,
            })
            return
        }


        setIsModal({
            show: true,
            modalType: 'userConfirmationModal',
            title: "Confirmation Required",
            message: `You are about to create a new ${capitalizeFirstLetterEachWord(formState.inputs.role.value)} user. This user will have elevated acceess to resources and actions. Please confirm if you wish to continue.`,
            confirmText: 'Create user',
            onConfirm: () => submitForm(),
            cancelText: "Go back",
            onCancel: () => setIsModal({ show: false }),
        })

    }

    const submitForm = async (e) => {

        // e.preventDefault();

        // setIsModal({
        //     show: true,
        //     modalType: 'errorModal',
        //     title: "Almost there",
        //     message: "You need to fix the following errors to continue.",
        //     errorList: errorMessage,
        //     onConfirm: () => setIsModal({ show: false }),
        //     onCancel: () => setIsModal({ show: false }),
        //     confirmText: "Close",
        //     cancelText: "Go back",

        // });


        const errorMessage = validateAdminForm(formState)
        if (errorMessage.length !== 0) {

            setIsModal({

                show: true,
                modalType: 'errorModal',
                title: "Almost there",
                message: "You need to fix the following errors to continue.",
                errorList: errorMessage,
                onConfirm: () => setIsModal({ show: false }),
                onCancel: () => setIsModal({ show: false }),
                confirmText: "Close",
                cancelText: "Go back",

            });
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
                setIsManagedDataState(prevState => ({ ...prevState, loading: true }));
                const response = await sendRequest(
                    // ` http://localhost:3005/add-admin/`,
                    ` ${process.env.REACT_APP_BACKEND_URL}add-admin/`,
                    'POST',
                    JSON.stringify(data), {
                    'Content-Type': 'application/json',
                }
                )
                if (response.responseStatusCode === 201) {
                    // setIsRoutingState(prevState => ({ ...prevState, isLoading: false }));
                    setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
                    setIsModal({

                        show: true,
                        modalType: 'successModal',
                        title: "Success",
                        message: "The new account has been created. A confirmation notice will be sent to the email address used to create this account.",
                        onCancel: handleCloseModalClick,
                        cancelText: "View admin directory",
                        // onConfirm: handleCloseModalClick,
                        // onCancel: handleHomeModalClick,
                        // cancelText: "See Admin Users",

                    });

                    // THIS MIGHT NOT BE NEEDED
                    setTimeout(() => {
                        // alert('Product updated successfully');
                    }, 100);
                }
            } catch (error) {
                // const revisedErrorMessage = error.toString().replace(/^Error:\s*/, '');
                setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
                setIsModal({

                    show: true,
                    modalType: 'errorModal',
                    title: "Something went wrong",
                    message: error.message,
                    // errorList: errorMessage,
                    // onConfirm: () => setIsModal({ show: false }),
                    onCancel: () => setIsModal({ show: false }),
                    // confirmText: "Close",
                    cancelText: "Go back",

                });

            }
        }
    };

    return (
        // <FormComponent onSubmit={submitForm}>
        <FormComponent >
            <FormSection>
                <AnimatedComponent type='3dRoationDropdownEffects' delay={.5}>
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
                </AnimatedComponent>
                <AnimatedComponent type='3dRoationDropdownEffects' delay={.5}>
                    <TextInput
                        id="lastName"
                        name="lastName"
                        labelName="Last name"
                        // secondaryLabel='Special characters allowed ( / \ - _ )'
                        errorText='Last name required'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}

                    />
                </AnimatedComponent>
                <AnimatedComponent type='3dRoationDropdownEffects' delay={.5}>
                    <TextInput
                        id="email"
                        name="email"
                        labelName="Email"
                        // secondaryLabel=''
                        errorText='Email required'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}

                    />
                </AnimatedComponent>
                <AnimatedComponent type='3dRoationDropdownEffects' delay={.5}>
                    <Select
                        id='role'
                        name="role"
                        labelName="Role"
                        secondaryLabelToolTip="User role can be set to admin (Administrator), super admin (Super Administratory) or user. The super administrator role is given full access to all resources and actions across products and users. The administrator role is for users who require access to add, edit and delete products, as well as approving users. A user role receives no special access to the portal. A user can only access the public facing product guide website(s). "
                        // errorText='Please select a retailer'
                        validators={[]}
                        onInput={inputHandler}
                        options={[
                            { value: "admin", label: "Administrator" },
                            { value: "superAdmin", label: "Super Administrator" }
                        ]}
                    />
                </AnimatedComponent>
                <AnimatedComponent type='3dRoationDropdownEffects' delay={.5}>
                    <TextInput
                        id="password"
                        name="password"
                        labelName="Password"
                        // secondaryLabel=''
                        secondaryLabelToolTip="Password must be at least eight characters in length and include a minimum of one uppercase letter, one number and one special character. "
                        errorText='Password required'
                        validators={[VALIDATOR_REQUIRE()]}
                        type={passwordInputType}
                        iconType={passwordInputType === "password" ? 'eyeClosed' : 'eyeOpened'}
                        onIconClick={togglePasswordVisibility}
                        onInput={inputHandler}
                    />
                </AnimatedComponent>

                <AnimatedComponent type='3dRoationDropdownEffects' delay={.5}>
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
                </AnimatedComponent>

                <AnimatedComponent type='3dRoationDropdownEffects' delay={.5}>
                    <Button type='button'
                        onClick={preFormSubmit}
                        // onClick={submitForm} 
                        buttonStyleType="primaryAction">Sumbit </Button>
                </AnimatedComponent>
            </FormSection>
        </FormComponent>
    )
}