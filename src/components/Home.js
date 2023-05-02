import React, { useState } from 'react';
import '../styles/Home.scss';
import logo from '../assets/RGB_LilyLaiLogo_White.png';
import lily from '../assets/RGB_LilyPhoto.jpg';
import compass from'../assets/compass.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';

function Home() {
  return (
    <div className="home">
        <div className='left-pane'>
          <p className='brandon coming-soon'>COMING SOON</p>
          <img className='logo' src={logo} alt='logo'></img>
          <div className='middle-section'>
            <p className='name'>LILY LAI</p>
            <p className='realtor'>REALTOR®</p>
          </div>
          <div className='info-section'>
            <p>415.728.2623</p>
            <a href="mailto:lilylai@compass.com">lily@lilylaisf.com</a>
            <p>DRE 02123349</p>
            <div className='icon-list'>
              <IconButton color='primary' onClick={() => window.open('https://www.linkedin.com/in/lily-lai-03382a87/', '_blank')}>
                <LinkedInIcon/>
              </IconButton>
              <IconButton color='primary' onClick={() => window.open('https://www.instagram.com/lily_lai__/', '_blank')}>
                <InstagramIcon/>
              </IconButton>
              <IconButton color='primary' onClick={() => window.open('https://www.facebook.com/lily.lai.7370', '_blank')}>
                <FacebookIcon/>
              </IconButton>
            </div>
          </div>
          <img className='compass-logo' src={compass} alt='compass-logo'></img>
        </div>
        <div className='right-pane'>
          <img src={lily} alt='home'></img>
        </div>
    </div>
  );
}

export default Home;
