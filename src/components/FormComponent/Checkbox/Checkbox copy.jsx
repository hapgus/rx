import { useReducer, useEffect } from "react";

const checkboxReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE':
            const { value, checked } = action.payload;

            const updatedSelectedValues = checked
                ? [...state.selectedValues, value]
                : state.selectedValues.filter(item => item !== value);

            return {
                ...state,
                selectedValues: updatedSelectedValues,
                isValid: updatedSelectedValues.length > 0,
            };
        default:
            return state;
    }
};

export const Checkbox = ({
    id,
    name,
    labelName,
    onInput,
    value,
    initialChecked = [],
}) => {
    const [checkboxState, dispatch] = useReducer(checkboxReducer, {
        selectedValues: initialChecked,
        isValid: initialChecked.length > 0,
    });

    const { selectedValues, isValid } = checkboxState;

    const changeHandler = (e) => {
        const { checked } = e.target;
        dispatch({
            type: 'TOGGLE',
            payload: {
                value,
                checked,
            },
        });
    };

    useEffect(() => {
        
        onInput(name, selectedValues, isValid);
    }, [name, selectedValues, isValid, onInput]);

    return (
        <div>
            <input
                id={id}
                type="checkbox"
                name={name}
                value={value}
                checked={selectedValues.includes(value)}
                onChange={changeHandler}
            />
            <label htmlFor={id}>{labelName}</label>
        </div>
    );
};
