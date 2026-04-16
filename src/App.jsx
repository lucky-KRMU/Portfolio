import { useState } from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router'

function App() {

  return (
   <>
    <Header />
    <Outlet />
    <Footer />
   </>
  )
}

export default App
