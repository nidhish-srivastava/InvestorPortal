
import Image from "next/image";
import Dp from '../assets/Dp.png'
import ProjectCard from "./ProjectCard";
import BottomNavBar from "./Navbar/BottomNavBar";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";
import Hamburger from "./Navbar/Hamburger";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function Home() {
  const projectCollectionRef = collection(db, "projects")
  const [projects, setProjects] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true)
      try {
        const data = await getDocs(projectCollectionRef)
        setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error);
      }
    }
    getProjects()
  }, [])
  return (
    <>
     <Hamburger/>
      <header className="flex items-center gap-2 p-4 relative -z-[1] rounded-b-lg bg-blue-700 shadow-md">
        <Image src={Dp} width={70} height={70} alt="dp" />
        <h2 className="font-semibold text-white">
          Hi Investor
        </h2>
      </header>
      <BottomNavBar />
      {loading ?  <div style={{width : "80%",margin :"4rem auto"}}>
            <Skeleton count={5}/>
            </div> : 
      <div className="py-4">
      <span className="ml-4 rounded-md bg-blue-200 bg-opacity-19 text-blue-800 text-sm font-bold px-4 py-1">Upcoming Projects</span>
      {projects.map(e=>(
        <ProjectCard projectObj = {e}/>
      ))}
    </div>
      }
      
    </>
  )
}

export default Home