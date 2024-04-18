import classes from "./social-link.module.css";
import Image from "next/image";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
function SocialLinks(props) {
  return (
    <>
      <div className={classes.box}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {props.image !== "gmail" && (
            <Image
              src={`/images/${props.image}.svg`}
              width={40}
              height={40}
              alt="github"
              className={`${
                props.image === "stackoverflow" && classes.stackoverflow
              }`}
            />
          )}
          {props.image === "gmail" && (
            <MailOutlineIcon className={classes.svg} />
          )}
          {props.text}
        </a>
      </div>
    </>
  );
}
export default SocialLinks;
