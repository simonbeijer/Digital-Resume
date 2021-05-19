import React from "react";
import "./abilities.css";


const AbilityDiv = ({ name, size, title, svg }) => {
  return !title ? (
    <div
    
      className="abilityDiv "
      style={{ width: "100%", margin: "1rem 0 1rem 0" }}
    >

      <div
        style={{ width: size, backgroundColor: "whitesmoke", display: "flex", alignItems: "center"  }}
        className="skill-all "
      >
<img style={{height: "18px", width: "18px", paddingLeft: "1rem"}} alt={name} src={svg}></img>
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
        <p style={{padding: "0.1rem 0rem",}}>{size}</p>
      </div>
    </div>
  ) : (
    <div
      className="display-flex stripes"
      style={{ flex: 1, backgroundColor: "whitesmoke" }}
    >
      <p
        style={{
          fontSize: "1.2rem",
          margin: "0.6rem 0rem ",
          fontWeight: "600",
          color: "#babbba",
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default AbilityDiv;
