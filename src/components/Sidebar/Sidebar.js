import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../sizeHook";
import getWindowScroll from "../../scrollHook";
import "./Sidebar.scss";

const SideBar = ({ allHeightRefs }) => {
  const { scroll } = getWindowScroll();
  const { width, height } = useWindowDimensions();
  const [calScroll, setCalScroll] = useState("");
  const [highLight, sethighLight] = useState("");

  useEffect(() => {
    console.log("SIDEBAR", allHeightRefs);

    if (scroll < height - height / 4) {
      setCalScroll(height - scroll - 16);
    } else if (scroll > height / 2) {
      setCalScroll(height / 4);
    }

    if (scroll > 0 && scroll < height + allHeightRefs.profile / 2) {
      sethighLight("profile");
    } else if (
      scroll > height + allHeightRefs.profile / 2 &&
      scroll < height + allHeightRefs.profile + allHeightRefs.education / 2
    ) {
      sethighLight("education");
    } else if (
      scroll > height + allHeightRefs.profile + allHeightRefs.education / 2 &&
      scroll <
        height +
          allHeightRefs.profile +
          allHeightRefs.education +
          allHeightRefs.abilitie / 2
    ) {
      sethighLight("abilitie");
    } else if (
      scroll >
        height +
          allHeightRefs.profile +
          allHeightRefs.education +
          allHeightRefs.abilitie / 2 &&
      scroll <
        height +
          allHeightRefs.profile +
          allHeightRefs.education +
          +allHeightRefs.abilitie +
          allHeightRefs.project / 2
    ) {
      sethighLight("project");
    } else if (
      scroll >
      height +
        allHeightRefs.profile +
        allHeightRefs.education +
        +allHeightRefs.abilitie +
        allHeightRefs.project / 2
    ) {
      sethighLight("contact");
    }
  }, [height, calScroll, scroll, setCalScroll, allHeightRefs]);

  return (
    <>
      {width > 800 && (
        <div>
          <div className="sideBar" style={{ marginTop: calScroll }}>
            <ul>
              <li className="nav-1">
                <a
                  style={
                    highLight === "profile"
                      ? { background: "rgb(112 175 142)" }
                      : { background: "rgb(87, 88, 88)" }
                  }
                  href="#profile"
                >
                  About
                </a>
              </li>
              <li className="nav-2">
                <a
                  style={
                    highLight === "education"
                      ? { background: "rgb(112 175 142)" }
                      : { background: "rgb(87, 88, 88)" }
                  }
                  href="#education"
                >
                  Education
                </a>
              </li>
              <li className="nav-3">
                <a
                  style={
                    highLight === "abilitie"
                      ? { background: "rgb(112 175 142)" }
                      : { background: "rgb(87, 88, 88)" }
                  }
                  href="#abilities"
                >
                  Abilities
                </a>
              </li>
              <li className="nav-4">
                <a
                  style={
                    highLight === "project"
                      ? { background: "rgb(112 175 142)" }
                      : { background: "rgb(87, 88, 88)" }
                  }
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li className="nav-5">
                <a
                  style={
                    highLight === "contact"
                      ? { background: "rgb(112 175 142)" }
                      : { background: "rgb(87, 88, 88)" }
                  }
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
