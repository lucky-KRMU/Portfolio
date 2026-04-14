import React, { useEffect, useState } from 'react'

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
                <div id="card" className='w-[80%] h-[90%] bg-indigo-800 rounded-4xl flex flex-col md:flex-row items-center justify-center gap-5'>
                    <img src={avatarURL} alt="Image of L. Pawar" className='w-[80%] md:w-[30%] rounded-3xl border-10 border-indigo-200 border-double' />
                    <div id="info">
                        <h1>Lucky Pawar</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero