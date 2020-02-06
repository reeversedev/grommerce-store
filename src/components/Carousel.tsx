import * as React from 'react';
import Slider from 'react-slick';

const Carousel = ({ children }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    touchMove: true
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
