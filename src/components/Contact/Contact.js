import React from "react";
import useWindowDimensions from "../../sizeHook";
import "./contact.scss";

const Contact = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div id="contact" className="grid-col-5 max-width">
      <div className="col-5-div display-flex">
        <div>
          <h2>Contact 📨</h2>
        </div>
        <div
          className="footer-div"
          style={
            width > 600
              ? {
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }
              : {
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }
          }
        >
          <p
            style={
              width > 600
                ? {
                    marginRight: "2rem",
                  }
                : {
                    marginRight: "0rem",
                  }
            }
          >
            Please contact me if you are intrested
            <a href="mailto:simon.beijer@gmail.com">
              <i className="fas fa-envelope fa-5x"></i>
            </a>
          </p>

          <p
            style={
              width > 600
                ? {
                    marginRight: "2rem",
                  }
                : {
                    marginRight: "0rem",
                  }
            }
          >
            Add me on LinkedIn
            <a href="https://www.linkedin.com/in/simon-beijer-a27b37181?trk=people-guest_profile-result-card_result-card_full-click&originalSubdomain=se">
              <i className="fab fa-linkedin fa-5x"></i>
            </a>
          </p>

          <p>
            Feel free to visit my Github
            <a href="https://github.com/simonbeijer">
              <i className="fab fa-github-square fa-5x"></i>
            </a>
          </p>
        </div>
        <p style={{ margin: "3rem 0 2rem 0" }}>
          &copy; Simon Beijer 2020 <i className="fab fa-hooli fa-1x"></i>
        </p>
      </div>
    </div>
  );
};

export default Contact;
