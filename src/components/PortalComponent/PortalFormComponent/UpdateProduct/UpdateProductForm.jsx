import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { PageText } from "../../../Text/Text";
import styles from "../PortalForm.module.css";
import { Button } from "../../../Button/Button";

import { useAuth } from "../../../../hooks/auth-hook";
import { useForm } from "../../../../hooks/form-hook";

import { useHttpClient } from "../../../../hooks/http-hook";
import { useDataContext } from "../../../../hooks/data-hook";

import { Select } from "../../../FormComponent/Select/Select";

import { useRoutingHook } from "../../../../hooks/routing-hook";
import { useProductsHook } from "../../../../hooks/product-hook";

import { VALIDATOR_REQUIRE } from "../../../../utils/validators";
import { TextArea } from "../../../FormComponent/TextArea/TextArea";
import { Checkbox } from "../../../FormComponent/Checkbox/Checkbox";
import { FormComponent } from "../../../FormComponent/FormComponent";

import { TextInput } from "../../../FormComponent/TextInput/TextInput";
import { NumberInput } from "../../../FormComponent/Number/NumberInput";


import { useNotificationHook } from "../../../../hooks/notification-hook";
import { capitalizeFirstLetterEachWord } from "../../../../utils/text-help";
import { FormWrapper } from "../../../FormComponent/FormWrapper/FormWrapper";
import { FormSection } from "../../../FormComponent/FormSection/FormSection";

import { appendFormDataWithLineBreak } from "../../../../utils/form-helpers";
import { ResourceFormSection } from "../../../FormComponent/Dynamic/ResourceFormSection";
import { StaticImageUpload } from "../../../FormComponent/ImageUpload/StaticImageUpload";
import { validateProductForm, validateDuplicateProductForm } from "../../../../utils/form-validation";
import { useCategories, useCategoryOptions, useColorOptions, useLogoOptions, useColumnTitles, useYearHelper } from "../../../../hooks/use-form-helpers-hook";




export const UpdateProductForm = ({ productId, productTemplate = false }) => {


    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const [selectedQrcode, setSelectedQrcode] = useState(null);
    const [qrcodePreviewUrl, setQrcodePreviewUrl] = useState(null);

    const redirect = useNavigate();
    const { authUserId, isAdmin, isSuperAdmin, isAuthenticated } = useAuth();

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
        ? { buttonText: 'Create new product' } : { buttonText: 'Update product' }

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
        setIsManagedDataState(prevState => ({ ...prevState, preloading: true }));
        if (productId) {

            const fetchProductData = async () => {

                try {
                    const response = await sendRequest(` ${process.env.REACT_APP_BACKEND_URL}product/${productId}`);

                    const productData = await response.responseData.product;

                    console.log('product', productData)
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

    console.log(isManagedDataState)
    /* --------------------------------------------------------------------------------------- */
    /* HANDLE FORM SUBMIT*/
    /* --------------------------------------------------------------------------------------- */

    const handlePreFormSubmit = async (e) => {


        e.preventDefault();

        console.log('product template =', productTemplate)

        if (!isAdmin || !isSuperAdmin) {

            setIsModal({
                show: true,
                modalType: 'confirmationModal',
                title: "Error",
                message: `Please contact an administrator.`,
                cancelText: "Go back",
                onCancel: () => setIsModal({ show: false }),
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
                console.log(newSection, originalSection)
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
            console.log(formState.inputs.upc.value, isManagedDataState.data.upc)

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
                selectedQrcode !== null
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
        console.log(errorMessage, processedValues)

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
        formData.append('msrp', formState.inputs.msrp.value || 0 );
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
                // response = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}copy-product`, 'POST', formData);
                response = await sendRequest(`http://localhost:3005/copy-product`, 'POST', formData);
            } else {
                // Update existing product
                response = await sendRequest(`http://localhost:3005/edit-product/${productId}`, 'PATCH', formData);
                // response = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}edit-product/${productId}`, 'PATCH', formData);
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


    // const handleFormSubmit = async (e) => {


    //     // const formErrors = validateProductForm(formState, sections);
    //     const formErrors = productTemplate === true 
    //     ? validateDuplicateProductForm(formState, sections)
    //     : validateProductForm(formState, sections) ;
    //     console.log(formErrors)

    //     // Validate the dynamic sections
    //     // const formSectionErrors = validateDynamicSections(values.sections);

    //     // Combine all errors
    //     const errorMessage = [...formErrors];
    //     // const errorMessage = [...formErrors, ...formSectionErrors.map(error => `${error.section + 1}: ${error.message}`)];
    //     console.log('err', errorMessage)
    //     if (errorMessage.length !== 0) {
    //         // setIsModal(prevState => ({
    //         //     ...prevState, 
    //         //     errorList: errorMessage,
    //         // }));
    //         setIsModal({

    //             show: true,
    //             modalType: 'errorModal',
    //             title: "Almosts there",
    //             iconType: 'errorInfo',
    //             message: "You need to fix the following errors to continue.",
    //             errorList: errorMessage,
    //             onConfirm: () => setIsModal({ show: false }),
    //             onCancel: () => setIsModal({ show: false }),
    //             confirmText: "Close",
    //             cancelText: "Go back",
    //             // show: true,
    //             // modalType: 'infoModal',
    //             // title: "Almost there",
    //             // message: "You need to fix the following errors to continue.",
    //             // errorList: errorMessage,
    //             // onConfirm: () => setIsModal({ show: false }),
    //             // onCancel: () => setIsModal({ show: false }),
    //             // confirmText: "Close",
    //             // cancelText: "Go back",

    //         });

    //     } else {

    //         const formData = new FormData();
    //         formData.append('image', selectedFile || loadedProduct.image)
    //         formData.append('qrcode', selectedQrcode || loadedProduct.qrcode)

    //         // formData.append('qrcode', formState.inputs.qrcode.value)
    //         formData.append('title', formState.inputs.title.value)
    //         formData.append('msrp', formState.inputs.msrp.value)
    //         formData.append('subtitle', formState.inputs.subtitle.value)
    //         formData.append('specSheetLink', formState.inputs.specSheetLink.value)
    //         formData.append('category', formState.inputs.category.value)
    //         formData.append('subcategory', formState.inputs.subcategory.value)
    //         formData.append('stylecategory', formState.inputs.stylecategory.value)
    //         formData.append('store', formState.inputs.store.value)
    //         formData.append('availability', formState.inputs.availability.value)

    //         appendFormDataWithLineBreak(formData, 'upc', formState.inputs.upc.value);
    //         appendFormDataWithLineBreak(formData, 'videos', formState.inputs.videos.value);

    //         formData.append('specTitle1', formState.inputs.specTitle1.value)
    //         formData.append('specTitle2', formState.inputs.specTitle2.value)
    //         formData.append('specTitle3', formState.inputs.specTitle3.value)
    //         formData.append('specTitle4', formState.inputs.specTitle4.value)
    //         appendFormDataWithLineBreak(formData, 'specList1', formState.inputs.specList1.value);
    //         appendFormDataWithLineBreak(formData, 'specList2', formState.inputs.specList2.value);
    //         appendFormDataWithLineBreak(formData, 'specList3', formState.inputs.specList3.value);
    //         appendFormDataWithLineBreak(formData, 'specList4', formState.inputs.specList4.value);


    //         sections.forEach((section, index) => {
    //             formData.append(`sections[${index}][resourceTitle]`, section.resourceTitle);
    //             formData.append(`sections[${index}][resourceUrl]`, section.resourceUrl);

    //             if (section.resourceQrCodeImage instanceof File) {
    //                 // New file selected
    //                 formData.append(`sections[${index}][resourceQrCodeImage]`, section.resourceQrCodeImage);
    //             } else if (section.resourceQrCodeImage) {
    //                 // Original image path should be preserved
    //                 formData.append(`sections[${index}][resourceQrCodeImage]`, section.originalResourceQrCodeImage);
    //             }
    //         });
    //         for (const logo of selectedLogos) {
    //             formData.append('logos', logo);
    //         }
    //         for (const color of selectedColors) {
    //             formData.append('colors', color);
    //         }
    //         formData.append('creator', authUserId);



    //         if (productTemplate === true) {

    //             setIsManagedDataState(prevState => ({ ...prevState, loading: true }));

    //             try {
    //                 const response = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}copy-product`,
    //                     'POST',
    //                     formData
    //                 )

    //                 if (response.responseStatusCode === 201) {
    //                     setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
    //                     setIsRoutingState(prevState => ({ ...prevState, isLoading: false }));

    //                     setIsModal({

    //                         show: true,
    //                         modalType: 'successModal',
    //                         title: "Success",
    //                         message: "Congrats! The product was added.",
    //                         errorList: errorMessage,
    //                         // onConfirm: () => setIsModal({ show: false }),
    //                         onCancel: handleProductDirectoryModalClick,
    //                         // confirmText: "Close",
    //                         cancelText: "Go to product directory",

    //                     });
    //                 }

    //             } catch (err) {
    //                 setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
    //                 setIsModal({
    //                     show: true,
    //                     modalType: 'infoModal',
    //                     iconType: 'errorInfo',
    //                     // title: "Almost there",
    //                     // message: "You need to fix the following errors to continue.",
    //                     // errorList: errorMessage,
    //                     onConfirm: () => setIsModal({ show: false }),
    //                     onCancel: () => setIsModal({ show: false }),
    //                     confirmText: "Close",
    //                     cancelText: "Go back",
    //                 });

    //             }
    //         } else {
    //             setIsManagedDataState(prevState => ({ ...prevState, loading: true }));
    //             try {
    //                 const response = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}edit-product/${productId}`,
    //                     // const response = await sendRequest(`http://localhost:3005/edit-product/${productId}`,
    //                     'PATCH',
    //                     formData
    //                 )
    //                 if (response.responseStatusCode === 201) {
    //                     setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
    //                     setIsRoutingState(prevState => ({ ...prevState, isLoading: false }));

    //                     setIsModal({

    //                         show: true,
    //                         modalType: 'successModal',
    //                         title: "Success",
    //                         message: "Congrats! The product was updated successfully.",
    //                         errorList: errorMessage,
    //                         // onConfirm: () => setIsModal({ show: false }),
    //                         onCancel: handleProductDirectoryModalClick,
    //                         // confirmText: "Close",
    //                         cancelText: "Go to product directory",

    //                     });

    //                     // THIS MIGHT NOT BE NEEDED
    //                     setTimeout(() => {
    //                         // alert('Product updated successfully');
    //                     }, 100);
    //                 }

    //             } catch (error) {
    //                 setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
    //                 console.log(error)

    //                 const revisedErrorMessage = error.toString().replace(/^Error:\s*/, '');
    //                 setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
    //                 setIsModal({
    //                     show: true,
    //                     iconType: 'errorInfo',
    //                     modalType: 'infoModal',
    //                     title: "Update Failed",
    //                     message: revisedErrorMessage,
    //                     // errorList: errorMessage,
    //                     onConfirm: () => setIsModal({ show: false }),
    //                     onCancel: () => setIsModal({ show: false }),
    //                     confirmText: "Close",
    //                     cancelText: "Try again",
    //                 })
    //             }
    //         }


    //     }


    // }

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
                    <div className={styles.logoSectionTitle}>
                        <PageText type="pageSubtitle">UPC Codes</PageText>
                    </div>
                    <TextArea
                        id="upc"
                        name="upc"
                        labelName="UPC Codes"
                        secondaryLabelToolTip="Other than brackets () no special characters allowed."
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
                    sectionDescription="Confirm product details are in the required formats. Visit the product details page after your submit to review the updated product listing"
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