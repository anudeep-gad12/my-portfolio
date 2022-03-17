import React from "react";
import classes from "./SectionHeading.module.scss";

const SectionHeading = (props) => {
  return (
    <h2 className={classes["section-heading"]}>
      {props.heading}
      <span>{props.headingMainTagline}</span>
      <br />
      <span>{props.headingSecondaryTagline}</span>
    </h2>
  );
};

export default SectionHeading;
