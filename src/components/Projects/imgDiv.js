import React from "react";
import "./projects.css";

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
          style={{ textDecoration: "none", color: "rgb(137 184 138)" }}
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
