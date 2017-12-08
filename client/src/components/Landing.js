import React from 'react';
import '../css/landing.css';

const Landing = () => {
    return (
        <div className="Landing" style={{ 
          textAlign: 'center',
          }}>
              <div className="clouds">
                <img className="cloud-4" src="cloud.png"/>
                <img className="cloud-5" src="cloud.png"/> 
              </div>
              <img className="background-pic" src="background.jpg"/>
              <div className="owl-landing">
                <img className="head" src="head.png"/>
                <img className="eyes" src="eyes.png"/>
                <div className="wings">
                  <img className="right-wing" src="left-wing-yellow.png"/>
                  <img className="left-wing" src="right-wing-yellow.png"/>
                </div>
                <p className="tagline">Wanderlust helps you keep track of all your favorite places around the world and create a wishlist of places to go!</p>
              </div>
        </div>
    );
};

export default Landing;
