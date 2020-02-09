import * as React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import ProductCard from './ProductCard';

const Showcase = () => {
  return (
    <div className="bg-white border">
      <div className="d-flex justify-content-between">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#">Grocery & Staples</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Atta & Other Flours</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="px-3">
        <p>Atta & Other Flours</p>
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
