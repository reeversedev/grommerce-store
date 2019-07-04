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
class ProductCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            src="//cdn.grofers.com/app/images/products/normal/pro_333324.jpg?ts=1539070972"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Aashirvaad Shudh Chakki Whole Wheat Atta</CardTitle>
            <CardSubtitle>10 kg</CardSubtitle>
            <CardText>₹ 380</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ProductCard;
