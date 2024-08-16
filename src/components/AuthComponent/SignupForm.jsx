
import { useForm } from "../../hooks/use-form-hook"
import { FormComponent } from "../FormComponent/FormComponent"
import { FormElement } from "../FormComponent/FormElement"
import { Button } from '../Button/Button';

export const SignupForm = () => {


    const { values, errors, handleChange, handleSubmit } = useForm({
        password: "",
        email: "",
        firstName: "",
        store: "",

    });

    const submitForm = () => {
        console.log("Form data:", values);
    };

    return (
        <FormComponent onSubmit={handleSubmit(submitForm)}>
            <FormElement
                // secondaryLabel='Optional'
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
                secondaryLabel='The name of the retailer you work for. E.g.,The Home Depot'
                type="textinput"
                id="store"
                value={values.store}
                onChange={handleChange}
                placeholder="Store name"
                labelName="Store"
                feedback={!!errors.store}
                feedbackType={errors.store ? "error" : "success"}
                feedbackMessage={errors.firstName || "Looks good"}
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
            <FormElement
                type="textinput"
                id="password"
                value={values.password}
                onChange={handleChange}
                placeholder=""
                labelName="Password"
                feedback={!!errors.password}
                feedbackType={errors.password ? "error" : "success"}
                feedbackMessage={errors.password || "Looks good"}
            />

            <Button buttonStyleType="primaryAction">Sign in</Button>

        </FormComponent>
    )
}