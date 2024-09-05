import { useNavigate } from "react-router";
import { useForm } from "../../../hooks/form-hook";

import { useHttpClient } from "../../../hooks/http-hook";
import { VALIDATOR_REQUIRE } from "../../../utils/validators";
import { TextInput } from "../../FormComponent/TextInput/TextInput";
import { TextArea } from "../../FormComponent/TextArea/TextArea";
import { Select } from "../../FormComponent/Select/Select";
import styles from './PortalForm.module.css'
import { FormComponent } from "../../FormComponent/FormComponent";
import { useRoutingHook } from "../../../hooks/routing-hook";
import { Button } from "../../Button/Button";
import { appendFormDataWithLineBreak } from "../../../utils/form-helpers";
import { validateProductForm, validateDynamicSections } from "../../../utils/form-validation";
import { useState, useEffect } from "react";
import { PageText } from "../../Text/Text";
import { Checkbox } from "../../FormComponent/Checkbox/Checkbox";
// import ImageUpload from "../../FormComponent/ImageUpload/ImageUpload";
// import { DynamicSections } from "../../FormComponent/DynamicSectionsFormElement";
import { useNotificationHook } from "../../../hooks/notification-hook";
import { useProductsHook } from "../../../hooks/product-hook";
import { useAuth } from "../../../hooks/auth-hook";
import { ResourceFormSection } from "../../FormComponent/Dynamic/ResourceFormSection";

import {
    useCategoryOptions,
    useColumnTitles,
    useYearHelper,
    useColorOptions,
    useLogoOptions,
    useCategories
} from "../../../hooks/use-form-helpers-hook";
import { useDynamicForm } from "../../../hooks/use-dynamic-form-hook";
import { NumberInput } from "../../FormComponent/Number/NumberInput";
import { StaticImageUpload } from "../../FormComponent/ImageUpload/StaticImageUpload";
import { DynamicResourceFormSection } from "../../FormComponent/Dynamic/DynamicResourceFormSection";
import { FormSection } from "../../FormComponent/FormSection/FormSection";


