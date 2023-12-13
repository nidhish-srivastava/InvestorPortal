import { useState } from "react";
import panNumberImg from '../assets/PanNumber.png'
import Image from "next/image";

export default function PanNumber(props) {
    const {setValue} = props
    const [panNumber,setPanNumber] = useState("")
  return (
    <div className="bg-white flex max-w-[360px] flex-col items-stretch pt-1.5 pb-11 px-3.5">
      <div className="flex w-full items-stretch justify-between gap-5">
        <div className="shadow-sm bg-white flex items-stretch justify-between gap-3 mt-28 px-2 py-4 rounded-xl">
            <span className="cursor-pointer" onClick={()=>setValue(20)}>
                {"<-"}
            </span>
            <Image width={100} height={100} src={panNumberImg} alt="" />
        <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
          <div className="text-neutral-950 text-lg font-semibold">
            Add PAN Details
          </div>
          <div className="text-black text-xs font-semibold whitespace-nowrap mt-4">
            PAN is compulsory for investing in India
          </div>
        </div>
    </div>
      </div>
      <input className="border p-4" placeholder="Enter Pan Card number" type="text" value={panNumber} onChange={(e)=>setPanNumber(e.target.value)} />
   
      <div onClick={()=>setValue(40)} className="cursor-pointer text-white text-lg font-medium whitespace-nowrap bg-blue-700 justify-center items-center mt-72 px-16 py-6 rounded-2xl">
        Submit
      </div>
      <div  onClick={()=>setValue(40)} className="cursor-pointer text-black text-lg font-medium whitespace-nowrap shadow-sm bg-white justify-center items-center mt-2.5 px-16 py-5 rounded-2xl">
        Skip it for Now
      </div>
    </div>
  );
}


