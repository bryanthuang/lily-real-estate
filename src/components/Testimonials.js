import React, { useLayoutEffect, useState, useRef, useEffect} from 'react';
import FadeInSection from '../components/FadeInSection';
import parse from 'html-react-parser';
import { testimonials } from '../constants/constants';
import '../styles/Testimonials.scss';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { Helmet } from 'react-helmet-async';
function Testimonials() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <>
    <Helmet>
      <title>Lily Lai Real Estate</title>
      <meta name='description' content='Explore client success stories with Lily Lai SF. Realize dreams, find homes, and experience exceptional service through our heartfelt testimonials.' />
      <link rel='canonical' href='/testimonials' />
    </Helmet>
    <div className="testimonials">
      <h1 className='title'>Testimonials</h1>
      {/* <div className='testimonial-grid'> */}
      <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 950: 2, 1200: 3}}
        className='testimonial-grid'
      >
        <Masonry gutter={'2em'}>
          {testimonials.map((testimonial) => 
            <FadeInSection>
              <article className='testimonial'>
                {parse(testimonial.content)}
                <b className='name'>- {testimonial.name} -</b>
              </article>
            </FadeInSection>
          )}
        </Masonry>
      </ResponsiveMasonry>
      {/* </div> */}
    </div>
    </>
  );
}

export default Testimonials;