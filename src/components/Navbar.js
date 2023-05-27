import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'
import logo from '../assets/RGB_LilyLaiLogo_White.png';
import {pages} from '../constants/constants'
import { useLocation } from 'react-router-dom';

import '../styles/Navbar.scss'
function Navbar() {

  const path = useLocation().pathname;
  const location = path.split("/")[1];
  console.log(location)

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent" className={` navbar header-${location}`}>
      <Toolbar disableGutters>
        {pages.left.map((page) => (
          <MenuItem key={page.name} onClick={handleCloseNavMenu}>
            <Typography textAlign="center"><Link to={`${page.link}`}>{page.name}</Link></Typography>
          </MenuItem>
        ))}
        <Link to='/'>
          <img src={logo} className='logo' alt="logo" />
        </Link>
        {pages.right.map((page) => (
          <MenuItem key={page.name} onClick={handleCloseNavMenu}>
            <Typography textAlign="center"><Link to={`${page.link}`}>{page.name}</Link></Typography>
          </MenuItem>
        ))}
      </Toolbar>
      
      
    </AppBar>
  );
}
export default Navbar;