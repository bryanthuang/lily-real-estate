import { BrowserRouter, NavLink, Link, Route, useLocation } from "react-router-dom";
import {isMobile} from 'react-device-detect';
import React, {Fragment, useState} from 'react';
import logo from '../assets/RGB_LilyLaiLogo_White.png';
import '../styles/Navbar.scss';
import hamburger from '../assets/hamburger.svg';
import close from '../assets/close.svg';
import video from '../assets/home7.mp4';
import { Icon, Divider} from "semantic-ui-react";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);


  const path = useLocation().pathname;
  const location = path.split("/")[1].toLowerCase();
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={`navbar header-${location}`}>
      {location === '' && <video src={video} autoPlay muted loop></video>}
      <div className="logo">
        <NavLink to='/'>
          <img src={logo} className='logo-image' alt="logo" />
        </NavLink>
      </div>
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={!showNavbar ? hamburger : close } className='hamburger' alt="logo" />
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
      {/* <div className="tagline">
        {location === 'testimonials' && 'Testimonials'}
        {location === '' && 'This is my tagline'}
        {location === 'contact' && 'Contact Me'}
      </div> */}
    </nav>
  );
};

export default Navbar
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import MenuItem from '@mui/material/MenuItem';
// import { Link } from 'react-router-dom'
// import {pages} from '../constants/constants'
// import { useLocation } from 'react-router-dom';

// import '../styles/Navbar.scss'
// function Navbar() {

  // const path = useLocation().pathname;
  // const location = path.split("/")[1];
//   console.log(location)

//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
 
//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar position="static" color="transparent" className={` navbar header-${location}`}>
//       <Toolbar disableGutters>
//         <div className="left-nav">
//           {pages.left.map((page) => (
//             <MenuItem key={page.name} onClick={handleCloseNavMenu} style={{ backgroundColor: 'transparent' }}>
//               <Typography textAlign="center"><Link to={`${page.link}`} className='menu-item'>{page.name}</Link></Typography>
//             </MenuItem>
//           ))}
//         </div>
//       <Link to='/'>
//           <img src={logo} className='logo' alt="logo" />
//         </Link>
//         <div className="right-nav">
//           {pages.right.map((page) => (
//             <MenuItem key={page.name} onClick={handleCloseNavMenu} style={{ backgroundColor: 'transparent' }}>
//               <Typography textAlign="center"><Link to={`${page.link}`} className='menu-item'>{page.name}</Link></Typography>
//             </MenuItem>
//           ))}
//         </div>
//       </Toolbar>
      
      
//     </AppBar>
//   );
// }
// export default Navbar;
