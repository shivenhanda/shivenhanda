import shiven from "../assets/shiven.jpeg"
import { easeInOut, motion } from "framer-motion"

export default function Main(){
    return(
        <div className="mx-auto md:flex justify-between md:space-x-10 md-pt-32 w-full h-150 bg-gray-900 relative">
            <div className="text-white md:flex justify-center items-center w-full flex-col p-5">
                <p className="text-4xl md:text-5xl whitespace-nowrap">Hi, I'm <span className="text-purple-500">Shiven Handa</span></p>
                <p className="text-3xl md-4xl typewriter">Mern Stack Developer</p>
                <div className="buttons flex gap-4">
                <button className="border-2 border-purple-500 text-2xl mt-4 bg-transparent px-4 py-2 rounded-2xl transition duration-300 hover:bg-purple-500" onClick={()=>window.open("https://github.com/shivenhanda/","_blank")}>View Work</button>
                <button className="border-2 border-purple-500 text-2xl mt-4 bg-transparent px-4 py-2 rounded-2xl transition duration-300 hover:bg-purple-500"onClick={()=>window.open("https://wa.me/7018301205","_blank")}>Contact Me</button>
                </div>
            </div>
            <div className="image flex justify-center items-center w-full  ">
                <motion.img src={shiven} alt="ShivenPhoto" className="w-50 h-60 rounded-full relative z-10"
                animate={{
                    y:[0,-15,0]
                }}
                transition={{
                    duration:3,
                    repeat:Infinity,
                    ease:easeInOut
                }}/>
                <p className="w-50 h-60 rounded-full bg-purple-500 absolute -5"></p>
            </div>
        </div>
    )
}