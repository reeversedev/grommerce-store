import * as React from 'react';
import Slider from 'react-slick';

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = props => {
  return <Slider {...props}>{props.children}</Slider>;
};

export default Carousel;
