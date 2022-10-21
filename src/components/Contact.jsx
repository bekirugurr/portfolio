import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import axios from "axios";

const Contact = ({ setActiveItem }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [ref, inView] = useInView({ threshold: 0.3 });
  const animationFromLeft = useAnimation();
  const animationFromRight = useAnimation();

  useEffect(() => {
    if (inView) {
      setActiveItem(3);
      animationFromLeft.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.5,
          ease: "easeInOut",
          delay: 0.2,
        },
      });
      animationFromRight.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.5,
          ease: "easeInOut",
          delay: 0.2,
        },
      });
    }
    if (!inView) {
      animationFromLeft.start({
        x: "-120vw",
      });
      animationFromRight.start({
        x: "120vw",
      });
    }
  }, [inView, animationFromLeft, animationFromRight, setActiveItem]);

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      axios({
        method: "post",
        url: 'https://hook.eu1.make.com/ugheqyvezjdgb2juixebhrwbdzhn65qn',
        data: formData,
      })
        .then((result) => {
          setIsModalVisible(true)
          setTimeout(() => {
            setIsModalVisible(false)
          }, 4000);
        })
        .catch((err) => {
          console.log(err);
        });
      // alert("Your message has been sent!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("You must fill in all fields!");
    }
  };

  return (
    <div
      ref={ref}
      id="contact"
      className="h-screen pt-16 md:px-6 lg:px-16 bg-orange-50"
    >
      <h1 className="text-4xl font-bold text-gray-800 mt-4 text-center">
        Contact
      </h1>
      <form
        className="flex flex-col gap-3 justify-center items-center mx-auto mt-4 px-8  sm:w-10/12 md:w-9/12 lg:w-7/12  xl:w-6/12 overflow-hidden"
        onSubmit={handleSubmit}
      >
        <motion.input
          type="text"
          className="text-slate-600 placeholder-slate-600 font-semibold py-3 px-4 border-2 border-slate-600 rounded-xl bg-transparent w-full"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleFormData}
          animate={animationFromLeft}
        />
        <motion.input
          type="email"
          className="text-slate-600 placeholder-slate-600 font-semibold py-3 px-5 border-2 border-slate-600 rounded-xl bg-transparent w-full"
          placeholder="E-mail"
          name="email"
          value={formData.email}
          onChange={handleFormData}
          animate={animationFromRight}
        />
        <motion.textarea
          cols="30"
          rows="10"
          className="text-slate-600 placeholder-slate-600 font-semibold py-3 px-5 border-2 border-slate-600 rounded-xl bg-transparent w-full resize-none"
          placeholder="Leave your message..."
          name="message"
          value={formData.message}
          onChange={handleFormData}
          animate={animationFromLeft}
        ></motion.textarea>
        <motion.input
          type="submit"
          value="Send"
          className="bg-green-500 text-white px-16 py-2 text-lg rounded-3xl font-semibold"
          animate={animationFromRight}
        />
      </form>
      <div
        className={`bg-sky-50 text-rose-500 py-6 px-4 z-50 fixed top-16 left-1/2 -translate-x-1/2 rounded-3xl  flex flex-col text-center justify-center items-center gap-4 border-4 border-green-400 ${
          isModalVisible ? "visible" : "hidden"
        }`}
      >
        <h2 className="font-semibold text-2xl">Thanks for your message 🙏</h2>
        <p className="font-semibold">
          I will reply your message as soon as possible ✌️
        </p>
        <button
          className="bg-green-500 rounded-xl text-white font-semibold py-1 px-6 "
          onClick={() => setIsModalVisible(false)}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Contact;
