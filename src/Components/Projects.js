import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
import '../css/Projects.css';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };

    this.quizApp = () => {
      window.location.assign(
        "https://github.com/wcuberas/quizz-app"
      );
    };
    this.booksQuiz = () => {
      window.location.assign(
        "https://booksquizapp-2f4fa.web.app/"
      );
    };
    this.calculator = () => {
      window.location.assign(
        "https://github.com/wcuberas/react-calculator"
      );
    };
    // this.appCalculator = () => {
    //   window.location.assign(
    //     "https://booksquizapp-2f4fa.web.app/"
    //   );
    // };
    this.movieFinder = () => {
      window.location.assign(
        "https://github.com/wcuberas/movie-finder"
      );
    };
    this.portfolio = () => {
      window.location.assign("https://github.com/wcuberas/portafolio");
    };
    this.pokemon = () => {
      window.location.assign("https://github.com/wcuberas/PI-Pokemon-FT13");
    };
    this.trekker = () => {
      window.location.assign(
        "https://github.com/davidcesaretti/reservar"
      );
    };
    this.trekkerApp = () => {
      window.location.assign(
        "https://trekker-59f4e.web.app/"
      );
    };

    this.facebook = () => {
      window.location.assign(
        "https://github.com/ismail5g/Facebook-Education-Perpose"
      );
    };
    this.toggleCategories = () => {
      if (this.state.activeTab === 0) {
        return (
          <div className="projects-grid">
            {/* Books Quiz App */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/books2.png) center / cover",
                }}
              >
              </CardTitle>
              <CardText style={{ textAlign: "justify", fontSize: '1.5rem' }}>
                Books Quiz App
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.quizApp.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} >
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
             {/* Calculator */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/calculator.png) center / cover",
                }}
              >
              </CardTitle>
              <CardText style={{ textAlign: "justify", fontSize: '1.5rem' }}>
                Calculator 
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.calculator.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Weather App */}
            {/* <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/calculator.png) center / cover",
                }}
              >
              </CardTitle>
              <CardText style={{ textAlign: "justify", fontSize: '1.5rem' }}>
                Weather App 
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.calculator.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card> */}
            {/* Movie Finder */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/movieFinder.png) center / cover",
                }}
              >
              </CardTitle>
              <CardText style={{ textAlign: "justify", fontSize: '1.5rem' }}>
                Movie Finder 
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.movieFinder.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      } else if (this.state.activeTab === 1) {
        return (
          <div className="projects-grid">
            {/* Pokemon App */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/pokemon.png) center / cover ",
                  backgroundSize: '300px',
                  backgroundRepeat: 'no-repeat'
                }}
              >
              </CardTitle>
              <CardText style={{ textAlign: "justify", fontSize: '1.5rem' }}>
                Pokemon App
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.pokemon.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} disabled>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            
            {/* Trekker App */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/trekker.jpeg) center / cover",
                }}
              >
              </CardTitle>
              <CardText style={{ textAlign: "justify", fontSize: '1.5rem' }}>
               Trekker Vacations Rentals
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.trekker.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}  onClick={this.trekkerApp.bind(this)}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      }
      // if (this.state.activeTab === 2) {
      //   return (
      //     <div>
      //       {/* Store-Procedure */}
      //       <Card shadow={5} className="project-item">
      //         <CardTitle
      //           style={{
      //             color: "#333",
      //             height: "180px",
      //             background: "url(images/store-procedure.png) center / cover",
      //           }}
      //         >
      //           Store Procedures
      //         </CardTitle>
      //         <CardText style={{ textAlign: "justify" }}>
      //           This is simple Store Procedure among lot's of SQL query.
      //         </CardText>
      //         <CardActions border>
      //           <Button style={{ margin: "0 10px" }} raised ripple primary>
      //             <i className="fa fa-github" aria-hidden="true" /> Github
      //           </Button>
      //           <Button raised accent ripple style={{ margin: "0 10px" }}>
      //             <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
      //           </Button>
      //         </CardActions>
      //         <CardMenu style={{ color: "#fff" }}>
      //           <IconButton name="share" />
      //         </CardMenu>
      //       </Card>
      //     </div>
      //   );
      // } else {
      //   return (
      //     <div>
      //       {/* facebook */}
      //       <Card shadow={5} className="project-item">
      //         <CardTitle
      //           style={{
      //             color: "#333",
      //             height: "180px",
      //             background: "url(images/facebook.jpg) center / cover",
      //           }}
      //         >
      //           Facebook
      //         </CardTitle>
      //         <CardText style={{ textAlign: "justify" }}>
      //           This facebook developed on a semester for educational purpose
      //           only.
      //         </CardText>
      //         <CardActions border>
      //           <Button
      //             style={{ margin: "0 10px" }}
      //             raised
      //             ripple
      //             primary
      //             onClick={this.facebook.bind(this)}
      //           >
      //             <i className="fa fa-github" aria-hidden="true" /> Github
      //           </Button>
      //           <Button raised accent ripple style={{ margin: "0 10px" }}>
      //             <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
      //           </Button>
      //         </CardActions>
      //         <CardMenu style={{ color: "#fff" }}>
      //           <IconButton name="share" />
      //         </CardMenu>
      //       </Card>
      //     </div>
      //   );
      // }
    };
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React JS</Tab>
          <Tab>Full Stack</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
