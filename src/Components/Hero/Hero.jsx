import React, { useEffect, useState } from 'react'

function Hero() {

    let [avatarURL, setAvatarURL] = useState('');

    // For getting the link of the profile image (avatar)

    useEffect(()=>{
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
                <div id="card" className='w-[80%] h-[90%] bg-indigo-800 rounded-4xl'>
                    <img src={avatarURL} alt="Image of L. Pawar" className='' />
                </div>
            </div>
        </>
    )
}

export default Hero