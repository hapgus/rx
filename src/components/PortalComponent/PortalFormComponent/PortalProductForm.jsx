
import { useForm } from "../../../hooks/use-form-hook";
import { DynamicSections } from "../../FormComponent/DynamicSectionsFormElement";
import { FormComponent } from "../../FormComponent/FormComponent";
import { FormElement } from "../../FormComponent/FormElement";

import styles from './PortalForm.module.css'
import { PageText } from "../../Text/Text";
import { Button } from "../../Button/Button";

import { VALIDATOR_REQUIRE } from "../../../utils/validators";
import { TextInput } from "../../FormComponent/TextInput/TextInput";
import { TextArea } from "../../FormComponent/TextArea/TextArea";
import { useCallback, useReducer, useState, useEffect } from "react";
import { Select } from "../../FormComponent/Select/Select";
import { Checkbox } from "../../FormComponent/Checkbox/Checkbox";

// const formReducer = (state, action) => {
//     switch (action.type) {
//         case 'INPUT_CHANGE':

     
//             let formIsValid = true;
//             for (const inputId in state.inputs) {
//                 if (inputId === action.inputId) {
//                     formIsValid = formIsValid && action.isValid;
//                 } else {
//                     formIsValid = formIsValid && state.inputs[inputId].isValid;
//                 }
//             }
//             return {
//                 ...state,
//                 inputs: {
//                     ...state.inputs,
//                     [action.inputId]: { 
//                         value: action.value, 
//                         isValid: action.isValid 
//                     }
//                 },
//                 isValid: formIsValid
//             };
//         default:
//             return state;
//     }
// };
const formReducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'INPUT_CHANGE':
            const updatedInputs = {
                ...state.inputs,
                [action.inputId]: {
                    value: action.value,
                    isValid: action.isValid,
                },
            };

            let formIsValid = true;
            for (const inputId in updatedInputs) {
                formIsValid = formIsValid && updatedInputs[inputId].isValid;
            }

            return {
                ...state,
                inputs: updatedInputs,
                isValid: formIsValid,
            };

        default:
            return state;
    }
};
export const PortalProductForm = () => {

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: { value: '', isValid: false },
            subtitle: { value: '', isValid: false },
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
            colors: { value: [], isValid: false },
            logos: { value: [], isValid: false },

        },
        isValid: false
    });


    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value: value,
            isValid: isValid,
            inputId: id
        });
    }, []);


    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;


    // const { handleSectionChange, errors, handleChange, values } = useForm({
    //  
    //     category: "",
    //     subcategory: "",
    //    
    //     msrp: "",


    //  
    //     sections: [],
    //     colors: [],
    //     logos: []

    // })

    // const [subcategoryOptions, setSubcategoryOptions] = useState([]);

    // useEffect(() => {
    //     const options = {
    //         "air care": [
    //             { value: "air care", label: "Air care" },
    //         ],
    //         "cooking": [
    //             { value: "ranges", label: "Ranges" },
    //             { value: "built-in", label: "Built-in" },
    //             { value: "microwaves", label: "Microwaves" },
    //         ],
    //         "laundry": [
    //             { value: "all-in-one", label: "All-In-One" },
    //             { value: "washers", label: "Washers" },
    //             { value: "dryers", label: "Dryers" },
    //             { value: "washtower", label: "WashTower" },
    //             { value: "stylers", label: "Stylers" },
    //             { value: "accessories", label: "Accessories" },
    //         ],
    //         "refrigeration": [
    //             { value: "french door", label: "French Door" },
    //             { value: "side-by-side", label: "Side-by-Side" },
    //             { value: "top and bottom freezer", label: "Top and Bottom Freezer" },
    //             { value: "single door", label: "Single Door" },
    //         ],
    //         "dishwashers": [
    //             { value: "dishwasher", label: "Dishwasher" },
    //         ],
    //         "vacuums": [
    //             { value: "vacuum", label: "vacuum" },
    //         ],
    //         "signature": [
    //             { value: "laundry", label: "Laundry" },
    //             { value: "dishwasher", label: "Dishwasher" },
    //             { value: "refrigeration", label: "Refrigeration" },
    //             { value: "cooking", label: "Cooking" },
    //             { value: "accessories", label: "Accessories" },
    //         ],
    //         "studio": [
    //             { value: "laundry", label: "Laundry" },
    //             { value: "dishwasher", label: "Dishwasher" },
    //             { value: "refrigeration", label: "Refrigeration" },
    //             { value: "cooking", label: "Cooking" },
    //             { value: "stylers", label: "Stylers" },
    //         ],
    //     };

    //     if (values.category) {
    //         setSubcategoryOptions(options[values.category.toLowerCase()] || []);
    //     } else {
    //         setSubcategoryOptions([]);
    //     }
    // }, [values.category]);

    // const currentYear = new Date().getFullYear();
    // const nextYear = currentYear + 1;

    const columnTitleOptions = [
        { value: "stylish design", label: "Stylish Design" },
        { value: "innovations", label: "Innovations" },
        { value: "specifications", label: "Specifications" },
        { value: "organization", label: "Organization" },
    ];

    const colorOptions = [
        { color: 'black stainless steel' },
        { color: 'textured steel' },
        { color: 'noble steel' },
        { color: 'black tinted mirror' },
        { color: 'stainless steel' },
        { color: 'essence white', },
        { color: 'printproof stainless steel' },
        { color: 'black' },
        { color: 'black steel' },
        { color: 'graphite steel' },
        { color: 'middle black' },
        { color: 'apline white' },
        { color: 'matte black' },
        { color: 'monochrome grey' },
        { color: 'candy apple red' },

        { color: 'nature green' },
        { color: 'cream white' },
        { color: 'espresso dark brown' },
        { color: 'mirror finish' },

        { color: 'metallic charcoal' },
        { color: 'printproof black stainless steel' },
        { color: 'smooth white' },
        { color: 'stainless steel (pcm)', },
        { color: 'platinum silver' },
        { color: 'black ceramic' },
        { color: 'smooth black' },
        { color: 'stainless steel look' },
        { color: 'graphite' },
        { color: 'iron grey' },
        { color: 'matte silver' }
    ]

    const techLogoOptions = [
        { logo: 'lgThinQ' },
        { logo: 'Ada' },
        { logo: 'lgDoorInDoorWithCraftIce' },
        { logo: 'counterDepthMax' },
        { logo: 'energyStar' },
        { logo: 'energyStarMostEfficient2023' },
        { logo: 'energyStarMostEfficient' },
        { logo: 'garageReady' },
        { logo: 'innit' },
        { logo: 'kompressor' },
        { logo: 'rated1ElectricDryer' },
        { logo: 'rated1FrenchDoorRefrigerator' },
        { logo: 'rated1FrontLoadWasher' },
        { logo: 'rated1TopLoadWasher' },
        { logo: 'reddot' },
        { logo: 'sidechef' },
        { logo: 'standardDepthMax' },
        { logo: 'ThinQ Care' },
        { logo: '2yrWarrantyPartsLabor' },
        { logo: 'ThinQ Up' },
        { logo: 'washerDryerAllOneCombo' },
        { logo: 'lGWashTowerWithCenterControl' },
        { logo: 'worksWithAlexa' }
    ]

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('creator', '669d89abd83506711b144161');
        console.log(formState)
        // Object.keys(values).forEach(key => {
        //     formData.append(key, values[key]);
        // });

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
        // const dataResult = formData.values()
        // console.log('3', dataResult)
        // try {
        //     const response = await fetch('http://localhost:3005/add-product', {
        //         method: 'POST',
        //         body: formData,
        //     });

        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }

        //     const data = await response.json();
        //     console.log('Success:', data);
        // } catch (error) {
        //     console.error('Error:', error);
        // }
    };

    return (
        <FormComponent onSubmit={handleFormSubmit}>
            <div className={styles.sectionContent}>
                <TextInput
                    id="title"
                    name="title"
                    labelName="Model title"
                    secondaryLabel='e.g. MXY8Z'
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
                <TextInput
                    id="stylecategory"
                    name="stylecategory"
                    labelName="Style category"
                    secondaryLabel='Optional'
                    errorText=' Style category error'
                    noTouchValidation={true}
                    validators={[]}
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
                        { value: "lg", label: "LG Generic" },
                        { value: "hd", label: "Home Depot" }
                    ]}
                />
                <Select
                    id='availability'
                    name="availability"
                    labelName="Retailer"
                    // errorText='Please select a retailer'
                    validators={[]}
                    onInput={inputHandler}
                    options={[
                        { value: "", label: "Set Availability", disabled: true },
                        { value: `Available`, label: `Available` },
                        { value: `EOL`, label: `EOL` },
                        { value: `Q1 ${currentYear}`, label: `Q1 ${currentYear}` },
                        { value: `Q2 ${currentYear}`, label: `Q2 ${currentYear}` },
                        { value: `Q3 ${currentYear}`, label: `Q3 ${currentYear}` },
                        { value: `Q4 ${currentYear}`, label: `Q4 ${currentYear}` },
                        { value: `Q1 ${nextYear}`, label: `Q1 ${nextYear}` },
                        { value: `Q2 ${nextYear}`, label: `Q2 ${nextYear}` },
                        { value: `Q3 ${nextYear}`, label: `Q3 ${nextYear}` },
                        { value: `Q4 ${nextYear}`, label: `Q4 ${nextYear}` },
                    ]}
                />
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
                    labelName="List 1"
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
                    labelName="List 2"
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
                    labelName="List 3"
                    noTouchValidation={true}
                />
                 <div className={styles.sectionContent}>
                {techLogoOptions.map((e, index) => (
                    <Checkbox
                        key={index}
                        id="logos" // Ensure this ID is consistent with the form state key
                        name="logos"
                        labelName={e.logo}
                        value={e.logo}
                        onInput={inputHandler}
                        initialChecked={formState.inputs.logos.value}
                    />
                ))}
            </div>
            </div>

            {/* 

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">MSRP retailer and availability</PageText>
                    <PageText type="pageTertiaryTitle">Pick retailer</PageText>
                </div>
                <div className={styles.sectionContent}>
                   

                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">Model name/title and subtitles</PageText>
                    <PageText type="pageTertiaryTitle">Add model name and subtitle</PageText>
                </div>

                <div className={styles.sectionContent}>
                   
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">Category</PageText>
                    <PageText type="pageTertiaryTitle">Pick category</PageText>

                </div>
                <div className={styles.sectionContent}>

                 
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">Youtube videos</PageText>
                    <PageText type="pageTertiaryTitle">Add feature videos</PageText>
                </div>
                <div className={styles.sectionContent}>
                    <FormElement
                        id="videos"
                        name="videos"
                        type="textarea"
                        value={values.videos}
                        rows={10}
                        onChange={handleChange}
                        labelName="Youtube Videos"
                        feedback={!!errors.videos}
                        feedbackType={errors.videos ? "error" : "success"}
                        feedbackMessage={errors.videos || "Looks good"}
                    />
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">Specifications</PageText>
                    <PageText type="pageTertiaryTitle">Add specifcation details</PageText>
                </div>
                <div className={styles.sectionContent}>
                    <FormElement
                        id="specTitle1"
                        name="specTitle1"
                        type="selectmenu"
                        value={values.specTitle1}
                        onChange={handleChange}
                        labelName="Column title 1"
                        options={columnTitleOptions}
                        feedback={!!errors.specTitle1}
                        feedbackType={errors.specTitle1 ? "error" : "success"}
                        feedbackMessage={errors.specTitle1 || "Looks good"}
                    />
                    <FormElement
                        id="specList1"
                        name="specList1"
                        type="textarea"
                        value={values.specList1}
                        rows={10}
                        onChange={handleChange}
                        labelName="Column list 1"
                        feedback={!!errors.specList1}
                        feedbackType={errors.specList1 ? "error" : "success"}
                        feedbackMessage={errors.specList1 || "Looks good"}
                    />
                    <FormElement
                        id="specTitle2"
                        name="specTitle2"
                        type="selectmenu"
                        value={values.specTitle2}
                        onChange={handleChange}
                        labelName="Column title 2"
                        options={columnTitleOptions}
                        feedback={!!errors.specTitle2}
                        feedbackType={errors.specTitle2 ? "error" : "success"}
                        feedbackMessage={errors.specTitle2 || "Looks good"}
                    />
                    <FormElement
                        id="specList2"
                        name="specList2"
                        type="textarea"
                        value={values.specList2}
                        rows={10}
                        onChange={handleChange}
                        labelName="Column list 2"
                        feedback={!!errors.specList2}
                        feedbackType={errors.specList2 ? "error" : "success"}
                        feedbackMessage={errors.specList2 || "Looks good"}
                    />
                    <FormElement
                        id="specTitle3"
                        name="specTitle3"
                        type="selectmenu"
                        value={values.specTitle3}
                        onChange={handleChange}
                        labelName="Column title 3"
                        options={columnTitleOptions}
                        feedback={!!errors.specTitle3}
                        feedbackType={errors.specTitle3 ? "error" : "success"}
                        feedbackMessage={errors.specTitle3 || "Looks good"}
                    />
                    <FormElement
                        id="specList3"
                        name="specList3"
                        type="textarea"
                        value={values.specList3}
                        rows={10}
                        onChange={handleChange}
                        labelName="Column list 3"
                        feedback={!!errors.specList3}
                        feedbackType={errors.specList3 ? "error" : "success"}
                        feedbackMessage={errors.specList3 || "Looks good"}
                    />
                    <FormElement
                        id="specTitle4"
                        name="specTitle4"
                        type="selectmenu"
                        value={values.specTitle4}
                        onChange={handleChange}
                        labelName="Column title 4"
                        options={columnTitleOptions}
                        feedback={!!errors.specTitle4}
                        feedbackType={errors.specTitle4 ? "error" : "success"}
                        feedbackMessage={errors.specTitle4 || "Looks good"}
                    />
                    <FormElement
                        id="specList4"
                        name="specList4"
                        type="textarea"
                        value={values.specList4}
                        rows={10}
                        onChange={handleChange}
                        labelName="Column list 4"
                        feedback={!!errors.specList4}
                        feedbackType={errors.specList4 ? "error" : "success"}
                        feedbackMessage={errors.specList4 || "Looks good"}
                    />
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">Color Section</PageText>
                    <PageText type="pageTertiaryTitle">Pick colors</PageText>
                </div>
                <div className={styles.sectionContent}>
                    {
                        colorOptions && colorOptions.map((e, index) => (
                            <FormElement
                                key={index}
                                id={e.color}
                                name="colors"
                                type="checkbox"
                                value={e.color}
                                checked={values.colors.includes(e.color)}
                                onChange={handleChange}
                                labelName={e.color}
                                checkboxName={e.color}
                            />
                        ))
                    }
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">Technology logos</PageText>
                    <PageText type="pageTertiaryTitle">Tech logos</PageText>
                </div>
                <div className={styles.sectionContent}>
                    {
                        techLogoOptions.map((e, index) => (
                            <FormElement
                                key={index}
                                id={e.logo}
                                name="logos"
                                type="checkbox"
                                value={e.logo}
                                checked={values.logos.includes(e.logo)}
                                onChange={handleChange}
                                labelName={e.logo}
                                checkboxName={e.logo}
                            />
                        ))
                    }
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <PageText type="pageTitle">UPC Codes</PageText>
                    <PageText type="pageTertiaryTitle">Add the UPC Codesa</PageText>

                </div>
                <div className={styles.sectionContent}>
                    <FormElement
                        id="upc"
                        name="upc"
                        type="textarea"
                        value={values.upc}
                        rows={10}
                        onChange={handleChange}
                        labelName="UPC Code"
                        feedback={!!errors.upc}
                        feedbackType={errors.upc ? "error" : "success"}
                        feedbackMessage={errors.upc || "Looks good"}
                    />
                </div>
            </section>

            <section className={styles.section}>
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
            </section>
 */}

            <div className={styles.formButtonWrapper}>

                <Button type="submit" buttonStyleType="primaryAction">
                    Add product
                </Button>

            </div>
        </FormComponent>
    );
};


