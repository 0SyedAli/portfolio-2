import classes from './social.module.css';
import Section from './section';
import SocialLinks from './social-link';


function Social() {
    return (
        <Section>
            <div className="section_title link">
                On the Web 🌐
            </div>
            <div className={`${classes.link_wrapper} section_content`}>
                <SocialLinks image="github" text="github" link="https://github.com/0SyedAli" />
                <SocialLinks image="linkedin" text="linkedIn" link="https://www.linkedin.com/in/syed-ahtisham-ali-120880254/ " />
                <SocialLinks image="gmail" text="mail" link="mailto:sa8449006@gmail.com" />
            </div>
        </Section>
    )
}
export default Social;