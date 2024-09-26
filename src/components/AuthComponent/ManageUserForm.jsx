
import styles from './AuthFormComponent.module.css'

import { PageText } from '../../components/Text/Text';

import { Button } from '../../components/Button/Button';


import { useHttpClient } from '../../hooks/http-hook';
import { useRoutingHook } from '../../hooks/routing-hook';

import { useForm } from '../../hooks/form-hook';

import { Select } from '../FormComponent/Select/Select';
import { useAuthUser, useAuth } from '../../hooks/auth-hook';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useNotificationHook } from '../../hooks/notification-hook';
import { capitalizeFirstLetterEachWord } from '../../utils/text-help';
import { PortalPageBody, PortalPageWrapper } from '../PortalComponent/PortalPageComponent/PortalPageComponents';
import { FormComponent } from '../FormComponent/FormComponent';
import { FormWrapper } from '../FormComponent/FormWrapper/FormWrapper';
import { GridSystem } from '../GridSystem/GridSystem';
import { FormSection } from '../FormComponent/FormSection/FormSection';

export const ManageUserForm = () => {

    const { userId } = useParams();
    const redirect = useNavigate()

    const { setIsModal } = useNotificationHook();
    const { setIsRoutingState, isAdminRoutingState } = useRoutingHook();
    const { sendRequest } = useHttpClient();
    const [userInfo, setUserInfo] = useState()

    console.log('admin routing', isAdminRoutingState)
    const decodedToken = useAuthUser();
    const { authUserId, isSuperAdmin } = useAuth();


    const [formState, inputHandler, setFormData] = useForm({

        role: { value: '', isValid: false },
        status: { value: '', isValid: false },
    })


    useEffect(() => {

        if (userId) {
            console.log(userId)
            const fetchUserData = async () => {
                try {
                    const { responseData } = await sendRequest(` ${process.env.REACT_APP_BACKEND_URL}user/${userId}`);
                    // const { responseData } = await sendRequest(` http://localhost:3005/user/${userId}`);
                    const userData = responseData?.user;

                    setUserInfo(userData)

                    setFormData({
                        role: { value: userData?.role || '', isValid: true },
                        status: { value: userData?.status || '', isValid: true },
                    }, true);

                } catch (err) {
                    console.error('Error fetching user data:', err);
                }
            };
            fetchUserData();
        }


    }, [userId])


    const handleDeleteUser = () => {
        if (userInfo.role === 'superAdmin' && !isSuperAdmin) {
            setIsModal({
                show: true,
                modalType: 'errorModal',
                title: 'Permission Denied',
                message: `You cannot delete a Super Admin user.`,
                confirmText: 'Go back',
                onConfirm: () => setIsModal({ show: false }),
            });
            return;
        }

        setIsModal({
            show: true,
            modalType: 'infoModal',
            title: 'Are You Sure You Want to Delete?',
            message: `You are about to permanently delete this user account. This action cannot be undone.`,
            confirmText: 'Delete user account',
            cancelText: 'Go back',
            onConfirm: handleConfirmDeleteUser,
            onCancel: () => setIsModal({ show: false }),
        });
    };

    const handleConfirmDeleteUser = async () => {
        try {
            const response = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}delete-user/${userId}`,
                'DELETE',
                JSON.stringify({ adminId: authUserId }),
                { 'Content-Type': 'application/json' }
            );

            if (response.responseStatusCode === 200) {
                setIsModal({
                    show: true,
                    modalType: 'successModal',
                    title: 'User Deleted',
                    message: `The user account has been successfully deleted.`,
                    confirmText: 'Go back to user list',
                    onConfirm: () => {
                        setIsModal({ show: false });
                        redirect('/portal/user-directory/');
                    }
                });
            } else {
                console.error('User not deleted');
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
    const handleOnCancel = () => {
        setIsModal({ show: false })
        redirect('/portal/user-directory/')
    }

    const handlePreFormSubmit = (e) => {
        e.preventDefault();

        const hasChanges = (
            formState.inputs.role.value !== userInfo.role ||
            formState.inputs.status.value !== userInfo.status
        )

        if (!hasChanges) {
            setIsModal(prevState => ({
                ...prevState,
                show: true,
                modalType: 'infoModal',
                title: "Nothing to update",
                message: "The user\'s information is unchanged. Please select a new status or role for this user and try again.",
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
            modalType: 'infoModal',
            title: "Confirmation Required",
            message: `You are about to update this user access. Please confirm to proceed.`,
            errorList: [],
            onConfirm: () => handleFormSubmit(),
            confirmText: 'Update user',
            onCancel: () => setIsModal({ show: false }),
            cancelText: "Go back",

        }));



    }

    const handleFormSubmit = async (e) => {
        // e.preventDefault();

        // const hasChanges = (
        //     formState.inputs.role.value !== userInfo.role ||
        //     formState.inputs.status.value !== userInfo.status   
        // )

        // if(!hasChanges){
        //     setIsModal(prevState => ({
        //         ...prevState,
        //         show: true,
        //         modalType: 'infoModal',
        //         title: "Nothing to update",
        //         message: "The user\'s information is unchanged. Please select a new status or role for this user and try again.",
        //         errorList: [],
        //         onConfirm: () => setIsModal({ show: false }),
        //         // onCancel: handleOnCancel,
        //         confirmText: "Try Again",
        //         // cancelText: "Go back to all users tables",

        //     }));
        //     return
        // }

        // setIsModal(prevState => ({
        //     ...prevState,
        //     show: true,
        //     modalType: 'infoModal',
        //     title: "Confirmation Required",
        //     message: `You are about to create a new ${capitalizeFirstLetterEachWord(formState.inputs.role.value)}. Please confirm to proceed.`,
        //     errorList: [],
        //     onConfirm: () => setIsModal({ show: false }),
        //     // onCancel: handleOnCancel,
        //     confirmText: "Try Again",
        //     // cancelText: "Go back to all users tables",

        // }));



        const data = {

            status: formState.inputs.status.value,
            role: formState.inputs.role.value,
            creatorId: authUserId
        }

        try {
            const response = await sendRequest(` ${process.env.REACT_APP_BACKEND_URL}manage-user/${userId}`,
                'PATCH',
                JSON.stringify(data), {
                'Content-Type': 'application/json',
            }

            )
            console.log(response)
            if (response.responseStatusCode === 202) {
                setIsRoutingState(prevState => ({ ...prevState, isLoading: false }));

                setIsModal(prevState => ({
                    ...prevState,
                    show: true,
                    modalType: 'successModal',
                    title: "Success",
                    message: "Congrats! The user has been updated.",
                    errorList: [],
                    onConfirm: () => setIsModal({ show: false }),
                    onCancel: handleOnCancel,
                    confirmText: "Close",
                    cancelText: "Go to users tables",

                }));


            }

        } catch (err) {

            console.log(err)
        }
    }
    return (

        <>
            <GridSystem>
                <FormComponent>
                    <FormSection>

                    </FormSection>
                </FormComponent>
            </GridSystem>
            <div className={styles.accountInformationWrapper}>

                <div className={styles.userIntroWrapper}>
                    <PageText type='formLabel' >
                        {userInfo?.firstName}
                        {" "}
                        {userInfo?.lastName}
                        {" | "}
                        {userInfo?.email}
                        {
                            userInfo && userInfo.store ?
                                ` | ${userInfo.store}` : null
                        }
                    </PageText>
                </div>

                {/* <div>
                    <div className={styles.sectionTitle2}>
                        <PageText>Manage Status and Role</PageText>
                    </div>
                </div> */}

                <div className={styles.formElements}>
                    <Select
                        id='role'
                        name="role"
                        labelName="User Role"
                        secondaryLabelToolTip="User role can be set to admin (Administrator), super admin (Super Administratory) or user. The super administrator role is given full access to all resources and actions across products and users. The administrator role is for users who require access to add, edit and delete products, as well as approving users. A user role receives no special access to the portal. A user can only access the public facing product guide website(s). "
                        // errorText='Please select a retailer'
                        validators={[]}
                        onInput={inputHandler}
                        initialValue={formState.inputs.role.value}
                        initialIsValid={formState.inputs.role.isValid}
                        options={[
                            { value: "user", label: "User" },
                            { value: "admin", label: "Administrator" },
                            { value: "superAdmin", label: "Super Administrator" }
                        ]}
                    />

                    <Select
                        id='status'
                        name='status'
                        labelName="User Status"
                        secondaryLabelToolTip="User role can be set to approved, not approved, or pending approval. By default, the user status is set to pending approval and can only be changed by an admin or super admin user.  "
                        // errorText='Please select a retailer'
                        validators={[]}
                        onInput={inputHandler}
                        initialValue={formState.inputs.status.value}
                        initialIsValid={formState.inputs.status.isValid}
                        options={[
                            { value: "pending", label: "Pending approval" },
                            { value: "approved", label: "Approved" },
                            { value: "notApproved", label: "Not Approved" }
                        ]}
                    />
                    <div className={styles.buttonWrapper}>
                        <Button type='button' onClick={handlePreFormSubmit} buttonStyleType="primaryAction">Sumbit </Button>
                    </div>
                </div>



                <div className={styles.actionButtonsWrapper}>
                    <div onClick={handleDeleteUser}>
                        <PageText>Delete account</PageText>
                    </div>

                </div>
                <div>
                    {/* <div className={styles.deleteAccountTitle}>
                            <PageText>Remove User</PageText>
                        </div> */}
                   
                </div>

            </div>
        </>

    );
}
