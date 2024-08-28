import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
    switch (action.type) {
        case 'SFW_INPUT_CHANGE_CASE': //WHEN INPUTS CHANGE
            let formIsValid = true;

            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid
            };
            case 'SFW_SET_DATA':
                return {
                    inputs: action.inputs,
                    isValid: action.formIsValid
                };
        default:
            return state;
    }
};

export const useForm = (initialInputsParam, initialFormValidity) => {
  
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputsParam,
        isValid: initialFormValidity
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'SFW_INPUT_CHANGE_CASE',
            value: value,
            isValid: isValid,
            inputId: id
        });
    }, [dispatch]);


    
    //setFormData only needed in updateProductForm
    const setFormData = useCallback((inputData, formValidity) => {
        dispatch({
            type: 'SFW_SET_DATA',
            inputs: inputData,
            formIsValid: formValidity
        });
     }, [dispatch]);
    return [formState, inputHandler, setFormData];


};