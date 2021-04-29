import React from "react";
import "./abilities.css";

const AbilityDiv = ({ name, size, title }) => {
  return !title ? (
    <div
      className="abilityDiv "
      style={{ width: "100%", margin: "1rem 0 1rem 0" }}
    >
      <div
        style={{ width: size, backgroundColor: "whitesmoke" }}
        className="skill-all "
      >
        <p>{name}</p>
      </div>
      <div
        style={
          ({ paddingRight: "1rem" },
          size == "100%"
            ? {
                backgroundColor: "whitesmoke",

                flex: 1,
              }
            : { backgroundColor: "none" })
        }
      >
        <p>{size}</p>
      </div>
    </div>
  ) : (
    <div
      className="display-flex stripes"
      style={{ flex: 1, backgroundColor: "whitesmoke" }}
    >
      <p>{name}</p>
    </div>
  );
};

export default AbilityDiv;
