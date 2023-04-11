import React from 'react';
import commonService from 'app/core/services/commonService';
import { AboutData } from '../../Data';
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Icon from 'app/common/component/icon/Icon';

const About: React.FC = () => {
  /**
   * @description handle download the resume
  */
   const handleClickDownloadPDF = () => {
    commonService.handleFileSave('/resume/Steven.pdf', 'Steven.pdf');
  };
  return (
    <div id="about" className="about-container">
      <div className="row">
        <div className="d-flex align-items-center col-md-4 col-5">
          <div className="d-flex align-items-center">
            <InView threshold={0.25}>
              {({ref, inView}) => (
                  <motion.img
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                    className="w-100"
                    src={require('assets/image/about.jpg')}
                    alt="banner"
                  />
                )}
            </InView>
          </div>
        </div>
        <div className="col-md-8 col-7">
          <InView threshold={0.25}>
            {({ref, inView}) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.8 }}
                className="d-flex flex-column justify-content-between w-90 h-100"
              >
                <div>
                  <p className="fs-sm fc-1 fw-lighter">Discover</p>
                  <p className="fs-md fc-2 fw-light">About me</p>
                  <div className="line mb-2"/>
                  <p className="fs-xs fc-2 line-height fw-lighter display-mobile">I graduated from the University of Bristol in 2022 with MSc Computer Science and currently work as a front-end developer with a focus on React, React Redux and React Saga.</p>
                  <p className="fs-xs fc-2 line-height fw-lighter display-tablet">I graduated from the University of Bristol in 2022 with MSc Computer Science and currently work as a front-end developer with a focus on React, React Redux and React Saga. Although I have less than a year of professional development experience, due to my enthusiasm and personal discipline, I use the remaining time to accumulate some projects.</p>
                </div>
                
                <div className="d-flex justify-content-center">
                  {
                    AboutData.map((item, index) => (
                      <div key={index} className="about-data m-2 display-tablet">
                        <InView threshold={0.25}>
                          {({ref, inView}) => (
                            <motion.div
                              ref={ref}
                              initial={{ opacity: 0 }}
                              animate={inView ? { opacity: 1 } : { opacity: 0 }}
                              transition={{ duration: 0.8 }}
                              className="d-flex flex-column justify-content-center about-data-text"
                            >
                              <div className="d-flex justify-content-center w-100 fc-1">
                                <Icon name={item.icon} />
                              </div>
                              <p className="text-center fs-sm fc-1 fw-light">{item.number}</p>
                              <p className="text-center fs-xs fc-2 fw-lighter">{item.item}</p>
                            </motion.div>
                          )}
                        </InView>
                      </div>
                    ))
                  }
                </div>

                <button className="button-gold text-center fs-xs fc-2 fw-lighter" onClick={handleClickDownloadPDF}>Download CV</button>
              </motion.div>
            )}
          </InView>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        {
          AboutData.map((item, index) => (
            <div key={index} className="about-data m-2 display-mobile">
              <InView threshold={0.25}>
                {({ref, inView}) => (
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="d-flex flex-column justify-content-center about-data-text"
                  >
                    <div className="d-flex justify-content-center w-100 fc-1">
                      <Icon name={item.icon} />
                    </div>
                    <p className="text-center fs-sm fc-1 fw-light">{item.number}</p>
                    <p className="text-center fs-xs fc-2 fw-lighter">{item.item}</p>
                  </motion.div>
                )}
              </InView>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default About;
