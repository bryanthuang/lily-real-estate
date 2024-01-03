import React, { useState, useLayoutEffect} from 'react';
import { Grid, Segment, Header, Image } from 'semantic-ui-react';
import parse from 'html-react-parser';
import { testimonials } from '../constants/constants';
import '../styles/Testimonials.scss';

function Testimonials() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div className="testimonials">
      <h1 className='title'>Testimonials</h1>
      <div className='testimonial-grid'>
        {testimonials.map((testimonial) => 
            <article className='testimonial'>
              {parse(testimonial.content)}
              <b className='name'>- {testimonial.name}</b>
            </article>
        )}
      </div>
    </div>
  );
}

export default Testimonials;