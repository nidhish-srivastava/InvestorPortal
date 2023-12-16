"use client"
// import PrevIcon from "@/components/PrevIcon"
import Link from "next/link"
import SampleProject from '../../../assets/SampleProject.png'
import Image from "next/image"
import NavHeader from "@/components/Navbar/NavHeader"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "@/utils/firebase";

function page() {
    const [obj,setObj] = useState({})
    const param = useParams()
    const projectDocRef = doc(db, `projects/${param.projectId}`)

    const fetchDetails = async() =>{
        try {
            const docSnapshot = await getDoc(projectDocRef)
            if(docSnapshot.exists()){
                const docData = docSnapshot.data();
                setObj(docData)
            }
        } catch (error) {
            
        }
    }    
    useEffect(()=>{
        fetchDetails()
    },[])

    return (
        <>
            <NavHeader>Project Details</NavHeader>
            <div className="p-4 flex gap-2 mt-8 rounded-md">
                <Image
                    src={SampleProject}
                    width={90}
                    height={90}
                    alt=""
                />
                <div className="flex flex-col items-start gap-2">
                    <h2 className="text-[18px] text-violet-700 font-medium">{obj?.name}</h2>
                    <h4 className="text-[13px] font-medium">{obj?.leaderName}</h4>
                    <h4 className="text-[13px] font-medium">&#8377; {obj?.cost} for {obj?.endingDate - obj?.startingDate}</h4>
                </div>
            </div>
            <main className="w-[95%] mx-auto">
                <div>
                    <h3 className="text-[18px] font-medium text-violet-700 mb-2">Project Details</h3>
                    <p>{obj?.description}</p>
                </div>
                <br />
                <div>
                    <h3 className="text-[18px] font-medium text-violet-700 mb-2">Why Invest here</h3>
                    <p>{obj?.investmentReason}</p>
                </div>
                <div className="text-center">
                    <Link href={`${obj.id}/investment-details`}>
                        <button className="btn">Invest Now</button>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default page