import React from "react";
import "./projects.css";
import mli from "./mli.png";
import harmoni from "./harmoni.png";
import app from "./scorify.png";
import work from "./FizzBuzz.png";
import ImgDiv from "./imgDiv";
import useWindowDimensions from "../../sizeHook";

const Projects = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div id="projects" className="grid-col-4 padding-content">
      <div
        className="col-4-div display-flex max-width"
        style={{ padding: "3rem 0 2rem 0" }}
      >
        <h2>Projects 💼</h2>
        <div
          className="display-flex"
          style={
            width > 1000
              ? {
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "100%",
                }
              : { flexDirection: "column" }
          }
        >
          <ImgDiv
            visit="Live link"
            className="projektDiv"
            alt="Mlilures"
            text="MLI lures project made for a friend."
            link="https://mlilures.se/"
            img={mli}
          />
          <ImgDiv
            visit="Live link"
            className="projektDiv"
            alt="Själsharmoni"
            text="Själsharmoni project for a healing business"
            link="https://www.xn--sjlsharmoni-m8a.se/"
            img={harmoni}
          />
        </div>
        <div
          className="display-flex"
          style={
            width > 1000
              ? {
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "100%",
                }
              : { flexDirection: "column", width: "100%" }
          }
        >
          <ImgDiv
            visit="GitHub link"
            className="projektDiv"
            alt="Scorify"
            text="Scorify is a final project with ReactNative"
            link="https://github.com/FThelin/mitt-lag---frontend"
            img={app}
          />
          <ImgDiv
            visit="Live link"
            className="projektDiv"
            alt="Fizzbuzz"
            text="Fizzbuzz work test made in about 5 hours"
            link="https://simonbeijer.github.io/fizzbuzz/"
            img={work}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
