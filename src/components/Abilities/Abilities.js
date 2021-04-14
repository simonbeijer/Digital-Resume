import React from "react";
import "./abilities.css";

const Abilities = () => {
  return (
    <div id="abilities" className="grid-col-3 display-grid">
      <div className="col-3-div">
        <h2>Abilities</h2>
        <h4>Skills</h4>
        <h4>Tools</h4>
        <h4>Languages & Agile methods</h4>
        <div className="skills">
          <div className="html5 skill-all">
            <p>HTML5</p>
            <p>100%</p>
          </div>
          <div className="css3 skill-all">
            <p>CSS3</p>
            <p>95%</p>
          </div>
          <div className="js skill-all">
            <p>JavaScript</p>
            <p>80%</p>
          </div>
          <div className="node skill-all">
            <p>Node.js</p>
            <p>75%</p>
          </div>
          <div className="react skill-all">
            <p>React</p>
            <p>70%</p>
          </div>
          <div className="ts skill-all">
            <p>TypeScript</p>
            <p>70%</p>
          </div>
          <div className="material skill-all">
            <p>Material UI</p>
            <p>65%</p>
          </div>
          <div className="php skill-all">
            <p>PHP</p>
            <p>60%</p>
          </div>
          <div className="sql skill-all">
            <p>SQL</p>
            <p>60%</p>
          </div>
          <div className="vue skill-all">
            <p>Vue</p>
            <p>45%</p>
          </div>
          <div className="angular skill-all">
            <p>Angular</p>
            <p>40%</p>
          </div>
        </div>
        <div className="tools">
          <div className="windows skill-all">
            <p>Windows</p>
            <p>100%</p>
          </div>
          <div className="mac skill-all">
            <p>Mac</p>
            <p>100%</p>
          </div>
          <div className="github skill-all">
            <p>Github</p>
            <p>90%</p>
          </div>
          <div className="vscode skill-all">
            <p>VScode</p>
            <p>80%</p>
          </div>
          <div className="atom skill-all">
            <p>Atom</p>
            <p>70%</p>
          </div>
          <div className="xampp skill-all">
            <p>XAMPP</p>
            <p>60%</p>
          </div>
          <div className="workbench skill-all">
            <p>Workbench</p>
            <p>50%</p>
          </div>
        </div>
        <div className="languages">
          <div className="svenska skill-all">
            <p>Swedish</p>
            <p>100%</p>
          </div>
          <div className="engelska skill-all">
            <p>English</p>
            <p>90%</p>
          </div>
          <div className="scrum skill-all">
            <p>Scrum</p>
            <p>80%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abilities;
