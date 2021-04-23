import React from "react";
import "./profile.css";
import sb2 from "./sb2.png";

const Profile = () => {
  return (
    <div id="profile" className="max-width padding-content">
      <div className="col-1-div display-flex">
        <div style={{ padding: "2rem" }}>
          <h2>About 👨🏼‍💻</h2>
        </div>
        <div className="höna">
          <img alt="simon" src={sb2}></img>
        </div>
        <div className="about-div display-flex" style={{ padding: "2rem" }}>
          <div style={{ textAlign: "center" }}>
            <h3>Details</h3>
            <p>Hi! I'm a Front-End Web Developer.</p>
            <p>My name is Simon I’m 29 year old.</p>
            <p>Right now i'm studying at Medieinstitutet in Gothenburg.</p>
            <p>
              I also have 30 hp credits at Blekinge Institute of Technology.
            </p>
            <p>Script and programming languages:</p>
            <p>HTML5, CSS3, JavaScript, React, React Native, </p>
            <p>Node, MongoDB, PHP, SQL and TypeScript.</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>Details</h3>
            <h4>Name:</h4>
            <p> Simon Beijer</p>
            <h4>Age:</h4>
            <p>30</p>
            <h4>Location:</h4>
            <p>
              Gothenburg,<br></br> Sweden, <br></br>Earth,<br></br> Milky way
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
