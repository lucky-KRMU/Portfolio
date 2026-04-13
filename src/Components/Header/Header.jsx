import React from 'react'
import { TiDownload } from "react-icons/ti";

function Header() {
  return (
    <>
      <header className='w-full h-[15vh] text-center flex items-center justify-center bg-indigo-950'>
        <nav className='w-[90vw] h-[10vh] 
        bg-linear-to-b from-indigo-700 to-indigo-500
         text-white  fixed rounded-4xl flex items-center justify-around'>
          <h1 className='text-4xl drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] font-[Fira_Sans] font-semibold cursor-pointer duration-100 hover:font-bold'>

            Lucky Pawar
          </h1>
          <div>
            <div id='desktop'>
              <ul  className='flex items-center justify-between gap-5 text-2xl font-[Onest] drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] cursor-pointer'>
                <li className='duration-200 hover:font-semibold'>Home</li>
                <li className='duration-200 hover:font-semibold'>Projects</li>
                <li className='duration-200 hover:font-semibold'>Contact</li>
                <li className='flex items-center justify-center gap-0.5 duration-200 hover:font-semibold'>Resume<TiDownload /></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header