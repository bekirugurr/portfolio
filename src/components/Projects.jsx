import React from "react";
import blogAnimation from "../assets/blog_animation.gif";
import { FiFolder } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";
import { HiOutlineExternalLink } from "react-icons/hi";

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen pt-16  font-body">
      <h1 className="text-4xl text-gray-800 mt-4 mx-7 md:mx-4 lg:mx-24 font-bold font-body">
        Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 gap-5 mx-auto py-12 lg:px-6 xl:px-24 xl:mx-9 mx-5 md:mx-10 lg:mx-0">
        <div className="bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-center my-6">Blog App</h2>
          <p className="mx-3 my-2 px-3">
            All blog posts display on dashboard and each post's detail display
            on detail page. Adding, deleting and updating, liking blog posts,
            making comments, register, login, logout and updating profile can be
            done. Both frontend (react) and backend (django rest framework) were
            made by me.
          </p>
          <div className="bottom-0 w-full flex justify-center text-green-400">
            <span className="font-bold text-lg px-2 mx-1">React</span>
            <span className="font-bold text-lg px-2 mx-1">Redux</span>
            <span className="font-bold text-lg px-2 mx-1">Material UI</span>
            <span className="font-bold text-lg px-2 mx-1">Django Rest API</span>
          </div>
          <img
            src={blogAnimation}
            alt="blog animation"
            className=" border-2 border-emerald-500 rounded-lg"
          />
          <FiFolder className="w-12 h-12 text-green-400 absolute top-4 left-7" />
          <div className="text-green-400 absolute top-4 right-2 flex">
            <a
              href="https://github.com/bekirugurr/react-redux-blog-app"
              target="_blank"
              className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
            >
              <VscGithub className="w-8 h-8" />
              <p className="text-xs">Front</p>
            </a>
            <a
              href="https://react-redux-blogapp.vercel.app/"
              target="_blank"
              className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
            >
              <HiOutlineExternalLink className="w-8 h-8" />
              <p className="text-xs">Project</p>
            </a>
            <a
              href="https://github.com/bekirugurr/blog-API-django"
              target="_blank"
              className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
            >
              <VscGithub className="w-8 h-8" />
              <p className="text-xs">Back</p>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5  items-center rounded-lg ">
          <div className="col-span-2 h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-center my-3">Portfolio</h2>
            <div className="bottom-0 w-full flex justify-center text-green-400 ">
              <span className="font-bold text-lg px-2 mx-1">React</span>
              <span className="font-bold text-lg px-2 mx-1">Redux</span>
            </div>
            <FiFolder className="w-12 h-12 text-green-400 absolute top-4 left-7" />
            <div className="text-green-400 absolute  top-4 right-2 flex">
              <a
                href=""
                target="_blank"
                className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                href=""
                target="_blank"
                className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
              >
                <HiOutlineExternalLink className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className=" h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-center my-3">
              Movie Ticket App
            </h2>
            <div className="bottom-0 w-full flex justify-center text-green-400 ">
              <span className="font-bold text-lg px-2 mx-1">React</span>
              <span className="font-bold text-lg px-2 mx-1">Redux</span>
            </div>

            <div className="text-green-400 absolute top-20 left-0 flex flex-col pt-4 gap-2">
              <a
                href=""
                target="_blank"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                href=""
                target="_blank"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <HiOutlineExternalLink className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className=" h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-center my-3">
              IOS Calculator
            </h2>
            <div className="bottom-0 w-full flex justify-center text-green-400 ">
              <span className="font-bold text-lg px-2 mx-1">React</span>
              <span className="font-bold text-lg px-2 mx-1">Redux</span>
            </div>

            <div className="text-green-400 absolute top-20 right-0 flex flex-col pt-4 gap-2">
              <a
                href=""
                target="_blank"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                href=""
                target="_blank"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <HiOutlineExternalLink className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-start-2 lg:col-end-3  h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-center my-3">
            React Movie App
          </h2>
          <div className="bottom-0 w-full flex justify-center text-green-400 ">
            <span className="font-bold text-lg px-2 mx-1">React</span>
            <span className="font-bold text-lg px-2 mx-1">Redux</span>
          </div>
          <FiFolder className="w-12 h-12 text-green-400 absolute top-4 left-7" />
          <div className="text-green-400 absolute  top-4 right-2 flex">
            <a
              href=""
              target="_blank"
              className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
            >
              <VscGithub className="w-8 h-8" />
            </a>
            <a
              href=""
              target="_blank"
              className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
            >
              <HiOutlineExternalLink className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 lg:row-start-2 lg:row-end-3  w-full h-full rounded-lg">
          <div className=" h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-center my-3">
              Lottary Ticket App
            </h2>
            <div className="bottom-0 w-full flex justify-center text-green-400 ">
              <span className="font-bold text-lg px-2 mx-1">React</span>
              <span className="font-bold text-lg px-2 mx-1">Redux</span>
            </div>

            <div className="text-green-400 absolute top-20 left-0 flex flex-col pt-4 gap-2">
              <a
                href=""
                target="_blank"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                href=""
                target="_blank"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <HiOutlineExternalLink className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="row-span-2 h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-center my-3">
              Checkout Page
            </h2>
            <div className="bottom-0 w-full flex justify-center text-green-400 ">
              <span className="font-bold text-lg px-2 mx-1">React</span>
              <span className="font-bold text-lg px-2 mx-1">Redux</span>
            </div>

            <div className="text-green-400 absolute top-48 right-0 flex flex-col pt-8 md:pt-12 lg:pt-8 gap-2">
              <a
                href=""
                target="_blank"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                href=""
                target="_blank"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <HiOutlineExternalLink className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className=" h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-center my-3">To Do App</h2>
            <div className="bottom-0 w-full flex justify-center text-green-400 ">
              <span className="font-bold text-lg px-2 mx-1">React</span>
              <span className="font-bold text-lg px-2 mx-1">Redux</span>
            </div>

            <div className="text-green-400 absolute top-20 left-0 flex flex-col pt-4 gap-2">
              <a
                href=""
                target="_blank"
                className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                href=""
                target="_blank"
                className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
              >
                <HiOutlineExternalLink className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-center my-6">
            Flight Reservation API
          </h2>
          <p className="mx-3 my-2 px-3">
            All blog posts display on dashboard and each post's detail display
            on detail page. Adding, deleting and updating, liking blog posts,
            making comments, register, login, logout and updating profile can be
            done. Both frontend (react) and backend (django rest framework) were
            made by me.
          </p>
          <div className="bottom-0 w-full flex justify-center text-green-400">
            <span className="font-bold text-lg px-2 mx-1">React</span>
            <span className="font-bold text-lg px-2 mx-1">Redux</span>
            <span className="font-bold text-lg px-2 mx-1">Material UI</span>
            <span className="font-bold text-lg px-2 mx-1">Django Rest API</span>
          </div>
          <img
            src={blogAnimation}
            alt="blog animation"
            className=" border-2 border-emerald-500 rounded-lg"
          />
          <FiFolder className="w-12 h-12 text-green-400 absolute top-4 left-7" />
          <div className="text-green-400 absolute top-4 right-2 flex">
            <a
              href="https://github.com/bekirugurr/react-redux-blog-app"
              target="_blank"
              className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
            >
              <VscGithub className="w-8 h-8" />
            </a>
            <a
              href="https://react-redux-blogapp.vercel.app/"
              target="_blank"
              className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
            >
              <HiOutlineExternalLink className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5  items-center rounded-lg ">
          <div className="col-span-2 h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-center my-3">Quiz API</h2>
            <div className="bottom-0 w-full flex justify-center text-green-400 ">
              <span className="font-bold text-lg px-2 mx-1">React</span>
              <span className="font-bold text-lg px-2 mx-1">Redux</span>
            </div>
            <FiFolder className="w-12 h-12 text-green-400 absolute top-4 left-7" />
            <div className="text-green-400 absolute  top-4 right-2 flex">
              <a
                href=""
                target="_blank"
                className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                href=""
                target="_blank"
                className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
              >
                <HiOutlineExternalLink className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className=" h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-center my-3">
              Find Number Game
            </h2>
            <div className="bottom-0 w-full flex justify-center text-green-400 ">
              <span className="font-bold text-lg px-2 mx-1">React</span>
              <span className="font-bold text-lg px-2 mx-1">Redux</span>
            </div>

            <div className="text-green-400 absolute top-20 left-0 flex flex-col pt-4 gap-2">
              <a
                href=""
                target="_blank"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                href=""
                target="_blank"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <HiOutlineExternalLink className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className=" h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-center my-3 px-2">
              Blog App with Django Templates
            </h2>
            <div className="bottom-0 w-full flex justify-center text-green-400 ">
              <span className="font-bold text-lg px-2 mx-1">React</span>
              <span className="font-bold text-lg px-2 mx-1">Redux</span>
            </div>

            <div className="text-green-400 absolute top-20 right-0 flex flex-col pt-4 gap-2">
              <a
                href=""
                target="_blank"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                href=""
                target="_blank"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <HiOutlineExternalLink className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
