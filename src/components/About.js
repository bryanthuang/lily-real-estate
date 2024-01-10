import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import { Grid, Container, Header, Image } from 'semantic-ui-react';
import ReactPlayer from 'react-player/lazy';
import lily from '../assets/Lily01.jpg'
import car from '../assets/car.png';
import nar from '../assets/nar.png';
import rs from '../assets/rs.png';
import wcr from '../assets/wcr.png';
import sfar from '../assets/sfar.jpeg';
import green from '../assets/green-logo.jpg';
import '../styles/About.scss';

function About() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

  return (
    <div className="about">
      <h1 className='title'>About Me</h1>
      <Container className='about-text'>
        <div className='video'>
          <ReactPlayer
            url="https://streamable.com/q6ophg"
            className="react-player"
            playing={false}
            width="100%"
            height="100%"
          />
        </div>
        <Image className='image' src={lily} size='medium'/>
        <Container>
          <p>
            <FadeInSection>
              I am a native San Franciscan who has traveled to many parts of the world but wouldn't call any place home other than the Bay Area. Real estate merges my love of architecture, interior design, and client service into a business that brings me great joy.
            </FadeInSection>
          </p>
          <p>
            <FadeInSection>
              I cherish my role as a trusted advisor, guiding clients in navigating through the many challenges of the competitive local market when buying their first home. Or presenting a home in the most attractive way, from leveraging intimate knowledge of active buyers' preferences when selling a home driven by job relocation or downsizing and all that's in between.
            </FadeInSection>
          </p>
          <p>
            <FadeInSection>
              My years working alongside my dad delivering small to large-scale renovation projects offer me a unique perspective when assessing the opportunities in modernizing the home to meet the needs of modern-day lifestyle and the construction costs associated with such value add.
            </FadeInSection>
          </p>
          <p>
            <FadeInSection>
              I am committed, dedicated, and enthusiastic when working with clients who are ready to transition into the next stage of life. I am confident I will bring a positive impact to this life-changing process.
            </FadeInSection>
          </p>
          <p>
            <FadeInSection>
              <b>Languages:</b> English, Chinese(中文 - 廣東話/普通話)
            </FadeInSection>
          </p>
        </Container>

        
      </Container>
      <Container className='affiliations'>
        <FadeInSection>
          <h1 className='title'>Affiliations</h1>
        </FadeInSection>
        <FadeInSection>
          <li className='affiliation'>Women's Council of Realtors San Francisco, 2024 President</li>
        </FadeInSection>
        <FadeInSection>
          <li className='affiliation'>Women's Council of Realtors San Francisco, 2023 First Vice President</li>
        </FadeInSection> 
        <FadeInSection>
          <li className='affiliation'>Compass's Rising Star, 2023</li>
        </FadeInSection>
        <FadeInSection>
          <li className='affiliation'>National Association of Realtors, Member </li>
        </FadeInSection>
        <FadeInSection>
          <li className='affiliation'>California Association of Realtors, Member </li>
        </FadeInSection>
        <FadeInSection>
          <li className='affiliation'>San Francisco Association of Realtors, Member </li>
        </FadeInSection>
        <FadeInSection>
          <li className='affiliation'>National Association of Realtor's Green Designation</li>
        </FadeInSection>
        <Grid className='affiliation-logos' centered>
          <Grid.Row centered  verticalAlign='middle'>
            <Grid.Column mobile={8} tablet={4} computer={2} textAlign='justified'>
              <FadeInSection>
                <Image className='logo' alt='car' src={car} size='small' centered/>
              </FadeInSection>
            </Grid.Column>
            <Grid.Column mobile={8} tablet={4} computer={2}>
              <FadeInSection>
                <Image className='logo' alt='sfar' src={sfar} size='small' centered/>
              </FadeInSection>
            </Grid.Column>
            <Grid.Column mobile={8} tablet={4} computer={2}>
              <FadeInSection>
                <Image className='logo' alt='wcr' src={wcr} size='small' centered/>
              </FadeInSection>
            </Grid.Column>
            <Grid.Column mobile={8} tablet={4} computer={2}>
              <FadeInSection>
                <Image className='logo' alt='nar' as=''src={nar} size='tiny' centered/>
              </FadeInSection>
            </Grid.Column>
            <Grid.Column mobile={8} tablet={4} computer={2}>
              <FadeInSection>
                <Image className='logo' src={green} size='small' centered/>
              </FadeInSection>
            </Grid.Column>
            <Grid.Column mobile={8} tablet={4} computer={2}>
              <FadeInSection>
                <Image className='logo' alt='rs' src={rs} size='small' centered/>
              </FadeInSection>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
