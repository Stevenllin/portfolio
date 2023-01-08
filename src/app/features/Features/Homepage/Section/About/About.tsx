import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="row">
        <div className="col-3">
          <img
            className="w-100"
            src={require('assets/image/about.jpg')}
            alt="banner"
          />
        </div>
        <div className="col-9">
          <div className="w-80">
            <p className="font-style-1">Discover</p>
            <p className="font-style-2">About me</p>
            <div className="line" />
            <p className="font-style-3 lh-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
            
            <div className="d-flex justify-content-center">
              <div className="about-data m-2">1</div>
              <div className="about-data m-2">2</div>
              <div className="about-data m-2">3</div>
            </div>

            <button className="button-gold fs-xs">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
