import React from "react";
import "./HeroImg.css";
import arrow from "./arrow-down.png";
import useWindowDimensions from "../../sizeHook";

const HeroImg = () => {
  const { width, height } = useWindowDimensions();
  return (
    <>
      <div className="HeroImg">
        <div className="col-pic-text">
          <h1 className="name">Simon Beijer</h1>
          <div className="name-border"></div>
          <h4>Digital resume</h4>
        </div>
        {width > 800 ? (
          <div className="sideButton">
            <a href="#profile">
              <img alt="arrow" className="arrow" src={arrow}></img>
            </a>
          </div>
        ) : (
          <div className="mobileSideButton">
            <a href="#profile">
              <img alt="arrow" className="mobileArrow" src={arrow}></img>
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default HeroImg;
