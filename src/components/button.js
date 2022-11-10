

const Button = (
    { 
        children, 
        variant = "primary", 
        size = "hug",
        className,
        onClick,
        type = "button",
        icon
    
    }) => {
    return (
        <button 
        className={`${className? className : ""} btn btn-${variant} px-5 py-4 inline-block rounded-md ${size === "fill" ? "w-full" : ""}`}
        onClick = { e => onClick(e) }
        type={type}
        >
            { icon && 
                <span><img src={icon} alt={``} /></span>
            } 
            { children }
        </button>
    )
}

export default Button