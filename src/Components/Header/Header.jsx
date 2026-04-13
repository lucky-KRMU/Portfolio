import React from 'react'

function Header() {
  return (
    <>
    <header className='w-full h-[15vh] text-center flex items-center justify-center bg-indigo-950'>
        <nav className='w-[90vw] h-[10vh] 
        bg-linear-to-b from-indigo-700 to-indigo-500
         text-white  fixed rounded-4xl flex items-center justify-around'>
<h1 className='text-4xl drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] font-[Fira_Sans]'>

    Lucky Pawar
</h1>
        </nav>
    </header>
    </>
  )
}

export default Header