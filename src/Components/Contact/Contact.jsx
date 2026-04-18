import React, {useEffect} from 'react'
import { RiContactsFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";import { MdOutlineLocalPhone } from "react-icons/md";

function Contact() {

    useEffect(()=>{
            // updating the title
            document.title = "Contact - Lucky Pawar"
        }, [])

    return (
        <>
            <section id="contact" className='w-full h-[50vh] bg-linear-to-b from-indigo-950 to-indigo-800'>
                <h1 className='flex items-center justify-center gap-1 font-[Onest] text-4xl font-semibold text-white cursor-pointer
                py-10 duration-200

                md:text-5xl
                md:hover:gap-4'>
                    <RiContactsFill />| <span>Contact</span>
                </h1>
                <div id="details" className='w-full h-[50%] flex flex-col items-center justify-center gap-10
                
                lg:flex-row'>
                    <div className='flex flex-col items-center justify-center gap-1 cursor-pointer duration-200

                    hover:scale-[1.1]
                    md:flex-row'>
                        <div className='flex items-center justify-center gap-0.5 font-semibold font-[Onest] text-2xl text-white'><HiOutlineMail />Email: </div>
                        <p className='font-[Fira_Code] text-white text-xl'>luckypawar@zohomail.in</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1 cursor-pointer duration-200

                    hover:scale-[1.1]
                    md:flex-row' title='Also available on Whatsapp, Max'>
                        <div className='flex items-center justify-center gap-0.5 font-semibold font-[Onest] text-2xl text-white'><MdOutlineLocalPhone />Phone No: </div>
                        <span className='font-[Fira_Code] text-white text-xl'>+91 9318437107</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact