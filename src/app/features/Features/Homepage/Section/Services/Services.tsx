import React from 'react';

const Services: React.FC = () => {
  return (
    <div id="services" className="services-container">
      <div className="fs-sm fc-2 border-left-gold ps-4">
        <p className="fs-sm fc-2 fw-lighter">What <span className="fs-md fc-1 fw-light">Services</span> I  Provide</p>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <div className="service-card">
        <div id="ServiceControls" className="carousel slide service-carousel" data-bs-ride="carousel">
          {/** Indicators */}
          <div className="carousel-indicators service-indicators" >
            <button type="button" data-bs-target="#ServiceControls" data-bs-slide-to="0" className="active service-indicators-button mx-1" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#ServiceControls" data-bs-slide-to="1" className="service-indicators-button mx-1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#ServiceControls" data-bs-slide-to="2" className="service-indicators-button mx-1" aria-label="Slide 3"></button>
          </div>
          {/** Wrapper for slides */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p className="m-2 fc-2 fs-md text-center fw-light">Web development</p>
                <div className="my-3 service-divider"></div>
              <p className="m-2 fc-2 fs-sm text-center fw-lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
            </div>

            <div className="carousel-item">
              <p className="m-2 fc-2 fs-md text-center fw-light">Content Creation</p>
              <div className="my-3 service-divider"></div>
              <p className="m-2 fc-2 fs-sm text-center fw-lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
            </div>

            <div className="carousel-item">
              <p className="m-2 fc-2 fs-md text-center fw-light">UX/UI design</p>
              <div className="my-3 service-divider"></div>
              <p className="m-2 fc-2 fs-sm text-center fw-lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Services;