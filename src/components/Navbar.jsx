import { Link, useLocation } from "react-router-dom";
import {motion,useScroll} from "motion/react"
import { useEffect, useState } from "react";

export default function Navbar(){
    let scrollY=useScroll().scrollYProgress
    const [display,setDisplay]=useState(true)
    const [width,setWidth]=useState(window.innerWidth)
    useEffect(()=>{
        const handleSize=()=>{
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize",handleSize)
        return ()=>{
            window.removeEventListener("resize",handleSize)
        }
    },[])
    let isMobile=width<768;
    return(
        <>
        <motion.div style={{scaleX:scrollY}} className='h-3 origin-left w-full left-0 relative bg-purple-500 z-60'></motion.div>
        <nav className="sticky top-0 w-full z-50 bg-black/90 backdrop-blur-sm py-3 px-8">
        <div className="container md:flex justify-between items-center relative">
            <div className="text-center">
                <a href="/" className="text-2xl md:text-3xl font-bold tracking-wide">
                    ShivenHanda
                    <span className="text-purple-500 font-semibold">Portfolio</span>
                    {!isMobile?(<div className="w-4 h-4 bg-purple-500 rounded-full mx-auto"></div>):""}
                </a>
            </div>
            <div className="mx-auto md:flex md:space-x-10">
                <p className={`text-center text-lg`} onClick={()=>setDisplay(!display)}>{isMobile?(display?"☰":<i className="fa-solid fa-x fa-lg text-red-500 font-bold"></i>):""}</p>
                <div className="relative hover:text-purple-500 group text-center">
                <Link className="text-base md:text-lg font-medium tracking-wide" onClick={()=>document.getElementById("main").scrollIntoView({behavior:"smooth"})}>{isMobile && display?"":"Home"}</Link>
                <span className="absolute left-0 bottom-0 
                w-0 h-0.75 bg-purple-500 transition-all duration-300 group-hover:w-full "></span>
                </div>
                <div className="relative hover:text-purple-500 group text-center">
                    <Link className="text-base md:text-lg font-medium tracking-wide" onClick={()=>document.getElementById("about").scrollIntoView({behavior:"smooth"})}>{isMobile && display?"":"About"}</Link>
                    <span className="absolute w-0 h-0.75 left-0 bottom-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </div>
                <div className="relative hover:text-purple-500 group text-center">
                    <Link to="/skills" className="text-base md:text-lg font-medium tracking-wide">{isMobile && display?"":"Skills"}</Link>
                    <span className="absolute left-0 bottom-0 
                w-0 h-0.75 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </div>
                <div className="relative hover:text-purple-500 group text-center">
                    <Link onClick={()=>document.getElementById("project").scrollIntoView({behavior:"smooth"})} className="text-base md:text-lg font-medium tracking-wide">{isMobile && display?"":"Projects"}</Link>
                    <span className="absolute left-0 bottom-0 
                w-0 h-0.75 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </div>
                <div className="relative hover:text-purple-500 group text-center">
                    <Link to="/contact" className="text-base md:text-lg font-medium tracking-wide">{isMobile && display?"":"Contact"}</Link>
                    <span className="absolute left-0 bottom-0 
                w-0 h-0.75 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </div>
            </div>
        </div>
        </nav>
        </>
    )
}