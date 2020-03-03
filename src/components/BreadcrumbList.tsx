import * as React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const BreadcrumbList = () => {
  return (
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
  );
};

export default BreadcrumbList;
