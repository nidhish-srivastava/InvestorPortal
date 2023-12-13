import Image from "next/image";
import Aadhar from '../assets/Aadhar.png'
import { useState } from "react";

export default function Aadhaar(props) {
  const {setValue} = props
  const [aadharInput,setAadharInput] = useState("")
  return (
    <div className="bg-white flex flex-col items-stretch pt-1.5 pb-12 px-3.5">
        <span onClick={()=>setValue(10)} className=" cursor-pointer">{"<-"}</span>
      <div className="flex items-stretch justify-between gap-0 mt-32">
        <Image
          src={Aadhar}
          width={100}
          height={100}
          alt="AadharImg"
        />
        <div className="text-neutral-950 text-lg font-semibold grow whitespace-nowrap mt-7 self-start">
          Add Aadhar Details
        </div>
      </div>
      <br />
      <label htmlFor="">Masked Aadhar number</label>
      <input className="border p-4 mt-4" placeholder="xxxx xxxx _ _ _ _" type="text" value={aadharInput} onChange={e=>setAadharInput(e.target.value)} />
      <button onClick={()=>setValue(30)} className="text-white text-lg font-medium whitespace-nowrap bg-blue-700 w-[332px] max-w-full justify-center items-center mt-48 mb-9 px-16 py-6 rounded-2xl">
        Submit
      </button>
    </div>
  );
}


