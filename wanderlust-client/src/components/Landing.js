import React from 'react';
import '../css/landing.css';

const Landing = () => {
    return (
        <div className="Landing" style={{ textAlign: 'center' }}>
              <div className='owl'>
                <img className="cloud-1" src="cloud.png"/>
                <img className="cloud-2" src="cloud.png"/>
                <img className="cloud-3" src="cloud.png"/>
                <img className="cloud-4" src="cloud.png"/>
                <img className="cloud-5" src="cloud.png"/>
              <div className='body'>
              <img className="left-wing" src="left-wing-yellow.png"/>
              <img className="right-wing" src="right-wing-yellow.png"/>
                <div className='feet'></div>
                <div className='feet right'></div>
                <div className='feather'></div>
              </div>
              <div className='head'>
              <div className='head'>
                <div className='eyes'>
                  <div className='beak'></div>
                  <div className='eye'>
                    <div className='pupil'></div>
                  </div>
                  <div className='eye'>
                    <div className='pupil'></div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
};

export default Landing;