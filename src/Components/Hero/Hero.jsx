import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';

function Hero() {

    let [avatarURL, setAvatarURL] = useState(null);

    // For getting the link of the profile image (avatar)

    useEffect(() => {
        const getAvatarLink = async () => {
            let response = await fetch("https://api.github.com/users/lucky-KRMU");
            let data = await response.json();

            let url = data.avatar_url;
            setAvatarURL(url);
        }

        getAvatarLink();
    }, [])


    return (
        <>
            <div className='w-full h-[85vh] bg-linear-to-b from-indigo-950 to-indigo-500 
            flex justify-center items-center'>
                <div id="card" className='w-[80%] h-[90%] p-5 bg-indigo-800 rounded-4xl flex flex-col md:flex-row items-center justify-center gap-10'>
                    <img src={avatarURL} alt="Image of L. Pawar" className='w-[80%] md:w-[30%] rounded-3xl border-10 border-indigo-200 border-double' />
                    <div id="info" className='p-5'>
                        <h3 className='text-l md:text-2xl text-white font-[Fira_Code]'>Hi,</h3>
                        <h4 className='text-xl md:text-4xl text-white font-[Fira_Code]'>I'm</h4>
                        <h1 className='text-4xl md:text-7xl font-[Onest] font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] cursor-pointer'>Lucky Pawar</h1>
                        <TypeAnimation sequence={['Coder.', 500, 'Author.', 500, 'Innovator.', 500, 'Curious.', 500]} repeat={Infinity} wrapper='h4' className='text-2xl md:text-4xl font-semibold text-sky-500 font-[Fira_Sans] py-3' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero