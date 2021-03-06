import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Components/Main";
import { Link } from 'react-router-dom';

function App() {
  return ( 
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Portfolio</Link>} scroll>
          <Navigation>
            <Link className="nav" to="/Resume">Resume</Link>
            <Link className="nav" to="/Aboutme">About Me</Link>
            <Link className="nav" to="/Projects">Projects</Link>
            <Link className="nav" to="/Contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer style={{backgroundColor:'black', opacity:'0.9'}} title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Portfolio</Link>}>
          <Navigation>
            <Link to="/Resume">Resume</Link>
            <Link to="/Aboutme">About Me</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content"></div>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;

