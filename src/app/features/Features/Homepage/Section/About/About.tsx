import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="row">
        <div className="col-lg-4 col-md-5 col-5">
          <img
            className="w-100"
            src={require('assets/image/about.jpg')}
            alt="banner"
          />
        </div>
        <div className="col-lg-8 col-md-7 col-7">
          <div className="w-90">
            <p className="fs-sm fc-1 fw-lighter">Discover</p>
            <p className="fs-md fc-2 fw-light">About me</p>
            <div className="line" />
            <p className="fs-xs fc-2 lh-lg fw-lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
            
            <div className="d-flex justify-content-center">
              <div className="about-data m-2 display-desktop">1</div>
              <div className="about-data m-2 display-desktop">2</div>
              <div className="about-data m-2 display-desktop">3</div>
            </div>

            <button className="button-gold fs-xs fc-2 fw-lighter">Download CV</button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <div className="about-data m-2 display-mobile">1</div>
        <div className="about-data m-2 display-mobile">2</div>
        <div className="about-data m-2 display-mobile">3</div>
      </div>
    </div>
  );
}

export default About;
