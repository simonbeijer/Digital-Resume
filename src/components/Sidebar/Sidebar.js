import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../sizeHook";
import getWindowScroll from "../../scrollHook";
import "./Sidebar.scss";

const SideBar = () => {
  const { scroll } = getWindowScroll();
  const { width, height } = useWindowDimensions();
  const [calScroll, setCalScroll] = useState("");
  useEffect(() => {
    if (scroll < height - height / 4) {
      setCalScroll(height - scroll - 16);
    } else if (scroll > height / 2) {
      setCalScroll(height / 4);
    }
    console.log(
      "HEIGHT: ",
      height,
      "SCROLL: ",
      scroll,
      "CALSCROLL: ",
      calScroll
    );
  }, [height, calScroll, scroll, setCalScroll]);

  return (
    <div>
      <div className="sideBar" style={{ marginTop: calScroll }}>
        <ul>
          <li className="nav-1">
            <a href="#profile">About</a>
          </li>
          <li className="nav-2">
            <a href="#education">Education</a>
          </li>
          <li className="nav-3">
            <a href="#abilities">Abilities</a>
          </li>
          <li className="nav-4">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-5">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
