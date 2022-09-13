import { useEffect } from "react";
import profilepic from "../assets/profilepic.jpg";
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = ({ setActiveItem }) => {

  const [ref, inView] = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (inView) {
      setActiveItem(0);
    }
  });

  return (
    <div
      ref={ref}
      id="home"
      className="min-h-screen flex items-center bg-blue-50 md:px-10"
    >
      <div className="flex flex-row flex-wrap md:flex-nowrap pl-12 md:pl-24 lg:pl-36 pr-12 lg:pr-36 sm:gap-none md:gap-14 justify-center items-center pb-0 md:pb-7 overflow-hidden md:ml-6">
        <motion.img
          src={profilepic}
          alt="bekir's_photo"
          className="w-48 h-48 md:w-64 md:h-64 lg:w-64 lg:h-64 rounded-3xl bg-green-300 "
          initial={{ x: "-30vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.7, ease: "easeOut" }}
        />

        <div className="flex flex-col gap-1 mt-8 md:-mt-4 lg:mt-0 overflow-hidden">
          <motion.h2
            className="text-2xl text-gray-800 text-center md:text-left font-bold"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "tween",
              delay: 0.5,
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            Hi 👋,&ensp;I'm
          </motion.h2>
          <motion.h1
            className="text-5xl text-gray-800 text-center md:text-left font-bold my_text pb-2"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "tween",
              delay: 0.7,
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            Bekir Uğur
          </motion.h1>

          <motion.p
            className="text-lg text-gray-800 text-center md:text-left mt-1 px-4 md:px-0"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "tween",
              delay: 0.9,
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            Welcome on my portfolio page! I'm a{" "}
            <span className="font-bold my_text">Full Stack Developer</span> and
            focused on building responsive fullstack web applications while
            learning & exploring other technologies.
          </motion.p>

          <ul className="flex gap-6 justify-center md:justify-start mt-2 pb-1 md:">
            <motion.li
              className="w-12 h-12 rounded-full bg-gray-600 transition duration-150  hover:bg-gray-800 hover:ease-in-out flex justify-center items-center"
              initial={{ scale: 0.5, x: 70, opacity: 0 }}
              animate={{ scale: 1, x: 0, opacity: 1 }}
              transition={{
                type: "tween",
                delay: 1,
                duration: 0.7,
                ease: "easeInOut",
              }}
            >
              <a
                href="https://github.com/bekirugurr"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="w-7 h-7 text-white" />
              </a>
            </motion.li>
            <motion.li
              className="w-12 h-12 rounded-full bg-blue-700 hover:bg-blue-900 transition duration-150   hover:ease-in-out flex justify-center items-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "tween",
                delay: 1,
                duration: 0.7,
                ease: "easeInOut",
              }}
            >
              <a
                href="https://www.linkedin.com/in/bekirugurr/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className="w-6 h-6 text-white" />
              </a>
            </motion.li>
            <motion.li
              className="w-12 h-12 rounded-full bg-red-600 transition duration-150  hover:bg-red-800 hover:ease-in-out flex justify-center items-center"
              initial={{ scale: 0.5, x: -70, opacity: 0 }}
              animate={{ scale: 1, x: 0, opacity: 1 }}
              transition={{
                type: "tween",
                delay: 1,
                duration: 0.7,
                ease: "easeInOut",
              }}
            >
              <a
                href="mailto:bekirugur070@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaRegEnvelope className="w-6 h-6 text-white" />
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
