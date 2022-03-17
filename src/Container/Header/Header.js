import React from "react";
import { images } from "../../constants/index";
import classes from "./Header.module.scss";
const Header = () => {
  const techImages = [images.javascript, images.react, images.node];
  return (
    <header id="home" className={classes.app__header}>
      <div className={classes["app__header-badge"]}>
        <div className={classes["badge-welcome"]}>
          <span>👋</span>
          <div>
            <p className="p-text">I'm</p>
            <h1 className="head-text"> Anudeep</h1>
          </div>
        </div>
        <div className={classes["badge-tag"]}>
          <p className="p-text">Web Developer</p>
          {/* <p className="p-text"></p> */}
        </div>
      </div>

      <div className={classes["app__header-circles"]}>
        {techImages.map((item) => {
          return (
            <div className={classes["circles-images"]} key={`techItem-${item}`}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
