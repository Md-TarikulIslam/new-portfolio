import React from "react";
import "./Skills.css";
import SkillsData from "./fakedata";

const Skills = () => {
  return (
  <div id="skills" className="skill-section">
    <div className="text-center">
      <h2 className="text-5xl my-3">Skills & Experience</h2>
      <h5 className="text-xl mb-5">My Technical Experience</h5>
    </div>
      <div className="flex-skill">
      <div className="grids">
        {SkillsData.map((skill) => { 
          return (
            <div>
              <div className="single-skill">
                <img className="skill-img" src={skill.img} alt="" />
              </div>
              <p className="skill-name">{skill.name}</p>
            </div>
          );
        })}
      </div>
      <div className="ex">
        <h2 className="junior">Junior Software Engineer (Intern)</h2>
        <h2 className="suffix">Suffix IT Limited</h2>
        <h2 className="date">January,2023 - April,2023</h2>
      </div>
    </div>
  </div>
  );
};

export default Skills;
// w-24 mask mask-squircle
