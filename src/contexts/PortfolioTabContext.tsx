import { createContext, useState } from "react";
import { TPprojects } from "../components/ProjectTab";
import { IWrapper } from "../components/Wrapper";

interface ctxValues {
    active: string
    setActive: Function
}

export const PortfolioTabContext = createContext( { } as ctxValues ) ;

export default function PortfolioTabContextProvider({ children } : IWrapper){
    const [ active, setActive ] = useState<TPprojects>("Frontend")
    return (
        <PortfolioTabContext.Provider value={{ active, setActive}} >
            {children}
        </PortfolioTabContext.Provider>
    )
}