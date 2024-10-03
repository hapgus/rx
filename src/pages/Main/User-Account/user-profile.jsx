import styles from './UserProfile.module.css'

import { PageText } from '../../../components/Text/Text';
import { GridSystem } from '../../../components/GridSystem/GridSystem';
import { Button } from '../../../components/Button/Button';
import { FormElement } from '../../../components/FormComponent/FormElement';
import { useNotificationHook } from '../../../hooks/notification-hook';
import { useHttpClient } from '../../../hooks/http-hook';
import { useRoutingHook } from '../../../hooks/routing-hook';
import { FormComponent } from '../../../components/FormComponent/FormComponent';
import { useForm } from '../../../hooks/form-hook';
import { TextInput } from '../../../components/FormComponent/TextInput/TextInput';
import { useAuthHook, useAuthUser, useAuth } from '../../../hooks/auth-hook';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { VALIDATOR_REQUIRE } from '../../../utils/validators';

import { LinkComponent } from '../../../components/Links/LinkComponent';
import { validateUserProfileForm } from '../../../utils/form-validation';
import { FormWrapper } from '../../../components/FormComponent/FormWrapper/FormWrapper';
import { AnimatedComponent } from '../../../hooks/use-framer-motion';
import { useDataContext } from '../../../hooks/data-hook';
import { FormSkeleton } from '../../../components/Skeletons/FormSkeleton';
import { FormSection } from '../../../components/FormComponent/FormSection/FormSection';


