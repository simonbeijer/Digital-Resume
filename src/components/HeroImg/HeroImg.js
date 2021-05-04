import React from "react";
import "./HeroImg.css";
import arrow from "./arrow-down.png";

const HeroImg = () => {
  return (
    <div className="HeroImg">
      <div className="col-pic-text">
        <h1 className="name">Simon Beijer</h1>
        <div className="name-border"></div>
        <h3>Digital resume</h3>
      </div>
      <div className="sideButton">
        <a href="#profile">
          <img alt="arrow" className="arrow" src={arrow}></img>
        </a>
      </div>
    </div>
  );
};

export default HeroImg;
