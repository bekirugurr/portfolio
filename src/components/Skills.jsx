import Javascript from "../assets/javascript.png";
import React from "../assets/reactjs.png";
import CSS3 from "../assets/css3.png";
import django from "../assets/django2.png";
import Firebase from "../assets/firebase.png";
import Formik from "../assets/formik.png";
import Github from "../assets/github.png";
import Heroku from "../assets/heroku.png";
import HTML5 from "../assets/html5.png";
import jQuery from "../assets/jQuery2.png";
import MaterialUI from "../assets/mui.png";
import PostgreSQL from "../assets/postgres.png";
import postman from "../assets/postman.png";
import Python from "../assets/python.png";
import Redux from "../assets/redux.png";
import sass from "../assets/sass.png";
import SQLite from "../assets/SQLite.png";
import vscode from "../assets/vscode.png";
import StyledComponent from "../assets/styledComponent.png";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/bootstrap2.png";

const Skills = () => {

  let tools =[['HTML5',HTML5], ['CSS3', CSS3], ['Javascript',Javascript], ['React',React], ['Redux',Redux], ['Tailwind',Tailwind], ['jQuery',jQuery], ['Bootstrap',Bootstrap], ['Python',Python], ['django',django], ['Firebase',Firebase], ['Formik',Formik], ['Github',Github], ['Material UI',MaterialUI], ['PostgreSQL',PostgreSQL], ['SQLite',SQLite],  ['Heroku',Heroku], ['Styled',StyledComponent]]  

  return (
    <div id="skills" className="min-h-screen font-body bg-green-200 px-0 mx-0 pt-16 px-1 md:px-4 lg:px-12 pb-12 md:pb-24">
      <h1 className="text-4xl font-bold text-gray-800 mt-4 text-center">Skillset</h1>
      <h3 className="text-2xl font-bold text-gray-800 mt-4 text-center">
        Languages, libraries, frameworks and tools I use in development:
      </h3>
      <ul className="flex flex-row flex-wrap px-4 lg:px-24  mt-4 md:mt-10 mb-0 md:mb-2">

        {tools.map((item)=> 
        (<li key={item[1]} className="flex flex-col items-center my-2 mx-3 my-3 md:mx-6 ">
          <div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={item[1]} alt={item[0]} />
          </div>
          <p className="text-gray-700">{item[0]}</p>
        </li>)
         )} 
        {/*NOTE: Since their sizes and spaces are different, the ones below were written one by one.*/}
       
        <li className="flex flex-col items-center my-2 mx-3 md:my-3 md:mx-6">
          <div className="w-16 h-16 py-2 pl-1 pr-3 lg:w-20 lg:h-20 lg:py-3 md:pl-2 lg:pr-4 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={postman} alt="Postman"  />
          </div>
          <p className="text-gray-700">Postman</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 md:my-3 md:mx-6 ">
          <div className="w-16 h-16 py-2 pl-3 pr-1 lg:w-20 lg:h-20 lg:py-3 md:pl-4 lg:pr-2 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={sass} alt="sass" />
          </div>
          <p className="text-gray-700">Sass</p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 md:my-3 md:mx-6 ">
          <div className="w-16 h-16 py-3 pl-2 pr-4 lg:w-20 lg:h-20 lg:py-4 md:pl-3 lg:pr-5 rounded-full bg-gray-200 border-solid border-2 border-gray-400">
            <img src={vscode} alt="VS Code" />
          </div>
          <p className="text-gray-700">VS Code</p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
