import { ReactElement, ReactNode, useState } from "react"


type TabsProp = {
    label: string;
    children: ReactNode[];
    icon?: ReactNode;
}

export const Tabs = ({children}: TabsProp) => {

    const [activeTab, setActiveTab] = useState((children[0] as ReactElement<TabsProp>).props.label);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, newActiveTab: string) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    }

    return(
        <div className="md:pl-10 px-2 my-14">
            <div className="flex flex-wrap border-gray-300 md:gap-[.05rem] gap-2">
                {
                    children.map((child)  => (
                        <button 
                            key={ (child as ReactElement<TabsProp>).props.label} 
                            className={`${
                                activeTab === (child as ReactElement<TabsProp>).props.label ? "bg-[#4d73fc] text-white" : "text-gray-700 bg-gray-300 hover:text-white hover:bg-[#4d73fc]"
                            } font-medium py-3 px-4 rounded-md transition-all text-2xl md:text-3xl flex gap-3`} 
                            onClick={(e) => handleClick(e, (child as ReactElement<TabsProp>).props.label)}>
                            {(child as ReactElement<TabsProp>).props?.icon}
                            {(child as ReactElement<TabsProp>).props.label}
                        </button>
                    ))
                }
            </div>
            <div className="py-4">
                {
                   children.map(child => {
                    if((child as ReactElement<TabsProp>).props.label === activeTab) {
                        return (
                            <div key={(child as ReactElement<TabsProp>).props.label}>
                                {(child as ReactElement<TabsProp>).props.children}
                            </div>
                        )
                    }
                    return null
                   })
                }
            </div>
        </div>
    )
}

type TabProp = {
    label: string;
    children: ReactNode;
    icon?: ReactNode
} 

export const Tab = ({label, children, icon}: TabProp) => {
    return (
        <div aria-label={label} className="hidden">
            {children}
            {icon}
        </div>
    )
}
