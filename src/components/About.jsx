import { easeInOut, easeOut, motion } from "framer-motion"
import shiven from "../assets/shiven.jpeg"

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="m-10 text-foreground"
            id="about">
            <h1 className="text-center text-3xl md:text-5xl font-bold mb-15">About Us</h1>
            <div className="flex justify-center flex-col md:justify-between md:flex-row gap-8">
                <motion.img src={shiven} alt="ShivenPhoto" className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-card object-cover" />
                <div className="flex flex-col">
                    <p className="text-lg p-2 md:text-xl leading-relaxed">
                        Hi, I’m Shiven Handa — a focused and disciplined MERN Stack Developer passionate about building real-world web applications. I specialize in JavaScript, React, Node.js, Express, and MongoDB, and I enjoy turning ideas into scalable and user-friendly products. I’m continuously improving my skills by building projects and exploring modern development practices, including UI/UX fundamentals.
                    </p>

                    <p className="text-lg p-2 md:text-xl leading-relaxed mt-4">
                        I believe in writing clean, maintainable code and building applications that are not only functional but also intuitive and visually smooth. My goal is to grow into a strong full-stack engineer who can contribute to meaningful, high-impact products used by real users.
                    </p>

                    <p className="text-lg p-2 md:text-xl leading-relaxed mt-4">
                        I enjoy solving real-world problems through code and constantly challenge myself with new projects. From authentication systems to full-stack CRUD applications, I focus on understanding core concepts deeply rather than relying on tutorials, so I can build things from scratch with confidence.
                    </p>

                </div>
            </div>
        </motion.div>
    )
}