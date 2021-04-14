import React from "react";
import "./profile.css";
import sb2 from "./sb2.png";

const Profile = () => {
  return (
    <div id="profile" className="grid-col-1 display-grid grid-all">
      <div className="max-width col-1-div display-grid">
        <h2>Profile</h2>
        <h4>Front-End Developer</h4>
        <h3>About</h3>
        <div className="about-text">
          <p>Hi! I'm a Front-End Web Developer.</p>
          <p>My name is Simon I’m 29 year old.</p>
          <p>Right now i'm studying at Medieinstitutet in Gothenburg.</p>
          <p>I also have 30 hp credits at Blekinge Institute of Technology.</p>
          <p>Script and programming languages:</p>
          <p>
            HTML5, CSS3, JavaScript Node.js, MongoDB, PHP, SQL, TypeScript,
            React and React Native.
          </p>
        </div>
        <div className="about-icon">
          <i className="far fa-file-code fa-10x"></i>
        </div>
        <h3>Details</h3>
        <div className="profile-text">
          <h4>Name:</h4>
          <p> Simon Beijer</p>
          <h4>Age:</h4>
          <p>30</p>
          <h4>Location:</h4>
          <p>Gothenburg,</p>
          <p>Sweden,</p>
          <p>Earth,</p>
          <p>Milky way</p>
        </div>
        <div className="details-icon">
          <i className="far fa-id-badge fa-10x"></i>
        </div>
        <div className="höna">
          <img alt="simon" src={sb2}></img>
        </div>
      </div>
    </div>
  );
};

export default Profile;
