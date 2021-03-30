import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div id="contact" class="grid-col-5 display-grid">
      <div class="col-5-div">
        <h2>Contact</h2>
        <a href="mailto:simon.beijer@gmail.com">
          <i class="fas fa-envelope fa-5x"></i>
        </a>
        <p>Please contact me if you are intrested</p>
        <a href="https://www.linkedin.com/in/simon-beijer-a27b37181?trk=people-guest_profile-result-card_result-card_full-click&originalSubdomain=se">
          <i class="fab fa-linkedin fa-5x"></i>
        </a>
        <p>Add me on LinkedIn</p>
        <a href="https://github.com/simonbeijer">
          <i class="fab fa-github-square fa-5x"></i>
        </a>
        <p>Feel free to visit my Github</p>
        <p>
          &copy; Simon Beijer 2020 <i class="fab fa-hooli fa-1x"></i>
        </p>
      </div>
    </div>
  );
};

export default Contact;
