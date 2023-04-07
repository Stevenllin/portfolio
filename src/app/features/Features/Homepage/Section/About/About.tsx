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
                  {/** 多元的產業經驗 教育經驗 喜歡團隊合作 熱愛研究新的技術  */}
                  {/** 不害怕挑戰-放棄過去所學 自學軟體 */}
                  {/** 獨立自主、適應力強-大陸生活 英國留學 */}
                  {/** 我是一個熱愛學習、勇於挑戰的人，因此，放棄過去所學得專業知識，自學軟體直到現在。除此之外，過去曾在大陸生活過一段時間，後來去英國留學，碰到多變的環境，造就了適應力極強的我 */}
                  <p className="fs-xs fc-2 line-height fw-lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
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
