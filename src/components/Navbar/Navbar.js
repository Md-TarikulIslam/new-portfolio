import React from "react";
import "./Navbar.css";
import logo from "../../image/logo2.png";

const Navbar = () => {
  return (
    <div className="sticky nav top-0">
      <div className="navbar bg-base-300 sm:px-10 lg:px-32">
        <div className="navbar-start">
          <a href="#hero"><img className="nav-logo" src={logo} alt="" /></a>
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost float-left relative left-40 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu  menu-compact dropdown-content mt-16 p-2 shadow relative -right-40 bg-base-100 rounded-box w-56"
            >
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end  text-xl hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
