import React, { useLayoutEffect, useState, useRef, useEffect} from 'react';
import parse from 'html-react-parser';
import { testimonials } from '../constants/constants';
import '../styles/Testimonials.scss';

function Testimonials() {
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
    <div className="testimonials">
      <h1 className='title'>Testimonials</h1>
      <div className='testimonial-grid'>
        {testimonials.map((testimonial) => 
          <FadeInSection>
            <article className='testimonial'>
              {parse(testimonial.content)}
              <b className='name'>- {testimonial.name}</b>
            </article>
          </FadeInSection>
        )}
      </div>
    </div>
  );
}

export default Testimonials;