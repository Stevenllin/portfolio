import React from 'react';
import { NavigationOption } from 'app/core/defines/Homepage';
import { motion } from "framer-motion";

const Navigation: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25 }}
      className="nav-container"
    >
      <ul className="d-flex">
      {
        NavigationOption.map((item, index) => (
          <li
            key={index}
            className="fs-xs fc-2 fw-lighter"
          >
            {item.text}
          </li>
        ))
      }
      </ul>
    </motion.div>
  );
}

export default Navigation;
