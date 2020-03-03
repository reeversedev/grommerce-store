import * as React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import { openCart, updateCart } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { product } from '../../utils/products';
import { addToCart, cart } from '../../utils/cart';

const ProductCard = () => {
  const dispatch = useDispatch();
  return (
    <div className="product-wrapper">
      <Card key={product.id}>
        <div className="p-img">
          <div className="img-wrapper">
            <CardImg top src={product.img} alt="Card image cap" />
          </div>
        </div>
        <CardBody>
          <div className="item-title">{product.name}</div>
          <CardSubtitle className="mb-2 text-muted">
            {product.volume}
          </CardSubtitle>
          <div className="d-flex flex-lg-row flex-column align-items-lg-center justify-content-between">
            <CardText className="font-weight-bold mb-lg-0">
              &#8377; {product.price}
            </CardText>
            <Button
              className="add-to-cart"
              onClick={() => {
                dispatch(updateCart(addToCart(product)));
                dispatch(openCart());
              }}
            >
              Add
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
