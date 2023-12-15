

import { BankNames } from "@/utils";
import PrevIcon from "../Icons/PrevIcon";

export default function BankDetails(props) {

  const { setValue, bankDetails, setBankDetails, submitHandler } = props
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
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
              <path d="M9 0L0 4V10C0 15.55 3.84 20.74 9 22C14.16 20.74 18 15.55 18 10V4L9 0ZM9 6C10.4 6 11.8 7.1 11.8 8.5V10C12.4 10 13 10.6 13 11.3V14.8C13 15.4 12.4 16 11.7 16H6.2C5.6 16 5 15.4 5 14.7V11.2C5 10.6 5.6 10 6.2 10V8.5C6.2 7.1 7.6 6 9 6ZM9 7.2C8.2 7.2 7.5 7.7 7.5 8.5V10H10.5V8.5C10.5 7.7 9.8 7.2 9 7.2Z" fill="#65E827" />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <input required type="text" placeholder="Full Name" name="fullName" value={bankDetails.fullName} onChange={changeHandler} />
        <input required type="text" placeholder="Branch Name" name="branchName" value={bankDetails.branchName} onChange={changeHandler} />
        <select className="border" required name="bankName" value={bankDetails.bankName} onChange={changeHandler}>
          <option value="" selected >Select Bank</option>
          {BankNames.map(e => (
            <option value={e}>{e}</option>
          ))}
        </select>
        <input required type="text" name="ifscCode" placeholder="IFSC code" value={bankDetails.ifscCode} onChange={changeHandler} />
        <input required type="text" name="accountNumber" placeholder="Account Number" value={bankDetails.accountNumber} onChange={changeHandler} />
        <input required type="text" name="address" placeholder="Address" value={bankDetails.address} onChange={changeHandler} />
      </div>
      <button onClick={submitHandler} className="btn mx-auto mt-8"
      >
        Submit
      </button>
    </div>
  );
}


