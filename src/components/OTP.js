
import { useState } from "react";


function OTP(props) {
  
const { number,result,setValue } = props
const [otp, setOtp] = useState("");

const verifyOtp = async()=>{
  console.assert(otp);
  try {
   const res =  await result.confirm(otp)
   if(res?.user?.phoneNumber.length > 1){
      setValue(10)
   }
  } catch (error) {
  }
}


  const maskedPhoneNumber = "********" + number.slice(-4)
  return (
    <div>
            <div id="recaptch"></div>

      <h1>Verify Via Otp</h1>
      <p>Enter the OTP sent to you on
        {maskedPhoneNumber}
      </p>
      <input type="otp" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <br />
      <h5 className="text-[0.8rem]">By continuing you agree to our <span>
        Terms and Conditions
      </span>
      </h5>
      <button onClick={verifyOtp}>Continue</button>
    </div>
  )
}

export default OTP