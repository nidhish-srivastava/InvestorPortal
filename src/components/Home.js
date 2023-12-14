import { signOut } from "firebase/auth"
import { auth } from "@/utils/firebase";
import Image from "next/image";
import Dp from '../assets/Dp.png'
import HomeIconSvg from "./HomeIconSvg";
import WalletIconSvg from "./WalletIconSvg";
import ActivityIconSvg from "./ActivityIconSvg";
import SampleProject from '../assets/SampleProject.png'

function Home() {
    const signoutHandler = async() =>{
        await signOut(auth)
        location.href = "/"
    }
  return (
    <>
        <span className="absolute right-2 top-2 p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="13" viewBox="0 0 3 13" fill="none">
  <path d="M3 11.7C3 11.9571 2.91203 12.2085 2.7472 12.4222C2.58238 12.636 2.34811 12.8026 2.07403 12.901C1.79994 12.9994 1.49834 13.0252 1.20736 12.975C0.916393 12.9249 0.649119 12.801 0.439341 12.6192C0.229562 12.4374 0.0867005 12.2058 0.0288227 11.9536C-0.0290551 11.7014 0.000649921 11.4401 0.114181 11.2025C0.227713 10.965 0.419972 10.7619 0.666645 10.6191C0.913319 10.4762 1.20333 10.4 1.5 10.4C1.89782 10.4 2.27936 10.537 2.56066 10.7808C2.84196 11.0246 3 11.3552 3 11.7ZM1.5 2.6C1.79667 2.6 2.08668 2.52376 2.33336 2.38091C2.58003 2.23807 2.77229 2.03503 2.88582 1.79749C2.99935 1.55994 3.02906 1.29856 2.97118 1.04638C2.9133 0.794208 2.77044 0.56257 2.56066 0.380762C2.35088 0.198954 2.08361 0.0751405 1.79264 0.0249797C1.50166 -0.0251811 1.20006 0.000563265 0.925975 0.0989572C0.651886 0.197351 0.417618 0.363976 0.252796 0.577759C0.0879743 0.791543 8.08342e-07 1.04288 8.08342e-07 1.3C8.08342e-07 1.64478 0.158036 1.97544 0.439341 2.21924C0.720645 2.46304 1.10218 2.6 1.5 2.6ZM1.5 5.2C1.20333 5.2 0.913319 5.27624 0.666645 5.41909C0.419972 5.56194 0.227713 5.76497 0.114181 6.00251C0.000649921 6.24006 -0.0290551 6.50144 0.0288227 6.75362C0.0867005 7.00579 0.229562 7.23743 0.439341 7.41924C0.649119 7.60105 0.916393 7.72486 1.20736 7.77502C1.49834 7.82518 1.79994 7.79944 2.07403 7.70104C2.34811 7.60265 2.58238 7.43603 2.7472 7.22224C2.91203 7.00846 3 6.75712 3 6.5C3 6.15522 2.84196 5.82456 2.56066 5.58076C2.27936 5.33696 1.89782 5.2 1.5 5.2Z" fill="white"/>
</svg>
        </span>
        <header className="flex items-center gap-2 p-4 relative -z-[1] rounded-b-lg bg-blue-700 shadow-md">
          <Image src={Dp} width={70} height={70} alt="dp"/>
          <h2 className="font-semibold text-white"> 
          Hi Investor
          </h2>
        </header>
        <div className="fixed bottom-0 p-5 w-[100%] flex justify-between items-center rounded-tl-lg rounded-tr-lg bg-blue-700 shadow-md">
         <HomeIconSvg/>
         <ActivityIconSvg/>
         <WalletIconSvg/>
        </div>
        <div className="py-4">
        <button className="ml-4 rounded-md bg-blue-200 bg-opacity-19 text-blue-800 text-sm font-bold px-4 py-1">Upcoming Projects</button>
        <div className="p-4 flex gap-2 mt-8 rounded-md bg-blue-100">
          <Image
          src={SampleProject}
          width={100}
          height={100}
          alt=""
          />
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-violet-700 font-medium">Project Name</h2>
            <h4 className="text-[10px] font-medium">Project leader name</h4>
            <h4 className="text-[10px] font-medium">&#8377; 100,100 for 1 year</h4>
            <button className="rounded-[4px] font-medium px-2 py-1 bg-indigo-600 text-[11px] text-white">View Details</button>
          </div>
        </div>
        </div>
        {/* <button onClick={signoutHandler}>Sign out</button> */}
    </>
  )
}

export default Home