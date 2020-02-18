import * as React from 'react';
import ProductCard from './ProductCard';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
        <Link to="/products" className="btn--link show-all-link">
          View All <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div className="store-card-categories">
        <Carousel {...settings}>
          <div className="column">
            <ProductCard />
          </div>
          <div className="column">
            <ProductCard />
          </div>
          <div className="column">
            <ProductCard />
          </div>
          <div className="column">
            <ProductCard />
          </div>
          <div className="column">
            <ProductCard />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default BestSellingItems;