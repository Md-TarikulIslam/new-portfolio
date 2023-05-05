import React from "react";
import "./About.css";
import com from "../../image/com.jpg";
import { MdOutlineLightbulb } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { MdHeadsetMic } from "react-icons/md";
import { MdOutlineTextSnippet } from "react-icons/md";
const About = () => {
  return (
    <div id="about" className="about-position pt-20 px-32 mx-auto">
      <div className="text-center">
        <h2 className="text-5xl my-3">About Me</h2>
        <h5 className="text-xl mb-5">My Intro</h5>
      </div>
      <div className="about-flex">
        <div>
          <img src={com} alt="com" className="img-responsive" />
        </div>
        <div>
          <div className="card-flex">
            <div className="about-card">
              <p className="about-icon">
                <MdOutlineLightbulb />
              </p>
              <h1 className="exp">Experience</h1>
              <p className="time">1 Year working</p>
            </div>
            <div className="about-card">
              <p className="about-icon">
                <MdWorkOutline />
              </p>
              <h1 className="exp"> Completed</h1>
              <p className="time">13+ Projects</p>
            </div>
            <div className="about-card">
              <p className="about-icon">
                <MdHeadsetMic />
              </p>
              <h1 className="exp"> Support</h1>
              <p className="time">Online 24/7</p>
            </div>
          </div>
          <p className="all-text">
            Hello, I am Md. Tarikul Islam, and I am a highly skilled web
            developer with a passion for programming. I Recently completed my
            B.Sc in Computer Science and Engineering (CSE) at Bangladesh Army
            University of Engineering & Technology (BAUET).
            <br />
            <br />
            I am passionate about continuous learning and have completed various
            courses on different online platforms, including 10 Minute School,
            Bohubrihi, SoloLearn, Simplilearn, and FreeCodeCamp, to further
            enhance my knowledge and skills.
            <br />
            <br />
            In my free time, I enjoy building personal projects, and exploring
            new technologies. I am passionate about staying up-to-date with the
            latest trends and advancements in the field of web development and
            continuously strive to improve my skills and knowledge.
            <br />
            <br />
            As a highly motivated, detail-oriented, and dedicated individual, I
            am committed to delivering quality work within tight deadlines and
            continuously improving my skills. I possess excellent communication
            skills and enjoy working collaboratively with teams to deliver
            innovative solutions that meet the needs of users.
            <br />
            <br />
            Overall, I am confident that my skills, experience, combined with my
            technical skills, and strong work ethic, make me an ideal candidate
            for any web development role. I am excited about the opportunities
            that lie ahead and look forward to making valuable contributions to
            any team.
          </p>
          <a
            href="https://drive.google.com/uc?id=19TIj5B5fbPa_72Au1lE7A8s9r7x3j3LC&export=download"
            download
          >
            <div className="cv-btn mt-10">
              <button className="j">Download CV </button>
              <span className="text-2xl cvi">
                <MdOutlineTextSnippet />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
