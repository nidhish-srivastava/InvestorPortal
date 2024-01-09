"use client"
import Button from "@/components/Button"
import RupeeIcon from "@/components/Icons/RupeeIcon"
import BackNavHeader from "@/components/Navbar/BackNavHeader"
import { db } from "@/utils/firebase"
import { addDoc, collection } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast, {  Toaster,LoaderIcon } from "react-hot-toast"

function Invest({ params }) {
  const adminCollectionRef = collection(db,"admin")
  const router = useRouter()
  const [investmentRequired, setInvestmentRequired] = useState("")
  const [minInvestment, setMinInvestment] = useState("")
  const [investmentAmount, setInvestmentAmount] = useState(minInvestment)
  const [investorDetails,setInvestorDetails] = useState({})
  const [loading,setLoading] = useState(false)
  const projectId = params.projectId

  let investmentDetails
  useEffect(() => {
    investmentDetails = JSON.parse(sessionStorage.getItem("investmentRequired"))
    setInvestmentRequired(investmentDetails.investmentRequired)
    setMinInvestment(Math.ceil(investmentDetails.investmentRequired / investmentDetails?.maxInvestorsRequired))
    setInvestorDetails(JSON.parse(localStorage.getItem("investorDetails")))
  }, [])
  const submitInvestmentInterestHandler = async () => {
    if (investmentAmount < minInvestment || investmentAmount > investmentRequired) {
      return toast.error("Enter Valid Amount")
    }
    setLoading(true)
    const docId = investorDetails.docId
    try {
      const sendReqToAdmin = await addDoc(adminCollectionRef,{...investorDetails,investmentAmount,projectId,docId})
      if(sendReqToAdmin.id.length>1){
          router.push("invest/investmentInterest-success")
          setLoading(false)
      } 
    } catch (error) {
      setLoading(false)
    }
   
  }
  return (
    <>
      <Toaster />
      <BackNavHeader route={`project/${projectId}`}></BackNavHeader>
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
            <Button className={`btn border-none ${loading ? "opacity-80" : ""}`} onClick={submitInvestmentInterestHandler}>
            {loading ? <div className="loader">
            <LoaderIcon/> Submitting
          </div> : "Submit Investment Interest"}
            </Button>
        </div>
      </main>
    </>
  )
}

export default Invest