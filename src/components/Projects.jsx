const projects = [
    {
        title: "Expense Tracker",
        icon: "💰",
        description:
            "Track income and expenses with a clean and responsive interface.",
        tech: ["React", "NodeJS", "ExpressJS", "MongoDB", "ChartJS"],
        github: "https://github.com/shivenhanda/ExpenseTracker",
    },

    {
        title: "Ecommerce Store",
        icon: "🛒",
        description:
            "Modern ecommerce website with product pages and cart features.",
        tech: ["React", "NodeJS", "ExpressJS", "MongoDB", "ChartJS"],
        github: "https://github.com/shivenhanda/Ecommerce-Store",
    },

    {
        title: "Image Editor",
        icon: "🖼️",
        description:
            "Image editing web app with filters and customization tools.",
        tech: ["HTML", "CSS", "JavaScript"],
        github:
            "https://github.com/shivenhanda/HtmlCSSJavaScript-Projects/tree/main/Image%20Editor",
    },

    {
        title: "Restaurant Website",
        icon: "🍽️",
        description:
            "Responsive restaurant website with stylish UI sections.",
        tech: ["HTML", "CSS", "JavaScript"],
        github:
            "https://github.com/shivenhanda/HtmlCSSJavaScript-Projects/tree/main/Restaurant%20Website",
    },

    {
        title: "User Quiz Generator",
        icon: "❓",
        description:
            "Interactive quiz generator made using vanilla JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        github:
            "https://github.com/shivenhanda/HtmlCSSJavaScript-Projects/tree/main/User%20Quiz%20Generator",
    },

    {
        title: "Calculator",
        icon: "🧮",
        description:
            "Simple calculator application with responsive design.",
        tech: ["React", "NodeJS", "ExpressJS"],
        github: "https://github.com/shivenhanda/calculator",
    },
];

export default function Projects() {
    return (
        <section>
            <h1 className="text-center text-3xl md:text-5xl font-bold mb-5" id="project">Projects</h1>
            <div className="project-grid">
                {
                projects.map((item,index) => (
                <div key={index} className="project-card">
                    <h2 className="font-bold text-3xl">{item.icon} {item.title}</h2>
                    <p className="text-2xl">{item.description}</p>
                    <a href={item.github} className="viewProject text-2xl">View Project</a>
                </div>
                ))
                }
                <a href="https://github.com/shivenhanda" className="viewProject text-2xl">View More Project</a>
            </div>
        </section>
    );
}