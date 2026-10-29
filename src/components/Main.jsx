import shiven from "../assets/shiven.jpeg"
import { easeInOut, motion } from "framer-motion"

export default function Main(){
    return(
        <div className="mx-auto md:flex justify-between md:space-x-10 md-pt-32 w-full min-h-[90vh] bg-background relative" id="main">
            <div className="text-foreground md:flex justify-center items-center w-full flex-col p-5">
                <p className="text-4xl md:text-5xl whitespace-nowrap">Hi, I'm <span className="text-primary">Shiven Handa</span></p>
                <p className="text-3xl md:text-4xl typewriter">Mern Stack Developer</p>
                <div className="buttons flex gap-4">
                <button className="border-2 border-primary text-2xl mt-4 bg-transparent px-6 py-3 rounded-2xl transition duration-300 hover:bg-primary hover:text-card-foreground" onClick={()=>window.open("https://github.com/shivenhanda/","_blank")}>View Work</button>
                <button className="border-2 border-primary text-2xl mt-4 bg-transparent px-6 py-3 rounded-2xl transition duration-300 hover:bg-primary hover:text-card-foreground"onClick={()=>window.open("https://wa.me/7018301205","_blank")}>Contact Me</button>
                </div>
            </div>
            <div className="image flex justify-center items-center w-full">
                <motion.img src={shiven} alt="ShivenPhoto" className="w-56 h-56 rounded-full relative z-10 border-4 border-card object-cover"
                animate={{
                    y:[0,-15,0]
                }}
                transition={{
                    duration:3,
                    repeat:Infinity,
                    ease:easeInOut
                }}/>
                <div className="w-56 h-56 rounded-full bg-primary absolute -top-4 -left-4 -z-10 blur-3xl opacity-50"></div>
            </div>
        </div>
    )
}