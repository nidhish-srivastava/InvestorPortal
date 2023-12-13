
// function BankDetails() {
//   return (
//     <div>BankDetails</div>
//   )
// }

import { BankNames } from "@/utils";
import { useState } from "react";

// export default BankDetails


export default function BankDetails(props) {
    const [bankDetails,setBankDetails] = useState({
        fullName : "",
        bankName : "",
        branchName : "",
        ifscCode : "",
        accountNumber : "",
        address : ""
    })
    const {setValue} = props
    const changeHandler = (e) => {
        setBankDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
  return (
    <div className="bg-white flex max-w-[360px] flex-col pt-4 pb-12">
      <div className="self-stretch flex w-full flex-col items-stretch px-3.5">
        <div className="flex justify-between gap-5 ml-3.5 mt-7 self-start items-start">
         <span className="cursor-pointer" onClick={()=>setValue(50)}>{"<-"}</span>
          <div className="text-black text-lg font-semibold">Bank details</div>
        </div>
        <div className="self-center flex items-center gap-3.5 mt-12">
          <div className="text-blue-700 text-base font-medium grow whitespace-nowrap my-auto">
            Add Bank details
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a662520bcd02446bc477e0fbcfd08db60928e9c0e2c713a71d9449714da2bbf4?"
            className="aspect-[0.82] object-contain object-center w-[18px] fill-lime-500 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
      <input required type="text" placeholder="Full Name" name="fullName" value={bankDetails.fullName} onChange={changeHandler} />
      <input required type="text" placeholder="Branch Name" name="branchName" value={bankDetails.branchName} onChange={changeHandler} />
      <select className="border" required name="" id="">
      <option value="" className="" disabled selected>Select Bank</option>
        {BankNames.map(e=>(
            <option value="">{e}</option>
        ))}
      </select>
      <input required type="text" placeholder="IFSC code" />
      <input required type="text" placeholder="Account Number" />
      <input required type="text" placeholder="Address" />
      </div>
      <button onClick={()=>setValue(70)} className="text-white text-lg font-medium whitespace-nowrap bg-blue-700 self-center w-[335px] max-w-full justify-center items-center py-4 mt-4 rounded-2xl">
        Submit
      </button>
    </div>
  );
}


