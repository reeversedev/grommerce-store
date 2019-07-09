import React from 'react';
import Slider from 'react-slick';
import Card from '../components/Card';

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  arrows: true,
  touchMove: true
};

const Index = () => (
  <div className="store-card-container">
    <div className="store-card-categories">
      <Slider {...settings}>
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
      </Slider>
    </div>
  </div>
);

export default Index;
