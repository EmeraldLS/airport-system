import { useState } from "react"
import ReactDatePicker from "react-datepicker";
import { CustomModal } from "./CustomModal";
type HotelProps = {

}

export const Hotel = ({}: HotelProps) => {
    const [checkInDate, setCheckinDate] = useState<Date | null>(new Date());
    const [checkOutDate, setCheckOutDate] = useState<Date | null>(new Date());
    const [showModal, setShowModal] = useState(false)
  return (
    <form action="">
        <div className="py-10 px-5 hotel-component relative">
            <div className="">
                <input 
                type="text" 
                className=" outline-none border-none bg-transparent text-2xl w-[200px]" 
                placeholder="Destination" />
            </div>
            <div className="">
                <h1 className="text-[17px] text-gray-400">Check In</h1>
                <h1 className="text-2xl text-gray-400 items-center">
                    <ReactDatePicker 
                        selected={checkInDate} 
                        dateFormat="dd-mm-yyyy"
                        onChange={date => setCheckinDate(date)} />
                </h1>
            </div>
            <div className="">
                <h1 className="text-[17px] text-gray-400">Check Out</h1>
                <h1 className="text-2xl text-gray-400 items-center">
                    <ReactDatePicker 
                        selected={checkOutDate}
                        onChange={date => setCheckOutDate(date)} />
                </h1>
            </div>
            <div className="">
                <h1 className="text-[17px] text-gray-400">Guest and Room</h1>
                <h1 
                    className="text-2xl text-gray-400 items-center" 
                    onClick={() => setShowModal(!showModal)}>
                    1 Room, 2 Guest
                </h1>
                {
                    showModal &&  <CustomModal modalClass="shown" />
                }
               
            </div>
        </div>
        <div className="mt-4">
            <button className="bg-[#4d73fc] text-white font-bold text-[1.2rem] rounded-md px-5 md:px-10 py-3 hover:text-[#1a1a1a] hover:bg-gray-100 transition-all">Search</button>
        </div>
    </form>
  )
}


