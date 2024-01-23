import { useHotelContext } from "../context/hotelContext"

type CustomModalChildProps = {
    header: string,
    caption: string,
    id: number,
}

const buttonClass = "bg-[#6694eb1a] text-black font-bold text-[20px] rounded-md px-5 hover:text-[#1a1a1a] hover:bg-gray-100 transition-all"

export const CustomModalChild = ({header, caption, id}: CustomModalChildProps) => {
    const {
        addPersonCount, 
        getPersonTypeCount,
        reducePersonCount
    } = useHotelContext()

    return (
        <div className="grid grid-cols-2 gap-[5.8rem]">
            <div>
                <h1 className="text-2xl text-[#1a1a1a]">{header}</h1>
                <p className="text-[15px] text-gray-400 items-center">
                    {caption}
                </p>
            </div>

            <div className="flex">
                <button 
                    onClick={() => reducePersonCount(id)}
                    className={buttonClass}
                    type="button">-</button>
                <h1 className="text-2xl text-[#1a1a1a] px-5 pt-3">{getPersonTypeCount(id)}</h1>
                <button 
                    onClick={() => addPersonCount(id)}
                    className={buttonClass}
                    type="button">+</button>
            </div>
        </div>
    )
}