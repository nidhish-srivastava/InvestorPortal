"use client"
import BackNavHeader from "@/components/Navbar/BackNavHeader"
import TotalInvestment from "@/components/TotalInvestment"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import SampleProject from "@/assets/SampleProject.png"
import RupeeIcon from "@/components/Icons/RupeeIcon"
import { sumHandler } from "@/utils"
import { useMyInvestmentHook } from "@/utils/hooks/useMyInvestmentHook"
import HamburgerModal from "@/components/Navbar/HamburgerModal"

function MyInvestments() {
 const myInvestments = useMyInvestmentHook()
  return (
    <>
    <BackNavHeader route={`portfolio`}/>
    <HamburgerModal/>
    <h1 className="heading-style-1">My Investments</h1>
    <div>
      {myInvestments.map(e=>(
        <MyInvestmentCard key={e?.id} projectObj={e}/>
      ))}
    </div>
    <div className="fixed bottom-0 w-full">
    <TotalInvestment totalInvestment={sumHandler(myInvestments)}/>
    </div>
    </>
  )
}

export default MyInvestments


function MyInvestmentCard({projectObj}){
  return(
    <>
 <div className="p-4 flex gap-2 mt-8 rounded-md bg-blue-100">
    <Image
    src={SampleProject}
    width={100}
    height={100}
    alt=""
    />
    <div className="flex flex-col items-start gap-2">
      <h2 className="text-violet-700 text-xl font-medium">{projectObj?.projectName}</h2>
      <h4 className="my-4 font-medium">Your Investment : <b><RupeeIcon/> {projectObj?.investmentAmount}</b>  </h4>
      <Link href={`/project/${projectObj?.projectId}`}>
      <button className="rounded-[4px] font-medium px-2 py-1 bg-indigo-600 text-[11px] text-white">View Details</button>
      </Link>
    </div>
  </div>
    </>
  )
}