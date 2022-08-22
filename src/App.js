import './App.css';
import About from './components/About';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
  <Navbar/>
  <Home/>
  <Skills/>
  <Projects/>
  <About/>
  <Certificates/>
  <Contact/>
    </>
  );
}

export default App;
