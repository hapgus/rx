import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { PageText } from "../../../Text/Text";
import styles from "../PortalForm.module.css";
import { Button } from "../../../Button/Button";

import { useAuth } from "../../../../hooks/auth-hook";
import { useForm } from "../../../../hooks/form-hook";

import { useHttpClient } from "../../../../hooks/http-hook";

import { Select } from "../../../FormComponent/Select/Select";

import { useRoutingHook } from "../../../../hooks/routing-hook";
import { useProductsHook } from "../../../../hooks/product-hook";

import { VALIDATOR_REQUIRE } from "../../../../utils/validators";
import { TextArea } from "../../../FormComponent/TextArea/TextArea";
import { Checkbox } from "../../../FormComponent/Checkbox/Checkbox";
import { FormComponent } from "../../../FormComponent/FormComponent";

import { TextInput } from "../../../FormComponent/TextInput/TextInput";
import { NumberInput } from "../../../FormComponent/Number/NumberInput";
import { validateProductForm } from "../../../../utils/form-validation";

import { useNotificationHook } from "../../../../hooks/notification-hook";
import { capitalizeFirstLetterEachWord } from "../../../../utils/text-help";
import { FormWrapper } from "../../../FormComponent/FormWrapper/FormWrapper";
import { FormSection } from "../../../FormComponent/FormSection/FormSection";

import { appendFormDataWithLineBreak } from "../../../../utils/form-helpers";
import { ResourceFormSection } from "../../../FormComponent/Dynamic/ResourceFormSection";
import { StaticImageUpload } from "../../../FormComponent/ImageUpload/StaticImageUpload";

import { useCategories, useCategoryOptions, useColorOptions, useLogoOptions, useColumnTitles, useYearHelper } from "../../../../hooks/use-form-helpers-hook";




