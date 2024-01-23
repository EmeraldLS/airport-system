import { ReactNode, createContext, useContext } from "react"

type bookingContext = {
}

type bookingProviderProps = {
    children: ReactNode
}

const bookingContext = createContext({} as bookingContext)

export const useBookingContext = () => {
    return useContext(bookingContext)
}

export const BookingProvider = ({children}: bookingProviderProps) => {
    
    return <bookingContext.Provider value={{
    }}>
        {children}
    </bookingContext.Provider>
}