import React from 'react'
import { RiContactsFill } from "react-icons/ri";

function Contact() {
  return (
    <>
    <section id="contact" className='w-full bg-linear-to-b from-indigo-950 to-indigo-800'>
        <h1 className='flex items-center justify-center gap-1 font-[Onest] text-4xl font-semibold text-white cursor-pointer
        py-10 duration-200

        md:text-5xl
        md:hover:gap-4'> <RiContactsFill />| <span>Contact</span></h1>
    </section>
    </>
  )
}

export default Contact