import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { PageText } from "../../../Text/Text";
import styles from "../PortalForm.module.css";
import { Button } from "../../../Button/Button";

import { useAuth } from "../../../../hooks/auth-hook";
import { useForm } from "../../../../hooks/form-hook";

import { useHttpClient } from "../../../../hooks/http-hook";

import { Select } from "../../../FormComponent/Select/Select";

import { useProductsHook } from "../../../../hooks/product-hook";

import { useRoutingHook } from "../../../../hooks/routing-hook";

import { VALIDATOR_REQUIRE } from "../../../../utils/validators";
import { TextArea } from "../../../FormComponent/TextArea/TextArea";
import { Checkbox } from "../../../FormComponent/Checkbox/Checkbox";
import { FormComponent } from "../../../FormComponent/FormComponent";

import { TextInput } from "../../../FormComponent/TextInput/TextInput";
import { NumberInput } from "../../../FormComponent/Number/NumberInput";
import { validateProductForm } from "../../../../utils/form-validation";
import { useDynamicForm } from "../../../../hooks/use-dynamic-form-hook";
import { useNotificationHook } from "../../../../hooks/notification-hook";
import { capitalizeFirstLetterEachWord } from "../../../../utils/text-help";
import { FormWrapper } from "../../../FormComponent/FormWrapper/FormWrapper";
import { FormSection } from "../../../FormComponent/FormSection/FormSection";
import { useDataContext } from "../../../../hooks/data-hook";
import { appendFormDataWithLineBreak } from "../../../../utils/form-helpers";
import { ResourceFormSection } from "../../../FormComponent/Dynamic/ResourceFormSection";
import { StaticImageUpload } from "../../../FormComponent/ImageUpload/StaticImageUpload";

import { useCategories, useCategoryOptions, useColorOptions, useLogoOptions, useColumnTitles, useYearHelper } from "../../../../hooks/use-form-helpers-hook";


