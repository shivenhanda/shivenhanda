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
        <div className="text-foreground">
            <h1 className="text-center text-3xl md:text-5xl font-bold mb-10" id="skills">Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-5">
            {
                skill.map((item,index)=>(
                    <span key={index} className='text-center rounded-2xl bg-card border border-border text-card-foreground p-2 text-lg font-bold hover:bg-primary hover:text-card-foreground transition-all duration-300 transform hover:-translate-y-1'>
                        {item}
                    </span>
                ))
            }
            </div>
        </div>
    )
}
