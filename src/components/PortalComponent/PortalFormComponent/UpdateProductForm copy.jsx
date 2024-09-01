
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

import { useState, useEffect, useRef } from "react";
import { PageText } from "../../Text/Text";
import { Checkbox } from "../../FormComponent/Checkbox/Checkbox";
import ImageUpload from "../../FormComponent/ImageUpload/ImageUpload";
import { DynamicSections } from "../../FormComponent/DynamicSectionsFormElement";
import { useNotificationHook } from "../../../hooks/notification-hook";
import { useProductsHook } from "../../../hooks/product-hook";

import { useAuth } from "../../../hooks/auth-hook";
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
import { ResourceFormSection } from "../../FormComponent/Dynamic/ResourceFormSection";

export const UpdateProductForm = ({ productId, productTemplate = false }) => {



    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const [selectedQrcode, setSelectedQrcode] = useState(null);
    const [qrcodePreviewUrl, setQrcodePreviewUrl] = useState(null);

    const redirect = useNavigate();
    const { authUserId } = useAuth();
    const { publicProducts } = useProductsHook();
    const { sendRequest } = useHttpClient();
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
    const [initialValues, setInitialValues] = useState({});
    const [initialSections, setInitialSections] = useState([]);
    const [loadedProduct, setLoadedProduct] = useState();

    // const { handleSectionChange, handleChange, values } = useDynamicForm({ sections: [] });
    // const { handleSectionChange, handleChange, values } = useDynamicForm({ sections: [] });
    const {
        handleSectionChange,
        setValues,
        handleChange,
        values,

    } = useDynamicForm(initialValues, initialSections, 'edit');


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

    const handleProductDirectoryModalClick = () => {
        setIsModal(prevState => ({ ...prevState, show: false }))
        redirect('/hapg/portal/product-directory')
    }


    // const pickImageHandler = () => {
    //     filePickerRef.current.click();
    // }

    const handleFileChange = (event) => {
        if (!event.target.files || event.target.files.length === 0) { //NEW
            return;
        }
        const file = event.target.files[0];
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleQrcodeFileChange = (event) => {
        if (!event.target.files || event.target.files.length === 0) { //NEW
            return;
        }
        const file = event.target.files[0];
        setSelectedQrcode(file);
        setQrcodePreviewUrl(URL.createObjectURL(file));
    };


    // SETTING FORM DATA
    useEffect(() => {

        if (productId) {

            const fetchProductData = async () => {
                try {
                    const response = await sendRequest(`http://localhost:3005/product/${productId}`);
                    const productData = await response.responseData.product;

                    console.log('product', productData)
                    setLoadedProduct(productData);
                    setSelectedColors(productData?.colors || '')
                    setSelectedLogos(productData?.logos || '')
                    setInitialValues(productData?.sections || []);
                    // setValues(productData?.sections || null);
                    setPreviewUrl(`${process.env.REACT_APP_AWS_URL}/${productData?.image}`)
                    setQrcodePreviewUrl(`${process.env.REACT_APP_AWS_URL}/${productData?.qrcode}`)
                    // setPreviewUrl(`${publicUrl}/assets/image/products/${productData?.image}`)
                    // setQrcodePreviewUrl(`${publicUrl}/assets/image/products/${productData?.image}`)
                    setFormData({
                        msrp: { value: productData.msrp || '', isValid: true },
                        // image: { value: productData.image || '', isValid: true },
                        // qrcode: { value: productData.qrcode || '', isValid: true },
                        title: { value: productData.title, isValid: true },
                        subtitle: { value: productData.subtitle, isValid: true },
                        specSheetLink: { value: productData.specSheetLink || '', isValid: true },
                        category: { value: productData.category, isValid: true },
                        subcategory: { value: productData.subcategory, isValid: true },
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

    console.log('selected file', selectedFile)
    const handleFormSubmit = async (e) => {
        e.preventDefault();


        const formErrors = validateProductForm(formState)

        // Validate the dynamic sections
        const formSectionErrors = validateDynamicSections(values.sections);

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

            Object.keys(values).forEach(key => {
                if (key !== 'sections') {
                    formData.append(key, values[key]);
                }
            });

            values.sections.forEach((section, index) => {
                formData.append(`sections[${index}][resourceTitle]`, section.resourceTitle);
                formData.append(`sections[${index}][resourceUrl]`, section.resourceUrl);
                if (section.resourceQrCodeImage.length > 0) {
                    formData.append(`sections[${index}][resourceQrCodeImage]`, section.resourceQrCodeImage[0].file);
                }
            });
            for (const logo of selectedLogos) {
                formData.append('logos', logo);
            }
            for (const color of selectedColors) {
                formData.append('colors', color);
            }
            formData.append('creator', authUserId);

            console.log('form data', formData)

            if (productTemplate === true) {
                try {
                    const response = await sendRequest('http://localhost:3005/add-product',
                        'POST',
                        formData
                    )
                    console.log(response)
                    if (response.responseStatusCode === 201) {
                        setIsRoutingState(prevState => ({ ...prevState, isLoading: false }));

                        setIsModal(prevState => ({
                            ...prevState,
                            show: true,
                            modalType: 'successModal',
                            title: "Success",
                            message: "Congrats! The product was added updated.",
                            errorList: errorMessage,
                            onConfirm: () => setIsModal({ show: false }),
                            onCancel: () => setIsModal({ show: false }),
                            // handleProductDirectoryModalClick,
                            confirmText: "Close",
                            cancelText: "Go to product directory",

                        }));
                    }

                } catch (err) {

                    console.log(err)
                }
            } else {
                try {
                    const response = await sendRequest(`http://localhost:3005/edit-product/${productId}`,
                        'PATCH',
                        formData
                    )
                    if (response.message === 'Product updated') {
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

    // console.log('is modal', isModal)


    console.log('form state', formState)
    // console.log('form data', formData)

    return (
        // <FormComponent onSubmit={handleFormSubmit}>
        <FormComponent>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">MSRP retailer and availability</PageText>
                    <PageText type="pageTertiaryTitle">Pick retailer</PageText>
                </div>
                <div className={styles.sectionContent}>
                    <Select
                        id='store'
                        name="store"
                        labelName="Retailer"
                        // errorText='Please select a retailer'
                        validators={[]}
                        onInput={inputHandler}
                        initialValue={formState.inputs.store.value}
                        initialIsValid={formState.inputs.store.isValid}
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
                        initialValue={formState.inputs.availability.value}
                        initialIsValid={formState.inputs.availability.isValid}
                        value={formState.inputs.availability.value}
                        options={availabilityOptions}
                    />
                    {/* <NumberInput
                        id="msrp"
                        name="msrp"
                        value={values.msrp}
                        onChange={handleChange}
                        labelName="MSRP"
                    /> */}
                    <NumberInput
                        id="msrp"
                        name="msrp"
                        labelName="MSRP"
                        placeholder="Enter MSRP"
                        validators={[]}
                        initialValue={formState.inputs.msrp.value}
                        initialIsValid={formState.inputs.msrp.isValid}
                        onInput={inputHandler}
                        min={0}
                        max={10000}
                        step={1}
                    />
                </div>
            </section>


            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">Model name/title and subtitles</PageText>
                    <PageText type="pageTertiaryTitle">Add model name and subtitle</PageText>
                </div>
                <div className={styles.sectionContent}>
                    <TextInput
                        id="title"
                        name="title"
                        labelName="Model title"
                        secondaryLabel='Special characters allowed ( / \ - _ )'
                        errorText='Model title required'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        // initialValue={formState.inputs.title.value} 
                        initialValue={formState.inputs.title.value}
                        initialIsValid={formState.inputs.title.isValid}


                    />
                    <TextInput
                        id="subtitle"
                        name="subtitle"
                        labelName="Sub-title"
                        //  secondaryLabel='e.g. MXY8Z'
                        errorText=' Subtitle required'
                        validators={[VALIDATOR_REQUIRE()]}
                        initialValue={formState.inputs.subtitle.value}
                        initialIsValid={formState.inputs.subtitle.isValid}
                        onInput={inputHandler}
                    />
                </div>
            </section>

            <section className={styles.section}>
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
                        initialValue={formState.inputs.category.value}
                        initialIsValid={formState.inputs.category.isValid}
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
                                    initialValue={formState.inputs.subcategory.value}
                                    initialIsValid={formState.inputs.subcategory.isValid}
                                    options={subcategoryOptions}
                                />
                                <TextInput
                                    id="stylecategory"
                                    name="stylecategory"
                                    labelName="Style category"
                                    secondaryLabel='Optional'
                                    errorText=' Style category error'
                                    noTouchValidation={true}
                                    validators={[]}
                                    onInput={inputHandler}
                                    initialValue={formState.inputs.stylecategory.value}
                                    initialIsValid={formState.inputs.stylecategory.isValid}
                                />
                            </div>
                        </div>

                    )}
                </div>
            </section>


            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">Youtube videos</PageText>
                    <PageText type="pageTertiaryTitle">Add feature videos</PageText>
                </div>
                <div className={styles.sectionContent}>
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
                </div>
            </section>


            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">Specifications</PageText>
                    <PageText type="pageTertiaryTitle">Add specifcation details</PageText>
                </div>
                <div className={styles.sectionContent}>
                    <Select
                        id="specTitle1"
                        name="specTitle1"
                        labelName="Column one title"
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
                        labelName="List One"
                        noTouchValidation={true}
                        initialValue={formState.inputs.specList1.value}
                        initialIsValid={formState.inputs.specList1.isValid}
                    />
                    <Select
                        id="specTitle2"
                        name="specTitle2"
                        labelName="Column two title"
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
                        labelName="List Two"
                        noTouchValidation={true}
                        initialValue={formState.inputs.specList2.value}
                        initialIsValid={formState.inputs.specList2.isValid}
                    />
                    <Select
                        id="specTitle3"
                        name="specTitle3"
                        labelName="Column three title"
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
                        labelName="List Three"
                        noTouchValidation={true}
                        initialValue={formState.inputs.specList3.value}
                        initialIsValid={formState.inputs.specList3.isValid}
                    />
                    <Select
                        id="specTitle4"
                        name="specTitle4"
                        labelName="Column four title"
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
                        labelName="List Four"
                        noTouchValidation={true}
                        initialValue={formState.inputs.specList4.value}
                        initialIsValid={formState.inputs.specList4.isValid}
                    />

                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">Color Section</PageText>
                    <PageText type="pageTertiaryTitle">Pick colors</PageText>
                </div>
                <div className={styles.sectionContent}>
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
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">Technology logos</PageText>
                    <PageText type="pageTertiaryTitle">Tech logos</PageText>
                </div>
                <div className={styles.sectionContent}>
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
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">UPC Codes</PageText>
                    <PageText type="pageTertiaryTitle">Add the UPC Codesa</PageText>
                </div>
                <div className={styles.sectionContent}>
                    <TextArea
                        id="upc"
                        name="upc"
                        type="textarea"
                        rows={10}
                        onInput={inputHandler}
                        validators={[]}
                        labelName="UPC Code"
                        noTouchValidation={true}
                        initialValue={formState.inputs.upc.value}
                        initialIsValid={formState.inputs.upc.isValid}
                    />
                </div>
            </section>


            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">Upload Product Image</PageText>
                    <PageText type="pageTertiaryTitle">Add product image files</PageText>

                </div>
                <div className={styles.sectionContent}>
                    {/* <StaticImageUpload iconType='qrCode' /> */}
                    <StaticImageUpload
                        iconType='imageFile'
                        handleFileChange={handleFileChange}
                        previewUrl={previewUrl}
                        selectedFile={selectedFile}
                    //  pickImageHandler={pickImageHandler}
                    />
                    {/* <ImageUpload
                        id='image'
                        onInput={inputHandler}
                    /> */}
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">Specification Sheet Link and Qrcode Image Upload </PageText>
                    <PageText type="pageTertiaryTitle">Add external spec sheet url and the associated qr code image files</PageText>

                </div>

                <div className={styles.sectionContent}>
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
                    {/* <ImageUpload
                        id='qrcode'
                        onInput={inputHandler}
                    /> */}
                    <StaticImageUpload
                        iconType='qrCode'
                        handleFileChange={handleQrcodeFileChange}
                        previewUrl={qrcodePreviewUrl}
                        selectedFile={selectedQrcode}
                    //  pickImageHandler={pickImageHandler}
                    />
                </div>
            </section>
            {/* <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">Resource Links</PageText>
                    <PageText type="pageTertiaryTitle">Build links to external resources</PageText>
                </div>
                <div className={styles.sectionContent}>

                    <DynamicSections
                        sections={values.sections}
                        onChange={handleSectionChange}
                    />
                </div>

            </section> */}

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">Add Resources Groups</PageText>
                    <PageText type="pageTertiaryTitle">Press 'Add Group' to create a new resource. Provide a button text and destination URL, then upload a QR code image. The button will link to the URL on the website, and in print mode, the QR code will provide quick access to the same link</PageText>
                </div>
                <ResourceFormSection
                initialSections={}
                />
                {/* <DynamicResourceFormSection
                    sections={values.sections}
                    onChange={handleSectionChange}
                /> */}
                <div className={styles.sectionContent}>


                </div>
            </section>


            <div className={styles.formButtonWrapper}>

                <Button onClick={handleFormSubmit} type="button" buttonStyleType="primaryAction">
                    Add product
                </Button>

            </div>
        </FormComponent>
    )
}