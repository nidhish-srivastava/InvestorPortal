 import { OccupationDetails } from "@/utils";
import { useState } from "react";

export default function Occupation(props) {
  const {setValue} = props
  const [occupation,setOccupation] = useState("")
  return (
    <>
    <div className="bg-white flex flex-col pt-4 pb-12 px-3.5">
      <div className="flex justify-between gap-5 ml-3.5 mt-7 self-start items-start">
        <span onClick={()=>setValue(30)} className=" cursor-pointer">{"<-"}</span>
        {/* <div className="text-black text-lg font-semibold self-stretch grow whitespace-nowrap"> */}
        <div className="text-black text-lg font-semibold self-stretch grow whitespace-nowrap">
          Occupation
        </div>
      </div>
      <div className="text-blue-700 text-base font-semibold whitespace-nowrap ml-3.5 mt-7 self-start">
        Select one of the options
      </div>
      <div className=" flex flex-wrap justify-between gap-3 mt-14 items-start">
        {OccupationDetails.map(e=>(
        <button
        onClick={()=>setOccupation(e)} 
        className="cursor-pointer border p-0.4"
        // className="text-black text-sm font-medium whitespace-nowrap border grow justify-center items-stretch px-4 py-5 rounded-xl border-solid border-slate-900 border-opacity-70"
        >
            {e}
        </button>
        ))}
      </div>
      </div>
        <button onClick={()=>setValue(50)} className=" bg-blue-700 p-4 mt-10rem text-white cursor-pointer flex text-center mx-auto flex-col rounded-2xl">
          Submit
        </button>
    </>
  );
}


