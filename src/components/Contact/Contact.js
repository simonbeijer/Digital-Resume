import React from "react";
import useWindowDimensions from "../../sizeHook";
import "./contact.scss";
import hooli from "./hooli.png";
const Contact = () => {
  const { width } = useWindowDimensions();
  return (
    <div id="contact" className="grid-col-5 ">
      <div
        className={
          width < 900
            ? "col-5-div display-flex"
            : "col-5-div display-flex max-width"
        }
      >
        <div>
          <h2>Contact</h2>
        </div>
        <div
          className="footer-div"
          style={
            width > 900
              ? {
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }
              : {
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }
          }
        >
          <a
            href="https://www.linkedin.com/in/simon-beijer-a27b37181?trk=people-guest_profile-result-card_result-card_full-click&originalSubdomain=se"
            rel="noreferrer"
            target="_blank"
            className="display-flex footer-divs linkedin"
            style={
              width > 900
                ? {
                    marginRight: "3rem",
                    marginBottom: "0rem",
                    flexDirection: "column",

                    width: "33.3%",
                  }
                : {
                    width: "60%",
                    marginBottom: "1rem",

                    marginRight: "0rem",
                  }
            }
          >
            <p style={{ textAlign: "center" }}>Add me on LinkedIn</p>
          </a>
          <a
            className="display-flex footer-divs gmail"
            href="mailto:simon.beijer@gmail.com"
            rel="noreferrer"
            target="_blank"
            style={
              width > 900
                ? {
                    flexDirection: "column",
                    width: "33.3%",
                  }
                : {
                    width: "60%",
                    flexDirection: "column",
                    marginRight: "0rem",
                  }
            }
          >
            <p style={{ textAlign: "center" }}>Send me an email</p>
          </a>

          <a
            href="https://github.com/simonbeijer"
            rel="noreferrer"
            target="_blank"
            className="display-flex footer-divs github"
            style={
              width > 900
                ? {
                    marginLeft: "3rem",
                    marginTop: "0rem",

                    width: "33.3%",
                    flexDirection: "column",
                  }
                : {
                    width: "60%",
                    marginTop: "1rem",
                    flexDirection: "column",
                    marginLeft: "0rem",
                  }
            }
          >
            <p style={{ textAlign: "center" }}>Visit my Github</p>
          </a>
        </div>
        <p
          style={{ margin: "5rem 0 2rem 0", flexDirection: "column" }}
          className="display-flex"
        >
          &copy; Simon Beijer 2021
          <img
            alt="hooli"
            style={{
              height: "2rem",
            }}
            src={hooli}
          ></img>
        </p>
      </div>
    </div>
  );
};

export default Contact;
