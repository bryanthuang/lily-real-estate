import { BrowserRouter, NavLink, Link, Route, useLocation } from 'react-router-dom';
import React, {useState} from 'react';
import logo from '../assets/Logo-realestate.png';
import '../styles/Footer.scss';
import { Grid, Image } from 'semantic-ui-react';
import compass from '../assets/compassLogo-black.png';
import nar from '../assets/nar-black.png';
import eho from '../assets/eho.png'
import { isMobile } from 'react-device-detect';

const Footer = () => {
  return (
      <Grid relaxed columns={3} centered className='footer'>
        <Grid.Row>
          <Grid.Column className='logos' verticalAlign='middle' padded computer={3} mobile={16} tablet={2}>
            <Grid.Row>
              <img loading='eager' src={logo} className='logo-image' alt='logo' title='logo'/>
            </Grid.Row>
            <Grid.Row>
              <a href='https://www.compass.com/agents/lily-lai/' target='_blank' rel='noreferrer'>
                <img loading='eager' className='compass-logo' title='compass-logo' src={compass} alt='compass-logo'></img>
              </a>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column className='contact' padded computer={6} mobile={16} tablet={4}>
            <div className='info'>lily@lilylaisf.com</div>
            <div className='info'>415.728.2623</div>
            <div className='info'>DRE #02123349</div>
            <div className='info address'>3899 24th St</div>
            <div className='info'> San Francisco, CA 94114</div>
          </Grid.Column>
          {/* <Grid.Column className='links' verticalAlign='middle'>
            {links.map(link => 
              <Grid.Row>
                <NavLink to={link.link}>{link.name}</NavLink>
              </Grid.Row>
            )}
          </Grid.Column> */}
          <Grid.Column className='icons' verticalAlign='bottom' computer={4} mobile={16} tablet={2}>
            <a href='https://bit.ly/433qBRc' target='_blank' rel='noreferrer'>
              <img loading='eager' alt='instagram' title='instagram' src='https://img.icons8.com/sf-ultralight/100/instagram-new.png'/>
            </a>
            <a href='https://bit.ly/3MokJuE' target='_blank' rel='noreferrer'>
              <img loading='eager' alt='facebook' title='facebook' src='https://img.icons8.com/sf-ultralight/100/facebook.png'/>
            </a>
            <a href='https://bit.ly/3BQ1dm3' target='_blank' rel='noreferrer'>
              <img loading='eager' alt='linkedin' title='linkedin' src='https://img.icons8.com/sf-ultralight/100/linkedin.png'/>
            </a>

          </Grid.Column>
        </Grid.Row>
        <div className='disclaimer'>
          <div>
            <Image loading='eager' title='nar' alt='nar' src={nar} size='mini' wrapped/>
            <Image loading='eager' title='eho' alt='eho' src={eho} size='mini' wrapped/>
          </div>
          {isMobile ? 
            <div>
              <p>Copyright © 2024 Lily Lai Real Estate</p>
              <p>All Rights Reserved  | <NavLink to='/privacypolicy'>Privacy Policy</NavLink></p>
            </div>
            : <div>
                <p>Copyright © 2024 Lily Lai Real Estate | All Rights Reserved  | <NavLink to='/privacypolicy'>Privacy Policy</NavLink></p>
              </div>
          } 
        </div>
      </Grid>
  );
};

export default Footer;