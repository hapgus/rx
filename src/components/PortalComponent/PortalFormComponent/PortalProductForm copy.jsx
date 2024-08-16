
import { useForm } from "../../../hooks/use-form-hook";
import { DynamicSections } from "../../FormComponent/DynamicSectionsFormElement";
import { FormComponent } from "../../FormComponent/FormComponent";
import { FormElement } from "../../FormComponent/FormElement";
import { useState, useEffect } from "react";

export const PortalProductForm = () => {
    const { values, errors, handleChange, 
        handleSectionChange, 
        addSection, 
        handleSubmit } = useForm({
        title: "",
        subtitle: "",
        category: "",
        subcategory: "",
        stylecategory: "",
        msrp: "",
        availability: "",
        store: "",
        upc: "",
        videos: "",
        specTitle1: "",
        specTitle2: "",
        specTitle3: "",
        specTitle4: "",
        specList1: "",
        specList2: "",
        specList3: "",
        specList4: "",
        sections: [],
    });

    const [subcategoryOptions, setSubcategoryOptions] = useState([]);

    useEffect(() => {
        const options = {
            "air care": [
                { value: "air care", label: "Air care" },
            ],
            "cooking": [
                { value: "ranges", label: "Ranges" },
                { value: "built-in", label: "Built-in" },
                { value: "microwaves", label: "Microwaves" },
            ],
            "laundry": [
                { value: "all-in-one", label: "All-In-One" },
                { value: "washers", label: "Washers" },
                { value: "dryers", label: "Dryers" },
                { value: "washtower", label: "WashTower" },
                { value: "stylers", label: "Stylers" },
                { value: "accessories", label: "Accessories" },
            ],
            "refrigeration": [
                { value: "french door", label: "French Door" },
                { value: "side-by-side", label: "Side-by-Side" },
                { value: "top and bottom freezer", label: "Top and Bottom Freezer" },
                { value: "single door", label: "Single Door" },
            ],
            "dishwashers": [
                { value: "dishwasher", label: "Dishwasher" },
            ],
            "vacuums": [
                { value: "vacuum", label: "vacuum" },
            ],
            "signature": [
                { value: "laundry", label: "Laundry" },
                { value: "dishwasher", label: "Dishwasher" },
                { value: "refrigeration", label: "Refrigeration" },
                { value: "cooking", label: "Cooking" },
                { value: "accessories", label: "Accessories" },
            ],
            "studio": [
                { value: "laundry", label: "Laundry" },
                { value: "dishwasher", label: "Dishwasher" },
                { value: "refrigeration", label: "Refrigeration" },
                { value: "cooking", label: "Cooking" },
                { value: "stylers", label: "Stylers" },
            ],
        };

        if (values.category) {
            setSubcategoryOptions(options[values.category.toLowerCase()] || []);
        } else {
            setSubcategoryOptions([]);
        }
    }, [values.category]);

    const submitForm = () => {
        console.log("Form data:", values);
    };

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;

    const columnTitleOptions = [
        { value: "stylish design", label: "Stylish Design" },
        { value: "innovations", label: "Innovations" },
        { value: "specifications", label: "Specifications" },
        { value: "organization", label: "Organization" },
    ];

    return (
        <FormComponent onSubmit={handleSubmit(submitForm)}>
            <FormElement
                id="title"
                name="title"
                secondaryLabel='e.g. MXY8Z'
                type="textinput"
                value={values.title}
                onChange={handleChange}
                labelName="Model title"
                feedback={!!errors.title}
                feedbackType={errors.title ? "error" : "success"}
                feedbackMessage={errors.title || "Looks good"}
            />
            <FormElement
                id="subtitle"
                name="subtitle"
                secondaryLabel='Min 15 characters'
                type="textarea"
                value={values.subtitle}
                onChange={handleChange}
                labelName="Subtitle"
                feedback={!!errors.subtitle}
                feedbackType={errors.subtitle ? "error" : "success"}
                feedbackMessage={errors.subtitle || "Looks good"}
            />
            <FormElement
                id="msrp"
                name="msrp"
                type="textnumber"
                value={values.msrp}
                onChange={handleChange}
                labelName="MSRP"
                feedback={!!errors.msrp}
                feedbackType={errors.msrp ? "error" : "success"}
                feedbackMessage={errors.msrp || "Looks good"}
            />
            <FormElement
                id='store'
                name="store"
                type='selectmenu'
                labelName="Retailer"
                onChange={handleChange}
                value={values.store}
                feedback={!!errors.store}
                feedbackType={errors.store ? "error" : "success"}
                feedbackMessage={errors.store || "Looks good"}
                options={[
                    { value: "lg", label: "LG Generic" },
                    { value: "hd", label: "Home Depot" }
                ]}
            />
            <FormElement
                id='availability'
                name="availability"
                type='selectmenu'
                labelName="Availability"
                onChange={handleChange}
                value={values.availability}
                feedback={!!errors.availability}
                feedbackType={errors.availability ? "error" : "success"}
                feedbackMessage={errors.availability || "Looks good"}
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
            <FormElement
                labelName="Category"
                id='category'
                name="category"
                type='selectmenu'
                onChange={handleChange}
                value={values.category}
                feedback={!!errors.category}
                feedbackType={errors.category ? "error" : "success"}
                feedbackMessage={errors.category || "Looks good"}
                options={[
                    { value: "air care", label: "Air care" },
                    { value: "cooking", label: "Cooking" },
                    { value: "dishwashers", label: "Dishwashers" },
                    { value: "laundry", label: "Laundry" },
                    { value: "refrigeration", label: "Refrigeration" },
                    { value: "vacuums", label: "Vacuums" },
                    { value: "signature", label: "Signature" },
                    { value: "studio", label: "Studio" },
                ]}
            />
            {values.category && (
                <>
                    <FormElement
                        labelName="Subcategory"
                        id='subcategory'
                        name="subcategory"
                        type='selectmenu'
                        onChange={handleChange}
                        value={values.subcategory}
                        feedback={!!errors.subcategory}
                        feedbackType={errors.subcategory ? "error" : "success"}
                        feedbackMessage={errors.subcategory || "Looks good"}
                        options={subcategoryOptions}
                    />
                    <FormElement
                        id="stylecategory"
                        name="stylecategory"
                        secondaryLabel="This will be optional"
                        type="textinput"
                        value={values.stylecategory}
                        onChange={handleChange}
                        labelName="Style category"
                        feedback={!!errors.stylecategory}
                        feedbackType={errors.stylecategory ? "error" : "success"}
                        feedbackMessage={errors.stylecategory || "Looks good"}
                    />
                </>
            )}
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
            {/* <DynamicSections
             sections={values.sections} 
             handleNestedChange={handleNestedChange} 
             addSection={addSection} 
             errors={errors} 
             /> */}
              <DynamicSections
             sections={values.sections} 
             onChange={handleSectionChange} 
            //  addSection={addSection} 
            //  errors={errors} 
             />

            <button type="submit">Submit</button>
        </FormComponent>
    );
};


