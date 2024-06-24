import Button from './UI/button';
import ProjectBox from './other-project-box';
import Section from './section';
import classes from './other-project.module.css';

function OtherProjects() {
    const projects = [
        {
            name: "Tesla Clone",
            description: "Tesla website clone made using React and Authentication with firebase.",
            techItems: ["Javasscript", "Firebase", `React Redux`, `Styled Components`],
            github: "https://github.com/0SyedAli/tesla-clone",
            live: "https://tesla-clone-23.netlify.app/",
        },
        {
            name: "Interview Tezeract Task",
            description: "Designed and implemented a form using React.js, seamlessly integrating Firebase for real-time data display, as per company interview task.",
            techItems: ['ReactJS', "Firebase", "React-Bootstrap", "MUI"],
            github: "https://github.com/0SyedAli/tezetask/",
            live: "https://tezetask.netlify.app/"
        },
        {
            name: "Singer React Web",
            description: "I created a website for freelance client Sameer Hassan, a Pashto singer, using React.js.",
            techItems: ['React Js', "Ant Design" , "Bootstrap5"],
            github: "https://github.com/0SyedAli/singerweb",
            live: "https://sammirhassan.netlify.app/"
        },
        {
            name: "Tic Tac Toe",
            description: "Tic Tac Toe game made using React.",
            techItems: ['React', "CSS", "HTML", 'Javascript'],
            github: "https://github.com/0SyedAli/Tic-Tac-Toe",
            live: "https://tictactoe23.netlify.app/"
        },
        {
            name: "ToDo App",
            description: "ToDo App made using React and Context API.",
            techItems: ["React", "Context API", "CSS", 'Javascript'],
            github: "https://github.com/0SyedAli/todoApp_",
            live: "https://todolist-23.netlify.app/"
        }
    ]
    return (
        <Section>
            <div className="section_title link">
                Other Projects
            </div>
            <div className={`${classes.projects_wrapper} section_content`}>
                {projects.map(project => <ProjectBox key={project.github} title={project.name} description={project.description} techItems={project.techItems} github={project.github} live={project.live} />)}
                < div className={classes.more} >
                    <a href="https://github.com/0SyedAli?tab=repositories" target="_blank" rel="noopener noreferrer"><Button> More Projects</Button></a>
                </div>
            </div>
        </Section >
    )
}
export default OtherProjects;