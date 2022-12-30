import React from 'react';

const Homepage: React.FC = () => {
  return (
    <>
      {/* Banner */}
      <div className="w-100 banner-container">
        <div className="banner-text w-100 h-100 text-center">
            <p className="fs-24 color-white">Hello!!</p>
            <p className="fs-48 color-white">I am a <span className="color-orange">Front-end developer</span></p>
            <button className="button-white-outline">Resume</button>
        </div>
        <img
          className="w-100"
          src={require('assets/image/S__15122444.jpg')}
          alt="banner"
        />
      </div>
      {/* About me */}
      <div className="section-gray">
        <div className="container">
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
            <div className="col-6">2</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Homepage;
