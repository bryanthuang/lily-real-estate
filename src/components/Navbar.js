import {  NavLink, useLocation } from "react-router-dom";
import {isMobile} from 'react-device-detect';
import React, {Fragment, useState} from 'react';
import logo from '../assets/RGB_LilyLaiLogo_White.png';
import logoBlack from '../assets/RGB_LilyLaiLogo_Black.png'
import '../styles/Navbar.scss';
import hamburger from '../assets/hamburger.svg';
import close from '../assets/close.svg';
import { Icon } from "semantic-ui-react";
import {useLockBodyScroll, useToggle} from 'react-use';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [locked, setLocked] = useToggle(false)
  useLockBodyScroll(locked)
  const path = useLocation().pathname;
  const location = path.split("/")[1].toLowerCase();
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    isMobile ? setLocked(!locked) : setLocked(false)
  };

  return (
    <nav className={`navbar header-${location}`}>
      {location === '' && <video src='https://res.cloudinary.com/dlaituqwq/video/upload/f_auto:video,q_auto/nyqditwg1sqyqollk3if' autoPlay muted loop></video>}
      <div className="logo">
        {location !== 'about' && 
          <NavLink to='/'>
            <img loading='eager' src={logo} title='logo' className='logo-image' alt="logo" />
          </NavLink>
        }
        {location === 'about' && 
          <NavLink to='/'>
            <img loading='eager' src={logoBlack} title='logo' className='logo-image' alt="logo" />
          </NavLink>
        }
      </div>
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img loading='eager' title='hamburger-menu' alt='hamburger-menu' src={!showNavbar ? hamburger : close } className='hamburger' />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            { !isMobile && <Fragment>
              <li>
              {/* <NavLink to="/buyers" onClick={handleShowNavbar} className='link-underline'></NavLink> */}
            </li>
            <li>
              {/* <NavLink to="/sellers" onClick={handleShowNavbar} className='link-underline'></NavLink> */}
            </li>
            <li>
              {/* <NavLink to="/market-updates" onClick={handleShowNavbar} className='link-underline'></NavLink> */}
            </li>
              </Fragment>}
            <li>
              <NavLink to="/testimonials" onClick={handleShowNavbar} className='link-underline'>Testimonials</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleShowNavbar} className='link-underline'>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleShowNavbar} className='link-underline'>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className='contact-info'>
          <Icon name='phone'/><span>415.728.2623 </span>
          <Icon name='mail'/><span>lily@lilylaisf.com</span>
        </div>
      </div>
      <div className='tagline'>
        {location === '' && 'Your Success as Our Compass'}
      </div>
      {/* <div className="tagline">
        {location === 'testimonials' && 'Testimonials'}
        {location === 'contact' && 'Contact Me'}
      </div> */}
    </nav>
  );
};

export default Navbar