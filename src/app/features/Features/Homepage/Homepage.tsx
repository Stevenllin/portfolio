import React from 'react';
import Navigation from 'app/common/layouts/Navigation';
import Banner from './Section/Banner';
import About from './Section/About';
import Skills from './Section/Skills';
import Projects from './Section/Projects';
import Services from './Section/Services';
import Contact from './Section/Contact';

const Homepage: React.FC = () => {

  return (
    <>
      {/* Navigation */}
      <Navigation />
      <div className="nav-space" />
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
      <Contact />
      <div className="space" />
    </>
  )
}
export default Homepage;
