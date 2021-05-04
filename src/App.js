import "./App.css";
import React, { useRef, useEffect } from "react";
import SideBar from "./components/Sidebar/Sidebar";
import HeroImg from "./components/HeroImg/HeroImg";
import Profile from "./components/Profile/Profile";
import Abilities from "./components/Abilities/Abilities";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import useWindowDimensions from "./sizeHook";
import getWindowScroll from "./scrollHook";

function App() {
  const profileDiv = useRef();
  const { width, height } = useWindowDimensions();
  const { scroll } = getWindowScroll();
  // useEffect(() => {
  //   if (scroll > 12) {
  //     console.log("PROFILE", profileDiv);
  //   }
  // });

  return (
    <div className="App">
      <SideBar />
      <HeroImg />
      <Profile ref={profileDiv} />
      <Education />
      <Abilities />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
