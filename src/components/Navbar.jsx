import { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
      <nav className="relative flex flex-wrap items-center justify-between px-2 bg-gray-100  mb-3">
        <div className=" px-6 mx-auto flex flex-wrap items-center justify-between w-full">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-3xl font-normal leading-relaxed inline-block mr-4 pl-3 py-2 whitespace-nowrap"
              href="#pablo"
            >
              <span className="text-green-400">B </span>Ugur
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-2 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item py-1 ">
                <a
                  className="text-gray-600 px-2 flex items-center text-sm uppercase font-medium leading-snug hover:text-black hover:bg-red-600 py"
                  href="#pablo"
                >
                  <span className="mx-1">Home</span>
                </a>
              </li>
              <li className="nav-item py-1 ">
                <a
                  className="text-gray-600 px-2 flex items-center text-sm uppercase font-medium leading-snug hover:text-black"
                  href="#pablo"
                >
                  <span className="mx-1">Skills</span>
                </a>
              </li>
              <li className="nav-item py-1 ">
                <a
                  className="text-gray-600 px-2 flex items-center text-sm uppercase font-medium leading-snug hover:text-black"
                  href="#pablo"
                >
                  <span className="mx-1">Projects</span>
                </a>
              </li>
              <li className="nav-item py-1 ">
                <a
                  className="text-gray-600 px-2 flex items-center text-sm uppercase font-medium leading-snug hover:text-black"
                  href="#pablo"
                >
                  <span className="mx-1">About</span>
                </a>
              </li>
              <li className="nav-item py-1 ">
                <a
                  className="text-gray-600 px-2 flex items-center text-sm uppercase font-medium leading-snug  hover:text-black"
                  href="#pablo"
                >
                  <span className="mx-1">Certificates</span>
                </a>
              </li>
              <li className="nav-item py-1 ">
                <a
                  className="text-gray-600 px-2 flex items-center text-sm uppercase font-medium leading-snug  hover:text-black"
                  href="#pablo"
                >
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
