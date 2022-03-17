import React, { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import classes from "./Work.module.scss";
import { SectionHeading, CardShowCase } from "../../Components";

const Work = () => {
  const filtersNames = [
    "Front-End",
    "Full-Stack",
    "UI/UX",
    "Vanilla JS",
    "React",
    "All",
  ];
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const query = '*[_type=="works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWorks(data);
    });
  }, []);

  const filterHandler = (filterTag) => {
    setActiveFilter(filterTag);
    if (filterTag === "All") {
      setFilterWorks(works);
      return;
    }
    setFilterWorks(works.filter((item) => item.tags.includes(filterTag)));
  };

  return (
    <div id="work" className={`${classes.work} margin__padding-section`}>
      <SectionHeading heading="My Creative" headingMainTagline="Projects" />
      <div className={classes["work__tags"]}>
        {filtersNames.map((filterTag, index) => {
          return (
            <div
              className={`${classes["work__tags-tag"]} ${
                filterTag === activeFilter ? classes["active"] : ""
              }
              `}
              key={filterTag + index}
              onClick={() => filterHandler(filterTag)}
            >
              <p>{filterTag}</p>
            </div>
          );
        })}
      </div>

      <div className={classes["work__projects"]}>
        {filterWorks.map((item, index) => {
          return (
            <CardShowCase
              key={`project_${item + index}`}
              title={item.title}
              img={urlFor(item.imgUrl)}
              description={item.description}
              links={[item.projectLink, item.codeLink]}
              tags={item.tags}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
