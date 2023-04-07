import React from 'react';
import Icon from 'app/common/component/icon/Icon';
import { ImLinkedin2 } from 'react-icons/im';
import { SiGmail } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { ImPhone } from 'react-icons/im';

const Contact: React.FC = () => {
  return (
    <div id="contact" >
      <div className="contact-container">
        <div className="d-flex justify-content-end">
          <div className="fs-sm fc-2 border-right-gold pe-4">
            <p className="fs-sm fc-2 fw-lighter">Let <span className="fs-md fc-1 fw-light">Contact</span> me</p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4 fc-2 px-3">
          <Icon name="Dash" />
          <p className="text-center fs-sm mx-3">If you are intereted in my experience, please leave me message without hesitation!!</p>
          <Icon name="Dash" />
        </div>
      </div>
      <div className="contact-content">
        <div className="icons mx-2">
          <ImPhone />
        </div>
        <div className="icons mx-2">
          <SiGmail />
        </div>
        <div className="icons mx-2">
          <ImLinkedin2 />
        </div>
        <div className="icons mx-2">
          <FiGithub />
        </div>
      </div>
    </div>
  )
}

export default Contact;