import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="gs ">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
    </div>
  );
}

export default App;
