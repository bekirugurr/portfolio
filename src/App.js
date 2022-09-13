import { useState } from "react";
import "./App.css";
// import Certificates from './components/Certificates';
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <>
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      <Home setActiveItem={setActiveItem} />
      <Skills setActiveItem={setActiveItem} />
      <Projects setActiveItem={setActiveItem} />
      {/* <Certificates/> */}
      <Contact setActiveItem={setActiveItem} />
    </>
  );
}

export default App;
