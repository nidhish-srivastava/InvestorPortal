import { IncomeBrackets } from "@/utils";
import PrevIcon from "../Icons/PrevIcon";
import { useState } from "react";

export default function Income(props) {
  const { setValue, setIncome } = props
  const [highlightedBtn, setHighlightedBtn] = useState(null)
  const clickHandler = (e) => {
    setHighlightedBtn(e)
    setIncome(e)
  }
  console.log(highlightedBtn);
  return (
    <div className="bg-white flex max-w-[360px] flex-col pt-4 pb-12 px-3.5">
      {/* <div className="self-stretch flex w-full items-stretch justify-between gap-5"> */}
      <div className="flex gap-8 mt-10 mb-4">
        <PrevIcon setValue={setValue} number={40} />
        <h2 className="text-black text-lg font-semibold">Income</h2>
      </div>
      <label className="text-blue-700 text-base font-semibold whitespace-nowrap ml-3.5 mt-8 self-start">
        Select one of options
      </label>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {IncomeBrackets.map((e, i) => (
          <button key={e} onClick={() => clickHandler(e)} className={`text-black text-sm font-medium whitespace-nowrap border grow justify-center items-stretch  py-5 rounded-xl border-solid border-slate-900 border-opacity-70 ${highlightedBtn == e ? "bg-blue-700  text-white" : ""}`}>{e}</button>
        ))}
      </div>
      <button onClick={() => setValue(60)}
        className="btn mt-8"
      >
        Continue
      </button>
    </div>
  );
}


