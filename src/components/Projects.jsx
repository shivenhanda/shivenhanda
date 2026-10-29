const projects = [
    {
        title: "Expense Tracker",
        icon: "💰",
        description:
            "Track income and expenses with a clean and responsive interface.",
        tech: ["React", "NodeJS", "ExpressJS", "MongoDB", "ChartJS"],
        github: "https://github.com/shivenhanda/ExpenseTracker",
        live: "https://expensetracker-eta-navy-42.vercel.app/",
    },
    {
        title: "Ecommerce Store",
        icon: "🛒",
        description:
            "Modern ecommerce website with product pages and cart features.",
        tech: ["React", "NodeJS", "ExpressJS", "MongoDB", "ChartJS"],
        github: "https://github.com/shivenhanda/Ecommerce-Store",
        live: "https://ecommerce-store-tmzs.vercel.app/",
    },
    {
        title: "Image Editor",
        icon: "🖼️",
        description: "Image editing web app with filters and customization tools.",
        github:
            "https://github.com/shivenhanda/HtmlCSSJavaScript-Projects/tree/main/Image%20Editor",
    },
    {
        title: "Restaurant Website",
        icon: "🍽️",
        description: "Responsive restaurant website with stylish UI sections.",
        tech: ["HTML", "CSS", "JavaScript"],
        github:
            "https://github.com/shivenhanda/HtmlCSSJavaScript-Projects/tree/main/Restaurant%20Website",
    },
    {
        title: "User Quiz Generator",
        icon: "❓",
        description: "Interactive quiz generator made using vanilla JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        github:
            "https://github.com/shivenhanda/HtmlCSSJavaScript-Projects/tree/main/User%20Quiz%20Generator",
    },
    {
        title: "Calculator",
        icon: "🧮",
        description: "Simple calculator application with responsive design.",
        tech: ["React", "NodeJS", "ExpressJS"],
        github: "https://github.com/shivenhanda/calculator",
    },
];

export default function Projects() {
    return (
        <section className="projects-section" id="project">
            <header className="projects-header">
                <h1 className="projects-heading">Projects</h1>
            </header>

            <div className="project-grid">
                {projects.map((item) => (
                    <div key={item.title} className="project-card">
                        <div className="project-card-heading">
                            <span className="project-icon" aria-hidden="true">
                                {item.icon}
                            </span>
                            <h2 className="project-title">{item.title}</h2>
                        </div>
                        <p className="project-description">{item.description}</p>

                        <ul className="project-tech-list" aria-label={`${item.title} technologies`}>
                            {(item.tech || []).map((technology) => (
                                <li className="project-tech" key={technology}>
                                    {technology}
                                </li>
                            ))}
                        </ul>

                        <div className="project-links">
                            <a
                                href={item.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link project-link-secondary"
                            >
                                Source code
                            </a>
                            {item.live && (
                                <a
                                    href={item.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link project-link-primary"
                                >
                                    Live demo <span aria-hidden="true">↗</span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <a
                href="https://github.com/shivenhanda"
                target="_blank"
                rel="noopener noreferrer"
                className="projects-more-link"
            >
                View more projects on GitHub <span aria-hidden="true">↗</span>
            </a>
        </section>
    );
}
