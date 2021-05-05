import React from "react";
import "./projects.css";
import mli from "./spaceapp.png";
import harmoni from "./spaceapp.png";
import app from "./spaceapp.png";
import work from "./spaceapp.png";

const ImgDiv = ({ alt, text, link, img, visit }) => {
  return (
    <>
      <div
        className="project"
        style={{ paddingBottom: "2rem", textDecoration: "none" }}
      >
        <img src={img} alt={alt}></img>

        <p>{text}</p>

        <a
          style={{ textDecoration: "none", color: "#72705B" }}
          rel="noreferrer"
          target="_blank"
          href={link}
        >
          {visit}
        </a>
      </div>
    </>
  );
};

export default ImgDiv;
