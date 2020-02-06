import * as React from 'react';
import Slider from 'react-slick';

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = props => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    touchMove: true
  };
  return <Slider {...settings}>{props.children}</Slider>;
};

export default Carousel;
