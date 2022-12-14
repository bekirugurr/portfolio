import { useState, useId } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
// import resume from '../assets/Bekir_Ugur_Resume.pdf'

const Navbar = ({ activeItem, setActiveItem }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const id = useId();
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const onClickItem = (index) => {
    setActiveItem(index);
    setNavbarOpen(false);
  };

  return (
    <nav className="fixed top-0 flex flex-wrap items-center justify-between px-1 md:px-2 bg-gray-200  mb-1 w-full opacity-70 z-50 font-body">
      <div className=" px-6 mx-auto flex flex-wrap items-center justify-between w-full">
        <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
          <Link
            activeClass="active"
            smooth
            spy
            to="home"
            className=" mr-4 pl-3  inline-block  items-center text-3xl font-normal leading-relaxed cursor-pointer"
          >
            <span className="text-green-400">B </span>Ugur
          </Link>
          <button
            className="text-slate-900 cursor-pointer text-xl leading-none px-2 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FiMenu className="text-2xl" />
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col md:flex-row list-none md:ml-auto">
            {["home", "skills", "projects", "contact"].map((item, index) => (
              <li
                key={`${id}-${index}`}
                className="nav-item py-0 cursor-pointer"
              >
                {activeItem === index ? (
                  <Link
                    activeClass="active"
                    smooth
                    spy
                    to={item}
                    className="text-gray-900 p-4 px-5 flex items-center text-lg font-medium leading-snug text-green-700  pb-3 border-b-2 border-green-700 flex flex-col"
                    onClick={() => onClickItem(index)}
                  >
                    {capitalize(item)}
                  </Link>
                ) : (
                  <Link
                    activeClass="active"
                    smooth
                    spy
                    to={item}
                    className="text-gray-900 p-4 px-5 flex items-center text-lg font-medium leading-snug hover:text-green-700  hover:pb-3 hover:border-b-2 hover:border-green-700 flex flex-col"
                    onClick={() => onClickItem(index)}
                  >
                    {capitalize(item)}
                  </Link>
                )}
              </li>
            ))}
{/*             <li
              className="text-gray-900 flex justify-center items-center text-base font-normal leading-snug pl-3"
              onClick={() => setNavbarOpen(false)}
            >
              <button className="rounded-full text-white bg-green-500 px-3 py-1.5 hover:outline hover:outline-2 hover:outline-offset-[-3px] hover:text-green-500 hover:bg-gray-200/75">
                <a href={resume} download>Resume</a>
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
