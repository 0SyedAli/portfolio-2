import classes from './header.module.css';
import Button from './UI/button';

function Header() {
    return (
        <>
            <h5 className={`${classes.header_logo} link`}>ahtisham</h5>
            <div className={classes.header_background}></div>
            <header className={classes.header}>
                <h1>HI THERE👋, I&rsquo;m!</h1>
                <h2 className={`${classes.header_info} link`}>Ahtisham Ali.</h2>
                <h3 className={classes.header_tag}>front-end developer</h3>
                <h4 className={classes.header_details}>Front-end developer focused on building webapps with pixel perfect User Interface.</h4>
                <div className={classes.cta}>
                    <Button> <a className="resume" href="https://drive.google.com/file/d/1svu7YI2U2Oas8OsPJ6u02Zfd2X-C3xsD/view" target='_blank' rel="noopener noreferrer">Download Resume</a> </Button>
                </div>
                <h3 className={classes.header_contact}> <span>Get in touch </span> <span className={classes.emoji_pointer}>👉</span><span> <a href="mailto:sa8449006@gmail.com" target="_blank" rel="noopener noreferrer" className={classes.header_contact_link}>sa8449006@gmail.com</a> </span> </h3>
            </header>
        </>
    )
}

export default Header;
