// Projects.js
import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Breadcrumbs from "./Breadcrumbs";
import "./style.css";
import Ohana from "../Images/ohana.png";
import Vedman from "../Images/vedman.png";
import Event from "../Images/event.png";
import Riziki from "../Images/riziki.png";

const Projects = () => {
  const breadcrumbsPaths = [
    { title: "Home", to: "/" },
    { title: "Projects", to: "/projects" },
  ];

  return (
    <section id="projects" className="container text-center">
      <Breadcrumbs paths={breadcrumbsPaths} />
      <h2 className="section-title">
        <FontAwesomeIcon icon={faCode} className="mr-2" />
        Projects
      </h2>
      <div className="row">
        {/* Project 1 */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Ohana Family Wear -</h5>
              <Card.Img variant="top" src={Ohana} />
              <p className="card-text">
                Designed the UI and implemented CSS styling for the website,
                optimizing performance and design across all pages.
              </p>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Vedman Capital Limited</h5>
              <Card.Img variant="top" src={Vedman} />
              <p className="card-text">
                Designed and developed a site for investment using HTML, CSS,
                JavaScript, jQuery, and Bootstrap.
              </p>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Event Hub</h5>
              <Card.Img variant="top" src={Event} />
              <p className="card-text">
                Developed a event platform that allows users to view and manage
                their events in one place, integrating with APIs from major
                platforms.
              </p>
            </div>
          </div>
        </div>
        {/* Project 4 */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Riziki Foundation</h5>
              <Card.Img variant="top" src={Riziki} />
              <p className="card-text">
                Developed a platform that deals with the poor and less
                peviledged in the society and integrated with APIs from major
                platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
