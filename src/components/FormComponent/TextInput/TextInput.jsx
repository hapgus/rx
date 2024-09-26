import { Label } from "../Label/Label";
import { useReducer, useEffect } from "react";
import { validate } from '../../../utils/validators';
import { Feedback } from "../Feedback/Feedback";
import styles from './TextInput.module.css'
import { IconComponent } from "../../Icon/IconComponent";

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            }
            case 'SET_INITIAL': // New case for setting initial value and validity
            return {
                ...state,
                value: action.val,
                isValid: action.isValid
            };

        default:
            return state;
    }
}

export const TextInput = ({
    type = 'text',
    id,
    name,
    labelName,
    errorText,
    validators,
    secondaryLabel,
    secondaryLabelToolTip,
    iconType,
    onIconClick,
    onInput,
    noTouchValidation,
    initialValue = '',
    // initialIsValid,
    initialIsValid = false,
    children
}) => {

    const [inputState, dispatch] = useReducer(inputReducer,
        {
            // value: '',
            // value: initialValue || '',
            // isValid: initialIsValid || false,
            value: initialValue,  // Set initial value from prop
        isValid: initialIsValid,  // Set initial validity from prop
            isTouched: false
        });

    const { value, isValid } = inputState;

   
   // Effect to update state when initialValue or initialIsValid changes
   useEffect(() => {
    dispatch({
        type: 'SET_INITIAL',
        val: initialValue,
        isValid: initialIsValid
    });
}, [initialValue, initialIsValid]); // Run this effect whenever initialValue or initialIsValid changes

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    const changeHandler = (event) => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators: validators
        });
    }
    const touchHandler = () => {
        dispatch({
            type: 'TOUCH',
        });
    }

    return (
        <div className={styles.mainTextInputContainer}>
            <Label
                id={id}
                labelName={labelName}
                secondaryLabel={secondaryLabel}
                secondaryLabelToolTip={secondaryLabelToolTip}
            >
                <div className={styles.inputContainer}>
                    <input
                        {...children}
                        type={type}
                        id={id}
                        name={name}
                        value={inputState.value}
                        onChange={changeHandler}
                        // onBlur={touchHandler}
                        onBlur={noTouchValidation === true ? undefined : touchHandler}
                        className={styles.input}
                  
                    />
                    {
                        iconType &&
                        <div className={styles.inputIcon}>
                            <IconComponent onClick={onIconClick} iconType={iconType} />
                        </div>
                    }

                </div>
                {!inputState.isValid && inputState.isTouched && <Feedback feedbackType='error' feedbackMessage={errorText} />}
            </Label>
        </div>
    );
}