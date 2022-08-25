import { useState } from "react";
import {Link} from 'react-scroll'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
      <nav className="fixed top-0 flex flex-wrap items-center justify-between px-1 md:px-2 bg-gray-200  mb-1 w-full opacity-70">
        <div className=" px-6 mx-auto flex flex-wrap items-center justify-between w-full">
          <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
          <Link activeClass="active" smooth spy to="home" className=" mr-4 pl-3  inline-block  items-center text-3xl font-normal leading-relaxed cursor-pointer">

              <span className="text-green-400">B </span>Ugur</Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-2 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                color='black'
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div
            className={
              "md:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col md:flex-row list-none md:ml-auto ">
              <li className="nav-item py-0 cursor-pointer">
              <Link activeClass="active" smooth spy to="home" className="text-gray-900 p-4 px-3 flex items-center text-lg font-medium leading-snug hover:text-green-700  hover:pb-3 hover:border-b-2 hover:border-green-700 " onClick={() => setNavbarOpen(false)}> 
                Home </Link>
              </li>
              <li className="nav-item py-0 cursor-pointer">
              <Link activeClass="active" smooth spy to="skills" className="text-gray-900 p-4 px-3 flex items-center text-lg font-medium leading-snug hover:text-green-700  hover:pb-3 hover:border-b-2 hover:border-green-700" onClick={() => setNavbarOpen(false)}> 
                Skills </Link>
              </li>
              <li className="nav-item py-0 cursor-pointer">
              <Link activeClass="active" smooth spy to="projects" className="text-gray-900 p-4 px-3 flex items-center text-lg font-medium leading-snug hover:text-green-700  hover:pb-3 hover:border-b-2 hover:border-green-700" onClick={() => setNavbarOpen(false)}> 
                Projects </Link>
              </li>
              <li className="nav-item py-0 cursor-pointer">
              <Link activeClass="active" smooth spy to="about" className="text-gray-900 p-4 px-3 flex items-center text-lg font-medium leading-snug hover:text-green-700  hover:pb-3 hover:border-b-2 hover:border-green-700" onClick={() => setNavbarOpen(false)}> 
                About </Link>
              </li>
              <li className="nav-item py-0 cursor-pointer">
              <Link activeClass="active" smooth spy to="certificates" className="text-gray-900 p-4 px-3 flex items-center text-lg font-medium leading-snug hover:text-green-700  hover:pb-3 hover:border-b-2 hover:border-green-700" onClick={() => setNavbarOpen(false)}> 
                Certificates </Link>
              </li>
              <li className="nav-item py-0 cursor-pointer">
              <Link activeClass="active" smooth spy to="contact" className="text-gray-900 p-4 px-3 flex items-center text-lg font-medium leading-snug hover:text-green-700  hover:pb-3 hover:border-b-2 hover:border-green-700" onClick={() => setNavbarOpen(false)}> 
                Contact </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
