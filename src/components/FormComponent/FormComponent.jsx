import styles from './FormComponent.module.css'

const Form = ({ eventHandlers = {}, children, onSubmit }) => (
    <form className={styles.formContainer} {...eventHandlers} onSubmit={onSubmit}>
        {children}
    </form>
);

export const FormComponent = ({ children, onSubmit }) => {
    return <Form onSubmit={onSubmit}>{children}</Form>;
};