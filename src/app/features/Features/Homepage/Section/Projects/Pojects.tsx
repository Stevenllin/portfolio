import React from 'react';
import Icon from 'app/common/component/icon/Icon';
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { ProjectsData } from 'app/features/Features/Homepage/Data/projects';

const Projects: React.FC = () => {
  return (
    <div id="projects" className="skills-container">
      <div className="d-flex justify-content-end">
        <InView threshold={0.25}>
          {({ref, inView}) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="d-block"
            >
              <div className="d-flex d-flex justify-content-end">
                <p className="d-flex align-items-center fs-sm fc-2 fw-lighter me-3">Checkout</p>
                <div className="d-flex align-items-center fc-2">
                  <Icon name="Dash" />
                </div>
              </div>
              <p className="fs-sm fc-2 fw-lighter">the <span className="fs-md fc-1 fw-light">Side Projects</span> I have created</p>
            </motion.div>
          )}
        </InView>
      </div>
      <div className="w-90 mt-4">
        {/* Desktop */}
        <div id="projectControlsDesktop" className="carousel slide display-tablet-desktop" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                {
                  ProjectsData.filter((_, index) => index > 2).map(item => (
                    <div key={item.name} className="col-md-4">
                      <div className="projects-card">
                        <img src={require(`assets/image/${item.image}`)} className="d-block w-100" alt={item.name} />
                        <p className="fs-xs fc-2 fw-lighter my-4">Name: {item.name}</p>
                        {/* <p className="fs-xs fc-2 fw-lighter mt-4 mb-2">Related technologies:</p> */}
                        {/* <p className="fs-xs fc-2 fw-lighter mb-4">{item.tech.join(', ')}</p> */}
                        <div className="d-flex my-2">
                          {/* <button className="button-gold fs-xs fc-2 fw-lighter me-1">Live Demo</button> */}
                          <button className="button-gold fs-xs fc-2 fw-lighter me-1"><a href={item.gitHub}>Git hub</a></button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                {
                  ProjectsData.filter((_, index) => index <= 2).map(item => (
                    <div key={item.name} className="col-md-4">
                      <div className="projects-card">
                        <img src={require(`assets/image/${item.image}`)} className="d-block w-100" alt={item.name} />
                        <p className="fs-xs fc-2 fw-lighter my-4">Name: {item.name}</p>
                        {/* <p className="fs-xs fc-2 fw-lighter mt-4 mb-2">Related technologies:</p> */}
                        {/* <p className="fs-xs fc-2 fw-lighter mb-4">{item.tech.join(', ')}</p> */}
                        <div className="d-flex my-2">
                          {/* <button className="button-gold fs-xs fc-2 fw-lighter me-1">Live Demo</button> */}
                          <button className="button-gold fs-xs fc-2 fw-lighter me-1"><a href={item.gitHub}>Git hub</a></button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#projectControlsDesktop" data-bs-slide="prev">
            <span className="carousel-control-prev-icon font-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#projectControlsDesktop" data-bs-slide="next">
            <span className="carousel-control-next-icon font-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* mobile */}
        <div id="projectControlsMobile" className="carousel slide display-mobile" data-bs-ride="carousel">
          <div className="carousel-inner">
            {
              ProjectsData.map((item, index) => (
                <div key={item.name} className={'carousel-item' + (index === 0 ? ' active' : '') }>
                  <div className="projects-card">
                    <img src={require(`assets/image/${item.image}`)} className="d-block w-100" alt={item.name} />
                    <p className="fs-xs fc-2 fw-lighter my-4">Name: {item.name}</p>
                    {/* <p className="fs-xs fc-2 fw-lighter mt-4 mb-2">Related technologies:</p> */}
                    {/* <p className="fs-xs fc-2 fw-lighter mb-4">{item.tech.join(', ')}</p> */}
                    <div className="d-flex my-2">
                      {/* <button className="button-gold fs-xs fc-2 fw-lighter me-1">Live Demo</button> */}
                      <button className="button-gold fs-xs fc-2 fw-lighter me-1"><a href={item.gitHub}>Git hub</a></button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#projectControlsMobile" data-bs-slide="prev">
            <span className="carousel-control-prev-icon font-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#projectControlsMobile" data-bs-slide="next">
            <span className="carousel-control-next-icon font-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;