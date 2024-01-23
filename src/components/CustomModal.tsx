import { CustomModalBody } from "./CustomModalBody"

type CustomModalProps = {
    modalClass: "hidden" | "shown"
}

export const CustomModal = ({modalClass}: CustomModalProps) => {
  return (
    <div className={`${modalClass} modal`}>
        <div className="modal_overlay"></div>
        <div className="modal_content">
            <div className="modal_header">
                <h1 className="text-2xl font-bold">Room</h1>
            </div>
            <div >
                <CustomModalBody />
            </div>
            <div className="modal_footer">
            <button 
                    type="button"
                    className="bg-[#4d73fc] text-white font-bold text-[17px] rounded-md px-5 md:px-5 py-3 hover:text-[#1a1a1a] hover:bg-gray-100 transition-all">Add Room</button>

                <button 
                    type="button"
                    className="bg-[#4d73fc] text-white font-bold text-[17px] rounded-md px-5 md:px-5 py-3 hover:text-[#1a1a1a] hover:bg-gray-100 transition-all">Done</button>
            </div>
        </div>
    </div>
  )
}
