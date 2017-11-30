import React from 'react';
import '../css/landing.css';

const Landing = () => {
    return (
        <div className="Landing" style={{ textAlign: 'center' }}>
            <div class="artboard">
            <div class="stars">
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
            </div>
            <div class="stars2">
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
            </div>
            <div class="moon">
              <div class="ship"><span></span></div>
            </div>
            <div class="light"></div>
            <div class="cloud1"><span></span></div>
            <div class="cloud2"><span></span></div>
            <div class="sea">
              <div class="beams"></div>
              <div class="beams"></div>
              <div class="beams"></div>
              <div class="beams"></div>
              <div class="text">
                <h1>WanderLust</h1>
                <p>Never lose track of all your adventures again.</p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Landing;