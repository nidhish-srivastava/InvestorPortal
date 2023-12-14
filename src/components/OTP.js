
import { useState } from "react";


function OTP(props) {

  const { number, result, setValue,sendOTP,show } = props
  const [otp, setOtp] = useState("");
  console.log(result);

  const verifyOtp = async () => {
    try {
      const res = await result.confirm(otp)
      console.log(res);
      if ( res.operationType === "signIn" &&
      res.providerId === "phone") {
        setValue(20)
      }
    } catch (error) {
      console.log(error);
    }
  }


  const maskedPhoneNumber = "********" + number.slice(-4)
  return (
    <main className="flex h-screen flex-col pb-12 w-[95%] mx-auto">
      <div className="mt-32">
      <h1 className="text-black text-xl not-italic font-medium">Verify Via Otp</h1>
      <h4 className="text-[.85rem]">
        Enter the OTP sent to you on {maskedPhoneNumber}
      </h4>
      </div>
      <input className="mt-12" type="otp" placeholder="Enter OTP"  onChange={(e) => setOtp(e.target.value)} />
      <div id="recaptch"></div>
      <span className="text-right text-[0.7rem] cursor-pointer  text-violet-800" onClick={()=>sendOTP()}>Resend</span>
      <br />
      <div className="mt-auto text-center pb-8">
      <h5 className="text-[0.7rem]">By continuing you agree to our <span className=" text-violet-700">
        Terms & Conditions
      </span>
      </h5>
      <button className="btn" onClick={verifyOtp}>Continue</button>
      </div>
    </main>
  )
}

export default OTP