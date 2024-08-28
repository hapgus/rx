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

import { VALIDATOR_REQUIRE } from '../../../utils/validators';

import { LinkComponent } from '../../../components/Links/LinkComponent';
import { validateUserProfileForm } from '../../../utils/form-validation';


const UserProfilePage = () => {

    
   
    const publicUrl = process.env.PUBLIC_URL;
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
                    const { responseData } = await sendRequest(`http://localhost:3005/user-profile/${decodedToken.userId}`);
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
                    const response = await sendRequest(`http://localhost:3005/edit-profile/${decodedToken.userId}`,
                        'PATCH',
                        JSON.stringify(data),{
                            'Content-Type': 'application/json',
                            }
                    )
                    if (response.message === 'Product added') {
                        setIsRoutingState(prevState => ({ ...prevState, isLoading: false }));

                        setIsModal(prevState => ({
                            ...prevState,
                            show: true,
                            modalType: 'successModal',
                            title: "Success",
                            message: "Congrats! The product was added successfully.",
                            errorList: errorMessage,
                            onConfirm: () => setIsModal({ show: false }),
                            onCancel: () => setIsModal({ show: false }),
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
        <GridSystem>
            <div className={styles.contentWrapper}>
                <div>
                    <PageText type='pageTitle'>Profile</PageText>
                    <PageText type='pageSubtitle'>Your user account</PageText>
                </div>

            </div>

            <div className={styles.accountInformationWrapper}>
                <div>
                    <div className={styles.sectionTitle}>
                        <PageText type='bodyTertiaryTitle'>Account information</PageText>
                    </div>
                    <div className={styles.sectionDescription}>
                        <PageText type='bodyDescription'>Edit your profile</PageText>
                    </div>

                </div>
                <div>
                    <PageText type='bodyTertiaryTitle'>Account type</PageText>
                    <PageText type='bodyDescription'>{decodedToken ? decodedToken.role: `You're signed out and should not be seeing this`}</PageText>

                </div>
                <div>
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
                        labelName="Your retailer"
                        secondaryLabel='E.g., Home Depot'
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
                        labelName="Your retailer address"
                        secondaryLabel='Optional'
                        // errorText='Retailer  required'
                        validators={[]}
                        onInput={inputHandler}
                        // initialValue={formState.inputs.title.value} 
                        initialValue={formState.inputs.address.value}
                        initialIsValid={formState.inputs.address.isValid}

                    />

<Button type='button' onClick={handleFormSubmit} buttonStyleType="primaryAction">Sumbit </Button>
                </div>


            </div>
            <div className={styles.accountInformationWrapper}>
                <div className={styles.sectionTitle}>
                    <PageText type='bodyTertiaryTitle'>Password</PageText>
                </div>
                <div>
                    <LinkComponent href={`/hapg/member/forgot-password`}>
                        <PageText>Reset Password</PageText>
                    </LinkComponent>
                </div>
            
                
            </div>
            <div className={styles.accountInformationWrapper}>
                <div className={styles.sectionTitle}>
                    <PageText type='bodyTertiaryTitle'>Account status</PageText>
                </div>
                <div>
                    <PageText type='bodyDescription'>{decodedToken ? decodedToken.status: `You're signed out and should not be seeing this`}</PageText>
                </div>
                <div>
                    <PageText type='bodyTertiaryTitle'>Deactivate</PageText>
                    <div className={styles.buttonWrapper}>
                        <Button buttonStyleType='secondary'>Delete account</Button>
                    </div>
                </div>

            </div>
        </GridSystem>
    );
}


export default UserProfilePage;