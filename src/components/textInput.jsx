

const TextInput = ({
    onInput,
    placeHolder,
    name,
    className,
    type = "text"
}) => {
    return (
        <input 
        type={type}
        className={`
        transition-shadow 
        shadow-[0_0_0_1.5px_#DADADA_inset] 
        focus:shadow-[0_0_0_1.5px_#090C9B_inset]
        px-5 py-4
        rounded-[5px]
        overflow-hidden
        outline-none
        w-full
        ${className ? className : ""}
        `} 
        onInput = { e=> onInput ? onInput(e) : ""}
        placeholder={placeHolder ? placeHolder : ""}
        name = {name}
        required
        />
    )
}

export default TextInput