import React, { useState } from 'react';
import '../styles/Home.scss';
import image from '../assets/temp.jpg';
import compass from'../assets/compass.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Icon } from '@mui/material';

function Home() {
  return (
    <div className="home">
        <div className='left-pane'>
          <p>Lily Lai Real Estate</p>
          <p>DRE# 02123349</p>
          <p>(415) 728-2623</p>
          <a className="profileCard-email" href="mailto:lilylai@compass.com">lilylai@compass.com</a>
          <div className='icon-list'>
            <LinkedInIcon/>
            <InstagramIcon/>
            <FacebookIcon/>
          </div>
          <img className='compass-logo' src={compass} alt='compass-logo'></img>
        </div>
        <div className='right-pane'>
          {/* <img src={image} alt='home'></img> */}
        </div>
    </div>
  );
}

export default Home;
