// src/components/Image.js
import React from 'react';
import product from '../product';
import { Card } from 'react-bootstrap';

function ProductImage() {
  return <Card.Img variant="top" src={product.image} alt={product.name} />;
}

export default ProductImage;
