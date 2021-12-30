import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro"
import Research from "./components/research/research"
import Portfolio from "./components/portfolio/portfolio"
import Contact from "./components/contact/contact"
import Menu from "./components/menu/menu"
import About from "./components/about/about"
import Experience from "./components/experience/experience"
import "./app.scss"
import { useState } from "react";

function App() {

  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Experience/>
        <Research/>
        <Portfolio/>
      </div>
    </div>
  );
}

export default App;
