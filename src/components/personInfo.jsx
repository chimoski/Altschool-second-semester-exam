


const PersonInfo = ({ icon, label, value }) => {
    return (
        <div className={`mb-5 flex flex-row items-center`}>
            <div className={`border-r-[1.5px] border-primary pr-5 mr-5`}>
                <div className={`flex flex-row items-center h-full`}>
                    { icon }
                </div>
            </div>
            <div className={`flex flex-col`}>
                <small className={`font-semibold text-sm mb-2`}>{label}</small>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default PersonInfo