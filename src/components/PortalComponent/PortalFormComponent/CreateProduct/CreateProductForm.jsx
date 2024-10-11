import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { PageText } from "../../../Text/Text";
import styles from "../PortalForm.module.css";
import { Button } from "../../../Button/Button";

import { useAuth, useLogout } from "../../../../hooks/use-auth-hooks";
import { useForm } from "../../../../hooks/form-hook";

import { useHttpClient } from "../../../../hooks/http-hook";

import { Select } from "../../../FormComponent/Select/Select";

import { useProductsHook } from "../../../../hooks/use-product-hooks";

import { useRoutingHook } from "../../../../hooks/use-routing-hooks";

import { VALIDATOR_REQUIRE } from "../../../../utils/validators";
import { TextArea } from "../../../FormComponent/TextArea/TextArea";
import { Checkbox } from "../../../FormComponent/Checkbox/Checkbox";
import { FormComponent } from "../../../FormComponent/FormComponent";

import { TextInput } from "../../../FormComponent/TextInput/TextInput";
import { NumberInput } from "../../../FormComponent/Number/NumberInput";
import { validateProductForm } from "../../../../utils/form-validation";
import { useDynamicForm } from "../../../../hooks/use-dynamic-form-hook";
import { useNotificationHook } from "../../../../hooks/use-notification-hooks";

