import Image from "next/image";
import Aadhar from '../../assets/Aadhar.png'
import Button from "../Button";
import { useRef, useState } from "react";

export default function Aadhaar(props) {
  const {setValue,aadharInput,setAadharInput} = props
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(null);


  const nextHandler = () =>{
    if(aadharInput.length == 4){
      setValue(30)
    }
  }

  const uploadAadhar = () =>{
    fileInputRef.current?.click();
  }

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedFileName(selectedFile ? selectedFile.name : null);
  };
  
  return (
    <>
    <div className="bg-white flex flex-col  pb-4 px-2">
        {/* <PrevIcon setValue={setValue} number={10} /> */}
      <div className=" shadow-lg p-4 flex items-stretch justify-between gap-0 mt-28 mb-4">
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
        <div className="text-center">
      <Button className={`opacity-90`} onClick={uploadAadhar}>Upload Your Masked Aadhar</Button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleFileChange}
          />
        <h2 className="mt-2 text-sm text-gray-700">
          {selectedFileName && `Selected File: ${selectedFileName}`}
        </h2>
          </div>
      <div className="text-center mt-[9rem]">
        <h4 className="text-[11px] text-center">By continuing you agree to our <span className="text-indigo-700">Terms and Conditions</span></h4>
      <Button
      className={`w-[80%]`}
      // className="btn"
      onClick={nextHandler}
      >
        Submit
      </Button>
        </div>
    </>
  );
}


