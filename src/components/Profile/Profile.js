import React from "react";
import "./profile.css";
import sb2 from "./sb2.png";

const Profile = () => {
  return (
    <div id="profile" className=" padding-content">
      <div className="col-1-div display-flex max-width">
        <div style={{ padding: "1rem" }}>
          <h2>About 👨🏼‍💻</h2>
        </div>
        <div className="höna">
          <img alt="simon" src={sb2}></img>
        </div>
        <div className="about-div display-flex" style={{ padding: "2rem" }}>
          <div style={{ textAlign: "left" }}>
            <h3>What i do</h3>
            <p>Hi! I'm a Front-End Web Developer.</p>
            <p>My name is Simon I’m 30 year old.</p>
            <p>Right now i'm studying at Medieinstitutet in Gothenburg.</p>
            <p>
              I also have 30 hp credits at Blekinge Institute of Technology.
            </p>
            <p>
              In my spare time i like to work out, sit at my computer and create
              music
            </p>
            <p></p>
            <p>
              I enjoy creating alluring websites, and i'm always looking to
              improve.
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <h3>Details</h3>
            <h4>Name:</h4>
            <p> Simon Beijer</p>
            <h4>Age:</h4>
            <p>30</p>
            <h4>Location:</h4>
            <p>
              Gothenburg,<br></br> Sweden, <br></br>Earth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
