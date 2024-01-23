
import { CustomModalChild } from "./CustomModelChild"

type CustomModalBodyProps = {
    
}

export const CustomModalBody = ({}: CustomModalBodyProps) => {
  return (
    <div className="modal_body">
        <CustomModalChild 
            header="Adult" 
            caption="Above 12 years."
            id={1}/>

        {/* End of adult */}

        <CustomModalChild 
            header="Child" 
            caption="2-11 years on travel date." 
            id={2}/>

        {/* End of child */}

        <CustomModalChild 
            header="Infant" 
            caption="Below 2 years."
            id={3}/>
    </div>
  )
}

