import { useState, useEffect } from "react";
import firebase from "../utils/firebase"
import {
  getDatabase,
  ref,
  push,
  set,
} from "firebase/database";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


const Contact = ({setActiveItem}) => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [ref, inView] = useInView({ threshold: 0.3 });
  const animationFromLeft = useAnimation()
  const animationFromRight = useAnimation()

  useEffect(() => {
    if (inView) {
      setActiveItem(3);
      animationFromLeft.start({
        x:0,
        transition:{type:'spring', duration:1, bounce:0.5, ease:'easeInOut', delay:0.2}
      })
      animationFromRight.start({
        x:0,
        transition:{type:'spring', duration:1, bounce:0.5, ease:'easeInOut', delay:0.2}
      })
    } 
    if(!inView){
      animationFromLeft.start({
        x:'-120vw'
      })
      animationFromRight.start({
        x:'120vw'
      })
    }
  },[inView]);

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const addMessage = (info) => {
    const time = new Date().toString()
    const dataToSend = {...info, time}
    const db = getDatabase(firebase);
    const messageRef = ref(db, "messages"); //ref ile messages ismindeki db (database) imi tanıtıyor, referans oluşturuyorum
    const newMessageRef = push(messageRef); // böyle yaparak spred operatör gibi eski bilgilere yeri bilgileri ekliyor ve eskileri silip yenileri yazmasını engelliyoruz
    set(newMessageRef, dataToSend);
    // toastifySuccess("New user added...") 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name&&formData.email&&formData.message) {
      addMessage(formData)
      alert("Your message has been sent!")
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("You must fill in all fields!")
    }
  };

  return (
    <div ref={ref} id="contact" className="h-screen pt-16">
      <h1 className="text-4xl font-bold text-gray-800 mt-4 text-center">
        Contact
      </h1>
      <form
        className="flex flex-col gap-5 justify-center items-center mx-auto mt-6 px-8 sm:w-11/12 md:w-10/12 lg:w-8/12  xl:w-6/12 overflow-hidden"
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
          type="text"
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
    </div>
  );
};

export default Contact;
