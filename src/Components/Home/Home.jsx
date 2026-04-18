import React, { useEffect } from "react";
import Hero from '../Hero/Hero'
import MarqueeBanner from '../MarqueeText/MarqueeBanner'
import Skills from '../Skills/Skills'

export default function Home() {

    useEffect(()=>{
        // updating the title
        document.title = "Portfolio - Lucky Pawar"
    }, [])

    return (
        <>
            <Hero />
            <MarqueeBanner />
            <Skills />
        </>
    );
}