import React from 'react'
import { Link } from 'react-router';
import { FaHeart, FaLinkedin  } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareGithub, FaSquareInstagram   } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <footer className='w-full p-10 bg-indigo-950 flex flex-col items-center justify-center gap-5'>
                <div id="footerLinks" className='grid grid-cols-1
                
                md:grid-cols-2'>
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
                                <FaLinkedin className='duration-200 ease-in-out hover:text-sky-500 hover:scale-[1.2]'  />
                            </Link>
                            <Link to="https://www.github.com/lucky-KRMU">
                                <FaSquareGithub  className='duration-200 ease-in-out hover:text-sky-500 hover:scale-[1.2]' />
                            </Link>
                            <Link to="https://www.instagram.com/luckythecoder">
                                <FaSquareInstagram   className='duration-200 ease-in-out hover:text-sky-500 hover:scale-[1.2]' />
                            </Link>
                        </div>
                    </div>
                    <div id="WebSiteLinks"></div>
                </div>
                <h3 className='text-center font-[Onest] text-white'>&copy; 2026 Lucky Pawar.
                    <div className='flex items-center justify-center gap-0.5'>Built with React, Tailwind, Curiosity and Love.<FaHeart className='text-red-600' /></div></h3>
            </footer>
        </>
    )
}

export default Footer