// import { useForm } from "../../../hooks/use-form-hook";
// import { DynamicSections } from "../../FormComponent/DynamicSectionsFormElement";
// import { FormComponent } from "../../FormComponent/FormComponent";
// import { FormElement } from "../../FormComponent/FormElement";
// import { useState, useEffect } from "react";

// export const PortalProductForm = () => {

//     const { values, errors, handleChange, handleNestedChange, addSection, handleSubmit } = useForm({
//         title: "",
//         subtitle: "",
//         category: "",
//         subcategory: "",
//         stylecategory:"",
//         msrp: "",
//         availability: "",
//         store: "",
//         upc: "",
//         videos: "",
//         specTitle1: "",
//         specTitle2: "",
//         specTitle3: "",
//         specTitle4: "",
//         specList1: "",
//         specList2: "",
//         specList3: "",
//         specList4: "",
//         sections: []

//     });
//     const [subcategoryOptions, setSubcategoryOptions] = useState([]);


//     useEffect(() => {
//         const options = {
//             "air care": [
//                 { value: "air care", label: "Air care" },
//             ],
//             "cooking": [
//                 { value: "ranges", label: "Ranges" },
//                 { value: "built-in", label: "Built-in" },
//                 { value: "microwaves", label: "Microwaves" },
//             ],
//             "laundry": [
//                 { value: "all-in-one", label: "All-In-One" },
//                 { value: "washers", label: "Washers" },
//                 { value: "dryers", label: "Dryers" },
//                 { value: "washtower", label: "WashTower" },
//                 { value: "stylers", label: "Stylers" },
//                 { value: "accessories", label: "Accessories" },
//             ],
//             "refrigeration": [
//                 { value: "french door", label: "French Door" },
//                 { value: "side-by-side", label: "Side-by-Side" },
//                 { value: "top and bottom freezer", label: "Top and Bottom Freezer" },
//                 { value: "single door", label: "Single Door" },
//             ],
//             "dishwashers": [
//                 { value: "dishwasher", label: "Dishwasher" },
//             ],
//             "vacuums": [
//                 { value: "vacuum", label: "vacuum" },
//             ],
//             "signature": [
//                 { value: "laundry", label: "Laundry" },
//                 { value: "dishwasher", label: "Dishwasher" },
//                 { value: "refrigeration", label: "Refrigeration" },
//                 { value: "cooking", label: "Cooking" },
//                 { value: "accessories", label: "Accessories" },
//             ],
//             "studio": [
//                 { value: "laundry", label: "Laundry" },
//                 { value: "dishwasher", label: "Dishwasher" },
//                 { value: "refrigeration", label: "Refrigeration" },
//                 { value: "cooking", label: "Cooking" },
//                 { value: "stylers", label: "Stylers" },
//             ],
//         };

