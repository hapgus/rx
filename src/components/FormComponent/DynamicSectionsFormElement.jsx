import { FormElement } from "./FormElement";

export const DynamicSections = ({ sections, onChange }) => {

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


        handleTitleChange(index, value) {
            const updatedSections = sections.map((section, idx) => 
                idx === index ? { ...section, resourceTitle: value } : section);
            onChange(updatedSections);
        },
        handleUrlChange(index, value) {
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
        <div>
            <button
                type='button'
                onClick={pageSectionTemplate.handleAddSection}>
                Add Section
            </button>

            {
                sections ? sections.map((section, index) => (
                    <div key={index}>
                        <h1>Resource Group Section {`${index + 1}`} </h1>
                        <section>
                            <FormElement
                                id={`resourceTitle-${index}`}
                                name={`resourceTitle-${index}`}
                                labelName={`Resource Title`}
                                value={section.resourceTitle}
                                type="textinput"
                                onChange={(e) => pageSectionTemplate.handleTitleChange(index, e.target.value)}

                            />
                            <FormElement
                                id={`resourceUrl-${index}`}
                                name={`resourceUrl-${index}`}
                                labelName={`Resource URL`}
                                value={section.resourceUrl}
                                type="textinput"
                                onChange={(e) => pageSectionTemplate.handleUrlChange(index, e.target.value)}

                            />
                            <div >
                                {section.resourceQrCodeImage.length > 0 && (
                                    <div>
                                        <img
                                            src={section.resourceQrCodeImage[0].previewUrl}
                                            alt="Preview"
                                            style={{ width: "100px", height: "auto" }}
                                        />
                                    </div>
                                )}
                                <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => pageSectionTemplate.addImageUpload(index, e.target.files)}
                            />
                                
                            </div>
                            <button type='button' onClick={() => pageSectionTemplate.handleRemoveSection(index)}>
                                Remove Resource Section {`${index + 1}`}
                            </button>
                        </section>

                    </div>

                )) :
                    null
            }


        </div>
    )

}

