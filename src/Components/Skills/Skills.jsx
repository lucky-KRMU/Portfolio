import React from 'react'
import { FaReact, FaHtml5, FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const SkillCard = ({ icon, name }) => {
    return (
        <>
            <div className='w-[50vw] h-[5vh]  flex justify-around items-center gap-1 text-white border-double border-4 border-white rounded-2xl text-xl cursor-pointer p-10 duration-200 ease-out hover:bg-sky-500 
        
         md:w-[20vw]
         md:text-2xl
         md:h-[10vh]
    
         md:hover:p-10
         md:hover:scale-[1.2]
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
                        <h4 className='text-xl md:text-2xl font-semibold font-[Fira_Sans] text-white my-5'>Frontend</h4>
                        <div className='grid grid-cols-1
                        gap-10
                        
                        md:grid-cols-2
                        lg:grid-cols-3
                        '>
                            <SkillCard icon={<FaReact />} name="ReactJS" />
                            <SkillCard icon={<RiTailwindCssFill />} name="Tailwind" />
                            <SkillCard icon={<FaHtml5 />} name="HTML" />
                            <SkillCard icon={<FaJs />} name="JS" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills