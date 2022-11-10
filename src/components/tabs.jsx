import { useEffect } from "react"



const Tab = ({
    id,
    children,
    activeTab,
    setActiveTab
}) => {
    
    return (
        <div className={`inline-block relative basis-6/12 cursor-pointer`} onClick={(e) => setActiveTab(id)} >
            <div className={`${activeTab === id ? `font-semibold` : "text-zinc-300"}`} >{children}</div>
        </div>
    )
}

export const TabSlider = ({activeTab}) => {
    useEffect(() => {
        console.log(activeTab)
    })
    return (
        <div className={`absolute ${activeTab === 1 ? `left-0` : `left-2/4`} pointer-events-none transition-left duration-250 ease-in`}>
            <span className={`invisible`}>Personal information</span>
            <div className={`relative after:absolute after:h-[0.135rem] after:w-full after:bg-primary after:mt-1.5 after:rounded-[5px]`}></div>
        </div>
    )
}

export default Tab