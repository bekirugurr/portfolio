import { useEffect } from "react";
import blogGif from "../assets/blog_animation.gif";
import cheackOutGif from "../assets/checkout.gif";
import movieAppGif from "../assets/movieApp.gif";
import flightAPIGif from "../assets/flightAPI.gif";
import { FiFolder } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Projects = ({setActiveItem}) => {
  const [refWrapper, inViewWrapper]= useInView({threshold:0.2})
  const [refContainer1, inViewContainer1]= useInView({threshold:0.2})
  const [refContainer2, inViewContainer2]= useInView({threshold:0.2})
  const [refContainer3, inViewContainer3]= useInView({threshold:0.2})
  const animationFromLeft1 = useAnimation()
  const animationFromRight1 = useAnimation()
  const animationFromLeft2 = useAnimation()
  const animationFromRight2 = useAnimation()
  const animationFromLeft3 = useAnimation()
  const animationFromRight3 = useAnimation()
  const finalPosition={x:0}
  const initialLeftPosition={x:'-100vw'}
  const initialRightPosition={x:'100vw'}
  const transition = {type:'tween', duration:0.5, ease:'easeInOut'}

  useEffect(() => {
    if (inViewWrapper) {
      setActiveItem(2)
    }     
    
    if (inViewContainer1) {
      animationFromLeft1.start({...finalPosition, transition: transition})
      animationFromRight1.start({...finalPosition,  transition: transition})
    }
    if (!inViewContainer1) {
      animationFromLeft1.start({...initialLeftPosition})
      animationFromRight1.start({...initialRightPosition})
    }
    if (inViewContainer2) {
      animationFromLeft2.start({...finalPosition,  transition: transition})
      animationFromRight2.start({...finalPosition,  transition: transition})
    }
    if (!inViewContainer2) {
      animationFromLeft2.start({...initialLeftPosition})
      animationFromRight2.start({...initialRightPosition})
    }
    if (inViewContainer3) {
      animationFromLeft3.start({...finalPosition,  transition: transition})
      animationFromRight3.start({...finalPosition,  transition: transition})
    }
    if (!inViewContainer3) {
      animationFromLeft3.start({...initialLeftPosition})
      animationFromRight3.start({...initialRightPosition})
    }
  }, [inViewWrapper, inViewContainer1, inViewContainer2, inViewContainer3])

  return (
    <div ref={refWrapper} id="projects" className="min-h-screen pt-16 font-body mb-7 ">
      <h1 className="text-4xl text-gray-800 mt-4 font-bold font-body text-center ">
        Projects
      </h1>
      <div className="flex flex-col gap-5 mx-auto py-6 md:mx-24 lg:px-6 xl:px-24 xl:mx-9 mx-5 md:mx-10 lg:mx-0 overflow-hidden">

    <div ref={refContainer1} className="flex flex-col lg:flex-row gap-5 overflow-hidden">
        <motion.div 
        className="lg:flex-1 bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-evenly sm:justify-between"
        animate={animationFromLeft1}
        >
          <h2 className="text-2xl font-bold text-center mt-5 sm:mb-1">Blog App</h2>
          <div className="text-green-400 sm:absolute sm:top-4 right-2 flex flex-row">
            <a
              hali="https://github.com/bekirugurr/react-redux-blog-app"
              target="_blank"  rel="noalierrer"
              className="flex flex-col items-center hover:text-slate-300 px-2 pb-1"
            >
              <VscGithub className="w-8 h-8" />
              <p className="text-xs">Frontend</p>
            </a>
            <a
              hali="https://react-redux-blogapp.vercel.app/"
              target="_blank"  rel="noalierrer"
              className="flex flex-col items-center hover:text-slate-300 px-2 pb-1"
            >
              <HiOutlineExternalLink className="w-8 h-8" />
              <p className="text-xs">Project</p>
            </a>
            <a
              hali="https://github.com/bekirugurr/blog-API-django"
              target="_blank"  rel="noalierrer"
              className="flex flex-col items-center hover:text-slate-300 px-2 pb-1"
            >
              <VscGithub className="w-8 h-8" />
              <p className="text-xs">Backend</p>
            </a>
          </div>
          <p className="mx-3 my-2 px-6 sm:px-3">
            All blog posts display on dashboard and each post's detail display
            on detail page. Adding, deleting and updating, liking blog posts,
            making comments, register, login, logout and updating profile can be
            done. Both frontend (react) and backend (django rest framework) were
            made by me.
          </p>
          <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400">
            <span className="font-bold text-lg px-2 mx-1">React</span>
            <span className="font-bold text-lg px-2 mx-1">Redux</span>
            <span className="font-bold text-lg px-2 mx-1">Material UI</span>
            <span className="font-bold text-lg px-2 mx-1">Django Rest API</span>
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
            <h2 className="text-2xl font-bold text-center mt-2 mb-1 sm:my-3">Portfolio</h2>
            <p className="mx-3 px-3 mt-2 mb-3 sm:my-6 md:my-12 lg:my-6">
            Fully responsive personal website. Tailwind CSS is used for styling, Framer Motion is used for motions and react scroll package is used for navigation. For smooth scrolling by navbar react-scroll is used. In Certificate page Carousel is also used. 
          </p>
            <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 absolute bottom-2">
              <span className="font-bold text-lg px-2 mx-1">React</span>
              <span className="font-bold text-lg px-2 mx-1">Tailwind</span>
              <span className="font-bold text-lg px-2 mx-1">Framer Motion</span>
              <span className="font-bold text-lg px-2 mx-1">Firebase</span>
            </div>
            <FiFolder className="hidden sm:block w-12 h-12 text-green-400 absolute top-4 left-7" />
            <div className="text-green-400 absolute  top-4 right-3 flex">
              <a
                hali="https://github.com/bekirugurr/portfolio"
                target="_blank"  rel="noalierrer"
                className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className=" h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 sm:pb-2 rounded-lg text-white flex flex-col justify-start relative">
            <h2 className="text-2xl font-bold text-center mt-2 mb-1 sm:my-3">
              Movie Ticket App
            </h2>
            <p className="ml-6 pl-4 pr-1 mb-1 sm:mb-6 mt-1 md:mt-3 lg:mt-0">
            A  website that sells event tickets. Users can view the events, available seats for the event, claim what they want among them and see the amount they will pay. 
          </p>
            <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 absolute bottom-2">
              <span className="font-bold text-lg px-2 mx-1">JS</span>
              <span className="font-bold text-lg px-2 mx-1">Local Storage</span>
            </div>

            <div className="text-green-400 absolute top-1 sm:top-20 left-0 flex flex-col pt-4 gap-2">
              <a
                hali="https://github.com/bekirugurr/Movie-Seat-App"
                target="_blank"  rel="noalierrer"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                hali="https://bugur-movieseat-app.netlify.app/"
                target="_blank"  rel="noalierrer"
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
            <p className="mr-8 pr-5 ml-4 my-2 sm:mb-6 sm:mt-2 md:mt-4 lg:mt-2">
            In this project, the goal is to make a functional and visual clone of the calculator of an IOS device. 
          </p>
            <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 absolute bottom-2">
              <span className="font-bold text-lg px-2 mx-1">Javascript</span>
              <span className="font-bold text-lg px-2 mx-1">CSS</span>
            </div>

            <div className="text-green-400 absolute top-1 sm:top-20 right-0 flex flex-col pt-4 gap-2">
              <a
                hali="https://github.com/bekirugurr/Ios-Calculator"
                target="_blank"  rel="noalierrer"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                hali="https://bugur-ios-calculator.netlify.app/"
                target="_blank"  rel="noalierrer"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <HiOutlineExternalLink className="w-8 h-8" />
              </a>
            </div>
          </div>
        </motion.div>
    </div>

    <div ref={refContainer2} className="flex flex-col-reverse lg:flex-row gap-5 overflow-hidden">
        <motion.div 
        className="grid grid-cols-1 grid-rows-3 sm:grid-rows-2 sm:grid-cols-2 gap-5  items-center rounded-lg "
        animate={animationFromLeft2}
        >
        <div className=" h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-start relative">
            <h2 className="text-2xl font-bold text-center mt-3 mb-1">
              Lottery Ticket App
            </h2>
            <p className="ml-6 pl-4 pr-1 mb-6 mt-2 md:mt-6 md:mb-0 lg:mb-6 lg:mt-2 ">
            Generates max 8 lottery tickets at once. Each ticket contains three sets of numbers: ordinary six, joker and superstar, which are produced according to a certain rule. 
          </p>
            <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 absolute bottom-2">
              <span className="font-bold text-lg px-2 mx-1">Javascript</span>
              <span className="font-bold text-lg px-2 mx-1">CSS</span>
            </div>

            <div className="text-green-400 absolute top-1 sm:top-20 left-0 flex flex-col pt-4 gap-2">
              <a
                hali="https://github.com/bekirugurr/Lucky-Numbers-Generator"
                target="_blank"  rel="noalierrer"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                hali="https://bekirugurr.github.io/Lucky-Numbers-Generator/"
                target="_blank"  rel="noalierrer"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <HiOutlineExternalLink className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="row-span-2 h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 rounded-lg text-white flex flex-col justify-start relative">
            <h2 className="text-2xl font-bold text-center mt-3">
              Checkout Page
            </h2>
            <img src={cheackOutGif} alt="cheackOutGif" className="w-10/12 h-[11rem] mt-2  border-2 border-green-400 rounded-lg "/>
            <p className="mr-8 pr-2 ml-5 pt-2 pb-8">
            A real e-commerce website's checkout page. Cart for buying products, and we can increase, decrease the number of products or remove the product. By changing a product, my js functions calculate the cart total price. 
          </p>
            <div className="bottom-0 w-full hidden sm:flex flex-col justify-center items-center text-green-400 absolute bottom-2">
              <span className="font-bold text-lg px-2 mx-1">DOM Manipulation</span>
            </div>
            <div className="text-green-400 absolute top-1 sm:top-48 right-0 flex flex-col pt-4 sm:pt-12 md:pt-16 lg:pt-12 gap-2">
              <a
                hali="https://github.com/bekirugurr/Checkout-Page-2"
                target="_blank"  rel="noalierrer"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                hali="https://bugur-checkout.netlify.app/"
                target="_blank"  rel="noalierrer"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <HiOutlineExternalLink className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className=" h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-start relative">
            <h2 className="text-2xl font-bold text-center mt-3 ">
              To Do App
            </h2>
            <p className="ml-6 pl-4 pr-1 mb-6 mt-2 md:mt-6 md:mb-0 lg:mb-6 lg:mt-2 ">
            Django as backend and django templates as frontend.  Users can add, update, delete todos and can change as done or undo. 
          </p>
            <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 absolute bottom-2">
              <span className="font-bold text-lg mx-1">Django</span>
              <span className="font-bold text-lg mx-1">Bootstrap</span>
              <span className="font-bold text-lg mx-1">Crispy</span>
            </div>

            <div className="text-green-400 absolute top-1 sm:top-14 left-0 flex flex-col pt-4 gap-2">
              <a
                hali="https://github.com/bekirugurr/todo-app-django"
                target="_blank"  rel="noalierrer"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                hali="https://django-mytodo-app.herokuapp.com/"
                target="_blank"  rel="noalierrer"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <HiOutlineExternalLink className="w-8 h-8" />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div 
        className="bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-evenly sm:justify-between"
        animate={animationFromRight2}
        >
          <h2 className="text-2xl font-bold text-center my-3">
            React Movie App
          </h2>
          <div className="text-green-400 sm:absolute top-12 sm:top-4 right-2 flex flex-row">
            <a
              hali="https://github.com/bekirugurr/firebase-movie-app"
              target="_blank"  rel="noalierrer"
              className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
            >
              <VscGithub className="w-8 h-8" />
            </a>
            <a
              hali="https://bugur-firebase-movie-search-app.netlify.app/"
              target="_blank"  rel="noalierrer"
              className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
            >
              <HiOutlineExternalLink className="w-8 h-8" />
            </a>
          </div>
          <p className="mx-3 my-2 px-3">
          Displays film details, posters and fragmans by using the tmdb api. There is a search feature according to the entered word. In addition, Firebase was used for register, login and authentication. 
          </p>
          <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400">
            <span className="font-bold text-lg px-2 mx-1">React</span>
            <span className="font-bold text-lg px-2 mx-1">ContextAPI</span>
            <span className="font-bold text-lg px-2 mx-1">Firebase</span>
            <span className="font-bold text-lg px-2 mx-1">Bootstrap</span>
            <span className="font-bold text-lg px-2 mx-1">Axios</span>
          </div>
          <img
            src={movieAppGif}
            alt="movie app gif"
            className=" border-2 border-green-400 rounded-lg h-72"
          />
          <FiFolder className="hidden sm:block w-12 h-12 text-green-400 absolute top-4 left-7" />
        </motion.div>
    </div>

    <div ref={refContainer3} className="flex flex-col lg:flex-row gap-5 overflow-hidden">
        <motion.div 
        className="lg:flex-1 bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-between"
        animate={animationFromLeft3}
        >
          <h2 className="text-2xl font-bold text-center mt-6 mb-2">
            Flight Reservation API
          </h2>
          <p className="mx-3 my-2 px-3">
          Authenticated users can create, update, delete or read reservations. Only admin users can add, update, delete or read flights. While admin user can see all reservations, authenticated ordinay users can see the reservations that they made. While admin users can see flights with their reservations others can only flight information. Also, admin user can see past and future flights, ordinary users can only see the next flights from now. Nested serializers are used.
          </p>
          <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 mb-1">
            <span className="font-bold text-lg px-2 mx-1">Django Rest API</span>
            <span className="font-bold text-lg px-2 mx-1">PostgreSQL</span>
            <span className="font-bold text-lg px-2 mx-1">Authentication</span>
          </div>
          <img
            src={flightAPIGif}
            alt="flight API"
            className=" border-2 border-green-400 rounded-lg"
          />
          <FiFolder className="hidden sm:block w-12 h-12 text-green-400 absolute top-4 left-7" />
          <div className="text-green-400 absolute top-14 right-0 sm:top-4 sm:right-2 flex">
            <a
              hali="https://github.com/bekirugurr/flight-reservation-app-django"
              target="_blank"  rel="noalierrer"
              className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
            >
              <VscGithub className="w-8 h-8" />
            </a>
          </div>
        </motion.div>
        <motion.div 
        className="lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5  items-center rounded-lg "
        animate={animationFromRight3}
        >
          <div className="sm:col-span-2 h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-start relative">
            <h2 className="text-2xl font-bold text-center my-3">Quiz API</h2>
            <p className="mx-3 px-3 mt-4 mb-6">
            Quiz API generates test quizzes. There are answers under questions under quizzes under categories. Admin panel was customized as nested admin panel so that the admin can enter the exam, questions and answers together. Adding, deleting and updating can be done. 
          </p>
            <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 absolute bottom-2">
              <span className="font-bold text-lg px-2 mx-1">Django Rest API</span>
              <span className="font-bold text-lg px-2 mx-1">PostgreSQL</span>
              <span className="font-bold text-lg px-2 mx-1">dj rest auth</span>
            </div>
            <FiFolder className="hidden sm:block w-12 h-12 text-green-400 absolute top-4 left-7" />
            <div className="text-green-400 absolute  top-4 right-2 flex">
              <a
                hali="https://github.com/bekirugurr/quiz-app-django"
                target="_blank"  rel="noalierrer"
                className="flex flex-col items-center hover:text-slate-300 px-3 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className=" h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-start relative">
            <h2 className="text-2xl font-bold text-center my-3">
              Find Number Game
            </h2>
            <p className="ml-6 pl-4 pr-1 mb-6 ">
            It keeps a number between 1 and 100 and gives the user 7 rights to guess correctly. When user guesses wrong, application narrows range of numbers based on last guess and gives notifications about remaining rights. 
          </p>
            <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 absolute bottom-2">
              <span className="font-bold text-lg px-2 mx-1">Javascript</span>
              <span className="font-bold text-lg px-2 mx-1">CSS</span>
            </div>

            <div className="text-green-400 absolute top-1 sm:top-20 left-0 flex flex-col pt-4 gap-2">
              <a
                hali="https://github.com/bekirugurr/Find-the-Number-Game"
                target="_blank"  rel="noalierrer"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                hali="https://bekirugurr.github.io/Find-the-Number-Game/"
                target="_blank"  rel="noalierrer"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <HiOutlineExternalLink className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className=" h-full bg-slate-800 hover:bg-red-500 opacity-90 items-center relative px-2 pb-2 rounded-lg text-white flex flex-col justify-start relative">
            <h2 className="text-2xl font-bold text-center my-3 px-2">
              Django Blog App 
            </h2>
            <p className="mr-6 pr-4 pl-4 mb-6">
            Adding, deleting and updating blog posts, register, login, logout and updating profile can be done. django was used for both frontend and backend. Django templates works as frontend. </p>
            <div className="bottom-0 w-full hidden sm:flex justify-center text-green-400 absolute bottom-2">
              <span className="font-bold text-lg px-2 mx-1">Django</span>
              <span className="font-bold text-lg px-2 mx-1">Bootstrap</span>
            </div>

            <div className="text-green-400 absolute top-1 sm:top-20 right-0 flex flex-col pt-4 gap-2">
              <a
                hali="https://github.com/bekirugurr/blog-app-django"
                target="_blank"  rel="noalierrer"
                className="flex flex-col items-center hover:text-slate-300 px-1 pb-1"
              >
                <VscGithub className="w-8 h-8" />
              </a>
              <a
                hali="https://bekirugurr.pythonanywhere.com/"
                target="_blank"  rel="noalierrer"
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