import { FormWrapper } from "../../../FormComponent/FormWrapper/FormWrapper";
import { FormSection } from "../../../FormComponent/FormSection/FormSection";
import { useDataContext } from "../../../../hooks/data-hook";
import { appendFormDataWithLineBreak, capitalizeFirstLetterEachWord } from "../../../../utils/helper-functions";
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
    const logout = useLogout();


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
    /* HANDLE NO AUTH REDIRECTS*/
    /* --------------------------------------------------------------------------------------- */
    const handleUnAuthorizedAccess = () => {

        logout();
        setIsModal({ show: false })
    }

    /* --------------------------------------------------------------------------------------- */
    /* HANDLE FORM SUBMIT*/
    /* --------------------------------------------------------------------------------------- */


    const handleFormPreSubmit = async (e) => {

        e.preventDefault();
        if (!(isAdmin || isSuperAdmin)) {
            setIsModal({
                show: true,
                modalType: 'confirmationModal',
                title: "Error",
                message: `Please contact an administrator.`,
                cancelText: "Close",
                onCancel: handleUnAuthorizedAccess,
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



        // const formErrors = validateProductForm(formState, selectedImage, selectedQrcodeImage)

        const { errorMessage, processedValues } = validateProductForm(formState, selectedImage, selectedQrcodeImage)
        // sectionError.map - triggered in above - add section to param like below
        // const { errorMessage, processedValues } = validateProductForm(formState, sections,selectedImage, selectedQrcodeImage)
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

                // const response = await sendRequest(`http://localhost:3005/add-product`,
                const response = await sendRequest(` ${process.env.REACT_APP_BACKEND_URL}add-product`,
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
                sectionDescription="Get started by adding headlines and retailer information."
            >
                <FormWrapper>
                    <TextInput
                        id="title"
                        name="title"
                        labelName="Title"
                        secondaryLabelToolTip='Title must be between 3 and 100 characters. Special characters allowed ( / - _ ). Use a dash between two product names, when necessary ie. DLE7000W-DLG7001W. '
                        errorText='Product title required'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                    />
                    <TextArea
                        id="subtitle"
                        name="subtitle"
                        labelName="Subtitle"
                        secondaryLabelToolTip='Subtitle must be between 8 and 1000 characters. Please note, the ampersand symbole (&) will replaced with (and) if used in the product subtitle.'
                        rows={7}
                        errorText=' Subtitle required'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                    />
                    <Select
                        id='store'
                        name="store"
                        labelName="Retailer"
                        secondaryLabelToolTip="LG Exclusive is selected by default."
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
                        secondaryLabelToolTip="Availability applies to the general release of a product, not specific to an individual store inventory."
                        // errorText='Please select a retailer'
                        validators={[]}
                        onInput={inputHandler}
                        options={availabilityOptions}
                    />
                </FormWrapper>
            </FormSection>

            <FormSection
                sectionTitle="Choose a category"
                sectionDescription="A category is required to complete this step. "
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
                                secondaryLabelToolTip='Style category cannot exceed 100 characters. Special characters allowed ( / - _ ). ie. Front Load Washer Special.'
                                // secondaryLabel='Example, Front Load Washer'
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
                sectionTitle="Add the product image"
                sectionDescription="Upload the front facing product image with transparent background. File format should be a WEBP (preferred) or PNG, max 2MB). The file name should match the product title (ie. LRSXS2706_.webp )."
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
                sectionTitle="Add specs and related products to showcase"
                sectionDescription="Select a column title and add a list of relevant specifications. To populate a product's 'Related Products' carousel, use special keyword(s) 'optional', 'matching', and/or 'accessories', and wrap the target product(s) in brackets. Insert brackets around the title of the accessory you want to feature as a related product. ie. Matching washer (WM6998H_A), Optional (WM9500HKA,WD205CK, LUWM101HWA), Accessories (SWWE50N3 SWWG50N3, DLEX9500K / DLGX9501K, DLEX4000_ DLGX4001_)."
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
                        secondaryLabelToolTip="At least one list item with a minimum of three characters, including one letter, is required. One item per line, type enter to go to next line."
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
                        secondaryLabelToolTip="One item per line, type enter to go to next line."
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
                        secondaryLabelToolTip="One item per line, type enter to go to next line."
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
                           secondaryLabelToolTip="One item per line, type enter to go to next line."
                        noTouchValidation={true}
                    />
                </FormWrapper>
            </FormSection>

            <FormSection
                sectionTitle="Include product videos"
                sectionDescription="Add YouTube or Vimeo URLs to showcase training, marketing and feature innovation videos. Only secure URLs permitted. Video URLs must be in the required formats for YouTube or Vimeo. "
            >
                <FormWrapper>
                    <TextArea
                        id="videos"
                        name="videos"
                        type="textarea"
                        rows={10}
                        onInput={inputHandler}
                        validators={[]}
                        labelName="Product videos"
                        secondaryLabelToolTip='Only secure protocol (https) Youtube or Vimeo videos allowed. Example https://www.youtube.com/watch?v=Baj92O7Y6Rs. One URL per line, type enter to go to next line'
                        noTouchValidation={true}
                    />
                </FormWrapper>
            </FormSection>

            <FormSection
                sectionTitle="Colors and technology"
                sectionDescription="Select available colors and technology logos. Include relevant UPC codes."
            >
                <FormWrapper>
                    <div className={styles.colorSectionTitle}>
                        <PageText type="bodyTitle">Colors</PageText>
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
                        <PageText type="bodyTitle">Technology logos</PageText>
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
                        <PageText type="bodyTitle">UPC codes</PageText>
                    </div>
                    <TextArea
                        id="upc"
                        name="upc"
                        labelName="UPC Codes"
                        secondaryLabelToolTip="Other than brackets () and trademarks, no special characters allowed. One UPC code per line, type enter to go to next line."
                        rows={7}
                        // errorText=' required'
                        validators={[]}
                        onInput={inputHandler}
                    />
                </FormWrapper>

            </FormSection>

            <FormSection
                sectionTitle="Add a specificiation resource group"
                sectionDescription="Upload a QR code image file so it shows on printed product list. Add the full webpage url of the product specification sheet."
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
                        secondaryLabelToolTip="Specification Sheet Link must be valid HTTPS URL from the domain lg.widen.net'."

                        validators={[]}
                        onInput={inputHandler}
                    />
                </FormWrapper>

            </FormSection>

            <FormSection
                sectionTitle="Add external resources"
                sectionDescription="Add a custom resource by adding a new group. It must contain the title, URL and QR code. Title is what will show on button, ie. Owner’s Manual or Accessory Guide. QR code file must be a JPEG, PNG or WEBP, max size 2MB."
            >
                <ResourceFormSection initialSections={[]} onSectionsChange={setSections} />
            </FormSection>
            <FormSection
                sectionTitle="Set the MSRP to determine product order"
                sectionDescription="The MSRP is used to determine where your new product will show up in relation to other products in the same category. The product with the highest MSRP will show first. MSRP is optional and will be set to 0 when left blank."
            >
                <NumberInput
                    id="msrp"
                    name="msrp"
                    secondaryLabelToolTip={"MSRP is optional and will be set to 0 when left blank. The MSRP is used to list products in order from lowest \"0\" to highest \"100000\"."}
                    validators={[]}
                    value={values.msrp}
                    onInput={inputHandler}
                    labelName="MSRP"
                />
            </FormSection>
            <div className={styles.formFooter}>
                <FormSection
                    sectionTitle="Finalize and submit"
                    sectionDescription="Ensure all details meet format requirements before submitting. Visit the product page after submission to review the listing."
                >
                    <FormWrapper>
                        {/* <Button onClick={handleFormSubmit} type="button" buttonStyleType="primaryAction"> */}
                        <Button onClick={handleFormPreSubmit} type="button" buttonStyleType="primaryAction">
                            Add new product
                        </Button>

                    </FormWrapper>

                </FormSection>


            </div>


        </FormComponent>
    )
}