import ProjectBox from './project-box';
import classes from './projetcs.module.css';
import Section from './section';
function Projects() {
    const projects = [
        {
            name: "Sameer Hassan Studio",
            tech: "ReactJs, Ant Desgin, BootStrap5",
            github: "https://github.com/0SyedAli/singerweb",
            live: "https://sammirhassan.netlify.app/"
        },
        {
            name: "The Praetors",
            tech: "jQuery, HTML5, CSS3, PHP, BootStrap5",
            github: "https://github.com/0SyedAli/thepraetors-2",
            live: "https://thepraetors.com"
        },
        {
            name: "Talent Tube",
            tech: "JS6, HTML5, CSS3, PHP, BootStrap5, AOS",
            github: "https://github.com/0SyedAli/talenttube",
            live: "https://talenttube.io"
        },
        {
            name: "Date 420",
            tech: "JS6, HTML5, CSS3, PHP, BootStrap5, AOS",
            github: "https://github.com/0SyedAli/date_420_web",
            live: "https://demowebapp.digital/html/date_420/v4/index.php"
        },
    ]
    return (
        <Section>
            <div className="section_title link">
                Featured Projects 📁
            </div>
            <div className={`${classes.projects_wrapper} section_content`}>
                {projects?.map(project => <ProjectBox key={project.github} name={project.name} tech={project.tech} github={project.github} live={project.live} />)}
            </div>
        </Section>
    )
}
export default Projects;