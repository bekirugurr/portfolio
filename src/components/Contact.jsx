import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="h-screen pt-16">
      <h1 className="text-4xl font-bold text-gray-800 mt-4 text-center">Contact</h1>
      <form className="flex flex-col gap-6 justify-center items-center mx-auto mt-6" style={{width:'40rem'}}>
        <input type="text" className="text-slate-600 placeholder-slate-600 font-semibold py-3 px-4 border-2 border-slate-600 rounded-xl bg-transparent w-full" placeholder="Name" />
        <input type="text" className="text-slate-600 placeholder-slate-600 font-semibold py-3 px-5 border-2 border-slate-600 rounded-xl bg-transparent w-full" placeholder="E-mail"/>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="text-slate-600 placeholder-slate-600 font-semibold py-3 px-5 border-2 border-slate-600 rounded-xl bg-transparent w-full resize-none"
          placeholder="Leave your message..."
        ></textarea>
        <input type="submit" value="Send" className="bg-green-500 text-white px-16 py-2 text-lg rounded-3xl font-semibold"/>
      </form>
    </div>
  );
};

export default Contact;
