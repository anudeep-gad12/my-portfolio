import React, { useState } from "react";
import classes from "./Footer.module.scss";
import { SectionHeading } from "../../Components";
import { images } from "../../constants";
import { client } from "../../client";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formValues;
  const [isLoading, setIsLoading] = useState(false);
  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmitHandler = () => {
    setIsLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setIsLoading(false);
      setFormIsSubmitted(true);
    });
  };
  return (
    <div
      id="contact"
      className={`${classes["app__footer"]} margin__padding-section`}
    >
      <SectionHeading
        heading="Take a Coffee and"
        headingMainTagline="Chat with me"
      />

      <div className={classes["app__footer-container"]}>
        <div className={classes["app__footer-card"]}>
          <div className={classes["card-img"]}>
            <img src={images.email} alt="email" />
          </div>
          <a
            href="mailto:anudeep.gad@gmail.com"
            className={classes["card-link"]}
          >
            anudeep.gad@gmail.com
          </a>
        </div>

        {formIsSubmitted ? (
          <p className={classes.message}>Thanks for the message!</p>
        ) : (
          <div className={classes["app__footer-form"]}>
            <div className={classes["form-name"]}>
              <label htmlFor="name">Name</label>
              <input type="text" onChange={inputChangeHandler} name="name" />
            </div>
            <div className={classes["form-email"]}>
              <label htmlFor="email"> Email</label>
              <input type="email" name="email" onChange={inputChangeHandler} />
            </div>
            <div className={classes["form-textarea"]}>
              <textarea
                type="text"
                placeholder="Enter your message"
                name="message"
                onChange={inputChangeHandler}
              />
            </div>
            <button
              className={classes["btn-submit"]}
              onClick={formSubmitHandler}
            >
              {isLoading ? "Sending" : "Submit"}
            </button>
          </div>
        )}
      </div>

      <div className={classes["app__footer-social"]}>
        <div className={classes["social-links"]}>
          <a
            href="https://www.linkedin.com/in/anudeepgadige/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/anudeep-gad12"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
        </div>

        <p className={classes.copy}>
          &copy; 2022 Anudeep
          <span>All rights reserved</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