//         if (values.category) {
//             setSubcategoryOptions(options[values.category.toLowerCase()] || []);
//         } else {
//             setSubcategoryOptions([]);
//         }
//     }, [values.category]);

//     const submitForm = () => {
//         console.log("Form data:", values);
//     };

//     const currentYear = new Date().getFullYear();
//     const nextYear = currentYear + 1;

//     const columnTitleOptions = [
//         { value: "stylish design", label: "Stylish Design" },
//         { value: "innovations", label: "Innovations" },
//         { value: "specifications", label: "Specifications" },
//         { value: "organization", label: "Organization" },
//     ];



//     return (
//         <FormComponent onSubmit={handleSubmit(submitForm)}>

//             <FormElement
//                 id="title"
//                 name="title"
//                 secondaryLabel='e.g. MXY8Z'
//                 type="textinput"
//                 value={values.title}
//                 onChange={handleChange}
//                 // placeholder="First Name"
//                 labelName="Model title"
//                 feedback={!!errors.title}
//                 feedbackType={errors.title ? "error" : "success"}
//                 feedbackMessage={errors.title || "Looks good"}
//             />

//             <FormElement
//                 id="subtitle"
//                 name="subtitle"
//                 secondaryLabel='Min 15 characters'
//                 type="textarea"
//                 value={values.subtitle}
//                 onChange={handleChange}
//                 // placeholder="First Name"
//                 labelName="Subtitle"
//                 feedback={!!errors.subtitle}
//                 feedbackType={errors.subtitle ? "error" : "success"}
//                 feedbackMessage={errors.subtitle || "Looks good"}
//             />
//             <FormElement
//                 id="msrp"
//                 name="msrp"
//                 // secondaryLabel='$'
//                 type="textnumber"

//                 value={values.msrp}
//                 onChange={handleChange}
//                 // placeholder="First Name"
//                 labelName="MSRP"
//                 feedback={!!errors.msrp}
//                 feedbackType={errors.msrp ? "error" : "success"}
//                 feedbackMessage={errors.msrp || "Looks good"}
//             />

