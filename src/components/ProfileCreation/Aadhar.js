import Image from "next/image";
import Aadhar from '../../assets/Aadhar.png'
import PrevIcon from "../Icons/PrevIcon";

export default function Aadhaar(props) {
  const {setValue,aadharInput,setAadharInput} = props
  const nextHandler = () =>{
    if(aadharInput.length == 4){
      setValue(30)
    }
  }
  
  return (
    <>
    <div className="bg-white flex flex-col  pt-1.5 pb-12 px-2">
        {/* <PrevIcon setValue={setValue} number={10} /> */}
      <div className=" shadow-lg p-4 flex items-stretch justify-between gap-0 mt-32">
        <Image
          src={Aadhar}
          width={100}
          height={100}
          alt="AadharImg"
        />
        <h2 className="text-lg font-semibold grow whitespace-nowrap mt-7 self-start">
          Add Aadhar Details
        </h2>
      </div>
      <br />
      <br />
      <div className="px-3.5">
      <label htmlFor="">Masked Aadhar number</label>
      <input required className="border p-4 mt-4 w-full remove-arrow" placeholder="xxxx xxxx _ _ _ _" type="number" min={0} value={aadharInput} onChange={e=>setAadharInput(e.target.value)} />
      </div>
        </div>
      <div className="text-center mt-48">
        <h4 className="text-[11px] text-center">By continuing you agree to our <span className="text-indigo-700">Terms and Conditions</span></h4>
      <button
      className="btn"
      onClick={nextHandler}
      >
        Submit
      </button>
        </div>
    </>
  );
}


