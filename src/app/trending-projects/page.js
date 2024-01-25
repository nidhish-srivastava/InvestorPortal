"use client"
import AllProjectsWrapper from "@/components/AllProjectsWrapper";
import BottomNavBar from "@/components/Navbar/BottomNavBar"
import Header from "@/components/Navbar/Header"
import ProjectCard from "@/components/ProjectCard";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function TrendingProjects() {
  const projectCollectionRef = collection(db, "projects");
  const [trendingProjects,setTrendingProjects] = useState([])
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    const fetchTrendingProjects = async()=>{
      setLoading(true);
      try {
        const data = await getDocs(projectCollectionRef);
        const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) 
        const filter = result.sort((a,b)=>b.cost-a.cost)
        setTrendingProjects(filter)
        setLoading(false)
      } catch (error) {
        setLoading(false);
        console.error("Error fetching projects:", error);
      }
    }
    fetchTrendingProjects()
  },[])
  return (
    <>
    <Header/>
    <BottomNavBar/>
    <h1 className="heading-style-1">Popular Projects</h1>
    {loading ? (
        <div style={{ width: "80%", margin: "4rem auto" }}>
          <Skeleton count={5} />
        </div>
      ) : (
        <div className=" mb-24">
          <AllProjectsWrapper>
            {trendingProjects.map((e, i) => (
              <ProjectCard key={i} projectObj={e} />
              ))}
              </AllProjectsWrapper>
        </div>
      )}
    </>
  )
}

export default TrendingProjects
