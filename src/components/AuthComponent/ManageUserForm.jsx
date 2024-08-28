
import styles from './AuthFormComponent.module.css'

import { PageText } from '../../components/Text/Text';
import { GridSystem } from '../../components/GridSystem/GridSystem';
import { Button } from '../../components/Button/Button';

import { useNotificationHook } from '../../hooks/notification-hook';
import { useHttpClient } from '../../hooks/http-hook';
import { useRoutingHook } from '../../hooks/routing-hook';

import { useForm } from '../../hooks/form-hook';

import { Select } from '../FormComponent/Select/Select';
import { useAuthHook, useAuthUser, useAuth } from '../../hooks/auth-hook';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';


export const ManageUserForm = () => {

    const { userId } = useParams();

    const { setIsModal } = useNotificationHook();
    const { setIsRoutingState, isAdminRoutingState } = useRoutingHook();
    const { sendRequest } = useHttpClient();
    const [userInfo, setUserInfo] = useState()

    console.log('admin routing', isAdminRoutingState)
    const decodedToken = useAuthUser();
    const { authUserId, isAdmin, isSuperAdmin } = useAuth();


    const [formState, inputHandler, setFormData] = useForm({

        role: { value: '', isValid: false },
        status: { value: '', isValid: false },
    })


    useEffect(() => {

        if (userId) {
            const fetchProductData = async () => {
                try {
                    const { responseData } = await sendRequest(`http://localhost:3005/user/${userId}`);
                    const userData = responseData?.user;
                    console.log('user data', userData)
                    setUserInfo(userData)

                    setFormData({
                        role: { value: userData?.role || '', isValid: true },
                        status: { value: userData?.status || '', isValid: true },
                    }, true);

                } catch (err) {
                    console.error('Error fetching user data:', err);
                }
            };

            fetchProductData();

        }


    }, [userId])


    const handleDeleteUser = async () => {

        if (userInfo.role === 'superAdmin' || userInfo.role === 'admin') {
            try {
                const response = await fetch(
                    `http://localhost:3005/delete-admin/${userId}`,
                    {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            adminId: authUserId,
                        })
                    }
                )
                if (response.status === 200) {
                    alert('product delete')
                }
                console.log('delete response', response)
            } catch (err) {
                console.log('deletion', err)
            }
        } else if (userInfo.role !== 'superAdmin' || userInfo.role !== 'admin') {
            try {
                const response = await fetch(
                    `http://localhost:3005/delete-user/${userId}`,
                    {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            adminId: authUserId,
                        })
                    }
                )
                if (response.status === 200) {
                    alert('product delete')
                }
                console.log('delete response', response)
            } catch (err) {
                console.log('deletion', err)
            }
        } else {
            alert('what next')
        }


    }


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const data = {

            status: formState.inputs.status.value,
            role: formState.inputs.role.value,
            creatorId: authUserId
        }



        try {
            const response = await sendRequest(`http://localhost:3005/manage-user/${userId}`,
                'PATCH',
                JSON.stringify(data), {
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
    return (
        <GridSystem>
            <div className={styles.contentWrapper}>
                <div>
                    <PageText type='pageTitle'>{userInfo?.firstName} {userInfo?.lastName}'s Account </PageText>
                    <PageText type='pageSubtitle'>Change {userInfo?.firstName}'s  status or role</PageText>
                </div>

            </div>

            <div className={styles.accountInformationWrapper}>
                <div>
                    <div className={styles.sectionTitle}>
                        <PageText type='bodyTertiaryTitle'>About the user</PageText>

                    </div>
                    <div>
                        <div>
                            <PageText>Email</PageText>
                            {userInfo?.email}
                        </div>
                        <div>
                            <PageText>First name</PageText>
                            {userInfo?.firstName}
                        </div>
                        <div>
                            <PageText>Last name</PageText>
                            {userInfo?.lastName}
                        </div>
                        <div>
                            <PageText>Store</PageText>
                            {userInfo?.store}
                        </div>
                    </div>
                    <div className={styles.sectionDescription}>
                        <PageText type='bodyDescription'>Edit the user's privileges</PageText>
                    </div>

                </div>

                <div>
                    <Select
                        id='role'
                        name="role"
                        labelName="User Role"
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
                    <Button type='button' onClick={handleFormSubmit} buttonStyleType="primaryAction">Sumbit </Button>
                </div>


            </div>

            <div className={styles.accountInformationWrapper}>
                <div className={styles.sectionTitle}>
                    <PageText type='bodyTertiaryTitle'>Account status</PageText>
                </div>
                <div>
                    <PageText type='bodyDescription'>{decodedToken ? decodedToken.status : `You're signed out and should not be seeing this`}</PageText>
                </div>
                <div>
                    <PageText type='bodyTertiaryTitle'>Deactivate</PageText>
                    <div className={styles.buttonWrapper}>
                        <Button onClick={handleDeleteUser} buttonStyleType='secondary'>Delete account</Button>
                    </div>
                </div>

            </div>
        </GridSystem>
    );
}
