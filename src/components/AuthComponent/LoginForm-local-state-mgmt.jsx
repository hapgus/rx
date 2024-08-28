
import { useForm } from "../../hooks/use-form-hook"
import { FormComponent } from "../FormComponent/FormComponent"
import { FormElement } from "../FormComponent/FormElement"
import { Button } from '../Button/Button';
import { useState } from "react";

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

export const LoginForm = () => {

    const [passwordsNotEqual,setPasswordsNotEqual] = useState(false);
    // HANDLE VALUES
    const [enteredValue, setEnteredValue] = useState({
        email: '',
        password: ''
    });

    // TRACK WHEN FOCUS LOST
    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false,
    });


    const emailIsInValid = 
    // enteredValue.email !== '' &&
    // !enteredValue.email.includes('@');
  didEdit.email && !enteredValue.email.includes('@');


    const handleInputChange = (identifier, value) => {
        setEnteredValue(prevValues => ({
            ...prevValues,
            [identifier]: value
        }));
        setDidEdit((prevEdit)=>({
            ...prevEdit,
            [identifier]:false,
        }));
    }

    const handleInputBlur = (identifier) => {
        setDidEdit(prevValues => ({
            ...prevValues,
            [identifier]: true
        }));
    }
    const onRawSubmit = (e) => {
        e.preventDefault()
        
          console.log(enteredValue)
    }

    return (
        <>
            <form onSubmit={onRawSubmit} >
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                    value={enteredValue.email}
                    onChange={(event) => handleInputChange('email', event.target.value)}
                    onBlur={(event) => handleInputBlur('email')}
                    />
                    { emailIsInValid && <p>Not valid</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        minLength={6}
                    value={enteredValue.password}
                    onChange={(event) => handleInputChange('password', event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Confirm Password</label>
                    <input
                        type="confirm-password"
                        id="confirm-password"
                        name="confirm-password"
                        required
                   
                    />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
  
        </>
    )
}