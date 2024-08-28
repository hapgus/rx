import styles from './NumberInput.module.css';
import { IconComponent } from '../../Icon/IconComponent';

import { useState, useEffect } from "react"
import { Label } from '../Label/Label';
export const NumberInput = ({
    value,
    onChange,
    id,
    name,
    placeholder,
    labelName,
    secondaryLabel,
    min,
    max,
    step,
    eventHandlers = {}
}) => {

    const [internalValue, setInternalValue] = useState(value);

    useEffect(() => {
        setInternalValue(value); // Update internal state if the prop value changes
    }, [value]);
    
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
        <div >
            <Label
                id={id}
                labelName={labelName}
                secondaryLabel={secondaryLabel}
            >
                 <div className={styles.customNumberInput}>
                <IconComponent onClick={decrement} iconType='minus' />
                <input
                    type="text"
                    id={id}
                    name={name}
                    value={internalValue}
                    placeholder={placeholder}
                    onChange={handleChange}
                    {...eventHandlers}
                    className={styles.input}
                    maxLength={1000000}
                />
                <IconComponent onClick={increment} iconType='cross' />
            </div>
            </Label>
        </div>
    )
}