
import { useAuth, useAuthHook } from "../../hooks/auth-hook";
import { FormComponent } from "../FormComponent/FormComponent"

import { Button } from '../Button/Button';
import { useForm } from "../../hooks/form-hook";
import { TextInput } from "../FormComponent/TextInput/TextInput";
import { useNotificationHook } from "../../hooks/notification-hook";
import { validateSaveListForm } from "../../utils/form-validation";
import { useHttpClient } from "../../hooks/http-hook";
import { useRoutingHook } from "../../hooks/routing-hook";
import { useBuilderHook } from "../../hooks/builder-hook";
import { useNavigate } from "react-router";
import { VALIDATOR_REQUIRE } from "../../utils/validators";

import { TextArea } from "../FormComponent/TextArea/TextArea";
import styles from './SavedListForm.module.css';

export const SaveListForm = () => {

    const { setIsModal, isModal } = useNotificationHook();
    const { setIsRoutingState } = useRoutingHook();
    const { sendRequest } = useHttpClient();
    const {isAuthenticated, authUserId} = useAuth();
    const { productsInList } = useBuilderHook();

    // const productsInListByTitle = productsInList?.map(product => ({ title: product.title }));
    
    // console.log('Products with titles only:', productsInListByTitle);
    const redirect = useNavigate();


    const [formState, inputHandler, setFormData, resetForm] = useForm({
        listName: { value: '', isValid: false },
        listNotes: { value: '', isValid: true }
    }, false);


    const handleHomeModalClick = () => {
        setIsModal(prevState => ({ ...prevState, show: false }))
        redirect('/hapg/')
    }
    const handleCloseModalClick = () => {
        setIsModal(prevState => ({ ...prevState, show: false }))
        console.log('clicked')
    }


    const handleErrorModalClose = () => {
        setIsModal(prevState => ({ ...prevState, modalType: 'infoModal', show: false }))
        setIsModal(prevState => ({
            ...prevState,
            modalType: 'saveListModal',
            show: true,
            message: "Give your list a name and add notes you can refer back to.",

        }))
    }
    const handleSaveFormModalClose = () => {

        setIsModal(prevState => ({ ...prevState, modalType: 'saveListModal', show: false }))
        setIsModal(prevState => ({ ...prevState, modalType: 'infoModal', show: false }))
    }

    const submitForm = async (e) => {
        e.preventDefault();


        const errorMessage = validateSaveListForm(formState)
        if (errorMessage.length !== 0) {

            setIsModal(prevState => ({
                ...prevState,
                show: true,
                modalType: 'infoModal',
                title: "Almost there",
                message: "You need to fix the following errors to continue.",
                errorList: errorMessage,
                onConfirm: handleErrorModalClose,
                onCancel: handleErrorModalClose,
                confirmText: "Close",
                cancelText: "Go back",

            }));
        } else {

            const data = {
                list: productsInList,
                listName: formState.inputs.listName.value,
                listNotes: formState.inputs.listNotes.value
            }


            try {
                const response = await sendRequest(
                    `http://localhost:3005/save-list/${authUserId}`,
                    'POST',
                    JSON.stringify(data), {
                    'Content-Type': 'application/json',
                }
                    // formData
                )
                if (response.message === 'New user added.') {
                    setIsRoutingState(prevState => ({ ...prevState, isLoading: false }));

                    setIsModal(prevState => ({
                        ...prevState,
                        show: true,
                        modalType: 'successModal',
                        title: "Success",
                        message: "Your sign up request has been sent! Once approved, you should receive an approval confirmation from us. In the meantime, explore our Home Appliance Product Guide.",
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
                id="listName"
                name="listName"
                labelName="List name"
                // secondaryLabel='Optional'
                errorText='List name required'
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}

            />
            <TextArea
                id="listNotes"
                name="listNotes"
                labelName="List notes"
                validators={[]}
                onInput={inputHandler}
                rows={10}
            />
            <div className={styles.buttonsWrapper}>
                <Button type='button' onClick={submitForm} buttonStyleType="primaryAction">Sumbit </Button>
                <Button type='button' onClick={handleSaveFormModalClose} buttonStyleType="secondary">Go back</Button>
            </div>




        </FormComponent>
    )
}