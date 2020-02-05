import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import { openCart } from '../redux/actions';
import { useDispatch } from 'react-redux';

const ProductCard = () => {
  const dispatch = useDispatch();
  return (
    <div className="product-wrapper">
      <Card>
        <div className="p-img">
          <div className="img-wrapper">
            <CardImg
              top
              src="//cdn.grofers.com/app/images/products/normal/pro_333324.jpg?ts=1539070972"
              alt="Card image cap"
            />
          </div>
        </div>

        <CardBody>
          <div className="item-title">
            Aashirvaad Shudh Chakki Whole Wheat Atta
          </div>
          <CardSubtitle className="mb-2 text-muted">10 kg</CardSubtitle>
          <div className="d-flex align-items-center justify-content-between">
            <CardText className="font-weight-bold">₹ 380</CardText>
            <Button
              className="add-to-cart"
              onClick={() => dispatch(openCart())}
            >
              Add to Cart
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
