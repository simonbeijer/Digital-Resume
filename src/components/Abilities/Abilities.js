import React from "react";
import "./abilities.css";
import AbilityDiv from "./AbilityDiv";
import { skillArr } from "./skillArr.js";
import useWindowDimensions from "../../sizeHook";

const Abilities = () => {
  const { width } = useWindowDimensions();
  return (
    <div id="abilities" style={{ width: "100%", backgroundColor: "grey" }}>
      <div
        style={{ padding: "4rem 20% 4rem 20%" }}
        className={width < 600 ? "col-3-div" : "col-3-div max-width"}
      >
        <h2 style={{ textAlign: "center" }}>Abilities</h2>
        {skillArr.map((content) => (
          <AbilityDiv
            svg={content.svg}
            name={content.name}
            size={content.size}
            title={content.title}
          />
        ))}
     
      </div>
    </div>
  );
};

export default Abilities;
