
import { useState, useEffect, useCallback } from "react";

// export const useDynamicForm = (initialValues) => {

//     const [values, setValues] = useState(initialValues);
//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);

    
export const useDynamicForm = (initialValues = {}, initialSections = [], mode = 'create') => {
    const [values, setValues] = useState({
        ...initialValues,
        sections: initialSections,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

     // Update the hook to reset the values when initialValues change (for edit mode)
     useEffect(() => {
        if (mode === 'edit') {
            setValues({
                ...initialValues,
                sections: initialSections,
            });
        }
    }, [initialValues, initialSections, mode]);


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


    // const handleSectionChange = (newSections) => {
    //     setValues(prevState => ({ ...prevState, sections: newSections }));
    // };
    const handleSectionChange = useCallback((newSections) => {
        setValues(prevState => ({ ...prevState, sections: newSections }));
    }, []);


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

    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSectionChange,
        handleSubmit,

    };
};
