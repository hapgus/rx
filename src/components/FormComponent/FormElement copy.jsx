
import { IconComponent } from "../Icon/IconComponent";
import { PageText } from "../Text/Text";

import styles from "./FormElement.module.css";
import { useState, useEffect, useRef } from "react";





const TextInput = ({
    value,
    onChange,
    type = 'textinput',
    id,
    placeholder,
    eventHandlers = {}
}) => (
    <input
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}

        onChange={onChange}
        {...eventHandlers}
        className={styles.input}
    />
);

const TextAreaInput = ({
    value,
    rows,
    onChange,
    type = 'textarea',
    id,
    placeholder,
    eventHandlers = {}
}) => (
    <textarea
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        rows={rows || 3}

        onChange={onChange}
        {...eventHandlers}
        className={styles.textarea}
    />
);

const TextNumberInput = ({
    value,
    onChange,
    id,
    name,
    placeholder,
    min,
    max,
    step,
    eventHandlers = {}
}) => {
    const [internalValue, setInternalValue] = useState(value);

    const handleChange = (e) => {
        let newValue = e.target.value;
        if (!isNaN(newValue) && newValue.trim() !== "") {
            newValue = parseFloat(newValue);
            if ((min === undefined || newValue >= min) && (max === undefined || newValue <= max)) {
                setInternalValue(newValue);
                onChange({ target: { name, value: newValue } });
            }
        } else if (newValue === "") {
            setInternalValue("");
            onChange({ target: { name, value: "" } });
        }
    };

    const increment = () => {
        let newValue = (internalValue || 0) + (step || 1);
        if (max === undefined || newValue <= max) {
            setInternalValue(newValue);
            onChange({ target: { name, value: newValue } });
        }
    };

    const decrement = () => {
        let newValue = (internalValue || 0) - (step || 1);
        if (min === undefined || newValue >= min) {
            setInternalValue(newValue);
            onChange({ target: { name, value: newValue } });
        }
    };

    return (
        <div className={styles.customNumberInput}>
          <IconComponent onClick={decrement}  iconType='minus'/>
            {/* <button type="button" onClick={decrement}>-</button> */}
            <input
                type="text"
                id={id}
                name={name}
                value={internalValue}
                placeholder={placeholder}
                onChange={handleChange}
                {...eventHandlers}
                className={styles.input}
            />
              <IconComponent  onClick={increment} iconType='cross'/>
            {/* <button type="button" onClick={increment}>+</button> */}
        </div>
    );
};

const SelectMenu = ({

    id,
    name,
    value,
    onChange,
    options,
    // labelName
}) => {

    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelectChange = (optionValue) => {
        onChange({ target: { name, value: optionValue } });
        setIsOpen(false); // Close the dropdown after selection
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [wrapperRef]);


    return (
        <div className={styles.selectContainer} ref={wrapperRef}>
            <div className={`${styles.customSelect} ${isOpen ? styles.active : ''}`} onClick={toggleDropdown}>
                {options.find(option => option.value === value)?.label || "Select..."}
                <span className={styles.icon}>{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <div className={styles.selectItems}>
                    {options.map(option => (
                        <div key={option.value} onClick={() => handleSelectChange(option.value)} className={`${styles.selectOption} ${value === option.value ? styles.active : ''}`}>
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
            <select id={id} name={name} value={value} onChange={(e) => handleSelectChange(e.target.value)} style={{ display: 'none' }}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

const Checkbox = ({
    id,
    type = "checkbox",
    name,
    value,
    checked,
    checkboxName,
    onChange
}) => {
    const handleSelectionChange = event => {
        onChange(event);
        // onChange(event.target.value, event.target.checked);
    }


    return (
        <div className={styles.checkboxRow}>
            <label className={styles.checkboxLabel} htmlFor={id}>{checkboxName}</label>
            <input id={id} type={type} name={name} value={value} checked={checked} onChange={handleSelectionChange} className={styles.checkboxInput} />
        </div>
    );
};

const Label = ({ labelId, labelName, labelType, labelWrapperStyle, secondaryLabel, icon, iconType, iconStyleType, children }) => {


    return (
        <label htmlFor={labelId} className={labelType}>

            <div className={labelWrapperStyle}>
                <PageText type="bodyTertiaryTitle">{labelName}</PageText>
                {
                    icon || secondaryLabel &&
                    <div className={styles.secondaryLabelDiv}>
                        {icon ? <IconComponent iconType={iconType} iconStyleType={iconStyleType} /> : null}
                        {secondaryLabel ? <PageText type="formLabelSecondary">{secondaryLabel}</PageText> : null}
                    </div>
                }
            </div>
            {children}
        </label>
    );

};

const Feedback = ({ feedbackMessage, feedbackType }) => {
    const feedbackTypeMap = {
        error: 'errorBubble',
        success: 'successIconType'
    };
    const FeedbackIcon = feedbackTypeMap[feedbackType];

    return (
        <div className={styles.feedback}>
            <IconComponent iconType={FeedbackIcon} iconStyleType='feedbackIcon' />
            <PageText type="formMessage">
                <span className={feedbackType === 'error' ? styles.errorMessage : styles.successMessage}>
                    {feedbackMessage}
                </span>
            </PageText>
        </div>
    );
};



// THE EXPORT
export const FormElement = ({
    id,
    name,
    type,

    checked,
    rows,
    min,
    max,
    step,
    value,
    options,
    placeholder,

    labelName,
    secondaryLabel,

    onChange,

    icon,
    iconType,
    iconStyleType,
    feedback = false,
    feedbackType,
    feedbackMessage = '',

}) => {
    const formElementTypes = {
        textinput: TextInput,
        textarea: TextAreaInput,
        textnumber: TextNumberInput,
        selectmenu: SelectMenu,
        checkbox: Checkbox,
    };

    const FormElementComponent = formElementTypes[type];

    // THIS IS IN USE AND NEEDED
    const formElementLabelStyles = type === 'checkbox'
        ? styles.checkboxLabel
        : styles.label;

    // CHECKBOX STYLE LIKELY NOT NEEDED
    const formElementContainerStyles = type === 'checkbox'
        ? styles.checkboxFormElementContainer
        : styles.formElementContainer;
    // CHECKBOX STYLE LIKELY NOT NEEDED
    const formElementLabelWrapperStyles = type === 'checkbox'
        ? styles.checkboxLabelInnerWrapper
        : styles.labelInnerWrapper;
    return (
        // <div className={styles.formElementContainer}>
        <div className={formElementContainerStyles}>
            <Label
                labelType={formElementLabelStyles}
                labelWrapperStyle={formElementLabelWrapperStyles}
                labelId={id}
                labelName={labelName}
                secondaryLabel={secondaryLabel}
                icon={icon}
                iconType={iconType}
                iconStyleType={iconStyleType}
            >
                <FormElementComponent
                    value={value}
                    onChange={onChange}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    options={options}
                    min={min}
                    max={max}
                    step={step}
                    rows={rows}
                    checked={checked}
                />
            </Label>
            {feedback && (
                <Feedback
                    feedbackMessage={feedbackMessage}
                    feedbackType={feedbackType}
                />
            )}
        </div>
    );
};