//             <FormElement
//                 id='store'
//                 name="store"
//                 type='selectmenu'
//                 labelName="Retailer"
//                 onChange={handleChange}
//                 value={values.store}
//                 feedback={!!errors.store}
//                 feedbackType={errors.store ? "error" : "success"}
//                 feedbackMessage={errors.store || "Looks good"}
//                 options={[
//                     { value: "lg", label: "LG Generic" },
//                     { value: "hd", label: "Home Depot" }
//                 ]}
//             />
//             <FormElement
//                 id='availability'
//                 name="availability"
//                 type='selectmenu'
//                 labelName="Availability"
//                 onChange={handleChange}
//                 value={values.availability}
//                 feedback={!!errors.availability}
//                 feedbackType={errors.availability ? "error" : "success"}
//                 feedbackMessage={errors.availability || "Looks good"}
//                 options={[
//                     { value: "", label: "Set Availability", disabled: true },
//                     { value: `Available`, label: `Available` },
//                     { value: `EOL`, label: `EOL` },
//                     { value: `Q1 ${currentYear}`, label: `Q1 ${currentYear}` },
//                     { value: `Q2 ${currentYear}`, label: `Q2 ${currentYear}` },
//                     { value: `Q3 ${currentYear}`, label: `Q3 ${currentYear}` },
//                     { value: `Q4 ${currentYear}`, label: `Q4 ${currentYear}` },
//                     { value: `Q1 ${nextYear}`, label: `Q1 ${nextYear}` },
//                     { value: `Q2 ${nextYear}`, label: `Q2 ${nextYear}` },
//                     { value: `Q3 ${nextYear}`, label: `Q3 ${nextYear}` },
//                     { value: `Q4 ${nextYear}`, label: `Q4 ${nextYear}` },
//                 ]}
//             />

//             <FormElement
//                 id="upc"
//                 name="upc"
//                 // secondaryLabel='Min 15 characters'
//                 type="textarea"
//                 value={values.upc}
//                 rows={10}
//                 onChange={handleChange}
//                 // placeholder="First Name"
//                 labelName="UPC Code"
//                 feedback={!!errors.upc}
//                 feedbackType={errors.upc ? "error" : "success"}
//                 feedbackMessage={errors.upc || "Looks good"}
//             />
//             <FormElement
//                 id="videos"
//                 name="videos"
//                 // secondaryLabel='Min 15 characters'
//                 type="textarea"
//                 value={values.videos}
//                 rows={10}
//                 onChange={handleChange}
//                 // placeholder="First Name"
//                 labelName="Youtube Videos"
//                 feedback={!!errors.videos}
//                 feedbackType={errors.videos ? "error" : "success"}
//                 feedbackMessage={errors.videos || "Looks good"}
//             />
//             <FormElement
//                 labelName="Category"
//                 id='category'
//                 name="category"
//                 type='selectmenu'
//                 onChange={handleChange}
//                 value={values.category}
//                 feedback={!!errors.category}
//                 feedbackType={errors.category ? "error" : "success"}
//                 feedbackMessage={errors.category || "Looks good"}
//                 options={[
//                     { value: "air care", label: "Air care" },
//                     { value: "cooking", label: "Cooking" },
//                     { value: "dishwashers", label: "Dishwashers" },
//                     { value: "laundry", label: "Laundry" },
//                     { value: "refrigeration", label: "Refrigeration" },
//                     { value: "vacuums", label: "Vacuums" },
//                     { value: "signature", label: "Signature" },
//                     { value: "studio", label: "Studio" },
//                 ]}
//             />
//             {values.category && (
//                 <>
//                     <FormElement
//                         labelName="Subcategory"
//                         id='subcategory'
//                         name="subcategory"
//                         type='selectmenu'
//                         onChange={handleChange}
//                         value={values.subcategory}
//                         feedback={!!errors.subcategory}
//                         feedbackType={errors.subcategory ? "error" : "success"}
//                         feedbackMessage={errors.subcategory || "Looks good"}
//                         options={subcategoryOptions}
//                     />
//                     <FormElement
//                         id="stylecategory"
//                         name="stylecategory"
//                         secondaryLabel="This will be optional"
//                         type="textinput"
//                         value={values.stylecategory}
//                         onChange={handleChange}
//                         // placeholder="First Name"
//                         labelName="Style catgory"
//                         feedback={!!errors.stylecategory}
//                         feedbackType={errors.stylecategory ? "error" : "success"}
//                         feedbackMessage={errors.stylecategory || "Looks good"}
//                     />
//                 </>
//             )}

//             <FormElement
//                 id="specTitle1"
//                 name="specTitle1"
//                 // secondaryLabel='e.g. MXY8Z'
//                 type="selectmenu"
//                 value={values.specTitle1}
//                 onChange={handleChange}
//                 // placeholder="First Name"
//                 labelName="Column title 1"
//                 options={[

