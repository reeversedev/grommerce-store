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

const BestSellingItems = () => {
  return (
    <div className="store-card-container">
      <div className="slider-header">
        <p>Best Selling Items</p>{' '}
        <a href="" className="btn--link show-all-link">
          View All <i class="icofont-simple-right" />
        </a>
      </div>
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
};

export default BestSellingItems;
