import * as React from 'react';
import Carousel from './Carousel';
import { categoryCarousel } from '../../utils/metadata';

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return <div className={`${className} round-arrow`} onClick={onClick} />;
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return <div className={`${className} round-arrow`} onClick={onClick} />;
};

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
  touchMove: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Categories = () => {
  return (
    <div className="store-card-container">
      <div className="store-card-categories border-0">
        <Carousel {...settings}>
          {categoryCarousel.map(({ name, img }, key) => {
            return (
              <div
                className="d-flex flex-column align-items-center click my-2"
                key={key}
              >
                <img src={img} width="60" className="img-fluid mx-auto" />
                <p className="text-center mb-0" style={{ fontSize: '13px' }}>
                  {name.replace('and', '&')}
                </p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Categories;
