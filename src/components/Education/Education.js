import React from "react";
import "./education.css";

const Education = () => {
  return (
    <div id="education" className="padding-content ">
      <div className="max-width">
        <div
          style={{ padding: "0 10% 2rem 10%" }}
          className="col-2-div display-flex"
        >
          <h2>Education‍ 🏫</h2>
          <div className="bth" style={{ padding: "2rem 1rem" }}>
            <ul>
              <li style={{ margin: "0 0 1rem 1rem", fontWeight: "600" }}>
                2018 - 2019
              </li>
              <li>
                Blekinge Institute of Technology, course package web programming
                and database
              </li>
              <li>
                <p>
                  This was a course with a mixture between Front-End and
                  Back-End programming. The first two courses was Front-End with
                  CSS3, HTML5, PHP, and SQL. Subjects including design and UX.
                </p>
              </li>
              <li>
                <p>
                  The other two courses where Back-End with PHP, JavaScript,
                  Node and SQL. Subjects including Object-Oriented-Programming,
                  API's, frameworks and databases.
                </p>
                <li style={{ padding: "1rem 0  0 0.6rem" }}>
                  <a
                    without
                    rel="noreferrer"
                    target="_blank"
                    href="https://dbwebb.se/utbildning/webbprogrammering-och-databaser-30hp"
                  >
                    BTH.se
                  </a>
                </li>
              </li>
            </ul>
          </div>
          <div className="medieinstitutet" style={{ padding: "3rem 1rem" }}>
            <ul>
              <li style={{ margin: "0 0 1rem 1rem", fontWeight: "600" }}>
                2019-2021
              </li>
              <li>Medieinstitutet Gothenburg, Front-End developing</li>

              <li>
                <p>
                  This is a two-year program with main focus on Front-End
                  development. It also include LIA when you get to use your
                  skill on a real workplace
                </p>
              </li>
              <li>
                <p>
                  The first course starts of with HTML5, CSS3 and JavaScript.
                  Then on to more programming with TypeScript, Node.js, React.
                  Also includes Back-End ,UX, dynamic and agile web development.
                </p>
              </li>
              <li style={{ padding: "1rem 0  0 0.6rem" }}>
                <a
                  without
                  rel="noreferrer"
                  target="_blank"
                  href="https://medieinstitutet.se/utbildningar/front-end-developer"
                >
                  Medieinstitutet.se
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
