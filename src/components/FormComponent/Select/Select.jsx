import styles from './Select.module.css';
import { useState, useEffect, useRef, useReducer } from "react";
import { validate } from '../../../utils/validators';
import { Label } from '../Label/Label';
import { PageText } from '../../Text/Text';
import { se } from 'date-fns/locale';
import { ToolTip } from '../../ToolTip/ToolTip';

const selectReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        // case 'TOUCH':
        //     return {
        //         ...state,
        //         isTouched: true
        //     }
        case 'SET_INITIAL':
            return {
                ...state,
                value: action.val,
                isValid: action.isValid
            };
        default:
            return state;
    }
};

export const Select = ({
    id,
    name,
    labelName,
    errorText,
    validators,
    secondaryLabel,
    secondaryLabelToolTip,
    onInput,
    initialValue = '',
    initialIsValid = false,
    options
}) => {

    const [selectState, dispatch] = useReducer(selectReducer,
        {
            value: initialValue,
            isValid: initialIsValid,
            // value: '',
            // isValid: false,
            // isTouched: false
        }
    );
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    const { value, isValid } = selectState;
    // const { value, isValid, isTouched } = selectState;

    useEffect(() => {
        dispatch({
            type: 'SET_INITIAL',
            val: initialValue,
            isValid: initialIsValid
        });
    }, [initialValue, initialIsValid]);

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    //     if (!isTouched) {
    //         touchHandler();
    //     }
    // };

    const handleSelectChange = (optionValue) => {
        dispatch({
            type: 'CHANGE',
            val: optionValue,
            validators: validators
        });
        setIsOpen(false); // Close the dropdown after selection
    };
    // const touchHandler = () => {
    //     dispatch({ type: 'TOUCH' });
    // }

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <div className={styles.selectContainer} ref={wrapperRef}>

            <div className={styles.labelWrapper}>
                <label className={styles.label} htmlFor={id}>
                    <PageText type='formLabel'>
                        {labelName}
                    </PageText>
                    { secondaryLabel && <PageText type="formSecondaryLabel">{secondaryLabel}</PageText>}
                    { secondaryLabelToolTip && <ToolTip text={secondaryLabelToolTip}/>}
                </label>
              
                
            </div>

            <div className={styles.selectWrapper} >

                <div className={`${styles.customSelect} ${isOpen ? styles.active : ''}`} onClick={toggleDropdown}>
                    {
                        options.find(option =>
                            option.value === value)
                            ?.label || <PageText>Select...</PageText>
                    }
                    <span className={styles.icon}>{isOpen ? '▲' : '▼'}</span>
                </div>
                {isOpen && (
                    <div className={styles.selectItems}>
                        {options.map(option => (
                            <div key={option.value} onClick={() => {
                                handleSelectChange(option.value);
                                // Trigger touch handler when an option is selected
                                // touchHandler();
                            }} className={`${styles.selectOption} ${value === option.value ? styles.active : ''}`}>
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
                {!isValid && <div className={styles.error}>{errorText}</div>}
                {/* {!isValid && isTouched && <div className={styles.error}>{errorText}</div>} */}
            </div>
        </div>
    );

};