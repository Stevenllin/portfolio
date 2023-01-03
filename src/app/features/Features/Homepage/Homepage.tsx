import React, { useState, useEffect } from 'react';
import commonService from 'app/core/services/commonService';
import { motion, AnimatePresence } from "framer-motion";
import CircleProgressbar from 'app/common/component/CircleProgressbar/CircleProgressbar';
import { SkillsOption, NavigationOption } from 'app/core/defines/Homepage';
import { SkillsDataState } from './types';
import { SkillsData } from './Data';

const Homepage: React.FC = () => {
  /* Skills State */
  const [skillsDataState, setSkillsDataState] = useState<SkillsDataState[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<SkillsDataState>(SkillsData[0]);

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
        <motion.nav
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-2 banner-nav w-100 d-flex justify-content-end"
        >
          <ul>
            {
              NavigationOption.map((item, index) => (
                <li
                  key={index}
                  className="fs-24 color-white"
                >
                  {item.text}
                </li>
              ))
            }
          </ul>
        </motion.nav>
        <div className="banner-text w-100 h-100 text-center">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="fs-24 color-white">Hello!!</p>
            <p className="fs-48 color-white">I am a <span className="color-orange">Front-end developer</span></p>
          </motion.div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button className="button-white-outline" onClick={handleClickDownloadPDF}>
              Resume
            </button>
          </motion.div>
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
                className="w-60"
                src={require('assets/image/S__15106057.jpg')}
                alt="steven"
              />
            </div>
            <div className="d-flex align-items-center col-6">
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

      {/* Experience */}
      <div className="section-gray">
        <div className="container-1 p-2">
          <div className="d-flex justify-content-center">
            <div className="section-header">
              Experience
            </div>
          </div>
          <div className="vertical-line-right"/>
          <div className="row">
            <div className="col-6 p-4 vertical-line-right">
              <div className="experience-date fs-24">Nov 2022 - Now (TW)</div>
            </div>
            <div className="col-6 p-4"><p className="fs-24">Front-end developer</p></div>
          </div>
        </div>
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
