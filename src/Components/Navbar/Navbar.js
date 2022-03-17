import React from "react";
import { useState } from "react";
import classes from "./Navbar.module.scss";
import { images } from "../../constants/index";
import { MenuButton } from "../index";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuButtonHandler = () => {
    setToggleMenu((prevState) => !prevState);
  };

  const navLinks = ["home", "about", "work", "skills", "contact"];
  return (
    <nav className={classes["app__navbar"]}>
      <div className={classes["app__navbar-logo"]}>
        <img src={images.anudeep} alt="logo" />
      </div>
      <ul className={classes["app__navbar-links"]}>
        {navLinks.map((item) => {
          return (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>
      {toggleMenu === false ? (
        <MenuButton
          image={images.menu}
          onMenuButtonHandler={menuButtonHandler}
        />
      ) : (
        ""
      )}

      {toggleMenu ? (
        <div className={classes["app__navbar-menu"]}>
          <MenuButton
            className={classes["menu-icon"]}
            image={images.cross}
            onMenuButtonHandler={menuButtonHandler}
          />
          <ul>
            {navLinks.map((item) => {
              return (
                <li key={`${item}`}>
                  <div />
                  <a href={`#${item}`} onClick={menuButtonHandler}>
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
