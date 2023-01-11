import React from 'react';
import commonService from 'app/core/services/commonService';
import { AboutData } from '../../Data';

const About: React.FC = () => {
  /**
   * @description handle download the resume
  */
   const handleClickDownloadPDF = () => {
    commonService.handleFileSave('/resume/Steven.pdf', 'Steven.pdf');
  };
  return (
    <div className="about-container">
      <div className="row">
        <div className="col-md-4 col-5">
          <div className="d-flex align-items-center">
            <img
              className="w-100"
              src={require('assets/image/about.jpg')}
              alt="banner"
            />
          </div>
        </div>
        <div className="col-md-8 col-7">
          <div className="d-flex flex-column justify-content-between w-90 h-100">
            <div>
              <p className="fs-sm fc-1 fw-lighter">Discover</p>
              <p className="fs-md fc-2 fw-light">About me</p>
              <div className="line mb-2"/>
              <p className="fs-xs fc-2 line-height fw-lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
            </div>
            
            <div className="d-flex justify-content-center">
              {
                AboutData.map((item, index) => (
                  <div key={index} className="about-data m-2 display-desktop">
                    <div className="about-data-text">
                      <p className="text-center fs-sm fc-1 fw-light">{item.number}</p>
                      <p className="text-center fs-xs fc-2 fw-lighter">{item.item}</p>
                    </div>
                  </div>
                ))
              }
            </div>

            <button className="button-gold text-center fs-xs fc-2 fw-lighter" onClick={handleClickDownloadPDF}>Download CV</button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        {
          AboutData.map((item, index) => (
            <div key={index} className="about-data m-2 display-mobile">
              <div className="about-data-text">
                <p className="text-center fs-sm fc-1 fw-light">{item.number}</p>
                <p className="text-center fs-xs fc-2 fw-lighter">{item.item}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default About;
