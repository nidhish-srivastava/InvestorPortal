import { OccupationDetails } from "@/utils";

export default function Occupation() {
  return (
    <div className="bg-white flex flex-col pt-4 pb-12 px-3.5">
     
      <div className="flex justify-between gap-5 ml-3.5 mt-7 self-start items-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ed0de33fc1bc1830730137e385f181a11d7f7053368a4497511045199acfecc?"
          className="aspect-[1.33] object-contain object-center w-4 fill-black overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-black text-lg font-semibold self-stretch grow whitespace-nowrap">
          Occupation
        </div>
      </div>
      <div className="text-blue-700 text-base font-semibold whitespace-nowrap ml-3.5 mt-7 self-start">
        Select one of the options
      </div>
      <div className="self-stretch flex justify-between gap-3 mt-14 items-start">
        {OccupationDetails.map(e=>(
        <button className="text-black text-sm font-medium whitespace-nowrap border grow justify-center items-stretch px-4 py-5 rounded-xl border-solid border-slate-900 border-opacity-70">
            {e}
        </button>
        ))}
       
      </div>
      </div>
  );
}


