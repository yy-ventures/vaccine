import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import peopleVaccine from "../../../assets/partners/vaccine-people.svg";
import avaaz from "../../../assets/partners/avaaz.svg";

import "./LogoSlider.scss";

export default class LogoSlider extends React.Component {
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
    });
  }

  objectMap = (obj, fn) =>
    Object.fromEntries(
      Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)])
    );

  render() {
    const items = this.objectMap(
      {"1":1,"2":2,"3":3},
      () => {
        return <div className="slider-container"></div>;
      }
    );
    const settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
    };

    return (
      <>
      <section className="slider-section">
        <div className="logo-slider">
            <Slider {...settings}>
                <div  className="logo-div"><img src={avaaz}/></div>
                <div className="logo-div" ><img src={peopleVaccine}/></div>
                <div  className="logo-div" ><img src={avaaz}/></div>
                <div className="logo-div" ><img src={peopleVaccine}/></div>
                <div className="logo-div" ><img src={avaaz}/></div>
                <div className="logo-div"><img src={peopleVaccine}/></div>
            </Slider>
        </div>
    </section>
      </>
    );
  }
}
