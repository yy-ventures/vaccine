import React from "react";

import Quote from "./Quote";
import Headshot from "./Headshot";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonials from "./testimonials.json";
import "./TestimonialSlider.scss";

export default class TestimonialSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  objectMap = (obj, fn) =>
    Object.fromEntries(
      Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)])
    );

  render() {
    const items = this.objectMap(testimonials, ({ image }) => {
      return (
        <>
          <div className="slider-container">
            <Headshot image={image} />
          </div>
        </>
      );
    });
    const quotes = this.objectMap(
      testimonials,
      ({ name, quote, designation }) => {
        return (
          <>
            <div className="slider-container">
              <Quote name={name} quote={quote} designation={designation} />
            </div>
          </>
        );
      }
    );
    const settings_image = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      loop: true,
      arrows: false,
    };

    const settings_quote = {
      fade: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      arrows: false,
    };

    return (
      <>
        <section className="testimonials">
          <div className="row carousel ">
            <div className="col-md-6 ">
              <Slider
                asNavFor={this.state.nav1}
                {...settings_quote}
                ref={(slider) => (this.slider2 = slider)}
              >
                {Object.values(quotes)}
              </Slider>
            </div>
            <div className="col-md-6 image-column-class">
              <Slider
                asNavFor={this.state.nav2}
                {...settings_image}
                ref={(slider) => (this.slider1 = slider)}
              >
                {Object.values(items)}
              </Slider>
            </div>
          </div>
        <div id="circle"></div>
        </section>
      </>
    );
  }
}
