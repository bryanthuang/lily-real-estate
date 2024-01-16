import React, { useLayoutEffect, useState, useRef, useEffect} from 'react';
import FadeInSection from '../components/FadeInSection';
import parse from 'html-react-parser';
import { testimonials } from '../constants/constants';
import '../styles/Testimonials.scss';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function Testimonials() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
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
                <b className='name'>- {testimonial.name}</b>
              </article>
            </FadeInSection>
          )}
        </Masonry>
      </ResponsiveMasonry>
      {/* </div> */}
    </div>
  );
}

export default Testimonials;