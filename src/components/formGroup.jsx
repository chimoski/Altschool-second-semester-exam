

const FormGroup = ({ children, className }) => {
    return (
        <div className={`mb-5 relative ${className ? className : ""}`}>{children}</div>
    )
}

export default FormGroup