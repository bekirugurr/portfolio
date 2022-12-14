import { useEffect } from "react";
import blogGif from "../assets/blog_animation.gif";
import cheackOutGif from "../assets/checkout.gif";
import movieAppGif from "../assets/movieApp.gif";
import popupGeneratorGif from "../assets/popupgenerator_short_gif.gif";
import todoGif from "../assets/todo.gif";
// import flightAPIGif from "../assets/flightAPI.gif";
import { FiFolder } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = ({ setActiveItem }) => {
  const [refWrapper, inViewWrapper] = useInView({ threshold: 0.2 });
  const [refContainer1, inViewContainer1] = useInView({ threshold: 0.2 });
  const [refContainer2, inViewContainer2] = useInView({ threshold: 0.2 });
  const [refContainer3, inViewContainer3] = useInView({ threshold: 0.2 });
  const animationFromLeft1 = useAnimation();
  const animationFromRight1 = useAnimation();
  const animationFromLeft2 = useAnimation();
  const animationFromRight2 = useAnimation();
  const animationFromLeft3 = useAnimation();
  const animationFromRight3 = useAnimation();

  useEffect(() => {
    if (inViewWrapper) {
      setActiveItem(2);
    }

    if (inViewContainer1) {
      animationFromLeft1.start({
        x: 0,
        transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
      });
      animationFromRight1.start({
        x: 0,
        transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
      });
    }
    if (!inViewContainer1) {
      animationFromLeft1.start({ x: "-100vw" });
      animationFromRight1.start({ x: "100vw" });
    }
    if (inViewContainer2) {
      animationFromLeft2.start({
        x: 0,
        transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
      });
      animationFromRight2.start({
        x: 0,
        transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
      });
    }
    if (!inViewContainer2) {
      animationFromLeft2.start({ x: "-100vw" });
      animationFromRight2.start({ x: "100vw" });
    }
    if (inViewContainer3) {
      animationFromLeft3.start({
        x: 0,
        transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
      });
      animationFromRight3.start({
        x: 0,
        transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
      });
    }
    if (!inViewContainer3) {
      animationFromLeft3.start({ x: "-100vw" });
      animationFromRight3.start({ x: "100vw" });
    }
  }, [
    inViewWrapper,
    inViewContainer1,
    inViewContainer2,
    inViewContainer3,
    animationFromLeft1,
    animationFromRight1,
    animationFromLeft2,
    animationFromRight2,
    animationFromLeft3,
    animationFromRight3,
    setActiveItem,
  ]);

  return (
    <div
      ref={refWrapper}
      id="projects"
      className="min-h-screen pt-16 font-body pb-7 bg-fuchsia-200/50"
    >
      <h1 className="text-4xl text-gray-800 mt-4 font-bold font-body text-center ">
        Projects
      </h1>
      <h3 className="text-center text-xl pt-2 md:mx-24 lg:px-6 xl:px-24 xl:mx-9 mx-5 md:mx-10 lg:mx-24 ">Let me help you. My more important projects are <span className="font-bold text-xl text-green-400">Blog App</span>, <span className="font-bold text-xl text-green-400">Popup Generator</span> and <span className="font-bold text-xl text-green-400">Movie App</span></h3>
      <div className="flex flex-col gap-5 mx-auto py-6 md:mx-24 lg:px-6 xl:px-24 xl:mx-9 mx-5 md:mx-10 lg:mx-24 overflow-hidden">
        <div
          ref={refContainer1}
          className="flex flex-col lg:flex-row gap-5 overflow-hidden"
        >
          <motion.div
            className="lg:flex-1 bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-evenly sm:justify-between"
            animate={animationFromLeft1}
          >
            <h2 className="text-2xl font-bold text-center mt-5 sm:mb-1 lg:pr-14">
              Blog App
            </h2>
            <div className="text-green-400 absolute top-4 right-2 left-2 flex flex-row  justify-between sm:justify-end">
              <div className="p-0 m-0 flex">
                <a
                  href="https://github.com/bekirugurr/react-redux-blog-app"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center hover:text-slate-300 sm:px-1 pb-1"
                >
                  <VscGithub className="w-8 h-8" />
                  <p className="text-xs">Frontend</p>
                </a>
                <a
                  href="https://github.com/bekirugurr/blog-API-django"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center hover:text-slate-300 px-1 pb-1 "
                >
                  <VscGithub className="w-8 h-8" />
                  <p className="text-xs">Backend</p>
                </a>
              </div>
              <a
                href="https://react-redux-blogapp.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <HiOutlineExternalLink className="w-8 h-8" />
                <p className="text-xs">Project</p>
              </a>
            </div>
            <p className="mx-3 my-3 px-6 sm:px-3">
              All blog posts display on dashboard and each post's detail display
              on detail page. Adding, deleting and updating, liking blog posts,
              making comments, register, login, logout and updating profile can
              be done. Both frontend (react) and backend (django rest framework)
              were made by me.
            </p>
            <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400">
              <span className="font-bold text-lg px-2 mx-1">React</span>
              <span className="font-bold text-lg px-2 mx-1">Redux</span>
              <span className="font-bold text-lg px-2 mx-1">Material </span>
              <span className="font-bold text-lg px-2 mx-1">Django </span>
            </div>
            <img
              src={blogGif}
              alt="blog animation"
              className=" border-2 border-emerald-500 rounded-lg"
            />
            <FiFolder className="hidden sm:block w-12 h-12 text-green-400 absolute top-4 left-7" />
          </motion.div>
          <motion.div
            className="lg:flex-1 grid grid-cols-1 grid-rows-3 sm:grid-rows-2 sm:grid-cols-2 gap-5  items-center rounded-lg "
            animate={animationFromRight1}
          >
            <div className="sm:col-span-2 h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-0 sm:pb-2 rounded-lg text-white flex flex-col justify-start relative">
              <h2 className="text-2xl font-bold text-center mt-2 mb-1 sm:my-2">
                React Todo App
              </h2>
              <div className="ml-4 mr-1  mt-0.5 mb-3 sm:mt-6 sm:mb-6 md:mt-6 md:mb-12  lg:mt-3  lg:mb-6 flex flex-row gap-2">
                <p className="pl-1 flex flex-row items-center">
                  User can add task , mark tasks as completed or uncompleted and
                  delete them.{" "}
                </p>
                <img
                  src={todoGif}
                  alt="todo"
                  className="h-[9rem] border-2 border-green-400 rounded-lg  "
                />
              </div>
              <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 absolute bottom-1 mt-2">
                <span className="font-bold text-lg px-2 mx-1">Tailwind</span>
                <span className="font-bold text-lg px-2 mx-1">Rest API</span>
                <span className="font-bold text-lg px-2 mx-1">Toastify</span>
              </div>
              <FiFolder className="hidden sm:block w-12 h-12 text-green-400 absolute top-4 left-7" />
              <div className="text-green-400 absolute top-4 right-2 left-2 flex flex-row justify-between sm:justify-end">
                <a
                  href="https://github.com/bekirugurr/React-Todo-App"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center hover:text-slate-300 px-2 pb-1"
                >
                  <VscGithub className="w-8 h-8" />
                </a>
                <a
                  href="https://todo-bkr.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center hover:text-slate-300 px-2 pb-1"
                >
                  <HiOutlineExternalLink className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className=" h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative sm:pb-2 rounded-lg text-white flex flex-col justify-start relative">
              <h2 className="text-2xl font-bold text-center mt-2 mb-1 sm:mt-3 sm:mb-2">
                Film Ticket App
              </h2>
              <p className="ml-8 pl-4 mr-2 mb-1  mt-5 sm:mb-6 sm:mt-4 md:mt-6 lg:mt-0">
                App sells event tickets. Users can view events, available seats,
                claim what they want among them and see the amount they will
                pay.
              </p>
              <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 absolute bottom-2">
                <span className="font-bold text-lg px-2 mx-1">
                  Local Storage
                </span>
              </div>

              <div className="text-green-400 absolute top-1 sm:top-20 left-0 flex flex-col pt-4 gap-2">
                <a
                  href="https://github.com/bekirugurr/Movie-Seat-App"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
                >
                  <VscGithub className="w-8 h-8" />
                </a>
                <a
                  href="https://bugur-movieseat-app.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
                >
                  <HiOutlineExternalLink className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className=" h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 sm:pb-2 rounded-lg text-white flex flex-col justify-start relative">
              <h2 className="text-2xl font-bold text-center  my-2 sm:my-3">
                IOS Calculator
              </h2>
              <p className="mr-8 pr-2 ml-4 mb-1 mt-6 sm:mb-6 sm:mt-5 md:mt-7 lg:mt-2">
                A functional and visual clone of the calculator of an IOS device
                for arithmetic operations.
              </p>
              <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 absolute bottom-2">
                <span className="font-bold text-lg px-2 mx-1">Javascript</span>
                <span className="font-bold text-lg px-2 mx-1">CSS</span>
              </div>

              <div className="text-green-400 absolute top-1 sm:top-20 right-0 flex flex-col pt-4 gap-2">
                <a
                  href="https://github.com/bekirugurr/Ios-Calculator"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
                >
                  <VscGithub className="w-8 h-8" />
                </a>
                <a
                  href="https://bugur-ios-calculator.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
                >
                  <HiOutlineExternalLink className="w-8 h-8" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div
          ref={refContainer2}
          className="flex flex-col-reverse lg:flex-row gap-5 overflow-hidden"
        >
          <motion.div
            className="grid grid-cols-1 grid-rows-3 sm:grid-rows-2 sm:grid-cols-2 gap-5  items-center rounded-lg lg:w-7/12"
            animate={animationFromLeft2}
          >
            <div className=" h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative  pb-2 rounded-lg text-white flex flex-col justify-start relative">
              <h2 className="text-2xl font-bold text-center mt-3 mb-1">
                Portfolio
              </h2>
              <p className="ml-10  mr-1 mb-6 mt-2 md:mt-6 md:mb-0 lg:mb-6 lg:mt-2 ">
                Responsive personel website. Tailwind was used. Framer Motion
                and react_scroll are used for transition. Webhook was used for
                sending message
              </p>
              <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 absolute bottom-2">
                <span className="font-bold text-lg mx-1">Tailwind</span>
                <span className="font-bold text-lg mx-1">Framer</span>
              </div>

              <div className="text-green-400 absolute top-1 sm:top-20 lg:top-22 left-0 flex flex-col pt-5 gap-2">
                <a
                  href="https://github.com/bekirugurr/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
                >
                  <VscGithub className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className="row-span-2 h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 rounded-lg text-white flex flex-col justify-start relative">
              <h2 className="text-2xl font-bold text-center mt-3">
                Checkout Page
              </h2>
              <img
                src={cheackOutGif}
                alt="cheackOutGif"
                className="w-8/12 sm:w-9/12 h-[16rem] sm:h-[12rem] mt-2  border-2 border-green-400 rounded-lg my-2"
              />
              <p className="mr-8 ml-3 pt-2 pb-8">
                A real e-commerce website's checkout page. Cart for buying
                products, and we can increase, decrease the number of products
                or remove the product. By changing a product, my js functions
                calculate the cart total price.
              </p>
              <div className="bottom-0 w-full hidden sm:flex flex-col justify-center items-center text-green-400 absolute bottom-2">
                <span className="font-bold text-lg px-2 mx-1">
                  DOM Manipulation
                </span>
              </div>
              <div className="text-green-400 absolute top-1 sm:top-48 right-0 flex flex-col pt-4 sm:pt-12 md:pt-16 lg:pt-12 gap-2">
                <a
                  href="https://github.com/bekirugurr/Checkout-Page-2"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
                >
                  <VscGithub className="w-8 h-8" />
                </a>
                <a
                  href="https://bugur-checkout.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
                >
                  <HiOutlineExternalLink className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className=" h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative pb-2 rounded-lg text-white flex flex-col justify-start relative">
              <h2 className="text-2xl font-bold text-center mt-3 ">
                Lottery App
              </h2>
              <p className="ml-11 mr-1 mb-6 mt-2 md:mt-6 md:mb-0 lg:mb-6 lg:mt-2 ">
                Generates max 8 lottery tickets at once. Each ticket contains
                three sets of numbers: ordinary six, joker and superstar, which
                are produced according to a certain rule.
              </p>
              <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 absolute bottom-2">
                <span className="font-bold text-lg px-2 mx-1">Javascript</span>
                <span className="font-bold text-lg px-2 mx-1">CSS</span>
              </div>

              <div className="text-green-400 absolute top-1 sm:top-14 left-0 flex flex-col pt-4 gap-2">
                <a
                  href="https://github.com/bekirugurr/Lucky-Numbers-Generator"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
                >
                  <VscGithub className="w-8 h-8" />
                </a>
                <a
                  href="https://bekirugurr.github.io/Lucky-Numbers-Generator/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
                >
                  <HiOutlineExternalLink className="w-8 h-8" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-evenly sm:justify-between lg:w-6/12 "
            animate={animationFromRight2}
          >
            <h2 className="text-2xl font-bold text-center my-3 lg:pr-4">
              Popup Generator
            </h2>
            <div className="text-green-400 absolute top-4 right-2 left-2 flex flex-row justify-between sm:justify-end">
              <a
                href="https://github.com/bekirugurr/popup-generator"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                href="https://popup-generator.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
              >
                <HiOutlineExternalLink className="w-8 h-8" />
              </a>
            </div>
            <p className="mx-3 my-2 px-3">
              User can get a fully customized modal without coding to use his
              website. User can select a modal from 12, set its color, size and
              position, change its text and image. User sets behavioural events
              for popup to appear. User copies and pastes scripts to a tailwind
              installed website.
            </p>
            <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 mb-1">
              <span className="font-bold text-lg px-1 mx-1">Typescript</span>
              <span className="font-bold text-lg px-1 mx-1">React</span>
              <span className="font-bold text-lg px-1 mx-1">Nextjs</span>
              <span className="font-bold text-lg px-1 mx-1">Redux</span>
              <span className="font-bold text-lg px-1 mx-1">Tailwind</span>
            </div>
            <img
              src={popupGeneratorGif}
              alt="popupgenerator gif"
              className=" border-2 border-green-400 rounded-lg h-72"
            />
            <FiFolder className="hidden sm:block w-12 h-12 text-green-400 absolute top-4 left-7" />
          </motion.div>
        </div>

        <div
          ref={refContainer3}
          className="flex flex-col lg:flex-row gap-5 overflow-hidden"
        >
          <motion.div
            className="lg:flex-1 bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-between  lg:w-5/12"
            animate={animationFromLeft3}
          >
            <h2 className="text-2xl font-bold text-center mt-6 mb-2 ">
              Movie App
            </h2>
            <p className="mx-3 my-2 px-3">
            Displays film details, posters and fragmans by using the tmdb api. There is a search feature according to the entered word. In addition, Firebase was used for authentication. Anonymous user restricted to access to some features. React toastify was used for notifications. 
            </p>
            <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 mb-1">
              <span className="font-bold text-lg px-1 mx-1">ContextAPI</span>
              <span className="font-bold text-lg px-1 mx-1">Bootstrap</span>
              <span className="font-bold text-lg px-1 mx-1">Firebase</span>
              <span className="font-bold text-lg px-1 mx-1">Formik</span>
            </div>
            <img
              src={movieAppGif}
              alt="movie app"
              className=" border-2 border-green-400 rounded-lg"
            />
            <FiFolder className="hidden sm:block w-12 h-12 text-green-400 absolute top-4 left-7" />
            <div className="text-green-400 absolute top-4 right-2 left-2 flex flex-row justify-between sm:justify-end">
              <a
                href="https://github.com/bekirugurr/firebase-movie-app"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                href="https://bugur-firebase-movie-search-app.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
              >
                <HiOutlineExternalLink className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
          {/* <motion.div 
        className="lg:flex-1 bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-between"
        animate={animationFromLeft3}
        >
          <h2 className="text-2xl font-bold text-center mt-6 mb-2 lg:pl-2">
            Flight Reservation API
          </h2>
          <p className="mx-3 my-2 px-3">
          Authenticated users can create, update, delete or read reservations. Only admin users can add, update, delete or read flights. While admin user can see all reservations, authenticated ordinay users can see the reservations that they made. While admin users can see flights with their reservations others can only flight information. Also, admin user can see past and future flights, ordinary users can only see the next flights from now. Nested serializers are used.
          </p>
          <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 mb-1">
            <span className="font-bold text-lg px-2 mx-1">Django Rest Framework</span>
            <span className="font-bold text-lg px-2 mx-1">PostgreSQL</span>
          </div>
          <img
            src={flightAPIGif}
            alt="flight API"
            className=" border-2 border-green-400 rounded-lg"
          />
          <FiFolder className="hidden sm:block w-12 h-12 text-green-400 absolute top-4 left-7" />
          <div className="text-green-400 absolute right-0 top-6 sm:top-4 sm:right-2 flex">
            <a
              href="https://github.com/bekirugurr/flight-reservation-app-django"
              target="_blank"   rel="noreferrer"
              className="flex flex-col items-center hover:text-slate-300 px-2 sm:px-3 pb-1"
            >
              <VscGithub className="w-8 h-8" />
            </a>
          </div>
        </motion.div> */}
          <motion.div
            className="lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5  items-center rounded-lg lg:w-7/12"
            animate={animationFromRight3}
          >
            <div className="sm:col-span-2 h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-start relative">
              <h2 className="text-2xl font-bold text-center my-3">
                Flight API
              </h2>
              <p className="mx-3 px-3 mt-4 mb-6">
                Users can CRUD reservations. Admin users can CRUD flights. Admin
                user can see all reservations, Ordinay users can see the
                reservations that they made. Admin user can see past and future
                flights, ordinary users can only see the next flights from now.
              </p>
              <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 absolute bottom-2">
                <span className="font-bold text-lg px-2 mx-1">
                  Django Rest Framework
                </span>
                <span className="font-bold text-lg px-2 mx-1">PostgreSQL</span>
              </div>
              <FiFolder className="hidden sm:block w-12 h-12 text-green-400 absolute top-4 left-7" />
              <div className="text-green-400 absolute  top-4 right-2 flex">
                <a
                  href="https://github.com/bekirugurr/flight-reservation-app-django"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
                >
                  <VscGithub className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className=" h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative  pb-2 rounded-lg text-white flex flex-col justify-start relative">
              <h2 className="text-2xl font-bold text-center mt-2 mb-1">
                Quiz API
              </h2>
              <p className="ml-10  mr-1 mb-6 ">
                Generates quizzes. Answers under questions under quizzes under
                categories. Exam, questions and answers can be created together
                via nested admin panel.
              </p>
              <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 absolute bottom-2">
                <span className="font-bold text-lg px-2 mx-1">
                  dj rest auth
                </span>
              </div>

              <div className="text-green-400 absolute top-1 sm:top-24 left-0 flex flex-col pt-4 gap-2">
                <a
                  href="https://github.com/bekirugurr/quiz-app-django"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
                >
                  <VscGithub className="w-8 h-8" />
                </a>
              </div>
            </div>
            {/* <div className=" h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative  pb-2 rounded-lg text-white flex flex-col justify-start relative">
            <h2 className="text-2xl font-bold text-center my-3">
              Number Game
            </h2>
            <p className="ml-10  mr-1 mb-6 ">
            Keeps a number between 1 and 100. User has 7 rights to. When user is wrong, app narrows range of numbers based on last guess and gives notifications about remaining rights. 
          </p>
            <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 absolute bottom-2">
              <span className="font-bold text-lg px-2 mx-1">Javascript</span>
              <span className="font-bold text-lg px-2 mx-1">CSS</span>
            </div>

            <div className="text-green-400 absolute top-1 sm:top-20 left-0 flex flex-col pt-4 gap-2">
              <a
                href="https://github.com/bekirugurr/Find-the-Number-Game"
                target="_blank"   rel="noreferrer"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                href="https://bekirugurr.github.io/Find-the-Number-Game/"
                target="_blank"   rel="noreferrer"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <HiOutlineExternalLink className="w-8 h-8" />
              </a>
            </div>
          </div> */}
            <div className=" h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-start relative">
              <h2 className="text-2xl font-bold text-center my-3 px-2">
                Django Blog
              </h2>
              <p className="mr-8 mr-4 ml-6 mb-6">
                Adding, deleting and updating blog posts, register, login and
                updating profile can be done. django was used{" "}
                <span className="hidden">
                  {" "}
                  for frontend (django templates) and backend.{" "}
                </span>
              </p>
              <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 absolute bottom-2">
                <span className="font-bold text-lg px-2 mx-1">Django</span>
                <span className="font-bold text-lg px-2 mx-1">Bootstrap</span>
              </div>

              <div className="text-green-400 absolute top-1 sm:top-20 right-0 flex flex-col pt-4 gap-2">
                <a
                  href="https://github.com/bekirugurr/blog-app-django"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
                >
                  <VscGithub className="w-8 h-8" />
                </a>
                <a
                  href="https://bekirugurr.pythonanywhere.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
                >
                  <HiOutlineExternalLink className="w-8 h-8" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
