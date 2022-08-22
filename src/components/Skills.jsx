import React from "react";
import javascript from "../assets/javascript.png";
import react from "../assets/reactjs.png";
import css3 from "../assets/css3.png";
import django from "../assets/django.png";
import firebase from "../assets/firebase.png";
import formik from "../assets/formik.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import heroku from "../assets/heroku.png";
import html5 from "../assets/html5.png";
import jQuery from "../assets/jQuery.png";
import mui from "../assets/mui.png";
import postgres from "../assets/postgres.png";
import postman from "../assets/postman.png";
import python from "../assets/python.png";
import redux from "../assets/redux.png";
import sass from "../assets/sass.png";
import SQLite from "../assets/SQLite.png";
import vscode from "../assets/vscode.png";
import styledComponent from "../assets/styledComponent.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";

const Skills = () => {
  return (
    <div id="skills" className="h-screen  bg-green-200 px-0 mx-0 pt-16 px-1 md:px-4 lg:px-12">
      <h1 className="text-4xl font-bold text-gray-800 mt-1 lg:mt-2 ml-5">Skillset</h1>
      <h3 className="text-2xl font-bold text-gray-800 mt-1 lg:mt-2 ml-5">
        Languages, libraries, frameworks and tools I use in development:
      </h3>
      <ul className="flex flex-row flex-wrap px-4 lg:px-24  mt-4 lg:mt-8">
        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={html5} alt="html5" />
          </div>
          <p className="text-gray-700">HTML 5</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={css3} alt="css3" />
          </div>
          <p className="text-gray-700">CSS 3</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={javascript} alt="javascrpit" />
          </div>
          <p className="text-gray-700">Javascrpit</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={react} alt="react" />
          </div>
          <p className="text-gray-700">React</p>
        </li>

        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={redux} alt="redux" />
          </div>
          <p className="text-gray-700">Redux</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={tailwind} alt="Tailwind" />
          </div>
          <p className="text-gray-700">Tailwind</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 p-3 lg:w-20 lg:h-20 lg:p-4 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={bootstrap} alt="Bootstrap" />
          </div>
          <p className="text-gray-700">Bootstrap</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={python} alt="python" />
          </div>
          <p className="text-gray-700">Python</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={django} alt="django" className="h-10 mt-1 lg:mt-2"/>
          </div>
          <p className="text-gray-700">django</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={jQuery} alt="jQuery" />
          </div>
          <p className="text-gray-700">jQuery</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={mui} alt="Material UI" />
          </div>
          <p className="text-gray-700">Material UI</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={firebase} alt="firebase" />
          </div>
          <p className="text-gray-700">Firebase</p>
        </li>

        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={git} alt="git" />
          </div>
          <p className="text-gray-700">Git</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={github} alt="Github" />
          </div>
          <p className="text-gray-700">Github</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={heroku} alt="heroku" />
          </div>
          <p className="text-gray-700">Heroku</p>
        </li>

        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={postgres} alt="PostgreSQL" />
          </div>
          <p className="text-gray-700">PostgreSQL</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={SQLite} alt="SQLite" />
          </div>
          <p className="text-gray-700">SQLite</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6">
          <div className="w-16 h-16 py-2 pl-1 pr-3 lg:w-20 lg:h-20 lg:py-3 lg:pl-2 lg:pr-4 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={postman} alt="Postman"  />
          </div>
          <p className="text-gray-700">Postman</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 py-2 pl-3 pr-1 lg:w-20 lg:h-20 lg:py-3 lg:pl-4 lg:pr-2 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={sass} alt="sass" />
          </div>
          <p className="text-gray-700">Sass</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 py-2 pl-1 pr-3 lg:w-20 lg:h-20 lg:py-3 lg:pl-2 lg:pr-4 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={vscode} alt="VS Code" />
          </div>
          <p className="text-gray-700">VS Code</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 lg:my-3 lg:mx-6 ">
          <div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={styledComponent} alt="Styled Component" />
          </div>
          <p className="text-gray-700">Styled Comp</p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