export const CreateProductForm = () => {

    const redirect = useNavigate();
    const { sendRequest } = useHttpClient();
    const { setPublicProducts } = useProductsHook();
    const { authUserId } = useAuth();
    const { isModal, setIsModal } = useNotificationHook();
    const { setIsRoutingState } = useRoutingHook();

    const options = useCategoryOptions();
    const columnTitleOptions = useColumnTitles();
    const colorOptions = useColorOptions();
    const techLogoOptions = useLogoOptions();
    const categoryOptions = useCategories();
    const { availabilityOptions } = useYearHelper();

    const [subcategoryOptions, setSubcategoryOptions] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedLogos, setSelectedLogos] = useState([]);
    const [sections, setSections] = useState([]);

    const { handleSectionChange, handleChange, values } = useDynamicForm({ sections: [] });

    const [formState, inputHandler] = useForm({
        msrp: { value: '', isValid: false },
        // image: { value: null, isValid: false },
        // qrcode: { value: null, isValid: false },
        title: { value: '', isValid: false },
        subtitle: { value: '', isValid: false },
        specSheetLink: { value: '', isValid: false },
        category: { value: '', isValid: false },
        subcategory: { value: '', isValid: false },
        stylecategory: { value: '', isValid: false },
        store: { value: '', isValid: false },
        availability: { value: '', isValid: false },
        upc: { value: '', isValid: false },
        videos: { value: '', isValid: false },
        specTitle1: { value: '', isValid: false },
        specTitle2: { value: '', isValid: false },
        specTitle3: { value: '', isValid: false },
        specTitle4: { value: '', isValid: false },
        specList1: { value: '', isValid: false },
        specList2: { value: '', isValid: false },
        specList3: { value: '', isValid: false },
        specList4: { value: '', isValid: false },
    })

    useEffect(() => {
        if (formState.inputs.category.value) {
            setSubcategoryOptions(options[formState.inputs.category.value.toLowerCase()] || []);
        } else {
            setSubcategoryOptions([]);
        }
    }, [formState.inputs.category.value]);



    const handleColourChange = (value, isChecked) => {
        let newSelectedColours;
        if (isChecked) {
            newSelectedColours = [...selectedColors, value];
        } else {
            newSelectedColours = selectedColors.filter(name => name !== value);
        }
        setSelectedColors(newSelectedColours);
    };

    const handleLogoChange = (value, isChecked) => {
        if (isChecked) {
            setSelectedLogos([...selectedLogos, value]);
        } else {
            setSelectedLogos(selectedLogos.filter(name => name !== value));
        }
    };

    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

    const handleImageChange = (file) => {
        setSelectedImage(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const [selectedQrcodeImage, setSelectedQrcodeImage] = useState(null);
    const [previewQrcodeUrl, setPreviewQrcodeUrl] = useState('');

    const handleQrcodeImageChange = (file) => {
        setSelectedQrcodeImage(file);
        setPreviewQrcodeUrl(URL.createObjectURL(file));
    };

    const handleProductDirectoryModalClick = () => {
        setIsModal(prevState => ({ ...prevState, show: false }))
        redirect('/portal/product-directory')
    }


    console.log(values)

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validateProductForm(formState, selectedImage, selectedQrcodeImage)

        // Validate the dynamic sections
        // const formSectionErrors = validateDynamicSections(values.sections);

        // Combine all errors
        const errorMessage = [...formErrors];
        // const errorMessage = [...formErrors, ...formSectionErrors.map(error => `${error.section + 1}: ${error.message}`)];
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
                iconType: 'errorInfo',
                message: "You need to fix the following errors to continue.",
                errorList: errorMessage,
                onConfirm: () => setIsModal({ show: false }),
                onCancel: () => setIsModal({ show: false }),
                confirmText: "Close",
                cancelText: "Go back",

            }));
        } else {
            const formData = new FormData();
            // formData.append('image', formState.inputs.image.value)
            formData.append('image', selectedImage)
            formData.append('qrcode', selectedQrcodeImage)

            // formData.append('qrcode', formState.inputs.qrcode.value)
            formData.append('title', formState.inputs.title.value)
            formData.append('msrp', formState.inputs.msrp.value)
            formData.append('subtitle', formState.inputs.subtitle.value)
            formData.append('specSheetLink', formState.inputs.specSheetLink.value)
            formData.append('category', formState.inputs.category.value)
            formData.append('subcategory', formState.inputs.subcategory.value)
            formData.append('stylecategory', formState.inputs.stylecategory.value)
            formData.append('store', formState.inputs.store.value)
            formData.append('availability', formState.inputs.availability.value)

            appendFormDataWithLineBreak(formData, 'upc', formState.inputs.upc.value);
            appendFormDataWithLineBreak(formData, 'videos', formState.inputs.videos.value);

            formData.append('specTitle1', formState.inputs.specTitle1.value)
            formData.append('specTitle2', formState.inputs.specTitle2.value)
            formData.append('specTitle3', formState.inputs.specTitle3.value)
            formData.append('specTitle4', formState.inputs.specTitle4.value)
            appendFormDataWithLineBreak(formData, 'specList1', formState.inputs.specList1.value);
            appendFormDataWithLineBreak(formData, 'specList2', formState.inputs.specList2.value);
            appendFormDataWithLineBreak(formData, 'specList3', formState.inputs.specList3.value);
            appendFormDataWithLineBreak(formData, 'specList4', formState.inputs.specList4.value);

            // Object.keys(values).forEach(key => {
            //     if (key !== 'sections') {
            //         formData.append(key, values[key]);
            //     }
            // });

            // values.sections.forEach((section, index) => {
            //     formData.append(`sections[${index}][resourceTitle]`, section.resourceTitle);
            //     formData.append(`sections[${index}][resourceUrl]`, section.resourceUrl);
            //     if (section.resourceQrCodeImage.length > 0) {
            //         formData.append(`sections[${index}][resourceQrCodeImage]`, section.resourceQrCodeImage[0].file);
            //     }
            // });
            sections.forEach((section, index) => {
                formData.append(`sections[${index}][resourceTitle]`, section.resourceTitle);
                formData.append(`sections[${index}][resourceUrl]`, section.resourceUrl);
                if (section.resourceQrCodeImage instanceof File) {
                    formData.append(`sections[${index}][resourceQrCodeImage]`, section.resourceQrCodeImage);
                }
                // Check if resourceQrCodeImage is a valid string and not null or empty
                // if (section.resourceQrCodeImage) {
                //     formData.append(`sections[${index}][resourceQrCodeImage]`, section.resourceQrCodeImage);
                // }
                // if (section.resourceQrCodeImage.length > 0) {
                //     formData.append(`sections[${index}][resourceQrCodeImage]`, section.resourceQrCodeImage[0].file);
                // }
            });
            for (const logo of selectedLogos) {
                formData.append('logos', logo);
            }
            for (const color of selectedColors) {
                formData.append('colors', color);
            }
            formData.append('creator', authUserId);


            try {
                const response = await sendRequest(`http://localhost:3005/add-product`,
                    // const response = await sendRequest(` ${process.env.REACT_APP_BACKEND_URL}add-product`,
                    'POST',
                    formData
                )
                console.log(response)
                if (response.responseStatusCode === 201) {
                    // setPublicProducts(prevProducts => [
                    //     ...prevProducts,
                    //     response.responseData.product
                    // ]);

                    setIsRoutingState(prevState => ({ ...prevState, isLoading: false }));
                    // setPublicProducts(prevProducts => [
                    //     ...prevProducts, // Spread the existing products
                    //     response.responseData.product // Append the new product
                    // ]);
                    setIsModal(prevState => ({
                        ...prevState,
                        show: true,
                        modalType: 'successModal',
                        title: "Success",
                        message: "Congrats! The product was added successfully.",
                        errorList: errorMessage,
                        onConfirm: () => setIsModal({ show: false }),
                        onCancel: handleProductDirectoryModalClick,
                        confirmText: "Close",
                        cancelText: "Go to product directory",

                    }));

                    // THIS MIGHT NOT BE NEEDED
                    setTimeout(() => {
                        // alert('Product updated successfully');
                    }, 100);
                }
            } catch (err) {

                console.log(err, 'error catch')
                setIsModal(prevState => ({
                    ...prevState,
                    show: true,
                    modalType: 'infoModal',
                    iconType: 'errorInfo',
                    // title: "Almost there",
                    // message: "You need to fix the following errors to continue.",
                    // errorList: errorMessage,
                    onConfirm: () => setIsModal({ show: false }),
                    onCancel: () => setIsModal({ show: false }),
                    confirmText: "Close",
                    cancelText: "Go back",

                }));
            }
            console.log('is modal', isModal)

        }

    }
    return (
        // <FormComponent onSubmit={handleFormSubmit}>
        <FormComponent>
            {/* MSRP + RETAILER + AVAILABILITY */}
            <FormSection
                sectionTitle="MSRP retailer and availability"
                sectionDescription="Pick retailer"
            >
                <NumberInput
                    id="msrp"
                    name="msrp"
                    validators={[]}
                    value={values.msrp}
                    onInput={inputHandler}
                    labelName="MSRP"
                />
                <Select
                    id='store'
                    name="store"
                    labelName="Retailer"
                    // errorText='Please select a retailer'
                    validators={[]}
                    onInput={inputHandler}
                    options={[
                        { value: "LG US", label: "LG Generic" },
                        { value: "hd", label: "Home Depot" }
                    ]}
                />
                <Select
                    id='availability'
                    name="availability"
                    labelName="Availability"
                    // errorText='Please select a retailer'
                    validators={[]}
                    onInput={inputHandler}
                    options={availabilityOptions}
                />

            </FormSection>
            {/* TITLE + SUBTITLE */}
            <FormSection
                sectionTitle="Model name/title and subtitles"
                sectionDescription="Add model name and subtitle"
            >
                <TextInput
                    id="title"
                    name="title"
                    labelName="Model title"
                    secondaryLabel='Special characters allowed ( / \ - _ )'
                    errorText='Model title required'
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}

                />
                <TextInput
                    id="subtitle"
                    name="subtitle"
                    labelName="Sub-title"
                    //  secondaryLabel='e.g. MXY8Z'
                    errorText=' Subtitle required'
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                />

            </FormSection>
            {/* CATEGORY + SUB CATEGORY + STYLE CATEGORY */}
            <FormSection
                sectionTitle="Category"
                sectionDescription="Pick category"
            >
                <Select
                    id='category'
                    name="category"
                    labelName="Category"
                    onInput={inputHandler}
                    validators={[]}

                    options={categoryOptions}
                />
                {formState.inputs.category.value && (
                    <FormSection
                        sectionTitle="Subcategory and style category"
                        sectionDescription="Subcategory and style category"
                    >
                        <Select
                            id='subcategory'
                            name="subcategory"
                            labelName="Subcategory"
                            onInput={inputHandler}
                            validators={[]}
                            options={subcategoryOptions}
                        />
                        <TextInput
                            id="stylecategory"
                            name="stylecategory"
                            labelName="Style category"
                            secondaryLabel='Example, Front Load Washer'
                            // errorText=' Style category error'
                            noTouchValidation={true}
                            validators={[]}
                            onInput={inputHandler}
                        />
                    </FormSection>
                )}
            </FormSection>
            {/* VIDEOS */}
            <FormSection
                sectionTitle="Youtube videos"
                sectionDescription="Add feature videos"
            >
                <TextArea
                    id="videos"
                    name="videos"
                    type="textarea"
                    rows={10}
                    onInput={inputHandler}
                    validators={[]}
                    labelName="Youtube videos"
                    secondaryLabel='Optional'
                    noTouchValidation={true}
                />
            </FormSection>
            {/* SPECIFICATIONS*/}
            <FormSection
                sectionTitle="Specifications"
                sectionDescription="Add specifcation details"
            >
                <Select
                    id="specTitle1"
                    name="specTitle1"
                    labelName="Column one title"
                    // errorText='Please select a retailer'
                    validators={[]}
                    onInput={inputHandler}
                    options={columnTitleOptions}
                />
                <TextArea
                    id="specList1"
                    name="specList1"
                    type="textarea"
                    rows={10}
                    onInput={inputHandler}
                    validators={[]}
                    labelName="List One"
                    noTouchValidation={true}
                />
                <Select
                    id="specTitle2"
                    name="specTitle2"
                    labelName="Column two title"
                    // errorText='Please select a retailer'
                    validators={[]}
                    onInput={inputHandler}
                    options={columnTitleOptions}
                />
                <TextArea
                    id="specList2"
                    name="specList2"
                    type="textarea"
                    rows={10}
                    onInput={inputHandler}
                    validators={[]}
                    labelName="List Two"
                    noTouchValidation={true}
                />
                <Select
                    id="specTitle3"
                    name="specTitle3"
                    labelName="Column three title"
                    // errorText='Please select a retailer'
                    validators={[]}
                    onInput={inputHandler}
                    options={columnTitleOptions}
                />
                <TextArea
                    id="specList3"
                    name="specList3"
                    type="textarea"
                    rows={10}
                    onInput={inputHandler}
                    validators={[]}
                    labelName="List Three"
                    noTouchValidation={true}
                />
                <Select
                    id="specTitle4"
                    name="specTitle4"
                    labelName="Column four title"
                    // errorText='Please select a retailer'
                    validators={[]}
                    onInput={inputHandler}
                    options={columnTitleOptions}
                />
                <TextArea
                    id="specList4"
                    name="specList4"
                    type="textarea"
                    rows={10}
                    onInput={inputHandler}
                    validators={[]}
                    labelName="List Four"
                    noTouchValidation={true}
                />

            </FormSection>
            {/* COLORS*/}
            <FormSection
                sectionTitle="Color Section"
                sectionDescription="Pick colors"
            >
                {colorOptions.map((e, index) => (
                    <Checkbox
                        key={index}
                        id={e.color}
                        labelName={e.color}
                        value={e.color}
                        onChange={handleColourChange}
                        checked={selectedColors.includes(e.color)}
                    />
                ))}
            </FormSection>
            {/* LOGOS*/}
            <FormSection
                sectionTitle="Technology logos"
                sectionDescription="Pick retailer"
            >
                {techLogoOptions.map((e, index) => (
                    <Checkbox
                        key={index}
                        id={e.logo}
                        labelName={e.logo}
                        value={e.logo}
                        onChange={handleLogoChange}
                        checked={selectedLogos.includes(e.logo)}
                    />
                ))}
            </FormSection>
            {/* UPC CODES*/}
            <FormSection
                sectionTitle="UPC Codes"
                sectionDescription="Pick retailer"
            >
                <TextArea
                    id="upc"
                    name="upc"
                    type="textarea"
                    rows={10}
                    onInput={inputHandler}
                    validators={[]}
                    labelName="UPC Code"
                    noTouchValidation={true}
                />
            </FormSection>
            {/* IMAGE UPLOAD*/}
            <FormSection
                sectionTitle="Upload Product Image"
                sectionDescription="Add product image files"
            >
                <StaticImageUpload
                    iconType='imageFile'
                    itemName='Image'
                    previewUrl={previewUrl}
                    selectedFile={selectedImage}
                    handleFileChange={(e) => handleImageChange(e.target.files[0])}

                />
            </FormSection>
            {/* QR CODE SPEC IMAGE UPLOAD + SPEC LINK*/}
            <FormSection
                sectionTitle="Upload Spec Sheet Qrcode Image and link"
                sectionDescription="Add product image files"
            >
                <StaticImageUpload
                    iconType='qrCode'
                    itemName='Qrcode'
                    previewUrl={previewQrcodeUrl}
                    selectedFile={selectedQrcodeImage}
                    handleFileChange={(e) => handleQrcodeImageChange(e.target.files[0])}

                />
                <TextInput
                    id="specSheetLink"
                    name="specSheetLink"
                    labelName="Specification Sheet Link"
                    //  secondaryLabel='e.g. MXY8Z'
                    // errorText=' Subtitle required'
                    validators={[]}
                    onInput={inputHandler}
                />
            </FormSection>
            {/* DYNAMIC SECTIONS*/}
            <ResourceFormSection initialSections={[]} onSectionsChange={setSections} />

            <div className={styles.formButtonWrapper}>
                <Button onClick={handleFormSubmit} type="button" buttonStyleType="primaryAction">
                    Add product
                </Button>
            </div>
            {/* <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">Category</PageText>
                    <PageText type="pageTertiaryTitle">Pick category</PageText>
                </div>
                <div className={styles.sectionContent}>
                    <Select
                        id='category'
                        name="category"
                        labelName="Category"
                        onInput={inputHandler}
                        validators={[]}

                        options={categoryOptions}
                    />
                    {formState.inputs.category.value && (

                        <div>
                            <div className={styles.sectionHeader}>
                                <PageText type="pageTitle">Subcategory and style category</PageText>
                                <PageText type="pageTertiaryTitle">Subcategory and style category</PageText>

                            </div>
                            <div className={styles.dualRow}>
                                <Select


                                    id='subcategory'
                                    name="subcategory"
                                    labelName="Subcategory"
                                    onInput={inputHandler}
                                    validators={[]}
                                    options={subcategoryOptions}
                                />
                                <TextInput
                                    id="stylecategory"
                                    name="stylecategory"
                                    labelName="Style category"
                                    secondaryLabel='Example, Front Load Washer'
                                    // errorText=' Style category error'
                                    noTouchValidation={true}
                                    validators={[]}
                                    onInput={inputHandler}
                                />
                            </div>
                        </div>

                    )}
                </div>
            </section> */}
            {/* <section className={styles.section}>
              
                <div className={styles.sectionContent}>

                   
                    <StaticImageUpload
                        iconType='qrCode'
                        itemName='Qrcode'
                        previewUrl={previewQrcodeUrl}
                        selectedFile={selectedQrcodeImage}
                        handleFileChange={(e) => handleQrcodeImageChange(e.target.files[0])}

                    />
                </div>
            </section> */}
            {/* <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">Resource Links</PageText>
                    <PageText type="pageTertiaryTitle">Build links to external resources</PageText>
                </div>
                <ResourceFormSection initialSections={[]} onSectionsChange={setSections} />
               
            </section> */}
        </FormComponent>
    )
}