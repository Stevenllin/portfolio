import React from 'react';
import { NavigationOption } from 'app/core/defines/Homepage';

const Navigation: React.FC = () => {
  return (
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
  );
}

export default Navigation;
