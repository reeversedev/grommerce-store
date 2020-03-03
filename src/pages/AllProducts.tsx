import * as React from 'react';
import CategoryList from '../components/CategoryList';
import Showcase from '../components/Showcase';

const AllProducts = () => {
  return (
    <div className="mt-4">
      <div className="d-flex">
        <div className="w-25 d-none d-lg-block">
          <CategoryList />
        </div>
        <div className="w-lg-75">
          <Showcase />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
