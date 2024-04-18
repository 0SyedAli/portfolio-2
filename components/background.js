import classes from './background.module.css';
import Section from './section';
function Background() {
    return (
        <Section className={classes.background}>
            <div className={`${classes.background_title} link`}>
                BACKGROUND 👨‍💻       
            </div>
            <div className={classes.background_content}>
                <p>
                    Welcome to my portfolio! I hold a degree in Bachelors in Information Technology and Bussiness from <a href="https://www.vu.edu.pk/" className={classes.background_link} target="_blank" rel="noreferrer">Virtual University</a>, Pakistan, and currently serve as a full-time Frontend Engineer at Qtechnologies.
                </p>
                <p>
                    As a passionate frontend developer, I thrive on exploring new frameworks and libraries. My recent focus has been on mastering Next.js, and Typescript . My goal in web development is to craft visually stunning, responsive products that deliver a pixel-perfect user experience.
                </p>
                <p>
                    Beyond coding, I find joy in immersing myself in books and engaging in online gaming. Join me on this journey as I continue to push the boundaries of web development and create innovative digital experiences.
                </p>
            </div>
        </Section>
    )

}
export default Background;