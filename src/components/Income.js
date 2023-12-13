import { IncomeBrackets } from "@/utils";

export default function Income(props) {
    const {setValue} = props
  return (
    <div className="bg-white flex max-w-[360px] flex-col pt-4 pb-12 px-3.5">
      {/* <div className="self-stretch flex w-full items-stretch justify-between gap-5"> */}
      <div className="flex gap-2">
        <span className="cursor-pointer" onClick={()=>setValue(40)}>{"<-"}</span>
        <h2 className="text-xl">Income</h2>
      </div>
      <label className="text-blue-700 text-base font-semibold whitespace-nowrap ml-3.5 mt-8 self-start">
        Select one of options
      </label>
      <div className="flex flex-wrap gap-2 mt-4">
      {IncomeBrackets.map(e=>(
          <button className="border p-4">{e}</button>
          ))}
          </div>
      <div onClick={()=>setValue(60)} className="text-white text-lg font-medium whitespace-nowrap bg-blue-700 self-stretch justify-center items-center mt-12 mb-3.5 px-16 py-6 rounded-2xl cursor-pointer">
        Continue
      </div>
    </div>
  );
}


