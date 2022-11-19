import javascript from "../assets/javascript.png";
import typeScript from "../assets/typescript.png";
import react from "../assets/reactjs.png";
import next from "../assets/nextjs.svg";
import django from "../assets/django2.png";
import html from "../assets/html5.png";
import python from "../assets/python.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap2.png";
import css from "../assets/css3.png";
import sass from "../assets/sass.png";
import psql from "../assets/postgres.png";
import jest from "../assets/jest.png";
import jQuery from "../assets/jQuery.png";
import mui from "../assets/mui.png";

const Background = () => {

  return (
    <div className="fixed -z-50 h-screen w-screen ">
      <img
        src={javascript}
        alt="Javascript"
        className={`absolute w-14 h-14 top-[97%] left-[20%] animate-js-roll`}
      />
      <img
        src={javascript}
        alt="Javascript"
        className={`absolute w-14 h-14 top-[-14%] left-[14%]  animate-js2-roll`}
      />

      <img
        src={typeScript}
        alt="typeScript"
        className={`absolute w-14 h-14  top-[75%] left-[100%] animate-ts-roll`}
      />

      <img
        src={react}
        alt="react"
        className={`absolute w-14 h-14 top-[-7%] left-[20%] animate-react-roll`}
      />
      <img
        src={react}
        alt="react"
        className={`absolute w-14 h-14 top-[12%] right-[-14%] animate-react2-roll `}
      />
      <img
        src={next}
        alt="nextjs"
        className={`absolute w-14 h-14 bottom-[4%] right-[-14%] animate-next-roll`}
      />

      <img
        src={html}
        alt="html"
        className={`absolute w-14 h-14 top-[60%] left-[-14%] animate-html-roll`}
      />

      <img
        src={django}
        alt="django"
        className={`absolute w-14 h-14  top-[45%] left-[98%] animate-django-roll`}
      />

      <img
        src={typeScript}
        alt="typeScript"
        className={`absolute w-14 h-14  top-[-10%] left-[0%] animate-ts2-roll`}
      />

      <img
        src={python}
        alt="python"
        className={`absolute w-14 h-14 top-[30%] left-[-13%] animate-python-roll`}
      />

      <img
        src={python}
        alt="python"
        className={`absolute w-14 h-14 top-[25%] right-[-14%] animate-python2-roll`}
      />

      <img
        src={redux}
        alt="redux"
        className={`absolute w-14 h-14  top-[15%] left-[100%] animate-redux-roll`}
      />

      <img
        src={tailwind}
        alt="tailwind"
        className={`absolute w-14 h-14  top-[-13%] left-[80%] animate-tailwind-roll`}
      />

      <img
        src={tailwind}
        alt="tailwind"
        className={`absolute w-14 h-14  bottom-[30%] left-[-14%]  animate-tailwind2-roll`}
      />

      <img
        src={bootstrap}
        alt="bootstrap"
        className={`absolute w-14 h-14 top-[100%] left-[80%] animate-bootstrap-roll`}
      />

      <img
        src={css}
        alt="css3"
        className={`absolute w-14 h-14 top-[-9%] left-[30%] animate-css-roll`}
      />

      <img
        src={sass}
        alt="sass"
        className={`absolute w-14 h-14 top-[80%] left-[-14%] animate-sass-roll`}
      />

      <img
        src={psql}
        alt="postgreSQL"
        className={`absolute w-14 h-14 top-[50%] left-[-14%] animate-psql-roll`}
      />

      <img
        src={jQuery}
        alt="jQuery"
        className={`absolute w-14 h-14 top-[-9%] left-[15%] animate-jQuery-roll`}
      />

      <img
        src={mui}
        alt="Material UI"
        className={`absolute w-14 h-14 top-[35%] left-[-14%] animate-mui-roll`}
      />

      <img
        src={jest}
        alt="jest"
        className={`absolute w-14 h-14 top-[-9%] left-[70%] animate-jest-roll`}
      />
    </div>
  );
};

export default Background;
