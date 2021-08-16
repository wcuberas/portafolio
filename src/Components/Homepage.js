import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Foto from './Images/Congorra.JPG'

class Homepage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border">
              <img
                className="profile-img"
                src={Foto}
                alt="Walter"
              />
            </div>
            <div className="banner-text">
              <h1>Full Stack Developer</h1>
              <hr />
              <p>
                Html | Css | Javascript | React | Redux | Express | PostgreSQL | Typescript | Node 
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.facebook.com/wcuberas"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-facebook-official"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                <a
                  href="https://github.com/wcuberas"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-github-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/walter-cuberas-dev/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-linkedin-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
