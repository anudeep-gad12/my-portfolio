import React, { useState, useEffect } from "react";
import classes from "./Skills.module.scss";
import { urlFor, client } from "../../client";
import { SectionHeading } from "../../Components/";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type=="skills"]';
    const expquery = '*[_type=="experiences"]';

    client.fetch(query).then((data) => {
      setSkills(data);
    });
    client.fetch(expquery).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <div
      id="skills"
      className={`${classes["app__skills"]} margin__padding-section`}
    >
      <SectionHeading
        heading="Skills and"
        headingMainTagline="Experiences"
        headingSecondaryTagline=""
      />

      <div className={classes["app__skills-skillexp"]}>
        <div className={classes["app__skills-skills"]}>
          {skills.map((item, index) => {
            return (
              <div className={classes.skills} key={item + index}>
                <div className={classes["skills-container"]}>
                  <img src={urlFor(item.icon)} alt={item.name} />
                </div>
                <p className={classes["skills-name"]}>{item.name}</p>
              </div>
            );
          })}
        </div>
        <div className={classes["app__skills-experiences"]}>
          {experiences.map((experience, index) => {
            return (
              <div key={experience.year + index}>
                <div className={classes["experience-year"]}>
                  <h1>{experience.year}</h1>
                </div>

                {experience.works.map((work, index) => {
                  return (
                    <div
                      key={work.name + index}
                      className={classes["experience__work"]}
                    >
                      <h1 className={classes["experience__work-name"]}>
                        {work.company}
                      </h1>
                      <h3 className={classes["experience__work-role"]}>
                        {work.name}
                      </h3>
                      <p className={classes["experience__work-description"]}>
                        {work.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
