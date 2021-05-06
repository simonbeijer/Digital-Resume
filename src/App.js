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
import { useState } from "react";

function App() {
  // const profileDiv = useRef();
  const { width, height } = useWindowDimensions();
  const { scroll } = getWindowScroll();
  const [allHeights, setAllHeights] = useState([]);
  useEffect(() => {
    console.log("APP", allHeights);
  });

  const setAllHeightsFunction = (newObject) => {
    setAllHeights((allHeights) => [...allHeights, newObject]);
  };

  return (
    <div className="App">
      <SideBar />
      <HeroImg />
      <Profile setHeights={setAllHeightsFunction} />
      <Education setHeights={setAllHeightsFunction} />
      <Abilities setHeights={setAllHeights} />
      <Projects setHeights={setAllHeights} />
      <Contact />
    </div>
  );
}

export default App;
