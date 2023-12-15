import React from 'react'
import NavHeader from '@/components/Navbar/NavHeader'
import ProjectCard from '@/components/ProjectCard'

function OngoingProjects() {
    return (
        <>
         <NavHeader>Ongoing Projects</NavHeader>
         <main>
            <ProjectCard ongoing={true}/>
         </main>
        </>
    )
}

export default OngoingProjects