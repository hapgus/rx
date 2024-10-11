import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { PageText } from "../../../Text/Text";
import styles from "../PortalForm.module.css";
import { Button } from "../../../Button/Button";

import { useAuth, useLogout } from "../../../../hooks/use-auth-hooks";
import { useForm } from "../../../../hooks/form-hook";

import { useHttpClient } from "../../../../hooks/http-hook";
import { useDataContext } from "../../../../hooks/data-hook";

import { Select } from "../../../FormComponent/Select/Select";

import { useRoutingHook } from "../../../../hooks/use-routing-hooks";
import { useProductsHook } from "../../../../hooks/use-product-hooks";

import { VALIDATOR_REQUIRE } from "../../../../utils/validators";
import { TextArea } from "../../../FormComponent/TextArea/TextArea";
import { Checkbox } from "../../../FormComponent/Checkbox/Checkbox";
import { FormComponent } from "../../../FormComponent/FormComponent";

import { TextInput } from "../../../FormComponent/TextInput/TextInput";
import { NumberInput } from "../../../FormComponent/Number/NumberInput";


import { useNotificationHook } from "../../../../hooks/use-notification-hooks";
import { capitalizeFirstLetterEachWord,appendFormDataWithLineBreak } from "../../../../utils/helper-functions";
import { FormWrapper } from "../../../FormComponent/FormWrapper/FormWrapper";
import { FormSection } from "../../../FormComponent/FormSection/FormSection";


import { ResourceFormSection } from "../../../FormComponent/Dynamic/ResourceFormSection";
import { StaticImageUpload } from "../../../FormComponent/ImageUpload/StaticImageUpload";
import { validateProductForm } from "../../../../utils/form-validation";
import { useCategories, useCategoryOptions, useColorOptions, useLogoOptions, useColumnTitles, useYearHelper } from "../../../../hooks/use-form-helpers-hook";




