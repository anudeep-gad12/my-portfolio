import React from "react";
import { useState, useEffect } from "react";
import classes from "./About.module.scss";
// import { images } from "../../constants/index";
import { SectionHeading, Card } from "../../Components/";
import { urlFor, client } from "../../client";

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type=="abouts"]';
    client.fetch(query).then((data) => setAbout(data));
  }, []);

  about.reverse();

  return (
    <div id="about" className={`${classes.about} margin__padding-section`}>
      <SectionHeading
        heading="I know that"
        headingMainTagline="Good Apps"
        headingSecondaryTagline="Good Business"
      />
      <div className={classes["about__profiles"]}>
        {about.map((item) => {
          return (
            <Card
              key={`profile-${item.title}`}
              img={urlFor(item.imgUrl)}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;
