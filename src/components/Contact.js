import React, { useState, useRef, useEffect } from 'react';
import {Grid, Image} from 'semantic-ui-react';
import '../styles/Contact.scss';
import ContactForm from './ContactForm';
import image from '../assets/lily-17.jpg';
import FadeInSection from '../components/FadeInSection';

function Contact() {
  return (
    <Grid className='contact'>
      <Grid.Row>        
        <h1 className='title'>Contact Me</h1>
      </Grid.Row>
      <Grid.Column computer={4} mobile={12} tablet={4} verticalAlign='middle'>
        <FadeInSection>
          <Image src={image} className='about-image' />
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
  );
}

export default Contact;