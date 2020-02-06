import React from 'react';
import Card from '../components/Card';
import Carousel from './Carousel';

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
          View All <i className="icofont-simple-right" />
        </a>
      </div>
      <div className="store-card-categories">
        <Carousel {...settings}>
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
        </Carousel>
      </div>
    </div>
  );
};

export default BestSellingItems;