export const UpdateProductForm = ({ productId, productTemplate = false }) => {


    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const [selectedQrcode, setSelectedQrcode] = useState(null);
    const [qrcodePreviewUrl, setQrcodePreviewUrl] = useState(null);

    const redirect = useNavigate();
    const { authUserId, isAdmin, isSuperAdmin, isAuthenticated } = useAuth();
    const logout = useLogout();

    const { sendRequest } = useHttpClient();
    const { fetchProducts } = useProductsHook();
    const { setIsRoutingState } = useRoutingHook();
    const { isModal, setIsModal } = useNotificationHook();
    const { isManagedDataState, setIsManagedDataState } = useDataContext();

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

    const formTextElements = productTemplate === true
        ? { 
            buttonText: 'Create new product' ,
            footerTitleText:'Ready to add your product?'
        } : { 
            buttonText: 'Update product',
            footerTitleText:'Ready to update your product?' 
        }

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
    /* HANDLE NO AUTH REDIRECTS*/
    /* --------------------------------------------------------------------------------------- */
    const handleUnAuthorizedAccess = () => {

        logout();
        setIsModal({ show: false })
    }

    /* --------------------------------------------------------------------------------------- */
    /* SET INITIAL FORM DATA*/
    /* --------------------------------------------------------------------------------------- */
    useEffect(() => {
        setIsManagedDataState(prevState => ({ ...prevState, preloading: true }));
        if (productId) {

            const fetchProductData = async () => {

                try {
                    const response = await sendRequest(` ${process.env.REACT_APP_BACKEND_URL}product/${productId}`);

                    const productData = await response.responseData.product;


                    setLoadedProduct(productData);
                    setSelectedColors(productData?.colors || '')
                    setSelectedLogos(productData?.logos || '')
                    setIsManagedDataState(prevState => ({
                        ...prevState,
                        data: productData,
                        preLoading: false,

                    }));
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
                        subcategory: { value: productTemplate === true ? '' : productData.subcategory, isValid: true },
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


    /* --------------------------------------------------------------------------------------- */
    /* HANDLE FORM SUBMIT*/
    /* --------------------------------------------------------------------------------------- */
    console.log(isAdmin, isSuperAdmin)
    const handlePreFormSubmit = async (e) => {

        e.preventDefault();

        // if (isAdmin || !isSuperAdmin) {
        if (!(isAdmin || isSuperAdmin)) {
     
            setIsModal({
                show: true,
                modalType: 'confirmationModal',
                title: "Error",
                message: `Please contact an administrator.`,
                cancelText: "Close",
                onCancel: handleUnAuthorizedAccess,

            })
            return
        }


        // IF EDITING PRODUCT
        if (productTemplate === false) {



            const normalizeString = (value) => value.trim().toLowerCase();

            // const normalizeAndSortArray = (array) => {
            //     return array.map(value => value.trim().toLowerCase()).sort();
            // };
            const normalizeAndSortArray = (array) => {
                // Filter out empty or whitespace-only lines and then normalize
                return array
                    .filter(value => value.trim().length > 0) // Filter out blank lines
                    .map(value => normalizeString(value))
                    .sort();
            };
            // CHECK IF ARRAY VALUES ARE EQUAL
            const areArraysEqual = (arr1, arr2) => {
                // If both are falsy or empty, return true
                if (!arr1 && !arr2) return true;

                // Normalize and sort both arrays
                const normalizedArr1 = normalizeAndSortArray(arr1 || []);
                const normalizedArr2 = normalizeAndSortArray(arr2 || []);

                // Check length
                if (normalizedArr1.length !== normalizedArr2.length) return false;

                // Compare each element
                return normalizedArr1.every((value, index) => value === normalizedArr2[index]);
            };

            // CHECK IF ARRAY VALUES CHANGED
            const arrayValuesChanged = (newValues, originalValues) => {
                // Handle empty/falsy cases
                if (!newValues && !originalValues) return false;

                const normalizedNewValues = newValues
                    ? normalizeAndSortArray(newValues).join('\n')
                    : '';
                const normalizedOriginalValues = originalValues
                    ? normalizeAndSortArray(originalValues).join('\n')
                    : '';

                return normalizedNewValues !== normalizedOriginalValues;
                // // Normalize arrays by trimming and converting to lowercase
                // const normalizedNewValues = newValues ? newValues.map(value => normalizeString(value)).join('\n') : '';
                // const normalizedOriginalValues = originalValues ? originalValues.map(value => normalizeString(value)).join('\n') : '';

                // return normalizedNewValues !== normalizedOriginalValues;
            };

            // CHECK IF SECTION VALUES CHANGED
            const hasSectionChanged = (newSection, originalSection) => {

                // Compare resourceTitle and resourceUrl
                if (
                    normalizeString(newSection.resourceTitle) !== normalizeString(originalSection.resourceTitle) ||
                    normalizeString(newSection.resourceUrl) !== normalizeString(originalSection.resourceUrl)
                ) {
                    return true;
                }

                // Compare resourceQrCodeImage
                const newImage = newSection.resourceQrCodeImage;
                const originalImage = originalSection.resourceQrCodeImage;

                // Check if either is a File object
                if (newImage instanceof File || originalImage instanceof File) {
                    return newImage !== originalImage; // Check if the file reference has changed
                }

                // Otherwise, compare as strings (URLs)
                return normalizeString(newImage) !== normalizeString(originalImage);
            };
            // CHECK IF SECTIONS CHANGED
            const haveSectionsChanged = (newSections, originalSections) => {
                // If the lengths are different, sections have changed
                if (newSections.length !== originalSections.length) return true;

                // Compare each section
                return newSections.some((newSection, index) =>
                    hasSectionChanged(newSection, originalSections[index])
                );
            };
            // Convert msrp values to string
            const currentMsrp = String(formState.inputs.msrp.value).trim();
            const originalMsrp = String(loadedProduct.msrp).trim();


            const hasChanges = (
                normalizeString(formState.inputs.title.value) !== normalizeString(isManagedDataState.data.title) ||
                normalizeString(formState.inputs.subtitle.value) !== normalizeString(isManagedDataState.data.subtitle) ||
                normalizeString(formState.inputs.specSheetLink.value) !== normalizeString(isManagedDataState.data.specSheetLink) ||
                normalizeString(formState.inputs.category.value) !== normalizeString(isManagedDataState.data.category) ||
                normalizeString(formState.inputs.subcategory.value) !== normalizeString(isManagedDataState.data.subcategory) ||
                normalizeString(formState.inputs.stylecategory.value) !== normalizeString(isManagedDataState.data.stylecategory) ||
                normalizeString(formState.inputs.availability.value) !== normalizeString(isManagedDataState.data.availability) ||
                currentMsrp !== originalMsrp ||
                arrayValuesChanged(formState.inputs.upc.value.split('\n'), isManagedDataState.data.upc) ||
                arrayValuesChanged(formState.inputs.videos.value.split('\n'), isManagedDataState.data.videos) ||
                arrayValuesChanged(formState.inputs.specList1.value.split('\n'), isManagedDataState.data.specList1) ||
                arrayValuesChanged(formState.inputs.specList2.value.split('\n'), isManagedDataState.data.specList2) ||
                arrayValuesChanged(formState.inputs.specList3.value.split('\n'), isManagedDataState.data.specList3) ||
                arrayValuesChanged(formState.inputs.specList4.value.split('\n'), isManagedDataState.data.specList4) ||
                normalizeString(formState.inputs.specTitle1.value) !== normalizeString(isManagedDataState.data.specTitle1) ||
                normalizeString(formState.inputs.specTitle2.value) !== normalizeString(isManagedDataState.data.specTitle2) ||
                normalizeString(formState.inputs.specTitle3.value) !== normalizeString(isManagedDataState.data.specTitle3) ||
                normalizeString(formState.inputs.specTitle4.value) !== normalizeString(isManagedDataState.data.specTitle4) ||
                !areArraysEqual(selectedColors, isManagedDataState.data.colors) ||
                !areArraysEqual(selectedLogos, isManagedDataState.data.logos) ||
                haveSectionsChanged(sections, initialSections) ||
                selectedFile !== null ||
                selectedQrcode !== null ||
                formState.inputs.store.value !==isManagedDataState.data.store
            );

            if (hasChanges === false) {

                setIsModal({

                    show: true,
                    modalType: 'productConfirmationModal',
                    title: "Confirmation Required",
                    message: `You are about to change a product. The updated product will be featured on the public website. Please confirm if you wish to continue.`,
                    confirmText: 'Update product',
                    cancelText: "Go back",
                    onConfirm: () => handleFormSubmit(),
                    onCancel: () => setIsModal({ show: false }),


                });
                setIsModal({

                    show: true,
                    modalType: 'productConfirmationModal',
                    title: "Nothing to update",
                    message: `You must change something before you can submit an update. Please make changes and try again`,
                    confirmText: 'Update product',


                    onCancel: () => setIsModal({ show: false }),
                    cancelText: "Go back",
                })
            } else {
                setIsModal({
                    show: true,
                    modalType: 'productConfirmationModal',
                    title: "Confirm product updates",
                    message: `You are about to change this product. Please confirm if you wish to proceed.`,
                    confirmText: 'Confirm update',
                    onConfirm: () => {
                        handleFormSubmit();
                    },
                    cancelText: "Go back",
                    onCancel: () => setIsModal({ show: false }),
                })
            }
        }

        if (productTemplate === true) {
            setIsModal({
                show: true,
                modalType: 'productConfirmationModal',
                title: "Confirm product duplicate",
                message: `You are about to create a new product via an existing product as a template. Please confirm if you wish to proceed.`,
                confirmText: 'Confirm product',
                onConfirm: () => {
                    handleFormSubmit();
                },
                cancelText: "Go back",
                onCancel: () => setIsModal({ show: false }),
            })


        }

    }
    // console.log('spec list 1 managed',isManagedDataState.data.specList1 )
    // console.log('spec list 1 form state',formState.inputs.specList1.value )


    const handleFormSubmit = async (e) => {
        let errors = [];

        // // Step 1: Check for duplicate title if productTemplate is true
        // if (productTemplate === true) {
        //     if (formState.inputs.title.value === isManagedDataState.data.title) {
        //         const duplicateTitleError = 'Title cannot be the same as the original product';
        //         errors.push(duplicateTitleError); // Add duplicate error to errors array
        //     }
        // }

        // Step 2: Validate the form based on productTemplate
        // const formValidationErrors = validateProductForm(formState, sections);
        const { errorMessage, processedValues } = validateProductForm(formState, sections);


        // Step 1: Check for duplicate title if productTemplate is true
        if (productTemplate === true) {
            if (processedValues.title === isManagedDataState.data.title) {
                const duplicateTitleError = 'Title cannot be the same as the original product';

                errors.push(duplicateTitleError); // Add duplicate error to errors array
            }
            if (!processedValues.category) {
                const noCategoryError = 'Category selection required';
                //TURNED OFF BECAUSE OF ERROR DUPLICATION- TESTING
                // errors.push(noCategoryError); // Add duplicate error to errors array
            }
            if (!processedValues.subcategory) {
                const noSubcategoryError = 'Sub category selection required';
                //TURNED OFF BECAUSE OF ERROR DUPLICATION- TESTING
                // errors.push(noSubcategoryError); // Add duplicate error to errors array
            }
        }
        // Combine errors from duplicate check and form validation
        const combinedErrors = [...errors, ...errorMessage];
        // const combinedErrors = [...errors, ...formValidationErrors];

        // Step 3: Handle errors if they exist
        if (combinedErrors.length !== 0) {
            // Display the error modal
            setIsModal({
                show: true,
                modalType: 'errorModal',
                title: "Almost there",
                iconType: 'errorInfo',
                message: "You need to fix the following errors to continue.",
                errorList: combinedErrors, // Show all combined errors
                onConfirm: () => setIsModal({ show: false }),
                onCancel: () => setIsModal({ show: false }),
                confirmText: "Close",
                cancelText: "Go back",
            });
            return; // Stop execution if errors are found
        }

        // Step 4: If no errors, proceed to form submission
        const formData = new FormData();
        formData.append('title', processedValues.title);
        formData.append('subtitle', processedValues.subtitle);
        formData.append('specSheetLink', processedValues.specSheetLink);
        formData.append('stylecategory', processedValues.stylecategory);

        //   formData.append('image', selectedFile || loadedProduct.image);
        // formData.append('qrcode', selectedQrcode || loadedProduct.qrcode);

        // formData.append('msrp', processedValues.msrp);


        formData.append('category', processedValues.category);
        formData.append('subcategory', processedValues.subcategory);

        // formData.append('store', processedValues.store);
        // formData.append('availability', processedValues.availability);

        // appendFormDataWithLineBreak(formData, 'upc', formState.inputs.upc.value);
        // appendFormDataWithLineBreak(formData, 'videos', formState.inputs.videos.value);

        // formData.append('specTitle1', processedValues.specTitle1);
        // formData.append('specTitle2', formState.inputs.specTitle2.value);
        // formData.append('specTitle3', formState.inputs.specTitle3.value);
        // formData.append('specTitle4', formState.inputs.specTitle4.value);
        // appendFormDataWithLineBreak(formData, 'specList1', processedValues.specList1.join('\n'));
        // appendFormDataWithLineBreak(formData, 'specList2', formState.inputs.specList2.value);
        // appendFormDataWithLineBreak(formData, 'specList3', formState.inputs.specList3.value);
        // appendFormDataWithLineBreak(formData, 'specList4', formState.inputs.specList4.value);

        formData.append('image', selectedFile || loadedProduct.image);
        formData.append('qrcode', selectedQrcode || loadedProduct.qrcode);
        // formData.append('title', formState.inputs.title.value);
        // formData.append('msrp', formState.inputs.msrp.value);
        formData.append('msrp', formState.inputs.msrp.value || 0);
        // formData.append('subtitle', formState.inputs.subtitle.value);
        // formData.append('specSheetLink', formState.inputs.specSheetLink.value);
        // formData.append('category', formState.inputs.category.value);
        // formData.append('subcategory', formState.inputs.subcategory.value);
        // formData.append('stylecategory', formState.inputs.stylecategory.value);
        formData.append('store', formState.inputs.store.value);
        formData.append('availability', formState.inputs.availability.value);

        appendFormDataWithLineBreak(formData, 'upc', formState.inputs.upc.value);
        appendFormDataWithLineBreak(formData, 'videos', formState.inputs.videos.value);

        formData.append('specTitle1', formState.inputs.specTitle1.value);
        formData.append('specTitle2', formState.inputs.specTitle2.value);
        formData.append('specTitle3', formState.inputs.specTitle3.value);
        formData.append('specTitle4', formState.inputs.specTitle4.value);
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

        // Step 5: Handle submission for product copy or update
        setIsManagedDataState(prevState => ({ ...prevState, loading: true }));
        try {
            let response;
            if (productTemplate) {
                // Create product using template
                response = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}copy-product`, 'POST', formData);
                // response = await sendRequest(`http://localhost:3005/copy-product`, 'POST', formData);
            } else {
                // Update existing product
                // response = await sendRequest(`http://localhost:3005/edit-product/${productId}`, 'PATCH', formData);
                response = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}edit-product/${productId}`, 'PATCH', formData);
            }

            // Handle successful response
            if (response.responseStatusCode === 201) {
                setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
                setIsRoutingState(prevState => ({ ...prevState, isLoading: false }));

                setIsModal({
                    show: true,
                    modalType: 'successModal',
                    title: "Success",
                    message: productTemplate
                        ? "Congrats! The product was added."
                        : "Congrats! The product was updated successfully.",
                    errorList: [], // Clear errors on success
                    onCancel: handleProductDirectoryModalClick,
                    cancelText: "Go to product directory",
                });
            }
        } catch (err) {
            // Handle error response
            setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
            setIsModal({
                show: true,
                modalType: 'infoModal',
                iconType: 'errorInfo',
                title: "Update Failed",
                message: err.toString().replace(/^Error:\s*/, ''),
                onConfirm: () => setIsModal({ show: false }),
                onCancel: () => setIsModal({ show: false }),
                confirmText: "Close",
                cancelText: "Try again",
            });
        }
    };



    return (

        <FormComponent>
            <FormSection
                sectionTitle="Define your product"
                sectionDescription="Update product headlines or retailer information."
            >
                <FormWrapper>
                    <TextInput
                        id="title"
                        name="title"
                        labelName="Title"
                      secondaryLabelToolTip='Title must be between 3 and 100 characters. Special characters allowed ( / - _ ). Use a dash between two product names, when necessary ie. DLE7000W-DLG7001W. '
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
                         secondaryLabelToolTip='Subtitle must be between 8 and 1000 characters. Please note, the ampersand symbole (&) will replaced with (and) if used in the product subtitle. '
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
                        secondaryLabelToolTip="LG Exclusive is selected by default."
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
                           secondaryLabelToolTip="Availability applies to the general release of a product, not specific to an individual store inventory."
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
                sectionDescription="A category is required to complete this step."
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
                                // secondaryLabel='Example, Front Load Washer'
                                   secondaryLabelToolTip='Style category cannot exceed 100 characters. Special characters allowed ( / - _ ). ie. Front Load Washer Special.'
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
                sectionTitle="Add the product image"
                 sectionDescription="Upload the front facing product image with transparent background. File format should be a WEBP (preferred) or PNG, max 2MB). The file name should match the product title (ie. LRSXS2706_.webp )."
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
                       secondaryLabelToolTip="At least one list item with a minimum of three characters, including one letter, is required. One item per line, type enter to go to next line."
                        
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
                        secondaryLabelToolTip="One item per line, type enter to go to next line."
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
                        secondaryLabelToolTip="One item per line, type enter to go to next line."
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
                        secondaryLabelToolTip="One item per line, type enter to go to next line."
                        noTouchValidation={true}
                        initialValue={formState.inputs.specList4.value}
                        initialIsValid={formState.inputs.specList4.isValid}
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
                        initialValue={formState.inputs.videos.value}
                        initialIsValid={formState.inputs.videos.isValid}
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
                            // labelName={capitalizeFirstLetterEachWord(e.logo)}
                            labelName={e.logo}
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
                        initialValue={formState.inputs.upc.value}
                        initialIsValid={formState.inputs.upc.isValid}
                        onInput={inputHandler}
                    />
                </FormWrapper>

            </FormSection>

            <FormSection
               sectionTitle="Add external resources"
                sectionDescription="Add a custom resource by adding a new group. It must contain the title, URL and QR code. Title is what will show on button, ie. Owner’s Manual or Accessory Guide. QR code file must be a JPEG, PNG or WEBP, max size 2MB."
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
                        secondaryLabelToolTip="Specification Sheet Link must be valid HTTPS URL from the domain lg.widen.net'."
                     
                        validators={[]}
                        onInput={inputHandler}
                        initialValue={formState.inputs.specSheetLink.value}
                        initialIsValid={formState.inputs.specSheetLink.isValid}
                    />
                </FormWrapper>

            </FormSection>

            <FormSection
                sectionTitle="Add external resources"
                sectionDescription="Add a custom resource by adding a new group. It must contain the title, URL and QR code. Title is what will show on button, ie. Owner’s Manual or Accessory Guide. QR code file must be a JPEG, PNG or WEBP, max size 2MB"
            >
                <ResourceFormSection initialSections={initialSections} onSectionsChange={setSections} />
            </FormSection>
            <FormSection
                sectionTitle="Set the MSRP to determine product order"
                sectionDescription="The MSRP is used to determine where your new product will show up in relation to other products in the same category. The product with the highest MSRP will show first. MSRP is optional and will be set to 0 when left blank."
            >
                <NumberInput
                    id="msrp"
                    name="msrp"
                    secondaryLabelToolTip={"MSRP is optional and will be set to 0 when left blank. The MSRP is used to list products in order from lowest \"0\" to highest \"100000\" when featured amongst other products in their respective product category page."}
                    validators={[]}
                    initialValue={formState.inputs.msrp.value}
                    initialIsValid={formState.inputs.msrp.isValid}
                    onInput={inputHandler}
                    labelName="MSRP"
                />
            </FormSection>
            <div className={styles.formFooter}>
                <FormSection
                    sectionTitle={formTextElements.footerTitleText}
                    sectionDescription="Ensure all details meet format requirements before submitting. Visit the product page after submission to review the listing."
                >
                    <FormWrapper>
                        {/* <Button onClick={handleFormSubmit} type="button" buttonStyleType="primaryAction"> */}
                        <Button onClick={handlePreFormSubmit} type="button" buttonStyleType="primaryAction">
                            {formTextElements.buttonText}

                        </Button>

                    </FormWrapper>

                </FormSection>


            </div>

        </FormComponent>
    )
}