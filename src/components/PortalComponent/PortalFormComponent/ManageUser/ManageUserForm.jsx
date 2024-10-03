import styles from '../PortalFormComponent.module.css'

import { PageText } from '../../../../components/Text/Text';

import { Button } from '../../../../components/Button/Button';

import { useHttpClient } from '../../../../hooks/http-hook';
import { useRoutingHook } from '../../../../hooks/routing-hook';
import { useDataContext } from '../../../../hooks/data-hook';

import { useForm } from '../../../../hooks/form-hook';


import { Select } from '../../../FormComponent/Select/Select';
import { useAuthUser, useAuth } from '../../../../hooks/auth-hook';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useNotificationHook } from '../../../../hooks/notification-hook';

import { FormSkeleton } from '../../../Skeletons/FormSkeleton';

import {  AnimatedComponent } from '../../../../hooks/use-framer-motion';


export const ManageUserForm = () => {

    const { userId } = useParams();
    const redirect = useNavigate()

    const { setIsModal } = useNotificationHook();
    const { setIsRoutingState, isAdminRoutingState } = useRoutingHook();
    const { sendRequest } = useHttpClient();
    const { isManagedDataState, setIsManagedDataState } = useDataContext();

 
    const [userInfo, setUserInfo] = useState()

   
    const decodedToken = useAuthUser();
    const { authUserId, isSuperAdmin } = useAuth();

    const [formState, inputHandler, setFormData] = useForm({

        role: { value: '', isValid: false },
        status: { value: '', isValid: false },
    })

     // HANDLE MODAL OPTIONS

     const handleOnCancelRedirectDirectoy = () => {

      
        setIsModal({ show: false })
        if(formState.inputs.role.value === "admin" || formState.inputs.role.value === "superAdmin" ){
            redirect('/portal/admin-directory/')
        } else{
            redirect('/portal/user-directory/')
        }
        
    }

    const handleOnMainDash = () => {
        setIsModal({ show: false })
        redirect('/portal/dashboard')
    }

    // POPULATE USER DATA
    useEffect(() => {
        setIsManagedDataState(prevState => ({ ...prevState, preloading: true }));

        if (userId) {

            const fetchUserData = async () => {
                try {
                    const { responseData } = await sendRequest(` ${process.env.REACT_APP_BACKEND_URL}user/${userId}`);

                    const userData = responseData?.user;
                    setUserInfo(userData);
                    setIsManagedDataState(prevState => ({
                        ...prevState,
                        data: userData,
                        preLoading: false,

                    }));

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


    // HANDLE DELETE ACCOUNT DATA
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
            modalType: 'confirmationModal',
            title: 'Are You Sure You Want to Delete?',
            message: `You are about to permanently delete this user account. This action cannot be undone.`,
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
                `${process.env.REACT_APP_BACKEND_URL}delete-user/${userId}`,
                'DELETE',
                JSON.stringify({ adminId: authUserId }),
                { 'Content-Type': 'application/json' }
            );

            if (response.responseStatusCode === 200) {
                setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
                setIsModal({
                    show: true,
                    modalType: 'successModal',
                    title: 'User Deleted',
                    message: `The user account has been successfully deleted.`,
                    confirmText: "Close",
                    cancelText: "View directory",
                    onCancel: handleOnCancelRedirectDirectoy,
                    // onConfirm:()=>{
                    //     setIsModal({ show: false });
                    //     redirect('/portal/dashboard/');
                    // }
                });
            } else {
                console.error('User not deleted');
                setIsManagedDataState(prevState => ({ ...prevState, preloading: false }));
                setIsModal({
                    show: true,
                    modalType: 'errorModal',
                    title: 'Something Went Wrong!',
                    message: `Something went wrong while deleting the user. Please try again later.`,
                    confirmText: 'Try again',
                    onConfirm: () => setIsModal({ show: false }),
                });
            }
        } catch (err) {
            setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
            console.error('Error deleting user:', err);
            setIsModal({
                show: true,
                modalType: 'errorModal',
                title: 'Error Deleting User',
                message: `Something went wrong while deleting the user. Please try again later. ${err.message}`,
                confirmText: 'Close',
                onConfirm: () => setIsModal({ show: false }),
            });
        }
    };





    // HANDLE UPDATE USER
    const handlePreFormSubmit = (e) => {

        e.preventDefault();

        const hasChanges = (
            formState.inputs.role.value !== userInfo.role ||
            formState.inputs.status.value !== userInfo.status
        )

        if (!hasChanges) {
            setIsModal({
               
                show: true,
                modalType: 'userConfirmationModal',
                title: "Nothing to update",
                message: "The user's information is unchanged. Please select a new status or role for this user and try again.",
                errorList: [],
                onCancel: () => setIsModal({ show: false }),
                // onCancel: handleOnCancel,
                cancelText: "Try Again",
                // cancelText: "Go back to all users tables",

            });
            return
        }

        setIsModal({
            show: true,
            modalType: 'confirmationModal',
            title: "Confirmation Required",
            message: `You are about to update this user access. Please confirm to proceed.`,
            onConfirm: () => handleFormSubmit(),
            confirmText: 'Update user',
            onCancel: () => setIsModal({ show: false }),
            cancelText: "Go back",
        });
    }

    const handleFormSubmit = async (e) => {
        setIsManagedDataState(prevState => ({ ...prevState, loading: true }));
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

            if (response.responseStatusCode === 202) {
                setIsRoutingState(prevState => ({ ...prevState, isLoading: false }));
                setIsManagedDataState(prevState => ({ ...prevState, loading: false }));

                setIsModal({
                    
                    show: true,
                    modalType: 'successModal',
                    title: "Success",
                    message: "Congrats! The user has been updated.",
                    errorList: [],
                    // onConfirm: () => setIsModal({ show: false }),
                    // onConfirm: handleOnMainDash,
                    onCancel: handleOnCancelRedirectDirectoy,
                    // confirmText: "Close",
                    cancelText: "View directory",

                });
            }

        } catch (error) {

           
                const revisedErrorMessage = error.toString().replace(/^Error:\s*/, '');
                setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
                setIsModal({
                    show: true,
                    iconType:'errorInfo',
                    modalType: 'infoModal',
                    title: "Update Failed",
                    message: revisedErrorMessage,
                    // errorList: errorMessage,
                    onConfirm: () => setIsModal({ show: false }),
                    onCancel: () => setIsModal({ show: false }),
                    confirmText: "Close",
                    cancelText: "Try again",
                })
            }
    }

    return (

        <>
            {
                // isManagedDataState.loading === false
                isManagedDataState.preLoading === false
                    && userInfo
                    && userInfo.firstName !== '' && userInfo.email !== ''
                    && userInfo.role !== '' && userInfo.status !== ''

                    ? <div className={styles.accountInformationWrapper}>

                        <div className={styles.userIntroWrapper}>

                            <AnimatedComponent type='wipeEffect' delay={.3}>
                                <PageText type='formLabel' >


                                    <span>{userInfo?.firstName}{" "}</span>
                                    <span>{userInfo?.lastName} {" | "}</span>
                                    <span> {userInfo?.email}</span>
                                    <span>
                                        {
                                            userInfo && userInfo.store ?
                                                ` | ${userInfo.store}` : null
                                        }
                                    </span>
                                </PageText>
                            </AnimatedComponent>
                        </div>


                        <div className={styles.formElements}>

                            {
                                isSuperAdmin && 
                                <AnimatedComponent type='3dRoationDropdownEffects' delay={.5}>
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
                            </AnimatedComponent>
                            }
                           
                            <AnimatedComponent
                                delay={.5}
                                type='3dRoationDropdownEffects'
                            >
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
                            </AnimatedComponent>

                            <div className={styles.buttonWrapper}>
                                <AnimatedComponent
                                    delay={.5}
                                    type='3dRoationDropdownEffects'>

                                    <Button type='button' onClick={handlePreFormSubmit} buttonStyleType="primaryAction">
                                        Sumbit
                                    </Button>
                                </AnimatedComponent>
                            </div>


                        </div>



                        <div className={styles.actionButtonsWrapper}>

                            <div className={styles.deleteText} onClick={handleDeleteUser}>
                                <AnimatedComponent type='wipeEffect' delay={.3}>
                                    <PageText>Delete account</PageText>
                                </AnimatedComponent>

                            </div>

                        </div>
                        <div>
                            {/* <div className={styles.deleteAccountTitle}>
                            <PageText>Remove User</PageText>
                        </div> */}

                        </div>

                    </div>
                    : <FormSkeleton />
            }

        </>

    );
}