//                     { value: "stylish design", label: "Stylish Design" },
//                     { value: "innovations", label: "Innovations" },
//                     { value: "specifications", label: "Specifications" },
//                     { value: "organization", label: "Organization" },
//                 ]}
//                 feedback={!!errors.specTitle1}
//                 feedbackType={errors.specTitle1 ? "error" : "success"}
//                 feedbackMessage={errors.specTitle1 || "Looks good"}
//             />
//             <FormElement
//                 id="specList1"
//                 name="specList1"
//                 // secondaryLabel='Min 15 characters'
//                 type="textarea"
//                 value={values.specList1}
//                 rows={10}
//                 onChange={handleChange}
//                 // placeholder="First Name"
//                 labelName="Column list 1"
//                 feedback={!!errors.specList1}
//                 feedbackType={errors.specList1 ? "error" : "success"}
//                 feedbackMessage={errors.specList1 || "Looks good"}
//             />
//             <FormElement
//                 id="specTitle2"
//                 name="specTitle2"
//                 // secondaryLabel='e.g. MXY8Z'
//                 type="selectmenu"
//                 value={values.specTitle2}
//                 onChange={handleChange}
//                 // placeholder="First Name"
//                 labelName="Column title 2"
//                 options={columnTitleOptions}
//                 feedback={!!errors.specTitle2}
//                 feedbackType={errors.specTitle2 ? "error" : "success"}
//                 feedbackMessage={errors.specTitle2 || "Looks good"}
//             />
//             <FormElement
//                 id="specList2"
//                 name="specList2"
//                 // secondaryLabel='Min 15 characters'
//                 type="textarea"
//                 value={values.specList2}
//                 rows={10}
//                 onChange={handleChange}
//                 // placeholder="First Name"
//                 labelName="Column list 2"
//                 feedback={!!errors.specList2}
//                 feedbackType={errors.specList2 ? "error" : "success"}
//                 feedbackMessage={errors.specList2 || "Looks good"}
//             />
//             <FormElement
//                 id="specTitle3"
//                 name="specTitle3"
//                 // secondaryLabel='e.g. MXY8Z'
//                 type="selectmenu"
//                 value={values.specTitle3}
//                 onChange={handleChange}
//                 // placeholder="First Name"
//                 labelName="Column title 3"
//                 options={columnTitleOptions}
//                 feedback={!!errors.specTitle3}
//                 feedbackType={errors.specTitle3 ? "error" : "success"}
//                 feedbackMessage={errors.specTitle3 || "Looks good"}
//             />
//             <FormElement
//                 id="specList3"
//                 name="specList3"
//                 // secondaryLabel='Min 15 characters'
//                 type="textarea"
//                 value={values.specList3}
//                 rows={10}
//                 onChange={handleChange}
//                 // placeholder="First Name"
//                 labelName="Column list 3"
//                 feedback={!!errors.specList3}
//                 feedbackType={errors.specList3 ? "error" : "success"}
//                 feedbackMessage={errors.specList3 || "Looks good"}
//             />
//             <FormElement
//                 id="specTitle4"
//                 name="specTitle4"
//                 // secondaryLabel='e.g. MXY8Z'
//                 type="selectmenu"
//                 value={values.specTitle4}
//                 onChange={handleChange}
//                 // placeholder="First Name"
//                 labelName="Column title 4"
//                 options={columnTitleOptions}
//                 feedback={!!errors.specTitle4}
//                 feedbackType={errors.specTitle4 ? "error" : "success"}
//                 feedbackMessage={errors.specTitle4 || "Looks good"}
//             />
//             <FormElement
//                 id="specList4"
//                 name="specList4"
//                 // secondaryLabel='Min 15 characters'
//                 type="textarea"
//                 value={values.specList4}
//                 rows={10}
//                 onChange={handleChange}
//                 // placeholder="First Name"
//                 labelName="Column list 4"
//                 feedback={!!errors.specList4}
//                 feedbackType={errors.specList4 ? "error" : "success"}
//                 feedbackMessage={errors.specList4 || "Looks good"}
//             />
//            <DynamicSections sections={values.sections} handleNestedChange={handleNestedChange} addSection={addSection} />
//             {/* <DynamicSections sections={sections} onChange={setSections} /> */}
//             <button type="submit">Submit</button>
//         </FormComponent>
//     );
// };
