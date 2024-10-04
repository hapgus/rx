
import { PortalPageHeader, PortalPageBody, PortalPageWrapper } from '../../components/PortalComponent/PortalPageComponent/PortalPageComponents';

import { useReducer } from 'react';
import styles from './portal.module.css'
import { DynamicTextInput } from '../../components/FormComponent/TextInput/DynamicTextInput';
import { PageText } from '../../components/Text/Text';
import { Button } from '../../components/Button/Button';
import { StaticImageUpload } from '../../components/FormComponent/ImageUpload/StaticImageUpload';
import { CountBubble } from '../../components/CountBubble/CountBubble';

const sectionReducer = (state, action) => {

    switch (action.type) {
        case 'INITIALIZE_SECTIONS':
            return action.sections || [];
        case "ADD_SECTION":
            return [
                ...state,
                {
                    id: state.length,
                    resourceTitle: '',
                    resourceUrl: '',
                    resourceQrCodeImage: []
                }
            ];
        case "REMOVE_SECTION":
            return state.filter((_, index) =>
                index !== action.index
            );
        case "UPDATE_TITLE":
            return state.map((section, index) =>
                index === action.index ? { ...section, resourceTitle: action.value } : section
            );
        case 'UPDATE_URL':
            return state.map((section, index) =>
                index === action.index ? { ...section, resourceUrl: action.value } : section
            );
        case 'ADD_IMAGE':
            return state.map((section, index) =>
                index === action.index
                    ? {
                        ...section,
                        resourceQrCodeImage: action.files.length > 0 ? [{ file: action.files[0], previewUrl: URL.createObjectURL(action.files[0]) }] : section.resourceQrCodeImage
                    }
                    : section
            );
        default:
            return state;
    }
};




const PortalDashboardPage = () => {

    const [sections, dispatch] = useReducer(sectionReducer, []);

    const handleAddSection = () => {
        dispatch({ type: 'ADD_SECTION' });
    };

    const handleRemoveSection = (index) => {
        dispatch({ type: 'REMOVE_SECTION', index });
    };

    const handleTitleChange = (index, value) => {
        dispatch({ type: 'UPDATE_TITLE', index, value });
    };

    const handleUrlChange = (index, value) => {
        dispatch({ type: 'UPDATE_URL', index, value });
    };

    const addImageUpload = (index, files) => {
        if (!files || files.length === 0) {
            return;
        }
        dispatch({ type: 'ADD_IMAGE', index, files });
    };




    return (

        <PortalPageWrapper
            pageTitle='Welcome your Team Portal Dashboard'
            pageDescription='Manage your product guide'
        >
            <PortalPageBody>
                <div className={styles.mainContainer}>
                    <div className={styles.headerWrapper}>
                        <div className={styles.headerButtonWrapper}>
                            <Button onClick={handleAddSection} buttonStyleType="primary">
                                Add Group
                            </Button>
                        </div>
                        <div className={styles.headerCountWrapper}>
                            <PageText type="pageTertiaryTitle">Groups Added</PageText>
                            <CountBubble itemCount={sections.length} />
                        </div>
                    </div>
                    <div className={styles.bodyWrapper}>
                        {sections.map((section, index) => (
                            <div key={index} className={styles.resourceGroupWrapper}>
                                <div className={styles.groupHeader}>
                                    <div className={styles.groupHeaderTitle}>
                                        <PageText type="pageSubtitle">Resource Group {`${index + 1}`}</PageText>
                                    </div>
                                </div>
                                <div className={styles.groupFormElementsWrapper}>
                                    <div className={styles.formElementsInputs}>
                                        <DynamicTextInput
                                            id={`resourceTitle-${index}`}
                                            name={`resourceTitle-${index}`}
                                            labelName="Resource Title"
                                            value={section.resourceTitle}
                                            onChange={(e) => handleTitleChange(index, e.target.value)}
                                        />
                                        <DynamicTextInput
                                            id={`resourceUrl-${index}`}
                                            name={`resourceUrl-${index}`}
                                            labelName="Resource Url"
                                            value={section.resourceUrl}
                                            type="textinput"
                                            onChange={(e) => handleUrlChange(index, e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.formElementsUploader}>
                                        <StaticImageUpload
                                            previewUrl={section.resourceQrCodeImage[0]?.previewUrl}
                                            initialFile={section.resourceQrCodeImage[0]?.file}
                                            handleFileChange={(e) => addImageUpload(index, e.target.files)}
                                        />
                                    </div>
                                </div>
                                <div className={styles.groupFooter}>
                                    <div className={styles.footerButtonWrapper}>
                                        <Button buttonStyleType='secondary' onClick={() => handleRemoveSection(index)}>Remove Group {`${index + 1}`}</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </PortalPageBody>

        </PortalPageWrapper>

    );
}

export default PortalDashboardPage;