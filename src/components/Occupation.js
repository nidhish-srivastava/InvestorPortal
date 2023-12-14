import { OccupationDetails } from "@/utils";
import PrevIcon from "./PrevIcon";

export default function Occupation(props) {
  const { setValue,setOccupation } = props
  return (
    <>
      <div className="bg-white flex flex-col pt-4 pb-12 px-3.5">
        <div className="flex gap-6 mt-10 mb-4">
      <PrevIcon setValue={setValue} number={30} />
        <h2 className=" text-black text-lg font-semibold">
          Occupation
        </h2>
        </div>
        <label className="text-blue-700 text-base font-semibold whitespace-nowrap ml-3.5 mt-7 self-start">
          Select one of the options
        </label>
        {/* <div className=" flex flex-wrap justify-between gap-2 mt-14 items-start">
        {OccupationDetails.map(e=>(
        <button
        onClick={()=>setOccupation(e)} 
        className="cursor-pointer w-fit border rounded"
        >
            {e}
        </button>
        ))}
      </div> */}
        <div className="self-stretch flex flex-wrap justify-between gap-3 mt-14 items-start">
          {OccupationDetails.map(e => (
            <button onClick={() => setOccupation(e)} className="text-black text-sm font-medium whitespace-nowrap border grow justify-center items-stretch  py-5 rounded-xl border-solid border-slate-900 border-opacity-70">
              {e}
            </button>
          ))}
        </div>
      </div>
      <button onClick={() => setValue(50)} className=" bg-blue-700 p-4 mt-12 text-white cursor-pointer flex text-center mx-auto flex-col rounded-2xl">
        Submit
      </button>
    </>
  );
}


