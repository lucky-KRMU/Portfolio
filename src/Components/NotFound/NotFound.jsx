import React, {useEffect} from 'react'

function NotFound() {

  useEffect(()=>{
          // updating the title
          document.title = "Not Found - Portfolio"
      }, [])

  return (
    <>
    <section id="notfound" className='w-full h-[50vh] bg-linear-to-b from-indigo-950 to-indigo-800 flex flex-col items-center justify-center text-white'>
        <h1 className='text-8xl font-[Fira_Code] font-extrabold cursor-not-allowed
        
        lg:text-9xl'>404</h1>
        <h3 className='text-4xl font-[Fira_Code] font-semibold animate-pulse duration-200 cursor-grab

        hover:text-sky-500'>Not Found</h3>
    </section>
    </>
  )
}

export default NotFound