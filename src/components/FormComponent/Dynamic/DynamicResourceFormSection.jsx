import { Button } from "../../Button/Button"
import { PageText } from "../../Text/Text"
import { TextInput } from "../TextInput/TextInput"
import styles from './DynamicResourceFormSection.module.css';
import { CountBubble } from "../../CountBubble/CountBubble";
import { StaticImageUpload } from "../ImageUpload/StaticImageUpload";

import { DynamicTextInput } from "../TextInput/DynamicTextInput";

export const DynamicResourceFormSection = ({ sections, onChange }) => {
    const pageSectionTemplate = {
        handleAddSection() {
            const newSection = {
                id: sections.length,
                resourceTitle: '',
                resourceUrl: '',
                resourceQrCodeImage: []
            }
            onChange([...sections, newSection])
        },

        handleRemoveSection(index) {
            const newSections = sections.filter((_, idx) => idx !== index);
            onChange(newSections)
        },

        handleTitleChange(index, id, value, isValid) {
            const updatedSections = sections.map((section, idx) =>
                idx === index ? { ...section, resourceTitle: value } : section);
            onChange(updatedSections);
        },

        handleUrlChange(index, id, value, isValid) {
            const updatedSections = sections.map((section, idx) =>
                idx === index ? { ...section, resourceUrl: value } : section);
            onChange(updatedSections);
        },

        addImageUpload(sectionIndex, files) {
            if (!files || files.length === 0) {
                return;
            }
            const file = files[0]; // Take only the first file

            const newImage = {
                file: file, // Preserve the file object for uploading
                previewUrl: URL.createObjectURL(file) // Create a URL for previewing
            };

            const updatedSections = sections.map((section, idx) => (
                idx === sectionIndex
                    ? { ...section, resourceQrCodeImage: section.resourceQrCodeImage.length > 0 ? [newImage] : [...section.resourceQrCodeImage, newImage] } // Replace existing image or add new one
                    : section
            ));
            onChange(updatedSections);
        }
    };

    return (


        <div className={styles.mainContainer}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerButtonWrapper}>
                    <Button
                        onClick={pageSectionTemplate.handleAddSection}
                        buttonStyleType="primary"
                    >
                        Add Group
                    </Button>
                </div>
                <div className={styles.headerCountWrapper}>
                    <PageText type="pageTertiaryTitle">Groups Added</PageText>
                    <CountBubble itemCount={sections.length} />
                </div>
            </div>
            <div className={styles.bodyWrapper}>
                {
                    sections && sections?.map((section, index) => (
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
                                        labelName={`Resource Title`}
                                        value={section.resourceTitle}
                                        onChange={(e) => pageSectionTemplate.handleTitleChange(index, e.target.value)}

                                    />

                                    <DynamicTextInput
                                        id={`resourceUrl-${index}`}
                                        name={`resourceUrl-${index}`}
                                        labelName={`Resource Url`}
                                        value={section.resourceUrl}
                                        type="textinput"
                                        onChange={(e) => pageSectionTemplate.handleUrlChange(index, e.target.value)}
                                    />

                                </div>
                                <div className={styles.formElementsUploader}>
                                   { section.resourceQrCodeImage &&
                                   <StaticImageUpload
                                            previewUrl={section?.resourceQrCodeImage[0]?.previewUrl} // Use preview URL if available
                                            initialFile={section?.resourceQrCodeImage[0]?.file} // Use initial file if available
                                            handleFileChange={(e) => pageSectionTemplate?.addImageUpload(index, e.target.files)} // Handler for file changes
                                        />
                                   }
                                        
                                

                                </div>
                            </div>


                            <div className={styles.groupFooter}>

                                <div className={styles.footerButtonWrapper}>
                                    <Button buttonStyleType='secondary' onClick={() => pageSectionTemplate.handleRemoveSection(index)} >Remove Group  {`${index + 1}`}</Button>
                                </div>
                            </div>
                        </div>


                    ))

                }
            </div>

        </div>
    )


}