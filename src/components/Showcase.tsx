import * as React from 'react';
import ProductCard from './ProductCard';
import BreadcrumbList from './BreadcrumbList';
import { withRouter, RouteChildrenProps } from 'react-router-dom';
import { capitalize } from '../utils/textUtility';
import CategoryButtons from './CategoryButtons';

const Showcase = ({ location }: RouteChildrenProps) => {
  const pageTitle = location.pathname
    .split('-')
    .join(' ')
    .replace('/', '');
  return (
    <div className="bg-white border">
      <BreadcrumbList />
      <div className="px-3">
        <p>{capitalize(pageTitle)}</p>
        <CategoryButtons className="mobile-navigation my-2 d-lg-none" />
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

export default withRouter(Showcase);
