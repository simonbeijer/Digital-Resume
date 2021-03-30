import React from "react";
import "./abilities.css";

const Abilities = () => {
  return (
    <div id="abilities" class="grid-col-3 display-grid">
      <div class="col-3-div">
        <h2>Abilities</h2>
        <h4>Skills</h4>
        <h4>Tools</h4>
        <h4>Languages & Agile methods</h4>
        <div class="skills">
          <div class="html5 skill-all">
            <p>HTML5</p>
            <p>100%</p>
          </div>
          <div class="css3 skill-all">
            <p>CSS3</p>
            <p>95%</p>
          </div>
          <div class="js skill-all">
            <p>JavaScript</p>
            <p>80%</p>
          </div>
          <div class="node skill-all">
            <p>Node.js</p>
            <p>75%</p>
          </div>
          <div class="react skill-all">
            <p>React</p>
            <p>70%</p>
          </div>
          <div class="ts skill-all">
            <p>TypeScript</p>
            <p>70%</p>
          </div>
          <div class="material skill-all">
            <p>Material UI</p>
            <p>65%</p>
          </div>
          <div class="php skill-all">
            <p>PHP</p>
            <p>60%</p>
          </div>
          <div class="sql skill-all">
            <p>SQL</p>
            <p>60%</p>
          </div>
          <div class="vue skill-all">
            <p>Vue</p>
            <p>45%</p>
          </div>
          <div class="angular skill-all">
            <p>Angular</p>
            <p>40%</p>
          </div>
        </div>
        <div class="tools">
          <div class="windows skill-all">
            <p>Windows</p>
            <p>100%</p>
          </div>
          <div class="mac skill-all">
            <p>Mac</p>
            <p>100%</p>
          </div>
          <div class="github skill-all">
            <p>Github</p>
            <p>90%</p>
          </div>
          <div class="vscode skill-all">
            <p>VScode</p>
            <p>80%</p>
          </div>
          <div class="atom skill-all">
            <p>Atom</p>
            <p>70%</p>
          </div>
          <div class="xampp skill-all">
            <p>XAMPP</p>
            <p>60%</p>
          </div>
          <div class="workbench skill-all">
            <p>Workbench</p>
            <p>50%</p>
          </div>
        </div>
        <div class="languages">
          <div class="svenska skill-all">
            <p>Swedish</p>
            <p>100%</p>
          </div>
          <div class="engelska skill-all">
            <p>English</p>
            <p>90%</p>
          </div>
          <div class="scrum skill-all">
            <p>Scrum</p>
            <p>80%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abilities;