const UserProfilePage = () => {

    const redirect = useNavigate()
    const { isManagedDataState, setIsManagedDataState } = useDataContext();

    const { setIsModal, isModal } = useNotificationHook();
    const { isAuthenticated, isSuperAdmin, isAdmin } = useAuth();
    const { logout } = useAuthHook()
    const { setIsRoutingState } = useRoutingHook();
    const { sendRequest } = useHttpClient();

    const decodedToken = useAuthUser();

    const [formState, inputHandler, setFormData, resetForm] = useForm({
        firstName: { value: '', isValid: false },
        lastName: { value: '', isValid: false },
        store: { value: '', isValid: false },
        address: { value: '', isValid: false },
    })

    console.log(isManagedDataState)
    // POPULATE USER DATA
    useEffect(() => {
        setIsManagedDataState(prevState => ({ ...prevState, preLoading: true }));

        if (decodedToken) {
            const fetchProductData = async () => {
                try {
                    const { responseData } = await sendRequest(` ${process.env.REACT_APP_BACKEND_URL}user-profile/${decodedToken.userId}`);
                    const userData = responseData.user;

                    setFormData({
                        firstName: { value: userData.firstName || '', isValid: true },
                        lastName: { value: userData.lastName || '', isValid: true },
                        store: { value: userData.store || '', isValid: true },
                        address: { value: userData.address || '', isValid: true },
                        email: { value: userData.email || '', isValid: true },
                    }, true);

                    setIsManagedDataState(prevState => ({
                        ...prevState,
                        data: userData,
                        preLoading: false,

                    }));

                } catch (err) {
                    setIsManagedDataState(prevState => ({ ...prevState, preLoading: false }));
                    console.error('Error fetching product data:', err);
                }
            };

            fetchProductData();
        }
    }, [decodedToken, sendRequest, setFormData])


    // DELETE ACCOUNT DATA
    const handleDeleteUser = () => {

        if (!isAuthenticated && !decodedToken) {
            setIsModal({
                show: true,
                modalType: 'errorModal',
                title: 'Permission Denied',
                message: `You cannot delete this user.`,
                confirmText: 'Go back',
                onConfirm: () => setIsModal({ show: false }),
            });
            return;
        }

        setIsModal({
            show: true,
            modalType: 'confirmationModal',
            title: 'Are You Sure You Want to Delete?',
            message: `You are about to permanently delete you account. This action cannot be undone. Please confirm to continue`,
            confirmText: 'Delete account',
            cancelText: 'Go back',
            onConfirm: handleConfirmDeleteUser,
            onCancel: () => setIsModal({ show: false }),
        });
    };
    const handleConfirmDeleteUser = async () => {
        setIsManagedDataState(prevState => ({ ...prevState, loading: true }));

        try {
            const response = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}delete-profile/${decodedToken.userId}`,
                'DELETE',
                // JSON.stringify({ adminId: authUserId }),
                // { 'Content-Type': 'application/json' }
            );

            if (response.responseStatusCode === 201) {
                setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
                setIsModal({
                    show: true,
                    modalType: 'successModal',
                    title: 'User Deleted',
                    message: `The user account has been successfully deleted.`,
                    confirmText: "Close",
                    onConfirm: () => {
                        logout();
                        setIsModal({ show: false });
                        redirect('/member/login');
                    }
                });
            } else {
                console.error('User not deleted');
                setIsManagedDataState(prevState => ({ ...prevState, preloading: false }));
                setIsModal({
                    show: true,
                    modalType: 'errorModal',
                    title: 'Something Went Wrong!',
                    message: `Something went wrong while deleting the user. Please try again later.`,
                    confirmText: 'Close',
                    onConfirm: () => setIsModal({ show: false }),
                });
            }
        } catch (err) {
            console.error('Error deleting user:', err);
            setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
            setIsModal({
                show: true,
                modalType: 'errorModal',
                title: 'Error Deleting User',
                message: `Something went wrong while deleting the user. Please try again later.`,
                confirmText: 'Close',
                onConfirm: () => setIsModal({ show: false }),
            });
        }
    };

    // HANDLE MODAL OPTIONS

    const authUserGoBackDestination = isSuperAdmin && isAuthenticated
        ? "/portal/dashboard"
        : isAdmin && isAuthenticated
            ? "/portal/dashboard"
            : "/"
    const handleGoBack = () => {
        setIsModal({ show: false })
    }

    const handleConfirm = () => {
        redirect(authUserGoBackDestination)
        setIsModal({ show: false })
    }

    const handlePreFormSubmit = (e) => {

        e.preventDefault();
        const { processedValues } = validateUserProfileForm(formState)

        const hasChanges = (
            processedValues.firstName !== isManagedDataState.data.firstName ||
            processedValues.lastName !== isManagedDataState.data.lastName ||
            processedValues.store !== isManagedDataState.data.store ||
            processedValues.address !== isManagedDataState.data.address
            // formState.inputs.firstName.value !== isManagedDataState.data.firstName ||
            // formState.inputs.lastName.value !== isManagedDataState.data.lastName ||
            // formState.inputs.store.value !== isManagedDataState.data.store ||
            // formState.inputs.address.value !== isManagedDataState.data.address
        )

        if (!hasChanges) {
            setIsModal(prevState => ({
                ...prevState,
                show: true,
                modalType: 'userConfirmationModal',
                title: "Nothing to update",
                message: "Your information has not been changed. You must first change your account information before you can submit updates.",
                errorList: [],
                onConfirm: () => setIsModal({ show: false }),
                // onCancel: handleOnCancel,
                confirmText: "Try Again",
                // cancelText: "Go back to all users tables",

            }));
            return
        }
        setIsModal(prevState => ({
            ...prevState,
            show: true,
            modalType: 'confirmationModal',
            title: "Confirmation Required",
            message: `You are update your account information. Please confirm to continue.`,
            errorList: [],
            onConfirm: () => handleFormSubmit(),
            confirmText: 'Update my account',
            onCancel: () => setIsModal({ show: false }),
            cancelText: "Go back",

        }));
    }

    const handleFormSubmit = async (e) => {


        console.log(formState)
        const { errorMessage, processedValues } = validateUserProfileForm(formState)

        if (errorMessage.length !== 0) {
            // setIsModal(prevState => ({
            //     ...prevState, 
            //     errorList: errorMessage,
            // }));
            setIsModal({
                show: true,
                modalType: 'errorModal',
                // iconType:'errorInfo',
                title: "Update failed",
                message: "You need to fix the following errors to continue.",
                errorList: errorMessage,
                onConfirm: () => setIsModal({ show: false }),
                onCancel: () => setIsModal({ show: false }),
                confirmText: "Close",
                cancelText: "Go back",
            })
        } else {
            setIsManagedDataState(prevState => ({ ...prevState, loading: true }));
            const data = {
                // firstName: formState.inputs.firstName.value,
                // lastName: formState.inputs.lastName.value,
                // store: formState.inputs.store.value,
                // address: formState.inputs.address.value,
                firstName: processedValues.firstName,
                lastName: processedValues.lastName,
                store: processedValues.store,
                address: processedValues.address,
            }

            try {
                const response = await sendRequest(` ${process.env.REACT_APP_BACKEND_URL}edit-profile/${decodedToken.userId}`,
                    'PATCH',
                    JSON.stringify(data), {
                    'Content-Type': 'application/json',
                }
                )
                if (response.responseStatusCode === 201) {
                    setIsRoutingState(prevState => ({ ...prevState, isLoading: false }));
                    setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
                    setIsModal(prevState => ({
                        ...prevState,
                        show: true,
                        modalType: 'successModal',
                        title: "Success",
                        message: "Congrats! Your profile has been updated.",
                        errorList: errorMessage,
                        onConfirm: handleConfirm,
                        onCancel: handleGoBack,
                        confirmText: "Close",
                        cancelText: "Go back",

                    }));
                }
            } catch (error) {

                const revisedErrorMessage = error.toString().replace(/^Error:\s*/, '');
                setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
                setIsModal({
                    show: true,
                    modalType: 'errorModal',
                    title: "Something went wrong",
                    message: revisedErrorMessage,
                    // errorList: errorMessage,
                    onConfirm: () => setIsModal({ show: false }),
                    onCancel: () => setIsModal({ show: false }),
                    confirmText: "Close",
                    cancelText: "Try again",
                })
            }
        }
    }
    return (
        <GridSystem gridType='spread' containerBackgroundColor='#E6E1D6'>
            {
                isManagedDataState.preLoading === false
                    && isManagedDataState && isManagedDataState.data
                    ? (
                        <div className={styles.contentWrapper}>
                            <FormSection>
                                <div className={styles.sectionTitle}>
                                    <AnimatedComponent type="bounceEffect">
                                        <PageText type='pageTitle'>My Profile</PageText>
                                    </AnimatedComponent>
                                    <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.1}>
                                        <PageText type='pageSubtitle'>Manage your user account</PageText>
                                    </AnimatedComponent>
                                </div>
                                <FormComponent>
                                    <FormWrapper>
                                        <AnimatedComponent type='3dRoationDropdownEffects' delay={.3}>
                                            <TextInput
                                                id="firstName"
                                                name="firstName"
                                                labelName="First name"
                                                // secondaryLabel=''
                                                errorText='First name required'
                                                validators={[VALIDATOR_REQUIRE()]}
                                                onInput={inputHandler}
                                                // initialValue={formState.inputs.title.value} 
                                                initialValue={formState.inputs.firstName.value}
                                                initialIsValid={formState.inputs.firstName.isValid}

                                            />
                                        </AnimatedComponent>
                                        <AnimatedComponent type='3dRoationDropdownEffects' delay={.3}>
                                            <TextInput
                                                id="lastName"
                                                name="lastName"
                                                labelName="Last name"
                                                // secondaryLabel='Optional'
                                                errorText='Last name required'
                                                validators={[VALIDATOR_REQUIRE()]}
                                                onInput={inputHandler}
                                                // initialValue={formState.inputs.title.value} 
                                                initialValue={formState.inputs.lastName.value}
                                                initialIsValid={formState.inputs.lastName.isValid}

                                            />
                                        </AnimatedComponent>
                                        <AnimatedComponent type='3dRoationDropdownEffects' delay={.3}>
                                            <TextInput
                                                id="store"
                                                name="store"
                                                labelName="Retailer name"
                                                secondaryLabel="Ex. Jon's Appliance Store"
                                                errorText='Retailer name required'
                                                validators={[VALIDATOR_REQUIRE()]}
                                                onInput={inputHandler}
                                                // initialValue={formState.inputs.title.value} 
                                                initialValue={formState.inputs.store.value}
                                                initialIsValid={formState.inputs.store.isValid}

                                            />
                                        </AnimatedComponent>
                                        <AnimatedComponent type='3dRoationDropdownEffects' delay={.3}>
                                            <TextInput
                                                id="address"
                                                name="adress"
                                                labelName="Retailer address"
                                                secondaryLabel='Optional'
                                                errorText='Retailer  required'
                                                validators={[VALIDATOR_REQUIRE()]}
                                                onInput={inputHandler}
                                                // initialValue={formState.inputs.title.value} 
                                                initialValue={formState.inputs.address.value}
                                                initialIsValid={formState.inputs.address.isValid}

                                            />
                                        </AnimatedComponent>

                                        <div className={styles.buttonWrapper}>
                                            <AnimatedComponent type='3dRoationDropdownEffects' delay={.3}>
                                                <Button type='button' onClick={handlePreFormSubmit} buttonStyleType="primaryAction">Update my account </Button>
                                            </AnimatedComponent>
                                        </div>
                                        <div className={styles.actionButtonsWrapper}>

                                            <div onClick={handleDeleteUser} className={styles.actionButton}>
                                                <AnimatedComponent type='wipeEffect' delay={.3}>
                                                    <PageText>
                                                        Delete my account
                                                    </PageText>
                                                </AnimatedComponent>
                                            </div>
                                            <div className={styles.actionButton}>
                                                <AnimatedComponent type='wipeEffect' delay={.3}>
                                                    <LinkComponent href={`/member/forgot-password`}>
                                                        <PageText>Reset Password</PageText>
                                                    </LinkComponent>
                                                </AnimatedComponent>
                                            </div>




                                        </div>

                                    </FormWrapper>


                                </FormComponent>


                            </FormSection>

                        </div>
                    )
                    : <FormSkeleton />
            }

        </GridSystem>
    );
}


export default UserProfilePage;