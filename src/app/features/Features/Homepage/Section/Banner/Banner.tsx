import React from 'react';
import Icon from 'app/common/component/icon/Icon';
import { motion } from "framer-motion";

const Banner: React.FC = () => {
  return (
    <div id="banner" className="w-100 banner-container">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.75 }}
        className="banner-text fs-sm"
      >
        <p className="d-flex justify-content-end">Hello!!</p>
        <p className="d-flex justify-content-end align-items-center">
          This is 
          <motion.span
            initial={{ color: '#FFFFFF' }}
            animate={{ color: '#D6AC86' }}
            transition={{ delay: 0.85 }}
            className="ms-2 fs-md fc-1 fw-light"
          >
            Steven Lin
          </motion.span>
        </p>
        <div className="d-flex justify-content-end">
          <div className="d-flex align-items-center me-3">
            <Icon name="Dash" />
          </div>
          <p>A creative Front-end developer</p>
        </div>
      </motion.div>
      <img
        className="w-100"
        src={require('assets/image/banner.jpeg')}
        alt="banner"
      />
    </div>
  );
}


export default Banner;

