import React, { useState, useEffect } from 'react';
import { SkillsOption } from 'app/core/defines/Homepage';
import { SkillsDataState } from './types';
import { SkillsData } from '../../Data';
import { motion, AnimatePresence } from "framer-motion";
import CircleProgressbar from 'app/common/component/CircleProgressbar/CircleProgressbar';

const Skills: React.FC = () => {
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
    <div className="skills-container">
      <div className="d-flex">
        <div className="line" />
        <p className="font-style-1">Discover</p>
      </div>
      <p className="font-style-2">What can I do</p>
      <ul className="d-flex">
        {
          SkillsOption.map((item, index) => {
            return (
              <li
                key={index}
                className={skillsDataState[index]?.isSelected ? 'skills-select selected' : 'skills-select'}
                onClick={() => handleSelectSkills(index)}
              >
                <p className="font-style-3">{item.text}</p>
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
            <div className="skills-grid">
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
  );
}

export default Skills;