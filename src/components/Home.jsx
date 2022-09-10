import React from "react";
import Typewriter from "typewriter-effect";
import profilepic from "../assets/profilepic.jpg";
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className="min-h-screen flex items-center bg-blue-50">
      <div className="md:pl-12 text-center font-body">
        <div className="flex flex-row flex-wrap md:flex-nowrap pl-12 lg:pl-36 pr-12 lg:pr-36 sm:gap-none md:gap-12 justify-center items-center pb-0 md:pb-7">
          <img
            src={profilepic}
            alt="bekir's_photo"
            className="w-48 h-48 md:w-72 md:h-72 lg:w-72 lg:h-72 rounded-3xl bg-green-300 "
          />

          <div className="flex flex-col gap-2 mt-8 md:-mt-4 lg:mt-0">
            <h2 className="text-2xl text-gray-800 text-center md:text-left font-bold">
              Hi 👋,&ensp;I'm
            </h2>
            <h1 className="text-5xl text-gray-800 text-center md:text-left font-bold my_text pb-2">
              Bekir Uğur
            </h1>

            <p className="text-lg text-gray-800 text-center md:text-left mt-2 px-4 md:px-0">
              Welcome on my portfolio page! I'm a <span className="font-bold my_text">Full Stack Developer</span> and focused on building responsive fullstack web applications
              while learning & exploring other technologies.
            </p>

            <ul className="flex gap-5 justify-center md:justify-start mt-3 pb-1 md:">
              <li className="w-12 h-12 rounded-full bg-gray-600 transition duration-150  hover:bg-gray-800 hover:ease-in-out flex justify-center items-center">
                <a href="https://github.com/bekirugurr" target="_blank">
                  <FaGithub className="w-7 h-7 text-white" />
                </a>
              </li>
              <li className="w-12 h-12 rounded-full bg-blue-700 hover:bg-blue-900 transition duration-150   hover:ease-in-out flex justify-center items-center">
                <a
                  href="https://www.linkedin.com/in/bekirugurr/"
                  target="_blank"
                >
                  <FaLinkedinIn className="w-6 h-6 text-white" />
                </a>
              </li>
              <li className="w-12 h-12 rounded-full bg-red-600 transition duration-150  hover:bg-red-800 hover:ease-in-out flex justify-center items-center">
                <a href="mailto:bekirugur070@gmail.com" target="_blank">
                  <FaRegEnvelope className="w-6 h-6 text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
