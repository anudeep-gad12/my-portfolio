import React from "react";
import classes from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={classes["item"]}>
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div>{props.children}</div>
    </div>
  );
};

export default Card;
