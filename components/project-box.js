import Image from "next/image";
import classes from "./project-box.module.css";

function ProjectBox(props) {
  function clickHandler() {
    window.open(props.live, "_blank").focus();
  }

  return (
    <div className={`${classes.project_box} link`}>
      <div className={classes.project_box_link}>
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          <Image src="/github.svg" width={40} height={40} alt="Github" />
        </a>
        <a href={props.live} target="_blank" rel="noopener noreferrer">
          <Image src="/link.svg" width={40} height={40} alt="Live" />
        </a>
      </div>
      <div className={classes.project_box_content} onClick={clickHandler}>
        <h3>{props.name}</h3>
        <h5>{props.tech}</h5>
      </div>
    </div>
  );
}
export default ProjectBox;
