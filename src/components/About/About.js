import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-position  px-32 mx-auto">
     <div className="flex justify-items-center about-p">
   <div >
   <h1 className="text-4xl text-justify tech">
        Using my technical expertise and problem-solving skills to create
        effective and efficient web solutions that meet the needs of users and
        help businesses and organizations achieve its goals.
      </h1>
   </div>
      <p className="text-2xl text-justify design">
        The combination of my passion for design, code & interaction positions
        me in a unique place in the web design world.
      </p>
     </div>
     <p className="about">About me</p>
    </div>
  );
};

export default About;
