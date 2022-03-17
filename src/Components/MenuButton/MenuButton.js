import React from "react";
import classes from "./MenuButton.module.scss";

const MenuButton = (props) => {
  return (
    <div
      className={classes.menuIcon}
      onClick={() => props.onMenuButtonHandler()}
    >
      <img src={props.image} alt="" className={classes["menuIcon-icon"]} />
    </div>
  );
};

export default MenuButton;
