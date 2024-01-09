"use client"
import Button from "@/components/Button"
import BackNavHeader from "@/components/Navbar/BackNavHeader"
import { db } from "@/utils/firebase"
import { addDoc, collection } from "firebase/firestore"
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"

function Suggestion() {
  const suggestionCollectionRef = collection(db,"suggestion")
  const [investorEmail,setInvestorEmail] = useState("")
  const [suggestion,setSuggestion] = useState("")
  const [investorName,setInvestorName] = useState("")
  
  useEffect(()=>{
    const storedInvestorDetails = localStorage.getItem("investorDetails");

  if (storedInvestorDetails) {
    const parsedInvestorDetails = JSON.parse(storedInvestorDetails);
    setInvestorName(parsedInvestorDetails.fullName);
    setInvestorEmail(parsedInvestorDetails.authUser)
  }
  },[])

  const submitSuggestion = async() =>{
    try {
      await addDoc(suggestionCollectionRef,{investorEmail,investorName,suggestion})
      toast.success("Suggestion sent successfully")
      setSuggestion("")
    } catch (error) {
      
    }
  }
  return (
    <>
    <Toaster/>
        <BackNavHeader/>
    <div className="w-[95%] mx-auto mt-12">
        <label htmlFor="suggestion" className="text-lg font-semibold">Write a Suggestion</label>
        <textarea name="" id="suggestion" value={suggestion} onChange={e=>setSuggestion(e.target.value)} cols="30" rows="10" placeholder="Write to a Suggestion or an issue to us"></textarea>
        <div className="text-center mt-4">
        <Button onClick={submitSuggestion}>Submit</Button>
        </div>
    </div>
    </>
  )
}

export default Suggestion