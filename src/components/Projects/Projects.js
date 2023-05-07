import React from "react";
import "./Projects.css";
import ProjectsData from "./fakedata";
import { VscGlobe, VscCode, VscGithubInverted } from "react-icons/vsc";

const Projects = () => {
  return (
    <div id="projects" className="project pt-20">
      <div className="text-center">
        <h2 className="text-5xl my-3 leading-normal">My Creative Projects</h2>
        <h5 className="text-xl mb-5">My Recent Works</h5>
      </div>
      {/* card section  */}
      <div className="">
        <div className="all-card">
          {ProjectsData.map((project) => {
            return (
              <div>
                <div className="card single-card ">
                  <figure>
                    <img className="pro-img object-cover" src={project.img} alt="car!" />
                  </figure>
                  <div className="card-body p-3">
                    <h2 className="card-title">{project.name}</h2>
                    <p>{project.title}</p>
                    <div className="icons">
                      <a target="_blank" className="pro-icon" href={project.live}>
                      <p>  <VscGlobe /></p>
                      </a>
                      <a target="_blank" className="pro-icon" href={project.github}>
                      <VscGithubInverted />
                      </a>
                    </div>
                    <div className="pro-tech-grid">
                      <img className="pro-tech-logo" src={project.ti} alt="" />
                      <img className="pro-tech-logo" src={project.ti2} alt="" />
                      <img className="pro-tech-logo" src={project.ti3} alt="" />
                      <img className="pro-tech-logo" src={project.ti4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
