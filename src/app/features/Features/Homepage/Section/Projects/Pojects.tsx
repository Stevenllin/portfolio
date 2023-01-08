import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="skills-container">
      <div className="d-flex justify-content-end">
        <div className="d-flex">
          <div className="line" />
          <p className="font-style-1">Discover</p>
        </div>
      </div>
      <div className="w-80">
        <div className="d-flex justify-content-center mb-3">
          <div className="section-header">
            Side project
          </div>
        </div>
        <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-4">
                  <div className="projects-card">
                    <img src={require('assets/image/project1.png')} className="d-block w-100" alt="..." />
                    <p className="font-style-3">Lorem ipsum dolor sit amet consectet</p>
                    <div className="d-flex">
                      <button className="button-gold me-1">Live Demo</button>
                      <button className="button-outline-gold ms-1">Git hub</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="projects-card">
                    <img src={require('assets/image/project2.png')} className="d-block w-100" alt="..." />
                    <p className="font-style-3">Lorem ipsum dolor sit amet consectet</p>
                    <div className="d-flex">
                      <button className="button-gold me-1">Live Demo</button>
                      <button className="button-outline-gold ms-1">Git hub</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="projects-card">
                    <img src={require('assets/image/project1.png')} className="d-block w-100" alt="..." />
                    <p className="font-style-3">Lorem ipsum dolor sit amet consectet</p>
                    <div className="d-flex">
                      <button className="button-gold me-1">Live Demo</button>
                      <button className="button-outline-gold ms-1">Git hub</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4">
                  <div className="projects-card">
                    <img src={require('assets/image/project1.png')} className="d-block w-100" alt="..." />
                    <p className="font-style-3">Lorem ipsum dolor sit amet consectet</p>
                    <div className="d-flex">
                      <button className="button-gold me-1">Live Demo</button>
                      <button className="button-outline-gold ms-1">Git hub</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="projects-card">
                    <img src={require('assets/image/project2.png')} className="d-block w-100" alt="..." />
                    <p className="font-style-3">Lorem ipsum dolor sit amet consectet</p>
                    <div className="d-flex">
                      <button className="button-gold me-1">Live Demo</button>
                      <button className="button-outline-gold ms-1">Git hub</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="projects-card">
                    <img src={require('assets/image/project1.png')} className="d-block w-100" alt="..." />
                    <p className="font-style-3">Lorem ipsum dolor sit amet consectet</p>
                    <div className="d-flex">
                      <button className="button-gold me-1">Live Demo</button>
                      <button className="button-outline-gold ms-1">Git hub</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon font-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
            <span className="carousel-control-next-icon font-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;