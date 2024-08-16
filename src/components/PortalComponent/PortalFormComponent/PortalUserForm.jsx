
import { useForm } from "../../../hooks/use-form-hook";
import { FormComponent } from "../../FormComponent/FormComponent";
import { FormElement } from "../../FormComponent/FormElement";

export const PortalUserForm = () => {
    const { values, errors, handleChange, handleSubmit } = useForm({
        firstName: "",
        lastName: "",
        email: ""
    });

    const submitForm = () => {
        console.log("Form data:", values);
    };

    return (
        <FormComponent onSubmit={handleSubmit(submitForm)}>
     
            <FormElement
                secondaryLabel='Optional'
                type="textinput"
                id="firsName"
                value={values.firstName}
                onChange={handleChange}
                placeholder="First name"
                labelName="First name"
                feedback={!!errors.firstName}
                feedbackType={errors.firstName ? "error" : "success"}
                feedbackMessage={errors.firstName || "Looks good"}
            />
            <FormElement
               type="textinput"
                id="lastName"
                value={values.lastName}
                onChange={handleChange}
                placeholder=""
                labelName="Last name"
                feedback={!!errors.lastName}
                feedbackType={errors.lastName ? "error" : "success"}
                feedbackMessage={errors.lastName || "Looks good"}
            />
            <FormElement
               type="textinput"
                id="email"
                value={values.email}
                onChange={handleChange}
                placeholder=""
                labelName="Email"
                feedback={!!errors.email}
                feedbackType={errors.email ? "error" : "success"}
                feedbackMessage={errors.email || "Looks good"}
            />
            <button type="submit">Submit</button>
        </FormComponent>
    );
};
