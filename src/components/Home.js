import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Home.scss';
import { Button, Container, Grid, Image, Header, Icon } from 'semantic-ui-react';
import ContactModal from './ContactModal';
import image from '../assets/RGB_LilyPhoto.jpg';
// import contactHome from '../assets/contact-home.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import arches from '../assets/arches.png'
function Home() {
  const [isOpen, setIsOpen] = useState(false)
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
    <div className='home'>
      {/* section CTA */}
      <div className='cta'>
        <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
        <Image src={arches} className='arches' size='huge' verticalAlign='bottom'/>

      </div>
      {/* section About Me */}
      <Grid className='about'>
        <Grid.Column computer={4} mobile={12} tablet={4} verticalAlign='middle'>
          <FadeInSection>
            <Image src={image} className='about-image' circular/>
          </FadeInSection>
        </Grid.Column>
        <Grid.Column computer={6} mobile={12} tablet={6} verticalAlign='middle'>
          <FadeInSection>
            <Container className='about-text'>
              <p>
                I am a passionate Bay Area Realtor with expertise in home renovations, empowering clients with winning personalized strategies created from intimate market knowledge.
              </p>
            <NavLink className='about-link link-underline' to="/about">More About Me→</NavLink>
            </Container>
          </FadeInSection>

        </Grid.Column>
      </Grid>
      {/* section Testimonials */}
      <div className='testimonials'>
        <FadeInSection>

          <div className='title'>
            Testimonials
          </div>
        </FadeInSection>
        <FadeInSection>
          <Carousel 
            className='carousel'
            autoPlay
            interval={5000}
            showIndicators={false}
            showStatus={false}
            infiniteLoop
            renderArrowPrev={(clickHandler, hasPrev) => {
              return (
                <div onClick={clickHandler} className="left arrow">
                  <Icon name='angle left'  />
                </div>
              );
            }}
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                <div onClick={clickHandler} className='right arrow'>
                  <Icon name='angle right' />
                </div>
              );
            }}
          >
            <div className='carousel-item'>
              <div className='carousel-item-text'>
                <p>"Lily sold my home under the most challenging of circumstances in a market unfavorable towards sellers. She skillfully navigated every obstacle throughout the sale and was able to secure the best price possible for my home at the time. I was tremendously impressed by every offer that she presented to me, as she had already advocated for my interests with each potential buyer before even asking for my consideration. She took the time to understand my preferences and ensured that the result reflected my needs.</p>
                <p><b>Lily is an agent who will go above and beyond for her clients.</b> The objective proof of her talent is reflected in the fact that she was able to sell my home within weeks while there were multiple comparable houses in the same neighborhood that remained on the market for months without any activity. Whether you own a home or are looking to buy one, you absolutely need Lily to represent you in the process. <b>She has the unique ability to turn a stressful situation into the best possible outcome, and I would trust her completely to represent me in future transactions."</b></p>
                <b>- Anna Z.</b>
              </div>
            </div>
            <div className='carousel-item'>
              <div className='carousel-item-text'>
                <p>"I met Lily in high school and when I started thinking about purchasing a home, I immediately reached out to her. It didn't matter how long it had been since we had seen or spoken to each other, it was as if nothing changed and she was so kind and approachable. I had seen her social media posts of being a real estate agent and knew I could trust her with the process.</p><p>She provided me with a lot of knowledge and support throughout my endeavor and was so on top of everything. I showed and told her what I was looking for, she provided some options and positive/honest feedback, and came with me to look at open houses. When I decided on what I wanted, I felt as though the process did go smoothly - <b>if there were “bumps in the road”, she made sure I knew what was happening and what certain things meant.</b> I appreciate her help and professionalism as a new homeowner, and I highly recommend her services to anyone searching for a home. She's also very knowledgeable of home renovations due to her family's background, which I believe compliments her role as an agent."</p>
                <b>- Christina C.</b>
              </div>
            </div>
            <div className='carousel-item'>
              <div className='carousel-item-text'>
                <p>Lily became my trusted guide throughout the entire homebuying journey.</p><p>If you told me that I'd ultimately own a condo in the heart of my dream neighborhood within my budget in one of the most competitive markets in the country… I would've laughed it off as a joke. But <b>Lily helped me do just that—achieve what I thought was an impossible pipe dream, all while displaying an incredible amount of patience, empathy, and encouragement along the way.</b> Lily stood by my side as I entertained detours, became my sounding board as I worked through different options, and armed me with all the information I needed to make the right decision.</p><p>I look forward to working with Lily again and would highly recommend her to anyone who is looking to buy or sell their home!</p>
                <b>Christine L.</b>
              </div>
            </div>
            <div className='carousel-item'>
              <div className='carousel-item-text'>
              <p>As first-time home buyers, we were lucky to have Lily as our agent.  She took the time to explain the market basics (which for SF is a lot of basics), helped us navigate some unique situations with our best interests in mind, and most importantly provided insights from her experience. Lily was always available to hop on a call or respond via text to questions/concerns/requests. <b>Expertise-wise, I valued her input from both a financial/market perspective as well as from a renovating/design/materials.</b> Lily consistently showed herself as our advocate throughout the home buying process, via communications with sellers, writing terms in the purchase agreement to address our risks and concerns, etc. I never felt like I've asked too many questions, and my advice is to continue to maintain open communication and discuss expectations as agent/client - they are actively listening and will take action with your best interests in mind.</p>
              <b>- Teresa Y.</b>
              </div>
            </div>
            <div className='carousel-item'>
              <div className='carousel-item-text'>
              <p>Lily helped me and my husband buy a home in early summer 2023. She helped us move through the processes with as little headache as possible. As first time home-buyers, we had a lot of questions about this stressful process, and she helped us through each and every one of these questions and even encouraged us to consider things that we hadn't thought of yet. <b>She represented our best interests very well by being communicative with our lender, the seller's agent, and of course with us.</b> Next time we are in the market to buy a home, we will be contacting Lily.</p>
              <b>- Elizabeth R.</b>
              </div>
            </div>
          </Carousel>
        </FadeInSection>
        <FadeInSection>
          <NavLink className='testimonials-link link-underline' to="/testimonials">More Testimonials→</NavLink>
        </FadeInSection>
      </div>
      {/* <div className='left-pane'>
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
      </div>*/}
    </div> 
  );
}

export default Home;
