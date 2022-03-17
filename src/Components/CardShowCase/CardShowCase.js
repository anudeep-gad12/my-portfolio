import React from "react";
import classes from "./CardShowCase.module.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const CardShowCase = (props) => {
  return (
    <div className={classes["item"]}>
      <div className={classes["overlay"]}>
        <img src={props.img} alt="" />
      </div>
      <div className={classes["links"]}>
        <a
          href={props.links[0]}
          target="_blank"
          className={classes["eye"]}
          rel="noreferrer"
        >
          <AiFillEye />
        </a>
        <a
          href={props.links[1]}
          target="_blank"
          className={classes["github"]}
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
      <div className={classes["tags"]}>
        <p>{props.tags[0]}</p>
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default CardShowCase;
