import { ReactNode, createContext, useContext } from "react"

type HotelContextProps = {
    searchHotel: (query: searchHotelParams) => void
}

type searchHotelParams = {
    destination: string,
    checkIn: string,
    checkOut: string,
    rooms: number,
    adults: number,
    children: number
}

const hotelContext = createContext({} as HotelContextProps)

export const useHotelContext = () => {
    return useContext(hotelContext)
}

type HotelProviderProps = {
    children: ReactNode;
}

export const HotelProvider = ({children}: HotelProviderProps) => {
    const searchHotel = (query: searchHotelParams) => {
        console.log(query)
    }
    return <hotelContext.Provider value={{searchHotel}}>
        {children}
    </hotelContext.Provider>
}