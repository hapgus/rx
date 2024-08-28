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


const UserProfilePage = () => {

    const { setIsModal, isModal } = useNotificationHook();
    const { setIsRoutingState } = useRoutingHook();
    const { sendRequest } = useHttpClient();

const [formState, inputHandler, setFormData, resetForm] = useForm({
    firstName: { value: '', isValid: false },
    lastName: { value: '', isValid: false },
    store: { value: '', isValid: false },
    storeAddress: { value: '', isValid: false },
})


    return (
        <GridSystem gridType='spread'>
            <div>
                <PageText type='pageTitle'>Profile</PageText>
                <PageText type='pageSubtitle'>Your user account</PageText>
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
                    <PageText type='bodyDescription'>Admin</PageText>

                </div>
                <div>

                    <FormElement
                        // secondaryLabel='Optional'
                        type="textinput"
                        id="firsName"
                        // value={values.firstName}
                        // onChange={handleChange}
                        placeholder="Andre"
                        labelName="First name"
                    // feedback={!!errors.firstName}
                    // feedbackType={errors.firstName ? "error" : "success"}
                    // feedbackMessage={errors.firstName || "Looks good"}
                    />
                </div>
                <div>
                    <FormElement
                        // secondaryLabel='Optional'
                        type="textinput"
                        id="lastName"
                        // value={values.firstName}
                        // onChange={handleChange}
                        placeholder="Johnson"
                        labelName="Last name"
                    // feedback={!!errors.firstName}
                    // feedbackType={errors.firstName ? "error" : "success"}
                    // feedbackMessage={errors.firstName || "Looks good"}
                    />
                </div>
                <div>
                    <FormElement
                        // secondaryLabel='Optional'
                        type="textinput"
                        id="store"
                        // value={values.firstName}
                        // onChange={handleChange}
                        placeholder="Suited for Web"
                        labelName="Retailer"
                    // feedback={!!errors.firstName}
                    // feedbackType={errors.firstName ? "error" : "success"}
                    // feedbackMessage={errors.firstName || "Looks good"}
                    />
                </div>
                <div>
                    <FormElement
                        // id="address"
                        // name="address"
                        type="textarea"
                        placeholder="123 Website Lane"
                        // value={values.videos}
                        rows={5}
                        // onChange={handleChange}
                        labelName="Store Address"
                    // feedback={!!errors.videos}
                    // feedbackType={errors.videos ? "error" : "success"}
                    // feedbackMessage={errors.videos || "Looks good"}
                    />
                </div>
            </div>
            <div className={styles.accountInformationWrapper}>
                <div className={styles.sectionTitle}>
                    <PageText type='bodyTertiaryTitle'>Password</PageText>
                </div>
                <div>

                    <FormElement
                        // secondaryLabel='Optional'
                        type="textinput"
                        id="store"
                        // value={values.firstName}
                        // onChange={handleChange}
                        placeholder="***********"
                        labelName="Current password"
                    // feedback={!!errors.firstName}
                    // feedbackType={errors.firstName ? "error" : "success"}
                    // feedbackMessage={errors.firstName || "Looks good"}
                    />

                </div>
                <div>
                    <FormElement
                        // secondaryLabel='Optional'
                        type="textinput"
                        id="store"
                        // value={values.firstName}
                        // onChange={handleChange}
                        placeholder="Enter new password"
                        labelName="New password"
                    // feedback={!!errors.firstName}
                    // feedbackType={errors.firstName ? "error" : "success"}
                    // feedbackMessage={errors.firstName || "Looks good"}
                    />

                </div>
                <div>
                    <FormElement
                        // secondaryLabel='Optional'
                        type="textinput"
                        id="store"
                        // value={values.firstName}
                        // onChange={handleChange}
                        placeholder="Re-type new password"
                        labelName="Re-type new password"
                    // feedback={!!errors.firstName}
                    // feedbackType={errors.firstName ? "error" : "success"}
                    // feedbackMessage={errors.firstName || "Looks good"}
                    />
                    
                </div>
            </div>
            <div className={styles.accountInformationWrapper}>
                <div className={styles.sectionTitle}>
                    <PageText type='bodyTertiaryTitle'>Account status</PageText>
                </div>
                <div>
                    <PageText type='bodyDescription'>Active</PageText>
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