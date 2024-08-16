
import { useState } from "react";

export const useForm = (initialValues) => {
    console.log('values',initialValues)
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    
    const handleChange = (e) => {
        const { name, id, value, type, checked } = e.target;
        const fieldName = name || id;

        if (type === 'checkbox') {
            const updatedArray = checked
                ? [...(values[fieldName] || []), value]
                : (values[fieldName] || []).filter(item => item !== value);
            setValues({ ...values, [fieldName]: updatedArray });
        } else {
            setValues({ ...values, [fieldName]: value });
        }
    };


    const handleSectionChange = (newSections) => {
        console.log('create page - handle section', newSections)
        setValues(prevState => ({ ...prevState, sections: newSections }));
    };



    const handleSubmit = (callback) => (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        if (validate()) {
            callback();
        }
        setIsSubmitting(false);
    };

    const validate = () => {
        let tempErrors = {};
        for (let key in values) {
            if (!values[key] && key !== 'sections') {
                tempErrors[key] = "This field is required";
            }
        }
        values.sections.forEach((section, index) => {
            for (let key in section) {
                if (!section[key]) {
                    tempErrors[`sections-${index}-${key}`] = "This field is required";
                }
            }
        });
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };
console.log('from hook',values)
    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSectionChange,
      
        handleSubmit,

        handleSectionChange,
    };
};
