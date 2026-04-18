import React, { useState, useEffect } from 'react'
import { MdConstruction } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa"

const ProjectCard = ({ projectName, projectDescription, projectLink }) => {

  const goToLink = () => {
    window.location.href = projectLink;
  }

  return (
    <>
      <div className='w-[50vw] p-5 bg-transparent rounded-xl border-double border-white border-4 cursor-pointer
      flex flex-col items-start justify-center gap-1 duration-200 ease-in-out text-wrap
      
      md:w-[30vw]
      lg:w-[30vw]
      lg:gap-2
      
      hover:scale-[1.05]
      hover:bg-sky-500'>
        <h1 className='text-2xl md:text-3xl text-white font-[Fira_Code] font-semibold'>{projectName}</h1>
        <h4 className='text-l md:text-l text-white font-[Fira_Sans] text-justify'>{projectDescription}</h4>
        <button className='self-end font-[Onest] font-semibold text-white text-l p-2 my-1 bg-indigo-800 rounded-2xl outline-2 outline-white duration-75 cursor-pointer
        flex items-center justify-center gap-1

        hover:outline-4
        hover:italic
        
        md:text-xl
        md:p-4
        md:rounded-4xl'

          onClick={goToLink}
        >View Repo<FaLongArrowAltRight /></button>
      </div>
    </>
  );
}


function Projects() {

  let [projectsArr, setProjectsArr] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {

    // function to get all the public repos from github
    const getRepos = async () => {
      let url = "https://api.github.com/users/lucky-KRMU/repos";

      let response = await fetch(url);
      let data = await response.json();

      setProjectsArr(data);
      setLoading(false);

    }

    // calling the function
    getRepos();

  }, [])

  return (
    <>
      <section id="projects" className='w-full p-5 bg-linear-to-b from-indigo-950 to-indigo-800 flex flex-col gap-2 items-center justify-center'>
        <h1 className='flex items-center justify-center gap-1 text-4xl font-[Onest] font-semibold text-white cursor-pointer duration-200 my-3
      
      md:text-5xl
      md:hover:gap-4
      md:hover:font-bold'><MdConstruction /> | <span>Projects</span></h1>


        {
          // add loading card and resstyle accordingly
          loading ?
            <>
              <div className='font-bold text-4xl py-[30vh] font-[Onest] text-center text-sky-500 animate-pulse'>Loading...</div>
            </>
            :
            <div id="projectsCards" className='grid grid-cols-1 gap-5
        
                      md:grid-cols-2
                      md:gap-4
                      lg:grid-cols-3
                      lg:gap-5'>
              {projectsArr.map((obj) => {
                return (
                    <ProjectCard key={obj.id} projectName={obj.name} projectDescription={obj.description || "DESCRIPTION UNAVAILABLE"} projectLink={obj.html_url} />
                );
              })}
            </div>
        }

      </section>
    </>
  )
}

export default Projects