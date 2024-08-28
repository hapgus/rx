
import { useForm } from "../../hooks/use-form-hook"
import { FormComponent } from "../FormComponent/FormComponent"
import { FormElement } from "../FormComponent/FormElement"
import { Button } from '../Button/Button';

import { useInput } from "../../hooks/use-input";
import { TextInput } from "../FormComponent/TextInput/TextInput";
import { FormElementV2 } from "../FormComponent/FormElementV2";

import { VALIDATOR_REQUIRE } from "../../utils/validators";
import { useCallback, useReducer, useState } from "react";


// export const LoginForm = () => {

//     const onRawSubmit = (e) => {
//         e.preventDefault()
//         const fd = new FormData(e.target);
//         const checkboxes = fd.getAll('rank');
//         const data = Object.fromEntries(fd.entries());
//         data.selections = checkboxes
//         console.log(data)
//     }

//     return (
//         <>
//             <form onSubmit={onRawSubmit} >
//                 <div>
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                     />
//                 </div>
//                 <div>
//                     <fieldset>
//                         <legend>Rank us</legend>
//                         <div>
//                             <label htmlFor="great">Great</label>
//                             <input
//                                 type="checkbox"
//                                 id="great"
//                                 name="rank"
//                                 value="great"
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="poor">Poor</label>
//                             <input
//                                 type="checkbox"
//                                 id="poor"
//                                 name="rank"
//                                 value="poor"
//                             />
//                         </div>
//                     </fieldset>
//                 </div>
//                 <div>
//                     <select id='role' name='role'>
//                         <option value='admin'>Admin</option>
//                         <option value='superAdmin'>Super Admin</option>
//                         <option value='retailer'>Retailer</option>
//                     </select>
//                 </div>
//                 <div>
//                     <button>Submit</button>
//                 </div>
//             </form>

//         </>
//     )
// }

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
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
        default:
            return state;
    }
};

export const LoginForm = () => {

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: { //Input state
            email: { value: '', isValid: false },
            password: { value: '', isValid: false }
        },
        isValid: false //Overall form validity state
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({ type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id });
    }, []);


    const [passwordInputType, setPasswordInputType] = useState("password");

    const togglePasswordVisibility = () => {
        setPasswordInputType((prevState) =>
            prevState === "password" ? "text" : "password"
        );
    };

    const onRawSubmit = (e) => {
        e.preventDefault()
        console.log(formState.inputs)
    }

    return (
        <>
            <form onSubmit={onRawSubmit} >
                <TextInput
                    id='email'
                    labelName='Email'
                    errorText='Email required'
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                    secondaryLabel='optional'
                    iconType='email'

                />
                <TextInput
                    id='password'
                    labelName='Password'
                    errorText='Password required'
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                    type={passwordInputType}
                    iconType={passwordInputType === "password" ? 'eyeClosed' : 'eyeOpened'}
                    onIconClick={togglePasswordVisibility}
                // secondaryLabel='optional'
                />

                <div>

                    <button disabled={!formState.isValid}>Submit</button>
                </div>
            </form>

        </>
    )
}