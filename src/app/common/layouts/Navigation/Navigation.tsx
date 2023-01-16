import React, { useRef, useState, useEffect } from 'react';
import Icon from 'app/common/component/icon/Icon';
import { NavigationTextEnum } from 'app/core/enums';
import { Link } from 'react-scroll';

const Navigation: React.FC = () => {
  const [active, setActive] = useState<string>('/');
  const [showNav, setShowNav] = useState<boolean>(false);

  /**
   * @description handle select the content
   * @param target the target of selection
  */
  const handleActiveNav = (target: NavigationTextEnum) => {
    switch (target) {
      case (NavigationTextEnum.Home): {
        setActive('/')
        break;
      }
      case (NavigationTextEnum.About): {
        setActive('about')
        break;
      }
      case (NavigationTextEnum.Skills): {
        setActive('skills')
        break;
      }
      case (NavigationTextEnum.Projects): {
        setActive('projects')
        break;
      }
      case (NavigationTextEnum.Services): {
        setActive('services')
        break;
      }
      case (NavigationTextEnum.Contact): {
        setActive('contact')
        break;
      }
    }
  }
  /**
   * @description handle show the navigation bar
  */
  function createScrollStopListener(element: any, callback: any) {
      let handle: any = null;
      let onScroll = function() {
          if (handle) {
            setShowNav(true);
            clearTimeout(handle);
          }
          handle = setTimeout(callback,  1500);
      };
      element.addEventListener('scroll', onScroll);
  }

  createScrollStopListener(window, function() {
    setShowNav(false);
  });

  return (
    <nav
      className={showNav ? 'active' : ''}
    >
      <ul className="d-flex justify-content-center nav-container">
        <li
          className={active === '/' ? 'nav-icon active' : 'nav-icon'}
        >
          <Link to="banner" spy={true} smooth={true} offset={-100} duration={200} onClick={() => handleActiveNav(NavigationTextEnum.Home)}  >
            < Icon name="Home"/>
          </Link>
        </li>
        <li 
          className={active === 'about' ? 'nav-icon active' : 'nav-icon'}
        >
          <Link to="about" spy={true} smooth={true} offset={-100} duration={200} onClick={() => handleActiveNav(NavigationTextEnum.About)} >
            <Icon name="About" />
          </Link>
        </li>
        <li
          className={active === 'skills' ? 'nav-icon active' : 'nav-icon'}
        >
          <Link to="skills" spy={true} smooth={true} offset={-100} duration={200} onClick={() => handleActiveNav(NavigationTextEnum.Skills)}>
            <Icon name="Skills" />
          </Link>
        </li>
        <li
          className={active === 'projects' ? 'nav-icon active' : 'nav-icon'}
        >
          <Link to="projects" spy={true} smooth={true} offset={-100} duration={200} onClick={() => handleActiveNav(NavigationTextEnum.Projects)}>
            <Icon name="Projects" />
          </Link>
        </li>
        <li
          className={active === 'services' ? 'nav-icon active' : 'nav-icon'}
          
        >
          <Link to="services" spy={true} smooth={true} offset={0} duration={200} onClick={() => handleActiveNav(NavigationTextEnum.Services)}>
            <Icon name="Services" />
          </Link>
        </li>
        <li
          className={active === 'contact' ? 'nav-icon active' : 'nav-icon'}
          
        >
          <Link to="contact" spy={true} smooth={true} offset={0} duration={200} onClick={() => handleActiveNav(NavigationTextEnum.Contact)}>
            <Icon name="Contact" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
