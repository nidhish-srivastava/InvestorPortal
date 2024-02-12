"use client"
import ProjectCard from "@/components/ProjectCard";
import BottomNavBar from "@/components/Navbar/BottomNavBar";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/utils/firebase";
import HamburgerModal from "@/components/Navbar/HamburgerModal";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Header from "@/components/Navbar/Header";
import AllProjectsWrapper from "@/components/AllProjectsWrapper";

function Home() {
  const projectCollectionRef = collection(db, "projects");
  const usersCollectionRef = collection(db, "users")
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchMyInvestments = async(email)=>{
      if(email.length>1){
        const userQuery = query(usersCollectionRef, where("email", "==", email));
        const querySnapshot = await getDocs(userQuery);

        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const myInvestments = userDoc.data().myInvestments;
          sessionStorage.setItem("myInvestments",JSON.stringify(myInvestments))
        }
      }
  }
  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      try {
        const data = await getDocs(projectCollectionRef);
        setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching projects:", error);
      }
    };
    getProjects();
    const storedInvestorDetails = localStorage.getItem("investorDetails");
    if(storedInvestorDetails){
      fetchMyInvestments(JSON.parse(storedInvestorDetails)?.authUser)
    }
  }, []);
  return (
    <>
      <HamburgerModal/>
      <Header />
      <h2 className="heading-style-1">
        All Projects
      </h2>
      {loading ? (
        <div style={{ width: "80%", margin: "4rem auto" }}>
          <Skeleton count={5} />
        </div>
      ) : (
        <div className=" mb-24">
          <AllProjectsWrapper>
            {projects.map((e, i) => (
              <ProjectCard key={i} projectObj={e} />
            ))}
          </AllProjectsWrapper>
        </div>
      )}
      <BottomNavBar />
    </>
  );
}

export default Home;
