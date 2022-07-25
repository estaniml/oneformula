import { createContext, useState } from "react";

export const DataContext = createContext();


export const DataProvider = ({ children }) => {

    const [grandPrix, setGrandPrix] = useState({})
    const [season, setSeason] = useState('')
    const [country, setCountry] = useState('')

    return (
        <DataContext.Provider value={{
            season,
            setSeason,
            country,
            setCountry,
            grandPrix,
            setGrandPrix
        }}>
            { children }
        </DataContext.Provider>
    );
}