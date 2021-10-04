import React, { useState } from 'react'

import Quote from './Quote'
import Headshot from './Headshot'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import testimonials from './testimonials.json';
import './TestimonialSlider.scss';



export default class TestimonialSLider extends React.Component {


  componentDidMount() {
    this.setState({
      nav1: this.slider1,
    });
  }
  
// const items = testimonials.map(({name, image, quote, designation})=>{
//   return (<>
//   <Quote prop={quote, name, designation}/>
//   <Headshot image={image}/>
//   </>);
// });

// testimonialsList = List(Tes) 
// console.log(testimonials.map(()=>{
//   return 1
// }));
      render() {
        const items = [
    <div className="item" data-value="1">1</div>,
    <div className="item" data-value="2">2</div>,
    <div className="item" data-value="3">3</div>,
    <div className="item" data-value="4">4</div>,
    <div className="item" data-value="5">5</div>,
    ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


        return <>
        <div className="testimonials">
          {/* 
              Array of Components that are the slides
              and inside them will be a quote and a headshot
          */}
          <div className="carousel">
          <Slider {...settings}
          ref={slider => (this.slider1 = slider)}
        >
          {items.map(()=><div className="slider-container"><Quote/><Headshot/></div>)}
        </Slider>
        </div>
          <div id="circle"></div>
        </div>
        </>;
      }
}