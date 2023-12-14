import panNumberImg from '../assets/PanNumber.png'
import Image from "next/image";
import PrevIcon from "./PrevIcon";

export default function PanNumber(props) {
    const {setValue,panNumber,setPanNumber} = props
  return (
    <>
    <div className="flex flex-col gap-2 h-screen pb-12">
            <PrevIcon setValue={setValue} number={20} className="p-2"/>
      <div className="flex items-stretch justify-between gap-5">
        <div className="shadow-lg  flex items-stretch justify-between gap-3 mt-28 px-2 py-4 rounded-xl">
            <Image width={100} height={100} src={panNumberImg} alt="" />
        {/* <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto"> */}
        <div className="">
          <h2 className="text-neutral-950 text-lg font-semibold">
            Add PAN Details
          </h2>
          <h5 className="text-black text-xs font-semibold whitespace-nowrap mt-4">
            PAN is compulsory for investing in India
          </h5>
        </div>
    </div>
      </div>
      <input className="mx-auto mt-8 w-[90%] border p-4" placeholder="Enter Pan Card number" type="text" value={panNumber} onChange={(e)=>setPanNumber(e.target.value)} />
      <div className="text-center mt-auto">
      <button onClick={()=>setValue(40)} className="btn">
        Submit
      </button>
      <button className="mt-4 border p-4 rounded-xl" onClick={()=>setValue(40)} 
      >
        Skip it for Now
      </button>
        </div>
        </div>
    </>
  );
}


