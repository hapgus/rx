import { useReducer, useEffect } from "react";
import styles from './NumberInput.module.css';
import { IconComponent } from '../../Icon/IconComponent';
import { Label } from '../Label/Label';
import { validate } from '../../../utils/validators';

// Reducer function to manage input state
const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'SET_INITIAL': // Set initial value and validity from props
            return {
                ...state,
                value: action.val,
                isValid: action.isValid
            };
        default:
            return state;
    }
};

export const NumberInput = ({
    id,
    name,
    labelName,
    errorText,
    validators = [],
    secondaryLabel,
    min,
    max,
    step = 1,
    initialValue = '', // Default initial value
    initialIsValid = false,
    onInput,
    placeholder,
    eventHandlers = {}
}) => {

    // Use reducer to manage state and validation
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: initialValue,
        isValid: initialIsValid
    });

    // Destructure value and isValid for easier use
    const { value, isValid } = inputState;

    // Update internal state if the prop value changes
    useEffect(() => {
        dispatch({
            type: 'SET_INITIAL',
            val: initialValue,
            isValid: initialIsValid
        });
    }, [initialValue, initialIsValid]);

    // Call onInput whenever value or validity changes
    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    // Handle value changes
    const handleChange = (e) => {
        let newValue = e.target.value;
        if (!isNaN(newValue) && newValue.trim() !== "") {
            newValue = parseFloat(newValue);
            if ((min === undefined || newValue >= min) && (max === undefined || newValue <= max)) {
                dispatch({
                    type: 'CHANGE',
                    val: newValue,
                    validators
                });
            }
        } else if (newValue === "") {
            dispatch({
                type: 'CHANGE',
                val: "",
                validators
            });
        }
    };

    // Increment and decrement handlers
    const increment = () => {
        let newValue = (value || 0) + step;
        if (max === undefined || newValue <= max) {
            dispatch({
                type: 'CHANGE',
                val: newValue,
                validators
            });
        }
    };

    const decrement = () => {
        let newValue = (value || 0) - step;
        if (min === undefined || newValue >= min) {
            dispatch({
                type: 'CHANGE',
                val: newValue,
                validators
            });
        }
    };

    return (
        <div>
            <Label id={id} labelName={labelName} secondaryLabel={secondaryLabel}>
                <div className={styles.customNumberInput}>
                    <IconComponent onClick={decrement} iconType='minus' />
                    <input
                        type="text"
                        id={id}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={handleChange}
                        {...eventHandlers}
                        className={styles.input}
                        maxLength={1000000}
                    />
                    <IconComponent onClick={increment} iconType='cross' />
                </div>
            </Label>
            {!isValid && <div className={styles.error}>{errorText}</div>}
        </div>
    );
};
