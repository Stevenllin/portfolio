import React from 'react';
import { NavigationOption } from 'app/core/defines/Homepage';

const Navigation: React.FC = () => {
  return (
    <div className="nav-container">
      <ul className="d-flex">
      {
        NavigationOption.map((item, index) => (
          <li
            key={index}
            className="fs-sm fc-2 fw-lighter"
          >
            {item.text}
          </li>
        ))
      }
    </ul>
    </div>
  );
}

export default Navigation;
