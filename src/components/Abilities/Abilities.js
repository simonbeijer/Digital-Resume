import React from "react";
import "./abilities.css";
import AbilityDiv from "./AbilityDiv";
import { skillArr } from "./skillArr.js";

const Abilities = () => {
  return (
    <div id="abilities" style={{ width: "100%", backgroundColor: "grey" }}>
      <div
        style={{ padding: "4rem 20% 4rem 20%" }}
        className="col-3-div max-width"
      >
        <h2>Abilities 🔧</h2>
        <h4>Skills</h4>
        {skillArr.map((content) => (
          <AbilityDiv name={content.name} size={content.size} />
        ))}
      </div>
    </div>
  );
};

export default Abilities;
