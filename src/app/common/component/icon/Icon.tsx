import React from 'react';
import { IconTextEnum } from 'app/core/enums/iconTextEnum';
import { Iconprops } from './types';

const Icon: React.FC<Iconprops>  = (props) => {
  if (props.name === IconTextEnum.Laptop) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-laptop-fill" viewBox="0 0 16 16">
        <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
      </svg>
    )
  }
  if (props.name === IconTextEnum.Dash) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
      </svg>
    )
  }
  if (props.name === IconTextEnum.Briefcase) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
        <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
      </svg>
    )
  }
  if (props.name === IconTextEnum.Activity) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-activity" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
      </svg>
    )
  }
  return null
}

export default Icon;
