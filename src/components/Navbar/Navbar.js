import React from "react";
import './Navbar.css'
// max-w-screen-xl mx-auto

const Navbar = () => {
  return (
    <div className="sticky nav top-0">
      <div className="navbar bg-base-300 sm:px-10 lg:px-32">
        <div className="navbar-start">
          {/* <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost float-left lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu  menu-compact dropdown-content mt-20 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
         
              <li>
                <a>Skills</a>
              </li>
              <li>
              <a>Projects</a>
            </li>
            
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            </ul>
          </div> */}
          <a className="btn btn-ghost normal-case text-4xl ">Tarikul</a>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost float-left relative left-40 lg:hidden">
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
              className="menu  menu-compact dropdown-content mt-16 p-2 shadow relative -right-30 bg-base-100 rounded-box w-56"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
         
              <li>
                <a>Skills</a>
              </li>
              <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end  text-xl hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
   
    </div>
  );
};

export default Navbar;
