


const Form = ({ children, action, method, onSubmit }) => {
    return (
        <form action={action} method={method} onSubmit={(e) => onSubmit(e)}>
            { children }
        </form>
    )
}

export default Form