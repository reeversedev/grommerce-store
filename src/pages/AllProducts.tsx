import * as React from 'react';
import CategoryList from '../components/CategoryList';

const AllProducts = () => {
  return (
    <div className="mt-4">
      <div className="d-flex align-items-center">
        <div className="w-25">
          <CategoryList />
        </div>
        <div className="w-75">Something else</div>
      </div>
    </div>
  );
};

export default AllProducts;
