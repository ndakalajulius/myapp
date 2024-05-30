//About.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import ndakala from "../Images/ndakala.png";

const About = () => {
  return (
    <section id="about" className="container text-center">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            About Me
          </h2>
          <div className="profile-image-container">
            <img
              src={ndakala}
              alt="geek pic"
              className="img-fluid rounded-circle profile-image"
            />
          </div>
          <p className="section-description mt-4">
            Experienced software engineer with a passion for developing
            innovative programs that expedite the efficiency and effectiveness
            of organizational success. Well-versed in technology and writing
            code to create systems that are reliable and user-friendly. Skilled
            leader who has the proven ability to motivate, educate and manage a
            team of professionals to build software programs and effectively
            track changes. Confident communicator, strategic thinker, and
            innovative creator to develop software that is customized to meet a
            company's organizational needs, highlight its core competencies, and
            further its success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
