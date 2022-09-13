import { useEffect } from "react";
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
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


const Skills = ({setActiveItem}) => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const animationImage = useAnimation();
  const animationText = useAnimation();

  useEffect(() => {
    if (inView) {
      setActiveItem(1);
      animationImage.start({
        rotateX:0,
        // rotateY:0,
        opacity:1,
        transition: {duration:0.7, type:"spring", damping: 3, delay: 0.1}
      })
      animationText.start({
        y:0,
        opacity:1,
        transition: {duration:0.7, delay: 0.1}
      })
    }
    if (!inView) {
      animationImage.start({
        rotateX:100,
        // rotateY:180,
        opacity:0.2
      })
      animationText.start({
        y:'10vh',
        opacity:0,
        transition: {duration:0}
      })
    }
  },[inView]);

  let tools =[['HTML5',HTML5], ['CSS3', CSS3], ['Javascript',Javascript], ['React',React], ['Redux',Redux], ['Tailwind',Tailwind], ['jQuery',jQuery], ['Bootstrap',Bootstrap], ['Python',Python], ['django',django], ['Firebase',Firebase], ['Formik',Formik], ['Github',Github], ['Material UI',MaterialUI], ['PostgreSQL',PostgreSQL], ['SQLite',SQLite],  ['Heroku',Heroku], ['Styled',StyledComponent]]  

  return (
    <div ref={ref} id="skills" className="min-h-screen font-body bg-green-200 px-0 mx-0 pt-16 px-1 md:px-4 lg:px-12 pb-12 md:pb-24">
      <h1 className="text-4xl font-bold text-gray-800 mt-4 text-center">Skillset</h1>
      <h3 className="text-2xl font-bold text-gray-800 mt-4 text-center">
        Languages, libraries, frameworks and tools I use in development:
      </h3>
      <ul className="flex flex-row flex-wrap px-4 lg:px-24  mt-4 md:mt-10 mb-0 md:mb-2 overflow-hidden">

        {tools.map((item)=> 
        (<li key={item[1]} className="flex flex-col items-center my-2 mx-3 my-3 md:mx-6 ">
          <motion.div className="w-16 h-16 p-2 lg:w-20 lg:h-20 lg:p-3 rounded-full bg-gray-200 border-solid border-2 border-gray-400" animate={animationImage}>
            <img src={item[1]} alt={item[0]}/>
          </motion.div>
          <motion.p className="text-gray-700" animate={animationText}>{item[0]}</motion.p>
        </li>)
         )} 
        {/*NOTE: Since their sizes and spaces are different, the ones below were written one by one.*/}
       
        <li className="flex flex-col items-center my-2 mx-3 md:my-3 md:mx-6">
          <motion.div className="w-16 h-16 py-2 pl-1 pr-3 lg:w-20 lg:h-20 lg:py-3 md:pl-2 lg:pr-4 rounded-full bg-gray-200 border-solid border-2 border-gray-400" animate={animationImage}>
            <img src={postman} alt="Postman"  />
          </motion.div>
          <motion.p className="text-gray-700" animate={animationText}>Postman</motion.p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 md:my-3 md:mx-6 ">
          <motion.div className="w-16 h-16 py-2 pl-3 pr-1 lg:w-20 lg:h-20 lg:py-3 md:pl-4 lg:pr-2 rounded-full bg-gray-200 border-solid border-2 border-gray-400" animate={animationImage}>
            <img src={sass} alt="sass" />
          </motion.div>
          <motion.p className="text-gray-700" animate={animationText}>Sass</motion.p>
        </li>
        <li className="flex flex-col items-center my-2 mx-3 md:my-3 md:mx-6 ">
          <motion.div className="w-16 h-16 py-3 pl-2 pr-4 lg:w-20 lg:h-20 lg:py-4 md:pl-3 lg:pr-5 rounded-full bg-gray-200 border-solid border-2 border-gray-400" animate={animationImage}>
            <img src={vscode} alt="VS Code" />
          </motion.div>
          <motion.p className="text-gray-700" animate={animationText}>VS Code</motion.p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
