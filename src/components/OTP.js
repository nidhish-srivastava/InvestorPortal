
export default function OTP() {
  return (
    <div className="bg-white flex flex-col items-stretch pt-2.5 pb-12">
      <div className="flex w-full flex-col px-3">
        
        <div className="text-black text-2xl font-medium whitespace-nowrap ml-3.5 mt-36 self-start">
          Verify via OTP
        </div>
        <div className="text-black text-sm whitespace-nowrap ml-3.5 mt-3 self-start">
          Enter the OTP sent to you on 
        </div>
        <div className="self-center flex w-full max-w-[282px] items-stretch justify-between gap-5 mt-24">
          <div className="border flex shrink-0 h-[53px] flex-col flex-1 rounded-xl border-solid border-blue-700" />
          <div className="border flex shrink-0 h-[53px] flex-col flex-1 rounded-xl border-solid border-blue-700" />
          <div className="border flex shrink-0 h-[53px] flex-col flex-1 rounded-xl border-solid border-blue-700" />
          <div className="border flex shrink-0 h-[53px] flex-col flex-1 rounded-xl border-solid border-blue-700" />
        </div>
        <div className="text-blue-700 text-sm whitespace-nowrap mr-8 mt-9 self-end">
          Resend
        </div>
      </div>
      <div className="text-blue-700 text-xs self-center whitespace-nowrap mt-52">
        <span className="text-black">By continuing you agree to our </span>
        <span className="text-blue-700">Terms & Conditions</span>
      </div>
      <div className="text-white text-lg font-medium whitespace-nowrap bg-blue-700 self-center w-full max-w-[339px] justify-center items-center mt-2.5 mb-11 px-16 py-6 rounded-2xl">
        Continue
      </div>
    </div>
  );
}


