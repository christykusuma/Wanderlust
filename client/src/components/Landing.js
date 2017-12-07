import React from 'react';
import '../css/landing.css';

const Landing = () => {
    return (
        <div className="Landing" style={{ textAlign: 'center' }}>
              <div className="clouds">
                <img className="cloud-1" src="cloud.png"/>
                <img className="cloud-3" src="cloud.png"/>
                <img className="cloud-4" src="cloud.png"/>
                <img className="cloud-5" src="cloud.png"/> 
              </div>
              <div className="owl">
                <img className="head" src="head.png"/>
                <img className="eyes" src="eyes.png"/>
                <div className="wings">
                  <img className="right-wing" src="left-wing-yellow.png"/>
                  <img className="left-wing" src="right-wing-yellow.png"/>
                </div>
              </div>
        </div>
    );
};

export default Landing;
