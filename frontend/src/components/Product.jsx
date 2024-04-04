import { Card } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img
            src={product.image}
            variant="top"
            style={{ width: "100%", height: "280px", overflow: "hidden" }}
          />
        </Link>
        <Card.Body>
          <Link to={`product/${product._id}`}>
            <Card.Title as="div" className="product-title">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text as="h3">${product.price}</Card.Text>

          <Card.Text
            as="h6"
            style={{ textAlign: "center", color: "red", fontSize: "13px" }}
          >
            <strong>
              {product.countInStock < 1
                ? "Out of Stock"
                : product.countInStock > 3
                ? ""
                : `Only ${product.countInStock} left in stock order soon...`}
            </strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
