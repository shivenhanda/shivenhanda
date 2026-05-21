import { easeInOut, easeOut, motion } from "framer-motion"
import shiven from "../assets/shiven.jpeg"

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="m-10"
            id="about">
            <h1 className="text-center text-3xl font-bold mb-15">About Us</h1>
            <div className="flex justify-center flex-col md:justify-between md:flex-row">
                <motion.img src={shiven} alt="ShivenPhoto" className="w-100 h-100 border rounded border-transparent" />
                <div className="flex flex-col">
                    <p className="text-lg p-2 md:text-3xl">Hi, I’m Shiven Handa — a focused and disciplined MERN Stack Developer passionate about building real-world web applications.

                        I specialize in JavaScript, React, Node.js, Express, and MongoDB, and I enjoy turning ideas into scalable, user-friendly products. I’m continuously improving my skills by building projects and learning modern tools like UI/UX design.</p>
                    <i className="fa-brands fa-html5 md:text-5xl" style={{ color: "rgb(255, 7, 0)" }}></i>
                    <i className="fa-brands fa-css3-alt md:text-5xl" style={{color: "rgb(0, 92, 255)"}}></i>
                    <i className="fa-brands fa-js md:text-5xl" style={{color: "rgb(255, 212, 59)"}}></i>
                    <i className="fa-brands fa-react md:text-5xl" style={{color: "rgb(3, 255, 241)"}}></i>
                    <i className="fa-brands fa-node-js md:text-5xl" style={{color: "rgb(42, 167, 49)"}}></i>
                    <i className="fa-solid fa-database md:text-5xl" style={{color: "rgb(42, 167, 49)"}}></i>
                </div>
            </div>
        </motion.div>
    )
}