import React from 'react';
import Navigation from 'app/common/layouts/Navigation';
import Banner from './Section/Banner';
import About from './Section/About';
import Skills from './Section/Skills';
import Projects from './Section/Projects';
import Services from './Section/Services';
// import { motion, AnimatePresence } from "framer-motion";
// import { InView } from "react-intersection-observer";


const Homepage: React.FC = () => {

  return (
    <>
      {/* Navigation */}
      <Navigation />
      {/* Banner */}
      <Banner />
      <div className="space" />
      {/* About */}
      <About />
      <div className="space" />
      {/* Skills */}
      <Skills />
      <div className="space" />
      {/* Projects */}
      <Projects />
      <div className="space" />
      {/* Services */}
      <Services />
      <div className="space" />

      {/* About me */}
      {/* <div className="section-gray">
        <div className="container-1">
          <div className="d-flex justify-content-center mb-3">
            <div className="section-header">
              About me
            </div>
          </div>
          <div className="row">
              <div className="col-6">
                <InView threshold={0.5}>
                  {({ref, inView}) => (
                    <motion.img
                      ref={ref}
                      initial={{ opacity: 0, x: -100 }}
                      animate={inView ? { opacity: 1, x: 100 } : { opacity: 0, x: -100 }}
                      transition={{ duration: 0.8 }}
                      className="w-60"
                      src={require('assets/image/S__15106057.jpg')}
                      alt="steven"
                    />
                  )}
                </InView>
              </div>
              <div className="d-flex align-items-center col-6">
                <InView threshold={0.5}>
                  {({ ref, inView }) => (
                    <motion.p
                      ref={ref}
                      className="fs-24"
                      initial={{ opacity: 0, x: 100 }}
                      animate={inView ? { opacity: 1, x: -100 } : { opacity: 0, x: 100 }}
                      transition={{ duration: 0.8 }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo a
                    </motion.p>
                  )}
                </InView>
              </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
export default Homepage;
