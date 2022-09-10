import { useState } from "react";
import firebase from "../utils/firebase"
import {
  getDatabase,
  ref,
  push,
  set,
} from "firebase/database";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    <div id="contact" className="h-screen pt-16">
      <h1 className="text-4xl font-bold text-gray-800 mt-4 text-center">
        Contact
      </h1>
      <form
        className="flex flex-col gap-5 justify-center items-center mx-auto mt-6"
        style={{ width: "40rem" }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="text-slate-600 placeholder-slate-600 font-semibold py-3 px-4 border-2 border-slate-600 rounded-xl bg-transparent w-full"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleFormData}
        />
        <input
          type="text"
          className="text-slate-600 placeholder-slate-600 font-semibold py-3 px-5 border-2 border-slate-600 rounded-xl bg-transparent w-full"
          placeholder="E-mail"
          name="email"
          value={formData.email}
          onChange={handleFormData}
        />
        <textarea
          cols="30"
          rows="10"
          className="text-slate-600 placeholder-slate-600 font-semibold py-3 px-5 border-2 border-slate-600 rounded-xl bg-transparent w-full resize-none"
          placeholder="Leave your message..."
          name="message"
          value={formData.message}
          onChange={handleFormData}
        ></textarea>
        <input
          type="submit"
          value="Send"
          className="bg-green-500 text-white px-16 py-2 text-lg rounded-3xl font-semibold"
        />
      </form>
    </div>
  );
};

export default Contact;
