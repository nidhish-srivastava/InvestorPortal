"use client"
import { createContext, useContext, useState } from "react"

const InvestorPanelContext = createContext()

export const useInvestorPanelContextHook = () => useContext(InvestorPanelContext)

export const InvestorPanelProvider = ({children})=>{
    const [authUser,setAuthUser] = useState("")
    return(
        <InvestorPanelContext.Provider value={{authUser,setAuthUser}}>
            {children}
        </InvestorPanelContext.Provider>
    )
}