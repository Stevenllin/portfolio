import React from 'react';
import commonService from 'app/core/services/commonService';

const Homepage: React.FC = () => {
  const handleClickDownloadPDF = () => {
    commonService.handleFileSave('/resume/Steven.pdf', 'Steven.pdf');
  };
  return (
    <>
      {/* Banner */}
      <div className="w-100 banner-container">
        <div className="banner-text w-100 h-100 text-center">
            <p className="fs-24 color-white">Hello!!</p>
            <p className="fs-48 color-white">I am a <span className="color-orange">Front-end developer</span></p>
            <button className="button-white-outline" onClick={handleClickDownloadPDF}>
              Resume
            </button>
        </div>
        <img
          className="w-100"
          src={require('assets/image/S__15122444.jpg')}
          alt="banner"
        />
      </div>

      {/* About me */}
      <div className="section-gray">
        <div className="container-1">
          <div className="d-flex justify-content-center mb-3">
            <div className="section-header">
              About me
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <img
                className="w-80"
                src={require('assets/image/S__15106057.jpg')}
                alt="steven"
              />
            </div>
            <div className="col-6">
              <p className="fs-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo a</p>
            </div>
          </div>
        </div>
      </div>

      {/* Side project */}
      <div className="container-2">
        <div className="d-flex justify-content-center mb-3">
          <div className="section-header">
            Side project
          </div>
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-6">
                  <img src={require('assets/image/project1.png')} className="d-block w-100" alt="..." />
                </div>
                <div className="col-6">
                  <div className="h-100 d-flex align-items-end flex-column">
                    <p className="fs-36">Project Name</p>
                    <p className="fs-24">Lorem ipsum dolor sit amet, consectetur adip  eiusmod tempor incididunt ut labore et dolore</p>
                    <button className="button-orange mt-auto">Link</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-6">
                  <img src={require('assets/image/project2.png')} className="d-block w-100" alt="..." />
                </div>
                <div className="col-6">
                  <div className="h-100 d-flex align-items-end flex-column">
                    <p className="fs-36">Project Name</p>
                    <p className="fs-24">Lorem ipsum dolor sit amet, consectetur adip  eiusmod tempor incididunt ut labore et dolore</p>
                    <button className="button-orange mt-auto">Link</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}
export default Homepage;
