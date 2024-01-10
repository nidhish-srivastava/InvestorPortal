import CallToAction from "./Hero";
import { Raleway } from 'next/font/google';
const raleway = Raleway({ subsets: ['latin'] })


function Home() {
  return (
    <>
    <header className="p-4 relative z-[1] rounded-b-lg bg-blue-700 shadow-md">
      <h2 className={`text-center font-semibold text-[18px] ${raleway.className} text-white`}>
      Welcome to Investor Panel
      </h2>
</header>
     <CallToAction/>
    </>
  )
}

export default Home