import React, { useState, useEffect } from 'react';
import commonService from 'app/core/services/commonService';
import { motion, AnimatePresence } from "framer-motion";
import CircleProgressbar from 'app/common/component/CircleProgressbar/CircleProgressbar';
import { SkillsOption } from 'app/core/defines/Homepage';
import { SkillsDataState } from './types';
import { SkillsData } from './Data';

const Homepage: React.FC = () => {
  /* Skills State */
  const [skillsDataState, setSkillsDataState] = useState<SkillsDataState[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<SkillsDataState>(SkillsData[0]);

  console.log('selectedSkills', selectedSkills);

  useEffect(() => {
    (async () => {
      /* initialize the skills */
      setSkillsDataState(SkillsData);
    })();
  },[]);

  /**
   * @description handle download the resume
  */
  const handleClickDownloadPDF = () => {
    commonService.handleFileSave('/resume/Steven.pdf', 'Steven.pdf');
  };

  /**
   * @description handle select the skills
   * @param target the index of skills data
  */
  const handleSelectSkills = (target: number) => {
    const skillsDataUpdate = skillsDataState?.map((item, index) => {
      if (target === index) {
        const updated = { ...item, isSelected: true };
        setSelectedSkills(updated);
        return { ...item, isSelected: true };
      } else {
        return { ...item, isSelected: false };
      }
    });
    setSkillsDataState(skillsDataUpdate);
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

      {/* Skills */}
      <div className="container-1">
        <div className="d-flex justify-content-center mb-3">
          <div className="section-header">
            Skills
          </div>
        </div>
        <ul>
          {
            SkillsOption.map((item, index) => {
              return (
                <li
                  key={index}
                  className={skillsDataState[index]?.isSelected ? 'selected' : ''}
                  onClick={() => handleSelectSkills(index)}
                >
                  {item.text}
                </li>
              )
            })
          }
        </ul>
        {
          selectedSkills && (
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedSkills?.category}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="skills-container">
                {
                  selectedSkills.itemArray.map((item, index) => (
                    <div key={index}>
                      <CircleProgressbar
                        text={item.item}
                        value={item.score}
                      />
                    </div>
                  ))
                }
              </div>
            </motion.div>
          </AnimatePresence>
          )
        }
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
                <div className="col-md-6">
                  <img src={require('assets/image/project1.png')} className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="h-100 d-flex align-items-end flex-column py-2">
                    <p className="fs-36">Project Name</p>
                    <div className="fs-24 my-2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adip  eiusmod tempor incididunt ut labore et dolore
                      </p>
                    </div>
                    <button className="button-orange mt-auto">Link</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6">
                  <img src={require('assets/image/project2.png')} className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="h-100 d-flex align-items-end flex-column py-2">
                    <p className="fs-36">Project Name</p>
                    <div className="fs-24 my-2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adip  eiusmod tempor incididunt ut labore et dolore
                      </p>
                    </div>
                    <button className="button-orange mt-auto">Link</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon font-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon font-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}
export default Homepage;
