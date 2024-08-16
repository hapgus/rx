
import { useForm } from "../../hooks/use-form-hook"
import { FormComponent } from "../FormComponent/FormComponent"
import { FormElement } from "../FormComponent/FormElement"
import { Button } from '../Button/Button';

export const LoginForm = () => {


    const { values, errors, handleChange, handleSubmit } = useForm({
        password: "",
        email: ""
    });

    const submitForm = () => {
        console.log("Form data:", values);
    };

    return (
        <FormComponent onSubmit={handleSubmit(submitForm)}>
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