import React from 'react';
import Icon from 'app/common/component/icon/Icon';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="contact-container">
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
  )
}

export default Contact;