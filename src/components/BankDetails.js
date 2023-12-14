

import { BankNames } from "@/utils";
import PrevIcon from "./PrevIcon";

export default function BankDetails(props) {

    const {setValue,bankDetails,setBankDetails,submitHandler} = props
    const changeHandler = (e) => {
        setBankDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
  return (
    <div className="bg-white flex w-[90%] mx-auto flex-col pt-4 pb-12">
        <div className="flex gap-2 mt-8">
          <PrevIcon setValue={setValue} number={50} />
          <h2 className="text-black text-lg font-semibold">Bank details</h2>
        </div>
      <div className="flex flex-col px-3.5">
        <div className="self-center flex items-center gap-3.5 mt-12">
          <h2 className="text-blue-700 text-base font-medium grow whitespace-nowrap my-auto">
            Add Bank details
          </h2>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a662520bcd02446bc477e0fbcfd08db60928e9c0e2c713a71d9449714da2bbf4?"
            className="aspect-[0.82] object-contain object-center w-[18px] fill-lime-500 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
      <input required type="text" placeholder="Full Name" name="fullName" value={bankDetails.fullName} onChange={changeHandler} />
      <input required type="text" placeholder="Branch Name" name="branchName" value={bankDetails.branchName} onChange={changeHandler} />
      <select className="border" required name="" id="">
      <option value="" selected>Select Bank</option>
        {BankNames.map(e=>(
            <option value="">{e}</option>
        ))}
      </select>
      <input required type="text" placeholder="IFSC code" />
      <input required type="text" placeholder="Account Number" />
      <input required type="text" placeholder="Address" />
      </div>
      <button onClick={submitHandler} className="btn mx-auto mt-8"
      >
        Submit
      </button>
    </div>
  );
}


