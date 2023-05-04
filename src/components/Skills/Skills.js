import React from "react";
import "./Skills.css";
import SkillsData from "./fakedata";

const Skills = () => {
  return (
 <div className="flex-skill">
       <div className="grids">
      {SkillsData.map((skill) => {
        return (
          <>
          <div className="single-skill">
          <div className="">
              <img className="skill-img" src={skill.img} alt="" />
              
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
          </>
        );
      })}
    </div>
    <div>
        <h2>Junior Software Engineer (Intern)</h2>
    </div>
 </div>
  );
};

export default Skills;
// w-24 mask mask-squircle