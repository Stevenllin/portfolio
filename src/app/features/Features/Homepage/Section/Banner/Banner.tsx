import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="w-100 banner-container">
      <div className="banner-text fs-sm">
        <p className="d-flex justify-content-end">Hello!!</p>
        <p className="d-flex justify-content-end align-items-center">This is <span className="ms-2 fs-md fc-1 fw-light">Steven Lin</span></p>
        <div className="d-flex justify-content-end">
          {/* <img
            src={require('assets/image/line.png')}
            alt="banner"
          /> */}
          <p>A creative Front-end developer</p>
        </div>
      </div>
      <img
        className="w-100"
        src={require('assets/image/banner.jpeg')}
        alt="banner"
      />
    </div>
  );
}


export default Banner;

