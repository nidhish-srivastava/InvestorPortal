"use client"
import ProjectCard from "@/components/ProjectCard";
import BottomNavBar from "@/components/Navbar/BottomNavBar";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";
import HamburgerModal from "@/components/Navbar/HamburgerModal";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Header from "@/components/Navbar/Header";

function Home() {
  const projectCollectionRef = collection(db, "projects");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

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
  }, []);

  return (
    <>
      <HamburgerModal />
      <Header />
      {loading ? (
        <div style={{ width: "80%", margin: "4rem auto" }}>
          <Skeleton count={5} />
        </div>
      ) : (
        <div className="py-6 mx-4">
          <h2 className="text-xl font-bold text-blue-800 mb-4">
           All Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((e, i) => (
              <ProjectCard key={i} projectObj={e} />
            ))}
          </div>
        </div>
      )}
      <BottomNavBar />
    </>
  );
}

export default Home;
