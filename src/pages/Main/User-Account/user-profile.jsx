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
import { useAuthHook, useAuthUser } from '../../../hooks/auth-hook';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { VALIDATOR_REQUIRE } from '../../../utils/validators';

import { LinkComponent } from '../../../components/Links/LinkComponent';
import { validateUserProfileForm } from '../../../utils/form-validation';
import { FormWrapper } from '../../../components/FormComponent/FormWrapper/FormWrapper';
import { AnimatedComponent } from '../../../hooks/use-framer-motion';

const UserProfilePage = () => {



    const redirect = useNavigate()
    const { setIsModal, isModal } = useNotificationHook();
    const { setIsRoutingState } = useRoutingHook();
    const { sendRequest } = useHttpClient();

    const decodedToken = useAuthUser();
    console.log(decodedToken)
    const [formState, inputHandler, setFormData, resetForm] = useForm({
        firstName: { value: '', isValid: false },
        lastName: { value: '', isValid: false },
        store: { value: '', isValid: false },
        address: { value: '', isValid: false },
    })


    useEffect(() => {
        if (decodedToken) {
            const fetchProductData = async () => {
                try {
                    const { responseData } = await sendRequest(` ${process.env.REACT_APP_BACKEND_URL}user-profile/${decodedToken.userId}`);
                    const userData = responseData.user;
                    console.log('user data', userData)
                    setFormData({
                        firstName: { value: userData.firstName || '', isValid: true },
                        lastName: { value: userData.lastName || '', isValid: true },
                        store: { value: userData.store || '', isValid: true },
                        address: { value: userData.address || '', isValid: true },
                        email: { value: userData.email || '', isValid: true },
                    }, true);

                } catch (err) {
                    console.error('Error fetching product data:', err);
                }
            };

            fetchProductData();
        }
    }, [decodedToken, sendRequest, setFormData])


    const handleGoBack = () => {
        setIsModal({ show: false })
    }
    const handleConfirm = () => {
        redirect('/')
        setIsModal({ show: false })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();


        const errorMessage = validateUserProfileForm(formState)

        console.log(errorMessage)
        if (errorMessage.length !== 0) {
            // setIsModal(prevState => ({
            //     ...prevState, 
            //     errorList: errorMessage,
            // }));
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
                store: formState.inputs.store.value,
                address: formState.inputs.address.value,
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
            } catch (err) {

                console.log(err)
            }
        }
    }
    return (
        <GridSystem gridType='spread' containerBackgroundColor='#E6E1D6'>
            <div className={styles.contentWrapper}>
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
                        <TextInput
                            id="lastName"
                            name="lastName"
                            labelName="Last name"
                            secondaryLabel='Optional'
                            // errorText='Last name required'
                            validators={[]}
                            onInput={inputHandler}
                            // initialValue={formState.inputs.title.value} 
                            initialValue={formState.inputs.lastName.value}
                            initialIsValid={formState.inputs.lastName.isValid}

                        />
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
                        <TextInput
                            id="address"
                            name="adress"
                            labelName="Retailer address"
                            secondaryLabel='Optional'
                            // errorText='Retailer  required'
                            validators={[]}
                            onInput={inputHandler}
                            // initialValue={formState.inputs.title.value} 
                            initialValue={formState.inputs.address.value}
                            initialIsValid={formState.inputs.address.isValid}

                        />
                        <div className={styles.buttonWrapper}>
                            <Button type='button' onClick={handleFormSubmit} buttonStyleType="primaryAction">Update my account </Button>
                        </div>
                        <div className={styles.actionButtonsWrapper}>

                            <div className={styles.actionButton}>
                                <PageText>
                                    Delete my account
                                </PageText>
                            </div>
                            <div className={styles.actionButton}>
                                <LinkComponent href={`/member/forgot-password`}>
                                    <PageText>Reset Password</PageText>
                                </LinkComponent>
                            </div>




                        </div>

                    </FormWrapper>


                </FormComponent>




            </div>
        </GridSystem>
    );
}


export default UserProfilePage;