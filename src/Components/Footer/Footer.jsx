import React from 'react'
import { Link } from 'react-router';
import { FaHeart, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <footer className='w-full p-10 bg-indigo-950 flex flex-col items-center justify-center gap-5'>
                <div id="footerLinks" className='grid grid-cols-1 gap-5
                
                md:grid-cols-2
                md:gap-10
                lg:gap-[40vw]'>
                    <div id="socialLinks" className='text-white text-xl font-[Fira_Sans] flex flex-col items-center justify-center gap-2
                    
                    md:gap-5'>
                        <h3 className='text-2xl md:text-3xl'>Social Links</h3>
                        <div className='flex flex-col gap-2 items-center justify-center cursor-pointer
                        
                        md:flex-row 
                        md:text-3xl
                        md:gap-10'>
                            <Link to="https://www.x.com">
                                <FaSquareXTwitter className='duration-200 ease-in-out hover:text-sky-500 hover:scale-[1.2]' />
                            </Link>
                            <Link to="https://www.linkedin.com/in/luckypawar">
                                <FaLinkedin className='duration-200 ease-in-out hover:text-sky-500 hover:scale-[1.2]' />
                            </Link>
                            <Link to="https://www.github.com/lucky-KRMU">
                                <FaSquareGithub className='duration-200 ease-in-out hover:text-sky-500 hover:scale-[1.2]' />
                            </Link>
                            <Link to="https://www.instagram.com/luckythecoder">
                                <FaSquareInstagram className='duration-200 ease-in-out hover:text-sky-500 hover:scale-[1.2]' />
                            </Link>
                        </div>
                    </div>
                    <div id="WebSiteLinks">
                        <div className='text-white font-[Fira_Sans] flex flex-col items-center justify-center gap-2
                    
                    md:gap-0.5'>
                            <h3 className='text-2xl md:text-3xl'>Other Links</h3>
                            <div className='grid grid-cols-2 gap-2 text-center text-l
                            
                            md:gap-0.5'>
                                <Link to="/" className='duration-200 underline-offset-4 hover:underline hover:text-sky-500'>Home</Link>
                                <Link to="/projects" className='duration-200 underline-offset-4 hover:underline hover:text-sky-500'>Projects</Link>
                                <Link to="/contact" className='duration-200 underline-offset-4 hover:underline hover:text-sky-500'>Contact</Link>
                                <Link to="/about" className='duration-200 underline-offset-4 hover:underline hover:text-sky-500'>About</Link>
                                <Link to="/" className='duration-200 underline-offset-4 hover:underline hover:text-sky-500'>Bio.</Link>
                                <Link to="/home" className='duration-200 underline-offset-4 hover:underline hover:text-sky-500'>Skills</Link>
                                <a href="https://raw.githubusercontent.com/lucky-KRMU/Portfolio/main/public/Resume.pdf" download="Lucky_Pawar_Resume.pdf" className={`duration-200 underline-offset-4 hover:underline hover:text-sky-500`}>
                                    Download Resume
                                </a>
                                <Link to="/other" className='duration-200 underline-offset-4 hover:underline hover:text-sky-500'>Other</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className='text-center font-[Onest] text-white'>&copy; 2026 Lucky Pawar.
                    <div className='flex flex-col items-center justify-center gap-0.5
                    md:flex-row'>Built with React, Tailwind, Curiosity and Love.<FaHeart className='text-red-600' /></div></h3>
            </footer>
        </>
    )
}

export default Footer