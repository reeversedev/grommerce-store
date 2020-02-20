import * as React from 'react';
import BestSellingItems from '../components/BestSellingItems';
import Categories from '../components/Categories';

const Homepage = () => {
  return (
    <>
      <Categories />
      <BestSellingItems />
    </>
  );
};

export default Homepage;
