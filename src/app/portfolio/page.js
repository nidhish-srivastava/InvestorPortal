"use client"
import RupeeIcon from "@/components/Icons/RupeeIcon"
import BottomNavBar from "@/components/Navbar/BottomNavBar"
import { useEffect, useState } from "react"
import ProjectCard from "@/components/ProjectCard"
import { sumHandler } from "@/utils"
import { db } from "@/utils/firebase"
import { collection, getDoc, getDocs, query, where } from "firebase/firestore"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import suggestion from '@/assets/suggestion.png'
import report from '@/assets/report.png'
import myinvestment from '@/assets/investments.png'
import Link from "next/link"
import Image from "next/image"
import { useMyInvestmentHook } from "@/utils/hooks/useMyInvestmentHook"

function Portfolio() {
  const myInvestments = useMyInvestmentHook()
  const [totalInvested,setTotalInvested] = useState()
  const [current,setCurrent] = useState(0)
  const [loading,setLoading] = useState(false)
  const returns = () =>{
    if(totalInvested==0) return 0
    else {
      return current - totalInvested
    }
  }
  useEffect(()=>{
      setTotalInvested(sumHandler(myInvestments))
  },[myInvestments])
  
  useEffect(()=>{
    if(totalInvested==0) setCurrent(0)
    else setCurrent(totalInvested+10)
  },[totalInvested])
  return (
    <>
    <div className="bg-blue-700">
    <h1 className="font-bold text-2xl text-center pt-8 text-white">PORTFOLIO</h1>
    <div className="pb-8 mt-8">
    {loading ?  <div style={{width : "80%",margin :"4rem auto"}}>
            <Skeleton count={5}/>
            </div> : 
    <div className="w-[88%] rounded-2xl  mx-auto bg-white p-4 grid grid-cols-2 justify-center items-start gap-8">
      <div className="">
        <label htmlFor="" className="wallet-label">CURRENT</label>
        <h3 className="font-semibold"><RupeeIcon/> {current}</h3>
      </div>
      <div>
        <label htmlFor="" className="wallet-label">INVESTED</label>
        <h3 className="font-semibold"><RupeeIcon/> {totalInvested}</h3>
      </div>
      <div>
        <label htmlFor="" className="wallet-label">RETURNS</label>
        <h3 className="font-semibold"><RupeeIcon/> {returns()}</h3>
      </div>
      <div>
        <label htmlFor="" className="wallet-label">TOTAL RETURNS %</label>
        <h3 className="font-semibold">{(returns())*.01} %</h3>
      </div>
    </div>
}
    </div>
    <BottomNavBar/>
    </div>
    <div className="mb-24">
    <section className="pt-4 grid grid-cols-2 w-[90%] text-center">
        <Link href={`/my-reports`}>
        <div className="manage-section-divs">
          <Image src={report} width={50} height={50} alt="report"/>
          My Reports
          </div>
        </Link>
        <Link href={`/suggestion`}>
        <div className="manage-section-divs">
          <Image src={suggestion} width={50} height={50} alt="suggestion" />
          View Suggestions
          </div>
        </Link>
        <Link href={`/my-investments`}>
        <div className="manage-section-divs">
          <Image src={myinvestment} width={50} height={50} alt="suggestion" />
          My Investments
          </div>
        </Link>
    </section>
    </div>
    </>
  )
}

export default Portfolio
