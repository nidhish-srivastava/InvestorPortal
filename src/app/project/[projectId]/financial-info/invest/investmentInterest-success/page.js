"use client"
import Button from "@/components/Button";
import Link from "next/link";
import { useEffect, useState } from "react";

function InvestmentInterestSuccess() {
  const [phoneNumber,setPhoneNumber] = useState(null)
  useEffect(()=>{
    setPhoneNumber(JSON.parse(sessionStorage.getItem("investmentRequired")).phoneNumber);
  },[])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-2">
    <div className="flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-green-500">Investment Interest Submitted Successfully</h2>
        <p className="text-gray-700 mb-4">Rig Group will contact you shortly</p>
        <p className="text-gray-700 mb-4">You can contact the project lead on this  <b>
           {phoneNumber}
          </b> 
           </p>
        {/* <p className="text-gray-700 mb-4">A confirmation mail is sent to your email</p> */}
      </div>
    </div>
    <Link href={`/`}>
      <Button>Home</Button>
    </Link>
    </div>
  );
}

export default InvestmentInterestSuccess;
