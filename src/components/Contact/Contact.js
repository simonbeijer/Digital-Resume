import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact" className="grid-col-5 display-grid">
      <div className="col-5-div">
        <h2>Contact</h2>
        <a href="mailto:simon.beijer@gmail.com">
          <i className="fas fa-envelope fa-5x"></i>
        </a>
        <p>Please contact me if you are intrested</p>
        <a href="https://www.linkedin.com/in/simon-beijer-a27b37181?trk=people-guest_profile-result-card_result-card_full-click&originalSubdomain=se">
          <i className="fab fa-linkedin fa-5x"></i>
        </a>
        <p>Add me on LinkedIn</p>
        <a href="https://github.com/simonbeijer">
          <i className="fab fa-github-square fa-5x"></i>
        </a>
        <p>Feel free to visit my Github</p>
        <p>
          &copy; Simon Beijer 2020 <i className="fab fa-hooli fa-1x"></i>
        </p>
      </div>
    </div>
  );
};

export default Contact;
