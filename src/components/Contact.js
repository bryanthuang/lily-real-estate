import React, { useState, useRef, useEffect } from 'react';
import {Grid, Image} from 'semantic-ui-react';
import '../styles/Contact.scss';
import ContactForm from './ContactForm';
import image from '../assets/lily-17.jpg';
import FadeInSection from '../components/FadeInSection';
import { Helmet } from 'react-helmet-async';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Lily Lai Real Estate</title>
        <meta name='description' content='Connect with Lily Lai Real Estate effortlessly. Reach out for inquiries, collaboration, or finding your dream home. Your journey starts with a simple message or call.' />
        <link rel='canonical' href='/contact' />
      </Helmet>
      <Grid className='contact'>
        <Grid.Row>        
          <h1 className='title'>Contact Me</h1>
        </Grid.Row>
        <Grid.Column computer={4} mobile={12} tablet={4} verticalAlign='middle'>
          <FadeInSection>
            <Image loading='eager' title='portrait' alt='portrait' src={image} className='about-image' />
          </FadeInSection>
        </Grid.Column>
        <ContactForm />
        <Grid.Row >
          OR
        </Grid.Row>
        <Grid.Row >
          Contact me directly via email or phone
        </Grid.Row>
      </Grid>
    </>
  );
}

export default Contact;