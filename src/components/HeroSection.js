
function HeroSection({setShow}) {
  return (
    <div className="bg-[#FFC017] min-h-screen flex-col  flex items-center">
        <h2 className="text-[60px] font-serif mb-12 font-semibold px-4 pt-12">Start Investing</h2>
        <p className='px-4 pb-12 text-[22px]'>
        Discover the future of investment with our Investor Panel – where visionary projects meet strategic minds
        </p>
        <button onClick={()=>setShow(true)} className='bg-black text-white px-6 py-2 rounded-xl text-[18px]'>Get Started</button>
    </div>
  )
}

export default HeroSection