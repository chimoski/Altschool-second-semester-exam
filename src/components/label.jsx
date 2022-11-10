import styles from "../style_modules/form.module.css"

const Label = ({ htmlFor, children }) => {
    return (
        <label 
        htmlFor={htmlFor} 
        className={`absolute bg-white ${styles.label}`}
        >
            {children}
        </label>
    )
}

export default Label