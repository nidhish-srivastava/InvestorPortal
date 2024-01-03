import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SampleProject from '../assets/SampleProject.png'
import RupeeIcon from './Icons/RupeeIcon'

function ProjectCard({ongoing,projectObj,myInvestmentRoute}) {
  const [myInvestmentAmount,setMyInvestmentAmount] = useState(null)
  
  useEffect(()=>{
    const name = JSON.parse(localStorage.getItem("investorDetails"))?.fullName
    const filterName = (name) =>{
      const filterAmountFromArr = projectObj?.investmentProgress.filter((e)=>e.investorName==name)[0]?.amountInvested
      setMyInvestmentAmount(filterAmountFromArr)
    }
    if(name?.length>1){
      filterName(name)
    }

  },[])
  return (
    <div className="p-4 flex gap-2 mt-8 rounded-md bg-blue-100">
    <Image
    src={SampleProject}
    width={100}
    height={100}
    alt=""
    />
    <div className="flex flex-col items-start gap-2">
      <h2 className="text-violet-700 font-medium">{projectObj?.name}</h2>
      {myInvestmentRoute ? 
      <>
      <h4 className="my-4 font-medium">Your Investment : <b><RupeeIcon/> {myInvestmentAmount}</b>  </h4>
      </>
     : <>
      <h4 className="text-[10px] font-medium">{projectObj?.leader}</h4>
      <h4 className="text-[10px] font-medium">
        <RupeeIcon/> {projectObj?.cost} for 1 Year</h4>
     </>  
    }
      <Link href={`/project/${projectObj?.id}`}>
      <button className="rounded-[4px] font-medium px-2 py-1 bg-indigo-600 text-[11px] text-white">View Details</button>
      </Link>
    </div>
  </div>
  )
}

export default ProjectCard