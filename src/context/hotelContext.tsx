import { ReactNode, createContext, useContext, useState } from "react"

type HotelContextProps = {
    searchHotel: (query: searchHotelParams) => void
    addPersonCount: (id: number) => void,
    reducePersonCount: (id: number) => void,
    getPersonTypeCount: (id: number) => number,
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

type personProps = {
    id: number,
    count: number,
}

export const HotelProvider = ({children}: HotelProviderProps) => {
    const [persons, setPersons] = useState<personProps[]>([])
    const searchHotel = (query: searchHotelParams) => {
        console.log(query)
    }

    const addPersonCount = (id: number) => {
        setPersons(currentPersons => {
            if (currentPersons.find(person => person.id === id) == null) {
                return [...currentPersons, {id, count: 1}]
            }else{
                return currentPersons.map(person => {
                    if(person.id === id) {
                        
                        return {...person, count: person.count + 1}
                    }else{
                        return person
                    }
                })
            }
        })
    }

    const reducePersonCount = (id: number) => {
        setPersons(persons => {
            if(persons.find(person => person.id === id) === null) {
                return [...persons, {id, count: 0}]
            }else{
                return persons.map(person => {
                    if(person.id === id && person.count > 0) {
                        return {...person, count: person.count - 1}
                    }else{
                        return person
                    }
                })
            }
        })
    }

    const getPersonTypeCount = (id: number) => {
        return persons.find(person => person.id === id)?.count || 0
    }

    

    return <hotelContext.Provider value={{
        searchHotel,
        addPersonCount,
        getPersonTypeCount,
        reducePersonCount
        }}>
        {children}
    </hotelContext.Provider>
}