import Image from "next/image";
import Aadhar from '../assets/Aadhar.png'

export default function Aadhaar() {
  return (
    <div className="bg-white flex flex-col items-stretch pt-1.5 pb-12 px-3.5">
      <div className="flex items-stretch justify-between gap-0 mt-32">
        <Image
          src={Aadhar}
          width={100}
          height={100}
          alt="AadharImg"
        //   className="aspect-[1.57] object-contain object-center w-[137px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-neutral-950 text-lg font-semibold grow whitespace-nowrap mt-7 self-start">
          Add Aadhar Details
        </div>
      </div>
      <div className="text-black text-opacity-50 text-base whitespace-nowrap border-[color:var(--Gray-3,#828282)] w-[332px] max-w-full justify-center mt-9 pl-8 pr-16 py-5 rounded-2xl border-[0.5px] border-solid items-start">
        Enter your Aadhaar number
      </div>
      <div className="text-white text-lg font-medium whitespace-nowrap bg-blue-700 w-[332px] max-w-full justify-center items-center mt-72 mb-9 px-16 py-6 rounded-2xl">
        Submit
      </div>
    </div>
  );
}


