import React from 'react'
import { MdConstruction } from "react-icons/md";


function Projects() {
  return (
    <>
    <section id="projects" className='w-full p-5 bg-linear-to-b from-indigo-950 to-indigo-800'>
      <h1 className='flex items-center justify-center gap-1 text-3xl font-[Onest] font-semibold text-white cursor-pointer duration-200
      
      md:text-4xl
      md:hover:gap-4
      md:hover:font-bold'><MdConstruction /> | <span>Projects</span></h1>

    </section>
    </>
  )
}

export default Projects