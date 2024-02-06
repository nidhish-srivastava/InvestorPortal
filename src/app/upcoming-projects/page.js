"use client"
import AllProjectsWrapper from "@/components/AllProjectsWrapper";
import BottomNavBar from "@/components/Navbar/BottomNavBar"
import HamburgerModal from "@/components/Navbar/HamburgerModal";
import Header from "@/components/Navbar/Header"
import ProjectCard from "@/components/ProjectCard";
import TotalInvestment from "@/components/TotalInvestment";
import { sumHandler } from "@/utils";
import { db } from "@/utils/firebase";
import { useMyInvestmentHook } from "@/utils/hooks/useMyInvestmentHook";
import { collection, getDocs, query } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function UpcomingProjects() {
  const projectCollectionRef = collection(db, "projects");
  const myInvestments = useMyInvestmentHook()
  const [upcomingProjects,setUpcomingProjects] = useState([])
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    const fetchUpcomingProjects = async(excludeIds)=>{
      setLoading(true);
      try {
        const data = await getDocs(projectCollectionRef);
        const result = data.docs
        .filter(doc => !excludeIds.includes(doc.id))
        .map(doc => ({ ...doc.data(), id: doc.id }));
        setUpcomingProjects(result)
        setLoading(false)
      } catch (error) {
        setLoading(false);
        console.error("Error fetching projects:", error);
      }
    }
    const excludeIds = myInvestments.map(project => project.projectId);
    fetchUpcomingProjects(excludeIds)
  },[myInvestments])
  return (
    <>
    <HamburgerModal/>
    <Header/>
    <BottomNavBar/>
    <h1 className="heading-style-1">Upcoming Projects</h1>
    {loading ? (
        <div style={{ width: "80%", margin: "4rem auto" }}>
          <Skeleton count={5} />
        </div>
      ) : (
        <div className="mb-96">
          <AllProjectsWrapper>
            {upcomingProjects.map((e, i) => (
              <ProjectCard key={i} projectObj={e} />
              ))}
              </AllProjectsWrapper>
        </div>
      )}
      <div className="bottom-24 fixed w-full">
        <Link href={`/my-investments`}>
      <TotalInvestment totalInvestment={sumHandler(myInvestments)}/>
        </Link>
      </div>
    </>
  )
}

export default UpcomingProjects
