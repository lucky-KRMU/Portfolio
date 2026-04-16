import React from 'react'
// import { Link } from 'react-router';
import { FaHeart } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <footer className='w-full h-[30vh] p-10 bg-indigo-950 flex flex-col items-center justify-center gap-5'>
                <div id="footerLinks" className='grid grid-cols-2'>
                    <div id="socialLinks">
                        {/* <Link to="https://www.x.com"> */}
                            <FaSquareXTwitter />
                        {/* </Link> */}
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