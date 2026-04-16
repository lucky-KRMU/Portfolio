import React from 'react'
import { FaReact } from "react-icons/fa";

const SkillCard = ({icon, name}) => {
    return(
        <>
        <div className='w-[50vw] h-[5vh]  flex justify-around items-center text-white border-double border-4 border-white rounded-2xl text-xl cursor-pointer p-10 duration-200 ease-out hover:bg-sky-500 
        
         md:w-[20vw]
         md:text-2xl
         md:h-[10vh]
         md:p-5
         md:hover:p-10
         md:hover:scale-[1.1]
        '>
        {icon}
        <h6 className='text-white font-semibold font-[Fira_Code] '>{name}</h6>
        </div>
        </>
    );
}

function Skills() {
  return (
    <>
    <section id="skills">
        <div className='w-full p-10 bg-linear-to-b from-indigo-700 to-indigo-800 flex flex-col items-center justify-center gap-10'>
            <h1 className='text-3xl md:text-4xl font-semibold font-[Fira_Sans] text-white'>Skills</h1>
            <div id="frontend">
                <h4>Frontend</h4>
                <SkillCard icon={<FaReact />} name="ReactJS" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Skills