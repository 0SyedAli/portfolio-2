import ProjectBox from './project-box';
import classes from './projetcs.module.css';
import Section from './section';
function Projects() {
    const projects = [
        {
            name: "Feybl Studio",
            tech: "jQuery, HTML5, CSS3, PHP, BootStrap5",
            github: "https://github.com/0SyedAli/Feybl_Studio",
            live: "https://node-app.demowebapp.digital/"
        },
        {
            name: "The Praetors",
            tech: "jQuery, HTML5, CSS3, PHP, BootStrap5",
            github: "https://github.com/0SyedAli/ThePreators",
            live: "https://thepraetors.com"
        },
        {
            name: "Talent Tube",
            tech: "JS6, HTML5, CSS3, PHP, BootStrap5, AOS",
            github: "https://github.com/0SyedAli/talenttube",
            live: "https://demowebapp.digital/html/talent-tube/v3/"
        },
        {
            name: "Artech",
            tech: "JS6, HTML5, CSS3, PHP, BootStrap5",
            github: "https://github.com/0SyedAli/artech",
            live: "https://demowebapp.digital/html/artech/v2/"
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