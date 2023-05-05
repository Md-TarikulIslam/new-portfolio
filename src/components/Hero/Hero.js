import React from "react";
import proPic from "../../../src/image/myPic.jpg";
import proPic2 from "../../../src/image/My project (1).png";
import earth from "../../../src/image/Rotating_earth_animated_transparent.gif";
import "./Hero.css";
import { HiArrowDownRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <div id="hero" className="overflow-x-hidden">
      <div className="bg-color">
        <img className=" pro-pic mx-auto" src={proPic2} alt="" />
      </div>
<div>
    <p className="loc">Located <br />in the <br />Bangladesh</p>
    <img className="earth" src={earth} alt="" />
   <p className="icon"> <HiArrowDownRight /></p>
   <p className="web"> Web Developer</p>
</div>
      <marquee
        className="text-size zz font-extrabold text-white"
        behavior="alternate"
        scrollamount="15"
        direction="left"
      >
        Md. Tarikul Islam Md. Tarikul Islam
      </marquee>
    </div>
  );
};

export default Hero;
