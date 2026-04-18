import React, { useState } from 'react'
import { NavLink } from 'react-router';
import { TiDownload } from "react-icons/ti";
import { MdMenu, MdOutlineCancelPresentation } from "react-icons/md";

function Header() {


  const [toggleMenu, setToggleMenu] = useState(false);


  const handleMenu = () => {
    setToggleMenu(toggleMenu => !toggleMenu);
  }

  return (
    <>
      <header className='w-full h-[15vh] text-center flex items-center justify-center bg-indigo-950'>
        <nav className='w-[90vw] h-[10vh] 
        bg-linear-to-b from-indigo-700 to-indigo-500
         text-white z-50  fixed rounded-4xl flex items-center justify-around'>
          <h1 className='text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] font-[Fira_Sans] font-semibold cursor-pointer duration-100 hover:font-bold md:text-4xl'>

            Lucky Pawar
          </h1>
          <div>
            <div id='desktop' className=''>
              <ul className='hidden md:flex items-center justify-between gap-5 text-2xl font-[Onest] drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] cursor-pointer'>
                <li className='duration-200 hover:font-semibold'>
                  <NavLink to="/" className={
                    ({ isActive }) => isActive ? "font-extrabold" : ""
                  }>Home</NavLink>
                </li>
                <li className='duration-200 hover:font-semibold'>
                  <NavLink to="projects" className={
                    ({ isActive }) => isActive ? "font-extrabold" : ""
                  }>Projects</NavLink></li>
                <li className='duration-200 hover:font-semibold'>
                  <NavLink to="contact" className={
                    ({ isActive }) => isActive ? "font-extrabold" : ""
                  }>Contact</NavLink></li>
                <li className='duration-200 hover:font-semibold'>
                  <NavLink to="download/resume" className={`flex items-center justify-center gap-0.5 ${({ isActive }) => isActive ? "font-extrabold" : ""
                    } `}>
                    Resume<TiDownload />
                  </NavLink></li>
              </ul>
            </div>
            <div id="mobile" className='md:hidden'>
              <div>
                {!toggleMenu ?
                  <MdMenu onClick={handleMenu} className='text-3xl cursor-pointer' />
                  : <MdOutlineCancelPresentation onClick={handleMenu} className='text-3xl cursor-pointer' />}
              </div>
              {
                toggleMenu && <div className='absolute right-10 p-10 rounded-4xl bg-linear-to-b from-indigo-950 to-indigo-800'>
                  <ul className='flex flex-col items-center justify-between gap-5 text-2xl font-[Onest] drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] cursor-pointer'>
                    <li className='duration-200 hover:font-semibold'>
                      <NavLink to="/" className={
                        ({ isActive }) => isActive ? "font-extrabold" : ""
                      }>Home</NavLink>
                    </li>
                    <li className='duration-200 hover:font-semibold'>
                      <NavLink to="projects" className={
                        ({ isActive }) => isActive ? "font-extrabold" : ""
                      }>Projects</NavLink></li>
                    <li className='duration-200 hover:font-semibold'>
                      <NavLink to="contact" className={
                        ({ isActive }) => isActive ? "font-extrabold" : ""
                      }>Contact</NavLink></li>
                    <li className='duration-200 hover:font-semibold'>
                      <NavLink to="download/resume" className={`flex items-center justify-center gap-0.5 ${({ isActive }) => isActive ? "font-extrabold" : ""
                        } `}>
                        Resume<TiDownload />
                      </NavLink></li>
                  </ul>

                </div>
              }
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header