export const UpdateProductForm = ({ productId, productTemplate = false }) => {


    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const [selectedQrcode, setSelectedQrcode] = useState(null);
    const [qrcodePreviewUrl, setQrcodePreviewUrl] = useState(null);

    const redirect = useNavigate();
    const { authUserId } = useAuth();

    const { sendRequest } = useHttpClient();
    const { fetchProducts } = useProductsHook();
    const { setIsRoutingState } = useRoutingHook();
    const { isModal, setIsModal } = useNotificationHook();


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
    const [initialSections, setInitialSections] = useState([]);
    const [loadedProduct, setLoadedProduct] = useState();



    const [formState, inputHandler, setFormData] = useForm({
        msrp: { value: 0, isValid: false },
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
    const handleFileChange = (event) => {
        if (!event.target.files || event.target.files.length === 0) { //NEW
            return;
        }
        const file = event.target.files[0];
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    /* --------------------------------------------------------------------------------------- */
    /* HANDLE QR CODE IMAGE AND PREVIEW*/
    /* --------------------------------------------------------------------------------------- */
    const handleQrcodeFileChange = (event) => {
        if (!event.target.files || event.target.files.length === 0) { //NEW
            return;
        }
        const file = event.target.files[0];
        setSelectedQrcode(file);
        setQrcodePreviewUrl(URL.createObjectURL(file));
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
    /* SET INITIAL FORM DATA*/
    /* --------------------------------------------------------------------------------------- */
    useEffect(() => {

        if (productId) {

            const fetchProductData = async () => {
                try {
                    const response = await sendRequest(` ${process.env.REACT_APP_BACKEND_URL}product/${productId}`);

                    const productData = await response.responseData.product;

                    console.log('product', productData)
                    setLoadedProduct(productData);
                    setSelectedColors(productData?.colors || '')
                    setSelectedLogos(productData?.logos || '')

                    // Initialize sections with both the original file path and full preview URL
                    const initializedSections = (productData?.sections || []).map(section => ({
                        ...section,
                        originalResourceQrCodeImage: section.resourceQrCodeImage,  // Original file path
                        resourceQrCodeImage: section.resourceQrCodeImage
                            ? `${process.env.REACT_APP_AWS_URL}/${section.resourceQrCodeImage}`  // Full URL for preview
                            : ''  // Default to an empty string if no image
                    }));


                    setInitialSections(initializedSections);
                    setSections(initializedSections);


                    setPreviewUrl(`${process.env.REACT_APP_AWS_URL}/${productData?.image}`)
                    // setQrcodePreviewUrl(`${process.env.REACT_APP_AWS_URL}/${productData?.qrcode}`)
                    setQrcodePreviewUrl(`${process.env.REACT_APP_AWS_URL}/${productData?.qrcode}` || '')
                    setFormData({
                        msrp: { value: productData.msrp || 0, isValid: true },
                        // image: { value: productData.image || '', isValid: true },
                        // qrcode: { value: productData.qrcode || '', isValid: true },
                        title: { value: productData.title, isValid: true },
                        subtitle: { value: productData.subtitle, isValid: true },
                        specSheetLink: { value: productData.specSheetLink || '', isValid: true },
                        category: { value: productTemplate === true ? '' : productData.category, isValid: true },
                        subcategory: { value: productTemplate === true ? '': productData.subcategory, isValid: true },
                        // category: { value: productData.category, isValid: true },
                        // subcategory: { value: productData.subcategory, isValid: true },
                        stylecategory: { value: productData.stylecategory || '', isValid: true },
                        store: { value: productData.store, isValid: true },
                        availability: { value: productData.availability || '', isValid: true },
                        upc: { value: productData.upc.join('\n') || '', isValid: true },
                        videos: { value: productData.videos.join('\n') || '', isValid: true },
                        specTitle1: { value: productData.specTitle1.toLowerCase() || '', isValid: true },
                        specTitle2: { value: productData.specTitle2.toLowerCase() || '', isValid: true },
                        specTitle3: { value: productData.specTitle3.toLowerCase() || '', isValid: true },
                        specTitle4: { value: productData.specTitle4.toLowerCase() || '', isValid: true },
                        specList1: { value: productData.specList1.join('\n') || '', isValid: true },
                        specList2: { value: productData.specList2.join('\n') || '', isValid: true },
                        specList3: { value: productData.specList3.join('\n') || '', isValid: true },
                        specList4: { value: productData.specList4.join('\n') || '', isValid: true },
                    }, true);
                    // setValues({
                    //     ...productData,
                    //     sections: productData.sections || [] // Assuming 'sections' is part of the fetched data
                    // });
                } catch (err) {
                    console.error('Error fetching product data:', err);
                }
            };

            fetchProductData();
        }
    }, [productId, sendRequest, setFormData]);

    console.log('loaded', qrcodePreviewUrl)
    /* --------------------------------------------------------------------------------------- */
    /* HANDLE FORM SUBMIT*/
    /* --------------------------------------------------------------------------------------- */

    const handleFormSubmit = async (e) => {
        e.preventDefault();


        const formErrors = validateProductForm(formState)

        // Validate the dynamic sections
        // const formSectionErrors = validateDynamicSections(values.sections);

        // Combine all errors
        const errorMessage = [...formErrors];
        // const errorMessage = [...formErrors, ...formSectionErrors.map(error => `${error.section + 1}: ${error.message}`)];
        console.log('err',errorMessage)
        if (errorMessage.length !== 0) {
            // setIsModal(prevState => ({
            //     ...prevState, 
            //     errorList: errorMessage,
            // }));
            setIsModal(prevState => ({
                ...prevState,
                show: true,
                modalType: 'errorModal',
                title: "Almosts there",
                iconType: 'errorInfo',
                message: "You need to fix the following errors to continue.",
                errorList: errorMessage,
                onConfirm: () => setIsModal({ show: false }),
                onCancel: () => setIsModal({ show: false }),
                confirmText: "Close",
                cancelText: "Go back",
                // show: true,
                // modalType: 'infoModal',
                // title: "Almost there",
                // message: "You need to fix the following errors to continue.",
                // errorList: errorMessage,
                // onConfirm: () => setIsModal({ show: false }),
                // onCancel: () => setIsModal({ show: false }),
                // confirmText: "Close",
                // cancelText: "Go back",

            }));

        } else {
            const formData = new FormData();
            formData.append('image', selectedFile || loadedProduct.image)
            formData.append('qrcode', selectedQrcode || loadedProduct.qrcode)

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


            sections.forEach((section, index) => {
                formData.append(`sections[${index}][resourceTitle]`, section.resourceTitle);
                formData.append(`sections[${index}][resourceUrl]`, section.resourceUrl);

                if (section.resourceQrCodeImage instanceof File) {
                    // New file selected
                    formData.append(`sections[${index}][resourceQrCodeImage]`, section.resourceQrCodeImage);
                } else if (section.resourceQrCodeImage) {
                    // Original image path should be preserved
                    formData.append(`sections[${index}][resourceQrCodeImage]`, section.originalResourceQrCodeImage);
                }
            });
            for (const logo of selectedLogos) {
                formData.append('logos', logo);
            }
            for (const color of selectedColors) {
                formData.append('colors', color);
            }
            formData.append('creator', authUserId);



            if (productTemplate === true) {
                try {
                    const response = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}copy-product`,
                        'POST',
                        formData
                    )

                    if (response.responseStatusCode === 201) {
                        setIsRoutingState(prevState => ({ ...prevState, isLoading: false }));

                        setIsModal(prevState => ({
                            ...prevState,
                            show: true,
                            modalType: 'successModal',
                            title: "Success",
                            message: "Congrats! The product was added.",
                            errorList: errorMessage,
                            onConfirm: () => setIsModal({ show: false }),
                            onCancel: handleProductDirectoryModalClick,
                            confirmText: "Close",
                            cancelText: "Go to product directory",

                        }));
                    }

                } catch (err) {

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
                    // console.log(err)
                }
            } else {
                try {
                    const response = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}edit-product/${productId}`,
                        'PATCH',
                        formData
                    )
                    if (response.responseStatusCode === 201) {
                        setIsRoutingState(prevState => ({ ...prevState, isLoading: false }));

                        setIsModal(prevState => ({
                            ...prevState,
                            show: true,
                            modalType: 'successModal',
                            title: "Success",
                            message: "Congrats! The product was updated successfully.",
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

                    console.log(err)
                }
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
                        secondaryLabelToolTip='Special characters allowed ( / \ - _ )'
                        errorText='Model title required'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValue={formState.inputs.title.value}
                        initialIsValid={formState.inputs.title.isValid}

                    />
                    <TextArea
                        id="subtitle"
                        name="subtitle"
                        labelName="Subtitle"
                        rows={7}
                        errorText=' Subtitle required'
                        validators={[VALIDATOR_REQUIRE()]}
                        initialValue={formState.inputs.subtitle.value}
                        initialIsValid={formState.inputs.subtitle.isValid}
                        onInput={inputHandler}
                    />
                    <Select
                        id='store'
                        name="store"
                        labelName="Retailer"
                        validators={[]}
                        onInput={inputHandler}
                        initialValue={formState.inputs.store.value}
                        initialIsValid={formState.inputs.store.isValid}
                        options={[
                            // { value: "", label: "Pick retailer", disabled: true },
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
                        initialValue={formState.inputs.availability.value}
                        initialIsValid={formState.inputs.availability.isValid}
                        value={formState.inputs.availability.value}
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
                        initialValue={formState.inputs.category.value}
                        initialIsValid={formState.inputs.category.isValid}
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
                                initialValue={formState.inputs.subcategory.value}
                                initialIsValid={formState.inputs.subcategory.isValid}
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
                                initialValue={formState.inputs.stylecategory.value}
                                initialIsValid={formState.inputs.stylecategory.isValid}
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
                        handleFileChange={handleFileChange}
                        previewUrl={previewUrl}
                        selectedFile={selectedFile}

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
                        initialValue={formState.inputs.specTitle1.value}
                        initialIsValid={formState.inputs.specTitle1.isValid}
                    />
                    <TextArea
                        id="specList1"
                        name="specList1"
                        type="textarea"
                        rows={10}
                        onInput={inputHandler}
                        validators={[]}
                        labelName="(1) Column list"
                        noTouchValidation={true}
                        initialValue={formState.inputs.specList1.value}
                        initialIsValid={formState.inputs.specList1.isValid}
                    />
                    <Select
                        id="specTitle2"
                        name="specTitle2"
                        labelName="(2) Column title"
                        // errorText='Please select a retailer'
                        validators={[]}
                        onInput={inputHandler}
                        options={columnTitleOptions}
                        initialValue={formState.inputs.specTitle2.value}
                        initialIsValid={formState.inputs.specTitle2.isValid}
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
                        initialValue={formState.inputs.specList2.value}
                        initialIsValid={formState.inputs.specList2.isValid}
                    />
                    <Select
                        id="specTitle3"
                        name="specTitle3"
                        labelName="(3) Column title"
                        // errorText='Please select a retailer'
                        validators={[]}
                        onInput={inputHandler}
                        options={columnTitleOptions}
                        initialValue={formState.inputs.specTitle3.value}
                        initialIsValid={formState.inputs.specTitle3.isValid}
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
                        initialValue={formState.inputs.specList3.value}
                        initialIsValid={formState.inputs.specList3.isValid}
                    />
                    <Select
                        id="specTitle4"
                        name="specTitle4"
                        labelName="(4) Column title"
                        // errorText='Please select a retailer'
                        validators={[]}
                        onInput={inputHandler}
                        options={columnTitleOptions}
                        initialValue={formState.inputs.specTitle4.value}
                        initialIsValid={formState.inputs.specTitle4.isValid}
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
                        initialValue={formState.inputs.specList4.value}
                        initialIsValid={formState.inputs.specList4.isValid}
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
                        secondaryLabel='Optional'
                        noTouchValidation={true}
                        initialValue={formState.inputs.videos.value}
                        initialIsValid={formState.inputs.videos.isValid}
                    />
                </FormWrapper>
            </FormSection>

            <FormSection
                sectionTitle="Pick color finishes and technology "
                sectionDescription="Add colors the product is available in. Select related technology and innovation brands. Include relevant upc codes."
            >
                <FormWrapper>
                    <div className={styles.colorSectionTitle}>
                        <PageText type="pageSubtitle">Colors Logos</PageText>
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
                        <PageText type="pageSubtitle">Tech Logos</PageText>
                    </div>
                    {techLogoOptions.map((e, index) => (
                        <Checkbox
                            key={index}
                            id={e.logo}
                            // labelName={capitalizeFirstLetterEachWord(e.logo)}
                            labelName={e.logo}
                            value={e.logo}
                            onChange={handleLogoChange}
                            checked={selectedLogos.includes(e.logo)}
                        />
                    ))}
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
                        previewUrl={qrcodePreviewUrl}
                        selectedFile={selectedQrcode}
                        handleFileChange={handleQrcodeFileChange}
                    />

                    <TextInput
                        id="specSheetLink"
                        name="specSheetLink"
                        labelName="Specification Sheet Link"
                        //  secondaryLabel='e.g. MXY8Z'
                        // errorText=' Subtitle required'
                        validators={[]}
                        onInput={inputHandler}
                        initialValue={formState.inputs.specSheetLink.value}
                        initialIsValid={formState.inputs.specSheetLink.isValid}
                    />
                </FormWrapper>

            </FormSection>

            <FormSection
                sectionTitle="Generate custom resource groups"
                sectionDescription="Create a title and add the full webpage url of resource you want to link. Upload the relevant qr code image file so it shows on printed product list."
            >
                <ResourceFormSection initialSections={initialSections} onSectionsChange={setSections} />
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
                    initialValue={formState.inputs.msrp.value}
                    initialIsValid={formState.inputs.msrp.isValid}
                    onInput={inputHandler}
                    labelName="MSRP"
                />
            </FormSection>
            <div className={styles.formFooter}>
                <FormSection
                    sectionTitle="Ready to update your product?"
                    sectionDescription="Confirm product details are in the required formats. Visit the product details page after your submit to review the new product listing"
                >
                    <FormWrapper>
                        <Button onClick={handleFormSubmit} type="button" buttonStyleType="primaryAction">
                            Update your product
                        </Button>

                    </FormWrapper>

                </FormSection>


            </div>

        </FormComponent>
    )
}