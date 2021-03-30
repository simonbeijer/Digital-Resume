import React from "react";
import "./projects.css";
import test from "./spaceapp.png";

const Projects = () => {
  return (
    <div id="projects" class="grid-col-4 display-grid">
      <div class="col-4-div">
        <h2>Projects old to new</h2>
        <div class="project-1">
          <img src={test} alt="music-producer"></img>{" "}
        </div>
        <div class="project-1-text">
          <p>End project from BTH.</p>
          <p>I made a page for my friend Carl.</p>
          <p>He is a music producer living in London.</p>
        </div>
        <div class="project-1-links">
          <a
            rel="noreferrer"
            target="_blank"
            href="http://www.student.bth.se/~sibj18/dbwebb-kurser/design/me/proj/htdocs/"
          >
            Visit live site
          </a>
        </div>
        <div class="project-2">
          <img src={test} alt="design-course"></img>{" "}
        </div>
        <div class="project-2-text">
          <p>A project from BTH.</p>
          <p>A page made for a design and UX course.</p>
          <p>A framework that includes many styles.</p>
        </div>
        <div class="project-2-links">
          <a
            rel="noreferrer"
            target="_blank"
            href="http://www.student.bth.se/~sibj18/dbwebb-kurser/design/me/redovisa/htdocs/"
          >
            Visit live site
          </a>
        </div>
        <div class="project-3">
          <img src={test} alt="Refactored-website"></img>
        </div>
        <div class="project-3-links">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://simonbeijer.github.io/Digital-CV/"
          >
            Visit Github page
          </a>
        </div>
        <div class="project-3-text">
          <p>This Digalt CV.</p>
          <p>Check out my code.</p>
          <p>Feel free to borrow stuff.</p>
        </div>
        <div class="project-4">
          <img src={test} alt="interactiv-game"></img>{" "}
        </div>
        <div class="project-4-links">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://simonbeijer.github.io/Lab-1/"
          >
            Visit Github page
          </a>
        </div>
        <div class="project-4-text">
          <p>Project at Medieinstitutet.</p>
          <p>A interactiv-game.</p>
          <p>Try it out.</p>
        </div>
        <div class="project-5">
          <img src={test} alt="nasa-api"></img>{" "}
        </div>
        <div class="project-5-links">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://simonbeijer.github.io/React-NASA-API-TypeScript/"
          >
            Visit Github page
          </a>
        </div>
        <div class="project-5-text">
          <p>React and TypeScript</p>
          <p>API from NASA</p>
          <p>Pictures from mars</p>
        </div>
        <div class="project-6">
          <img src={test} alt="socket-chat"></img>{" "}
        </div>
        <div class="project-6-links">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/simonbeijer/Node-Socket-Chat"
          >
            View Github repo
          </a>
        </div>
        <div class="project-6-text">
          <p>Back-End Node.js</p>
          <p>Chat with socket.io</p>
          <p>Working chat with gifs :)</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
