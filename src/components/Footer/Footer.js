import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="foo">
      <div>
        <h2 className="name">Md. Tarikul Islam</h2>
      </div>
      <div className="s-icons">
        <a target="_blank" href="https://www.facebook.com/alwaysnayon">
          <p className="f-ico">
            <FaFacebookF />
          </p>
        </a>
        <a target="_blank" href="https://twitter.com/tarikul_nayon">
          {" "}
          <p className="f-ico">
            <FaTwitter />
          </p>
        </a>
        <a target="_blank" href="https://github.com/Md-TarikulIslam">
          {" "}
          <p className="f-ico">
            <FaGithub />
          </p>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/md-tarikul-islam-3a0b41217/"
        >
          <p className="f-ico">
            <FaLinkedinIn />
          </p>
        </a>
      </div>
      <div className="copy-flex">
        <span className="foo-copy">
          <FaRegCopyright />
        </span>
        <p>All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
