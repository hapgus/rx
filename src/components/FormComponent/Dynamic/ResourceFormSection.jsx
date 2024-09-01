import { useReducer, useEffect } from 'react';
import styles from './DynamicResourceFormSection.module.css';
import { DynamicTextInput } from '../TextInput/DynamicTextInput';
import { PageText } from '../../Text/Text';
import { Button } from '../../Button/Button';
import { StaticImageUpload } from '../ImageUpload/StaticImageUpload';
import { CountBubble } from '../../CountBubble/CountBubble';

const sectionReducer = (state, action) => {
    console.log(state,action)
    switch (action.type) {
        case 'INITIALIZE_SECTIONS':
            return action.sections.map(section => ({
                ...section,
                resourceQrCodeImage: section.resourceQrCodeImage || ''  // Ensure it's an array
            })) || [];

        case "ADD_SECTION":

            return [
                ...state,
                {
                    id: state.length,
                    resourceTitle: '',
                    resourceUrl: '',
                    resourceQrCodeImage: ''
                }
            ];
        case "REMOVE_SECTION":
            return state.filter((_, index) =>
                index !== action.index);

        case "UPDATE_TITLE":
            return state.map((section, index) =>
                index === action.index ? { ...section, resourceTitle: action.value } : section
            );
        case 'UPDATE_URL':
            return state.map((section, index) =>
                index === action.index ? { ...section, resourceUrl: action.value } : section
            );
        case 'ADD_IMAGE':
            // Update the image URL of a specific section.
            return state.map((section, index) =>
                index === action.index
                    ? {
                        ...section,
                        resourceQrCodeImage: action.file || section.resourceQrCodeImage
                        // resourceQrCodeImage: action.file ? action.file : section.resourceQrCodeImage
                        // resourceQrCodeImage: action.file || section.resourceQrCodeImage
                        // resourceQrCodeImage: action.file ? action.file : section.resourceQrCodeImage
                        // resourceQrCodeImage: action.file
                       
                    }
                    : section
            );

        default:
            return state;
    }
};

export const ResourceFormSection = ({ initialSections = [], onSectionsChange }) => {

 
    const [sections, dispatch] = useReducer(sectionReducer, initialSections);
    useEffect(() => {
        if (initialSections.length > 0) {
            const mappedSections = initialSections.map(section => ({
                ...section,
                resourceQrCodeImage: section.resourceQrCodeImage || ''  // Ensure it is a string or File
            }));
            dispatch({ type: 'INITIALIZE_SECTIONS', sections: mappedSections });
        }
    }, [initialSections]);
   console.log('resource form',initialSections)
    // useEffect(() => {
    //     if (initialSections.length > 0) {
    //         dispatch({ type: 'INITIALIZE_SECTIONS', sections: initialSections });
    //     }
    // }, [initialSections]);
    // useEffect(() => {
    //     if (initialSections.length > 0) {
    //         // Map each section to ensure resourceQrCodeImage is an array
    //         const mappedSections = initialSections.map(section => ({
    //             ...section,
    //             resourceQrCodeImage: section.resourceQrCodeImage || ''  // Ensure it's an array
    //         }));
    //         dispatch({ type: 'INITIALIZE_SECTIONS', sections: mappedSections });
    //     }
    // }, [initialSections]);

    useEffect(() => {
        if (onSectionsChange) {
            onSectionsChange(sections);
        }
    }, [sections, onSectionsChange]);

    const handleAddSection = () => dispatch({ type: 'ADD_SECTION' });

    const handleRemoveSection = (index) => dispatch({ type: 'REMOVE_SECTION', index });

    const handleTitleChange = (index, value) => dispatch({ type: 'UPDATE_TITLE', index, value });

    const handleUrlChange = (index, value) => dispatch({ type: 'UPDATE_URL', index, value });

    const handleImageUpload = (index, files) => {
        console.log('id',index, files)
        if (!files || files.length === 0) {
            return;
        }
        const file = files[0];
        dispatch({ type: 'ADD_IMAGE', index, file });
    };
    // const handleImageUpload = (index, files) => {
    //     console.log(files[0])
    //     if (!files || files.length === 0) return;
    //     const file = files[0];
    //     dispatch({ type: 'ADD_IMAGE', index, file });
    // };
    // const addImageUpload = (index, files) => {
    //     if (!files || files.length === 0) return;
    //     dispatch({ type: 'ADD_IMAGE', index, files });
    // };
    console.log(sections)
    return (
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
                                 previewUrl={
                                    typeof section.resourceQrCodeImage === 'string'
                                        ? section.resourceQrCodeImage
                                        : URL.createObjectURL(section.resourceQrCodeImage)
                                }
                                handleFileChange={(e) => handleImageUpload(index, e.target.files)}
                                    // previewUrl={section.resourceQrCodeImage instanceof File
                                    //     ? URL.createObjectURL(section.resourceQrCodeImage) 
                                    //     : section.resourceQrCodeImage
                                    // }
                                    // handleFileChange={(e) => handleImageUpload(index, e.target.files)}
                                />
                                {/* <StaticImageUpload
                                    previewUrl={section.resourceQrCodeImage || ''}  // Use string directly
                                    handleFileChange={(e) => handleImageUpload(index, e.target.files)}
                                /> */}
                                {/* <StaticImageUpload
                                    previewUrl={section.resourceQrCodeImage[0]?.previewUrl || ''}  // Access previewUrl correctly
                                    initialFile={section.resourceQrCodeImage[0]?.file || null}     // Access file correctly
                                    handleFileChange={(e) => addImageUpload(index, e.target.files)}
                                /> */}
                                {/* <StaticImageUpload
                                    previewUrl={section.resourceQrCodeImage?.[0]?.previewUrl || ''}
                                    initialFile={section.resourceQrCodeImage?.[0]?.file || null}
                                    handleFileChange={(e) => addImageUpload(index, e.target.files)}
                                /> */}
                            </div>
                        </div>
                        <div className={styles.groupFooter}>
                            <div className={styles.footerButtonWrapper}>
                                <Button buttonStyleType='secondary' onClick={() => handleRemoveSection(index)}>
                                    Remove Group {`${index + 1}`}
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
