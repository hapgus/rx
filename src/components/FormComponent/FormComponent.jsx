

const Form = ({ eventHandlers = {}, children, onSubmit }) => (
    <form {...eventHandlers} onSubmit={onSubmit}>
        {children}
    </form>
);

export const FormComponent = ({ children, onSubmit }) => {
    return <Form onSubmit={onSubmit}>{children}</Form>;
};