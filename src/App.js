import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import SideBar from "./components/Sidebar/Sidebar";
import HeroImg from "./components/HeroImg/HeroImg";
import Profile from "./components/Profile/Profile";
import Abilities from "./components/Abilities/Abilities";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  const appDiv = useRef();
  const [allHeights, setAllHeights] = useState({
    profile: 0,
    education: 0,
    abilitie: 0,
    project: 0,
    contact: 0,
  });

  useEffect(() => {
    if (appDiv) {
      setAllHeights({
        profile: appDiv.current.childNodes[2].offsetHeight,
        education: appDiv.current.childNodes[3].offsetHeight,
        abilitie: appDiv.current.childNodes[4].offsetHeight,
        project: appDiv.current.childNodes[5].offsetHeight,
        contact: appDiv.current.childNodes[6].offsetHeight,
      });
    }
  }, []);

  return (
    <div ref={appDiv} className="App">
      <SideBar allHeightRefs={allHeights} />
      <HeroImg />
      <Profile />
      <Education />
      <Abilities />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
