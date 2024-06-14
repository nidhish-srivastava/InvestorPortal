"use client"

import { createContext, useContext } from "react"

const InvestorPanelContext = createContext()

export const useInvestorPanelContextHook = () => useContext(InvestorPanelContext)

export const InvestorPanelProvider = ({children})=>{
    return(
        <InvestorPanelContext.Provider value={{}}>
            {children}
        </InvestorPanelContext.Provider>
    )
}