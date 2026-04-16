import React from 'react'
import { FaReact } from "react-icons/fa";

const SkillCard = ({icon, name}) => {
    return(
        <>
        <div>
        {icon}
        <h6>{name}</h6>
        </div>
        </>
    );
}

function Skills() {
  return (
    <>
    <section id="skills">
        <div className='w-full p-10 bg-linear-to-b from-indigo-700 to-indigo-800 flex flex-col items-center justify-center gap-10'>
            <h1 className='text-3xl font-semibold font-[Fira_Sans] text-white'>Skills</h1>
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