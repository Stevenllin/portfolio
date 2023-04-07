import React from 'react';

const Services: React.FC = () => {
  return (
    <div id="services" className="services-container">
      <div className="fs-sm fc-2 border-left-gold ps-4">
        <p className="fs-sm fc-2 fw-lighter">What <span className="fs-md fc-1 fw-light">Services</span> I  Provide</p>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <div className="service-card">
        <div id="ServiceControls" data-bs-interval="false" className="carousel slide service-carousel">
          {/** Indicators */}
          <div className="carousel-indicators service-indicators" >
            <button type="button" data-bs-target="#ServiceControls" data-bs-slide-to="0" className="active service-indicators-button mx-1" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#ServiceControls" data-bs-slide-to="1" className="service-indicators-button mx-1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#ServiceControls" data-bs-slide-to="2" className="service-indicators-button mx-1" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#ServiceControls" data-bs-slide-to="3" className="service-indicators-button mx-1" aria-label="Slide 4"></button>
          </div>
          {/** Wrapper for slides */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p className="m-2 fc-2 fs-md text-center fw-light">Web development</p>
              {/**  */}
                <div className="my-3 service-divider"></div>
              <p className="mx-2 mt-4 fc-2 fs-sm fw-lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
            </div>

            <div className="carousel-item">
              <p className="m-2 fc-2 fs-md text-center fw-light">Diverse industries experiences</p>
              <div className="my-3 service-divider"></div>
              <p className="mx-2 mt-4 fc-2 fs-sm fw-lighter">According to the previous career path, I have approached experience in financial services, e-commerce, e-wallets and live streaming platforms.</p>
            </div>

            <div className="carousel-item">
              <p className="m-2 fc-2 fs-md text-center fw-light">Solid knowledge of data structure and algorithms</p>
              <div className="my-3 service-divider"></div>
              <p className="mx-2 mt-4 fc-2 fs-sm fw-lighter">Based on great learning resources from the University of Bristol, I have learned the foundation and importance of data structure and algorithms and kept doing the Leetcode to cultivate my problem-solving skills.</p>
            </div>

            <div className="carousel-item">
              <p className="m-2 fc-2 fs-md text-center fw-light">Basic concept of UI/UX design</p>
              <div className="my-3 service-divider"></div>
              <p className="mx-2 mt-4 fc-2 fs-sm fw-lighter">Due to the user experience plays a vital role on a product, I tried to design my side projects through Figma before developing.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Services;