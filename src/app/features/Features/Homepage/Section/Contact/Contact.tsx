import React, { useState } from 'react';
import Icon from 'app/common/component/icon/Icon';
import { ImLinkedin2 } from 'react-icons/im';
import { SiGmail } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { ImPhone } from 'react-icons/im';
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [displatCopiedText, setDisplatCopiedText] = useState<boolean>(false);

  const handleCopyText = (text: string) => {
    if (displatCopiedText) return
    navigator.clipboard.writeText(text);
    setDisplatCopiedText(true);
  }

  setTimeout(() => {
    if (displatCopiedText) return setDisplatCopiedText(false)
  }, 3000);

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
        <div className="icons mx-2" onClick={() => handleCopyText("0978030930")}>
          <ImPhone />
        </div>
        <div className="icons mx-2" onClick={() => handleCopyText("stevenlin3263@gmail.com")}>
          <SiGmail />
        </div>
        <div className="icons mx-2">
          <a href="https://www.linkedin.com/in/steven-lin-811912220/">
            <ImLinkedin2 />
          </a>
        </div>
        <div className="icons mx-2">
          <a href="https://github.com/Stevenllin" >
            <FiGithub />
          </a>
        </div>
      </div>
      {
        displatCopiedText && (
          <motion.div
            className="w-100 mt-2"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-center fs-4 fc-1">Copied!!</p>
          </motion.div>
        )
      }
    </div>
  )
}

export default Contact;
