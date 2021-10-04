import React from 'react'

import Quote from './Quote'
import Headshot from './Headshot'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import testimonials from './testimonials.json';
import './TestimonialSlider.scss';



export default class TestimonialSlider extends React.Component {


  componentDidMount() {
    this.setState({
      nav1: this.slider1,
    });
  }
  


// testimonialsList = List(Tes) 
// console.log(testimonials.map(()=>{
//   return 1
// }));
  objectMap = (obj, fn) =>
  Object.fromEntries(
    Object.entries(obj).map(
      ([k, v], i) => [k, fn(v, k, i)]
    )
  )
  
      render() {

        const items = this.objectMap(testimonials, ({name, image, quote, designation})=>{
  return <div className="slider-container">
  <Quote info = {{name, quote, designation}}/>
  <Headshot image={image}/>
  </div>;
});
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };


        return <>
        <div className="testimonials">
          <div className="carousel">
          <Slider {...settings}
          ref={slider => (this.slider1 = slider)}
        >
          { Object.values(items)}
        </Slider>
        </div>
          <div id="circle"></div>
        </div>
        </>;
      }
}