"use client"
import { createContext, useContext, useState } from "react"

const InvestorPanelContext = createContext()

export const useInvestorPanelContextHook = () => useContext(InvestorPanelContext)

export const InvestorPanelProvider = ({children})=>{
    const [authUser,setAuthUser] = useState("")
    const [investorDetails,setInvestorDetails] = useState({})
    return(
        <InvestorPanelContext.Provider value={{authUser,setAuthUser,investorDetails,setInvestorDetails}}>
            {children}
        </InvestorPanelContext.Provider>
    )
}