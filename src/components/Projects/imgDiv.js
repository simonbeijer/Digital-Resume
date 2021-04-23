import React from "react";
import "./projects.css";
import test from "./spaceapp.png";
import test2 from "./spaceapp.png";

const ImgDiv = ({ alt, text, link, img }) => {
  return (
    <>
      <div className="project">
        <img src={img} alt={alt}></img>

        <p>{text}</p>

        <a rel="noreferrer" target="_blank" href={link}>
          Visit live site
        </a>
      </div>
    </>
  );
};

export default ImgDiv;
