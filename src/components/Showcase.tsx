import * as React from 'react';
import ProductCard from './ProductCard';
import BreadcrumbList from './BreadcrumbList';

const Showcase = () => {
  return (
    <div className="bg-white border">
      <BreadcrumbList />
      <div className="px-3">
        <p>Best Selling Items</p>
        <div className="d-flex product-grid flex-wrap py-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
