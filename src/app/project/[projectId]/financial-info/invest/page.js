"use client"
import Button from "@/components/Button"
import RupeeIcon from "@/components/Icons/RupeeIcon"
import NavHeader from "@/components/Navbar/NavHeader"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast, {  Toaster } from "react-hot-toast"

function Invest({ params }) {
  const router = useRouter()
  const [investmentRequired, setInvestmentRequired] = useState("")
  const [minInvestment, setMinInvestment] = useState("")
  const [investmentAmount, setInvestmentAmount] = useState(minInvestment)
  let investmentDetails
  useEffect(() => {
    investmentDetails = JSON.parse(sessionStorage.getItem("investmentRequired"))
    setInvestmentRequired(investmentDetails.investmentRequired)
    setMinInvestment(Math.ceil(investmentDetails.investmentRequired / investmentDetails?.maxInvestorsRequired))
  }, [])
  const paymentHandler = async () => {
    if (investmentAmount < minInvestment || investmentAmount > investmentRequired) {
      return toast.error("Enter Valid Amount")
    }
    setTimeout(()=>{
      router.push("invest/investmentInterest-success")
    },1000)
    try {
      const investmentDetailsSession = JSON.parse(sessionStorage.getItem("investmentRequired"))
      let projectName = investmentDetailsSession.projectName
      let phoneNumber = investmentDetailsSession.phoneNumber
       await fetch(`http://localhost:3000/api/email`,{
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({projectName,investmentAmount,phoneNumber})
      })
    } catch (error) {
    }
  }
  return (
    <>
      <Toaster />
      <NavHeader route={`project/${params.projectId}/financial-info`}></NavHeader>
      <main className="w-[95%] mx-auto">
        <br />
        <label className="font-semibold text-[1.1rem] text-blue-500 bg-opacity-70 p-4">
          Investment Required
        </label>
        <b className="text-[1.2rem]">
          <RupeeIcon />{investmentRequired}
        </b>
        <br />
        <br />
        <label className="font-semibold text-[1.1rem] text-blue-500 bg-opacity-70 p-4">
          Min Investment
        </label>
        <b className="text-[1.2rem]">
          <RupeeIcon />{minInvestment}
        </b>
        <div className="mt-12">
          <label htmlFor="enterAmount"></label>
          {/* <input className="w-full" min={minInvestment} type="number" id="enterAmount" placeholder="Enter the Amount you want to invest" max={investmentRequired} value={investmentAmount} onChange={changeHandler} /> */}
          <input className="w-full" value={investmentAmount} min={minInvestment} max={investmentRequired} onChange={e => setInvestmentAmount(e.target.value)} type="number" id="enterAmount" placeholder="Enter the Amount you want to invest" />
        </div>
        <div className="text-center mt-12">
            <Button onClick={paymentHandler}>Submit Investment Interest</Button>
        </div>
      </main>
    </>
  )
}

export default Invest