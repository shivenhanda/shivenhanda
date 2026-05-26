import React from 'react'

export default function Skills() {
    let skill=[
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "TailwindCSS",
        "Bootstrap",
        "JWT Authentication",
        "bcrypt / httpOnly Cookies",
        "RestAPI Design",
        "Redux ToolKit",
        "ContextAPI",
        "Git / GitHub",
        "React Router DOM",
        "Mongoose ODM"
    ]
    return (
        <div>
            <h1 className="text-center text-3xl md:text-5xl font-bold mb-5" id="skills">Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5">
            {
                skill.map((item,index)=>(
                    <span key={index} className='text-center rounded-2xl bg-gray-200 text-black p-2 text-lg font-bold hover:scale-105 hover:bg-amber-500 transition'>
                        {item}
                    </span>
                ))
            }
            </div>
        </div>
    )
}
