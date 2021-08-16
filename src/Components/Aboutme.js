import React, { Component } from "react";
import Cuba from './Images/cubaa.jpeg'
import cv from './CV/CV-CuberasWalter.pdf'

class Aboutme extends Component {
  render() {
    return (
        <div className="container-about">
          <div className="parrafo">
            <p style={{textAlign: 'justify', fontFamily: 'Oxygen, sans-serif', fontSize:'1.1rem'}}>
              <br/>
              Hello 👋 !!!I am Walter Cuberas, I am a Full Stack developer 💻 and a public accountant 📊.
              <br/>
              <br/>
              I live in Charata, province of Chaco, it is a city located in the north of Argentina 🇦🇷.
              <br/>
              <br/>
              I like to study and constantly learn new things, challenges and teamwork motivate me.
              <br/>
              <br/>
              In my spare time I enjoy playing the piano 🎹, listening to music, doing sports ⚽ 🎾 and being with friends.
              I love traveling ✈️  🚗, getting to know other cultures, interacting with local people ... my dream is to know the world 🌍!
            </p>
          </div>
          <div className='about-img'>
             <img 
            className="foto-about"
            alt="fotoWalter"
            src={Cuba}
          />
          </div>
          <div style={{display: 'flex', justifyContent:'center'}}>
            <button className="btn btn-dark">
              <a download href={cv}>
                {" "}
                Download CV
              </a>
            </button>
        </div>
        </div>
    );
  }
}

export default Aboutme;