export const CreateProductForm = () => {

    const redirect = useNavigate();
    const { authUserId, isAdmin, isSuperAdmin } = useAuth();

    const options = useCategoryOptions();
    const colorOptions = useColorOptions();
    const { sendRequest } = useHttpClient();
    const categoryOptions = useCategories();
    const techLogoOptions = useLogoOptions();
    const { fetchProducts } = useProductsHook();
    const columnTitleOptions = useColumnTitles();
    const [sections, setSections] = useState([]);
    const { setIsRoutingState } = useRoutingHook();

    const { availabilityOptions } = useYearHelper();
    const { setIsModal } = useNotificationHook();
    const [selectedLogos, setSelectedLogos] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [subcategoryOptions, setSubcategoryOptions] = useState([]);
    const { setIsManagedDataState } = useDataContext();
    const { values } = useDynamicForm({ sections: [] });


    const [formState, inputHandler] = useForm({
        msrp: { value: 0, isValid: false },
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

    /* --------------------------------------------------------------------------------------- */
    /* SET SUBCATEGORY OPTIONS */
    /* --------------------------------------------------------------------------------------- */
    useEffect(() => {
        if (formState.inputs.category.value) {
            setSubcategoryOptions(options[formState.inputs.category.value.toLowerCase()] || []);
        } else {
            setSubcategoryOptions([]);
        }
    }, [formState.inputs.category.value]);


    /* --------------------------------------------------------------------------------------- */
    /* HANDLE COLOUR CHANGE */
    /* --------------------------------------------------------------------------------------- */
    const handleColourChange = (value, isChecked) => {
        let newSelectedColours;
        if (isChecked) {
            newSelectedColours = [...selectedColors, value];
        } else {
            newSelectedColours = selectedColors.filter(name => name !== value);
        }
        setSelectedColors(newSelectedColours);
    };

    /* --------------------------------------------------------------------------------------- */
    /* HANDLE LOGO CHANGE */
    /* --------------------------------------------------------------------------------------- */
    const handleLogoChange = (value, isChecked) => {
        if (isChecked) {
            setSelectedLogos([...selectedLogos, value]);
        } else {
            setSelectedLogos(selectedLogos.filter(name => name !== value));
        }
    };

    /* --------------------------------------------------------------------------------------- */
    /* HANDLE IMAGE AND PREVIEW*/
    /* --------------------------------------------------------------------------------------- */
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

    const handleImageChange = (file) => {
        setSelectedImage(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    /* --------------------------------------------------------------------------------------- */
    /* HANDLE QR CODE IMAGE AND PREVIEW*/
    /* --------------------------------------------------------------------------------------- */
    const [selectedQrcodeImage, setSelectedQrcodeImage] = useState(null);
    const [previewQrcodeUrl, setPreviewQrcodeUrl] = useState('');

    const handleQrcodeImageChange = (file) => {
        setSelectedQrcodeImage(file);
        setPreviewQrcodeUrl(URL.createObjectURL(file));
    };

    /* --------------------------------------------------------------------------------------- */
    /* HANDLE POST SUBMIT REDIRECTS*/
    /* --------------------------------------------------------------------------------------- */
    const handleProductDirectoryModalClick = () => {
        fetchProducts();
        setIsModal(prevState => ({ ...prevState, show: false }))
        redirect('/portal/product-directory')
    }

    /* --------------------------------------------------------------------------------------- */
    /* HANDLE FORM SUBMIT*/
    /* --------------------------------------------------------------------------------------- */


    const handleFormPreSubmit = async (e) => {

        e.preventDefault();
        if (!isAdmin || !isSuperAdmin) {

            setIsModal({
                show: true,
                modalType: 'confirmationModal',
                title: "Error",
                message: `Please contact an administrator.`,
                cancelText: "Close",
                onCancel: () => setIsModal({ show: false }),
            })
        } else {

            setIsModal({
                show: true,
                modalType: 'productConfirmationModal',
                title: "Confirmation Required",
                message: `You are about to create a new product. This product will be featured on the public website. Please confirm if you wish to continue.`,
                confirmText: 'Create new product',
                onConfirm: () => { handleFormSubmit(); },
                cancelText: "Go back",
                onCancel: () => setIsModal({ show: false }),
            })

        }
    }

    const handleFormSubmit = async (e) => {


        console.log('fire a')
        // const formErrors = validateProductForm(formState, selectedImage, selectedQrcodeImage)

        const { errorMessage, processedValues } = validateProductForm(formState, selectedImage, selectedQrcodeImage)
        // const errorMessages = [...formErrors];
        const errorMessages = [...errorMessage];
        console.log(errorMessage)
        if (errorMessages.length !== 0) {

            setIsModal({
                show: true,
                modalType: 'errorModal',
                title: "Almost there",
                iconType: 'errorInfo',
                message: "You need to fix the following errors to continue.",
                errorList: errorMessages, // Show all combined errors
                onConfirm: () => setIsModal({ show: false }),
                onCancel: () => setIsModal({ show: false }),
                confirmText: "Close",
                cancelText: "Go back",
            });
            return; // Stop execution if errors are found
        } else {

            const formData = new FormData();
            formData.append('image', selectedImage);
            formData.append('qrcode', selectedQrcodeImage);
            formData.append('msrp', formState.inputs.msrp.value || 0);
            // formData.append('msrp', formState.inputs.msrp.value);
            formData.append('store', formState.inputs.store.value);
            formData.append('title', formState.inputs.title.value);
            formData.append('category', formState.inputs.category.value);
            formData.append('subtitle', formState.inputs.subtitle.value);
            formData.append('specTitle1', formState.inputs.specTitle1.value);
            formData.append('specTitle2', formState.inputs.specTitle2.value);
            formData.append('specTitle3', formState.inputs.specTitle3.value);
            formData.append('specTitle4', formState.inputs.specTitle4.value);
            formData.append('subcategory', formState.inputs.subcategory.value);
            formData.append('availability', formState.inputs.availability.value);
            formData.append('specSheetLink', formState.inputs.specSheetLink.value);
            formData.append('stylecategory', formState.inputs.stylecategory.value);
            appendFormDataWithLineBreak(formData, 'upc', formState.inputs.upc.value);
            appendFormDataWithLineBreak(formData, 'videos', formState.inputs.videos.value);
            appendFormDataWithLineBreak(formData, 'specList1', formState.inputs.specList1.value);
            appendFormDataWithLineBreak(formData, 'specList2', formState.inputs.specList2.value);
            appendFormDataWithLineBreak(formData, 'specList3', formState.inputs.specList3.value);
            appendFormDataWithLineBreak(formData, 'specList4', formState.inputs.specList4.value);


            sections.forEach((section, index) => {
                formData.append(`sections[${index}][resourceTitle]`, section.resourceTitle);
                formData.append(`sections[${index}][resourceUrl]`, section.resourceUrl);
                if (section.resourceQrCodeImage instanceof File) {
                    formData.append(`sections[${index}][resourceQrCodeImage]`, section.resourceQrCodeImage);
                }
            });
            for (const logo of selectedLogos) {
                formData.append('logos', logo);
            }
            for (const color of selectedColors) {
                formData.append('colors', color);
            }
            formData.append('creator', authUserId);

            try {
                setIsManagedDataState(prevState => ({ ...prevState, loading: true }));

                const response = await sendRequest(`http://localhost:3005/add-product`,
                    // const response = await sendRequest(` ${process.env.REACT_APP_BACKEND_URL}add-product`,
                    'POST',
                    formData
                )

                if (response.responseStatusCode === 201) {
                    setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
                    // setPublicProducts(prevProducts => [
                    //     ...prevProducts,
                    //     response.responseData.product
                    // ]);

                    setIsRoutingState(prevState => ({ ...prevState, isLoading: false }));

                    setIsModal({

                        show: true,
                        modalType: 'successModal',
                        title: "Success",
                        message: "Congrats! The product was added successfully.",

                        // onConfirm: () => setIsModal({ show: false }),
                        onCancel: handleProductDirectoryModalClick,
                        // confirmText: "Close",
                        cancelText: "Go to product directory",

                    });

                    // THIS MIGHT NOT BE NEEDED
                    setTimeout(() => {
                        // alert('Product updated successfully');
                    }, 100);
                }
            } catch (err) {
                setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
                console.log(err, 'error catch')
                setIsModal({

                    show: true,
                    modalType: 'infoModal',
                    iconType: 'errorInfo',
                    title: "Something went wrong",
                    message: `${err.message}`,
                    errorList: [],
                    onConfirm: () => setIsModal({ show: false }),
                    onCancel: () => setIsModal({ show: false }),
                    confirmText: "Close",
                    cancelText: "Go back",

                });
            }


        }

    }


    return (
        <FormComponent>
            <FormSection
                sectionTitle="Define your product"
                sectionDescription="Get started by adding the headline text and retailer information."
            >
                <FormWrapper>
                    <TextInput
                        id="title"
                        name="title"
                        labelName="Title"
                        secondaryLabelToolTip='Title must be between 3 and 100 characters. Special characters allowed ( / - _ )'
                        errorText='Product title required'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                    />
                    <TextArea
                        id="subtitle"
                        name="subtitle"
                        labelName="Subtitle"
                        secondaryLabelToolTip='Subtitle min 8 max 300 characters'
                        rows={7}
                        errorText=' Subtitle required'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                    />
                    <Select
                        id='store'
                        name="store"
                        labelName="Retailer"
                        // errorText='Please select a retailer'
                        validators={[]}
                        onInput={inputHandler}
                        options={[
                            // { value: "", label: "Pick retailer", disabled: true },
                            { value: "LG US", label: "LG Exclusive" },
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
                </FormWrapper>
            </FormSection>

            <FormSection
                sectionTitle="Choose a category"
                sectionDescription="When your select a category, the sub category options will appear. The style category field is optional. A category and subcategory is required to complete this step. "
            >
                <FormWrapper>
                    <Select
                        id='category'
                        name="category"
                        labelName="Category"
                        secondaryLabelToolTip={"Once a category is selected the sub category and style category fields will appear."}
                        onInput={inputHandler}
                        validators={[]}

                        options={categoryOptions}
                    />
                    {formState.inputs.category.value && (
                        <FormSection
                        // sectionTitle="Subcategory and style category"
                        // sectionDescription="Subcategory and style category"
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
                </FormWrapper>
            </FormSection>

            <FormSection
                sectionTitle="Upload the product image"
                sectionDescription="Add a product image that meets the required criteria"
            >
                <FormWrapper>
                    <StaticImageUpload
                        iconType='imageFile'
                        itemName='Image'
                        previewUrl={previewUrl}
                        selectedFile={selectedImage}
                        handleFileChange={(e) => handleImageChange(e.target.files[0])}

                    />
                </FormWrapper>
            </FormSection>

            <FormSection
                sectionTitle="Add specs a related products to showcase"
                sectionDescription="Select a column title and add a list of relevant specifications. Insert brackets around the title of the accessory you want to feature as a related product. Example. Matching washer (WX8MZ_)"
            >
                <FormWrapper>
                    <Select
                        id="specTitle1"
                        name="specTitle1"
                        labelName="(1) Column title"
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
                        validators={[VALIDATOR_REQUIRE()]}
                        labelName="(1) Column list"
                        // noTouchValidation={true}
                        errorText='Minimum of 1 list item required.'
                    />
                    <Select
                        id="specTitle2"
                        name="specTitle2"
                        labelName="(2) Column title"
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
                        labelName="(2) Column list"
                        noTouchValidation={true}
                    />
                    <Select
                        id="specTitle3"
                        name="specTitle3"
                        labelName="(3) Column title"
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
                        labelName="(3) Column list"
                        noTouchValidation={true}
                    />
                    <Select
                        id="specTitle4"
                        name="specTitle4"
                        labelName="(4) Column title"
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
                        labelName="(4) Column list"
                        noTouchValidation={true}
                    />
                </FormWrapper>
            </FormSection>

            <FormSection
                sectionTitle="Include feature videos"
                sectionDescription="Add a url to showcase feature innovation videos on the product page. Video urls must be in the required formats for YouTube or Vimeo. "
            >
                <FormWrapper>
                    <TextArea
                        id="videos"
                        name="videos"
                        type="textarea"
                        rows={10}
                        onInput={inputHandler}
                        validators={[]}
                        labelName="Youtube videos"
                        secondaryLabelToolTip='Only secure protocol (https) Youtube or Vimeo videos allowed. Example https://www.youtube.com/watch?v=Baj92O7Y6Rs.'
                        noTouchValidation={true}
                    />
                </FormWrapper>
            </FormSection>

            <FormSection
                sectionTitle="Pick color finishes and technology "
                sectionDescription="Add colors the product is available in. Select related technology and innovation brands. Include relevant upc codes."
            >
                <FormWrapper>
                    <div className={styles.colorSectionTitle}>
                        <PageText type="pageTitle">Colors</PageText>
                    </div>
                    {colorOptions.map((e, index) => (
                        <Checkbox
                            key={index}
                            id={e.color}
                            labelName={capitalizeFirstLetterEachWord(e.color)}
                            value={e.color}
                            onChange={handleColourChange}
                            checked={selectedColors.includes(e.color)}
                        />
                    ))}

                    <div className={styles.logoSectionTitle}>
                        <PageText type="pageTitle">Tech Logos</PageText>
                    </div>
                    {techLogoOptions.map((e, index) => (
                        <Checkbox
                            key={index}
                            id={e.logo}

                            labelName={e.label}
                            value={e.logo}
                            onChange={handleLogoChange}
                            checked={selectedLogos.includes(e.logo)}
                        />
                    ))}
                    <div className={styles.logoSectionTitle}>
                        <PageText type="pageTitle">UPC</PageText>
                    </div>
                    <TextArea
                        id="upc"
                        name="upc"
                        labelName="UPC Codes"
                        secondaryLabelToolTip="Other than brackets () no special characters allowed."
                        rows={7}
                        // errorText=' required'

                        validators={[]}

                        onInput={inputHandler}
                    />
                </FormWrapper>

            </FormSection>

            <FormSection
                sectionTitle="Add a specificiation resource group"
                sectionDescription="Upload the relevant qr code image file so it shows on printed product list. Add the full webpage url of the product specification sheet. "
            >
                <FormWrapper>
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
                </FormWrapper>

            </FormSection>

            <FormSection
                sectionTitle="Generate custom resource groups"
                sectionDescription="Create a title and add the full webpage url of resource you want to link. Upload the relevant qr code image file so it shows on printed product list."
            >
                <ResourceFormSection initialSections={[]} onSectionsChange={setSections} />
            </FormSection>
            <FormSection
                sectionTitle="Position with MSRP"
                sectionDescription="The MSRP is used to determine where your new product will show up in relation to other products in the same category. The product with the highest MSRP will show first. MSRP is optional and will be set to 0 when left blank."
            >
                <NumberInput
                    id="msrp"
                    name="msrp"
                    secondaryLabelToolTip={"MSRP is optional and will be set to 0 when left blank. The MSRP is used to list products in order from lowest \"0\" to highest \"9999999\" when featured amongst other products in the respective product category page."}
                    validators={[]}
                    value={values.msrp}
                    onInput={inputHandler}
                    labelName="MSRP"
                />
            </FormSection>

            <div className={styles.formFooter}>
                <div className={styles.footerSectionTitle}>
                    <PageText type="pageTitle">Add your product!</PageText>
                    <PageText type="pageSubtitle">Confirm product details are in the required formats. Visit the product details page after your submit to review the new product listing</PageText>
                </div>
                <div className={styles.footerButtonWrapper}>

                    <Button onClick={handleFormPreSubmit} type="button" buttonStyleType="primaryAction">
                        Add new product
                    </Button>
                </div>




            </div>

        </FormComponent>
    )
}