// src/components/Price.js
import React from 'react';
import product from '../product';

function Price() {
  return <h6 className="text-success">{product.price}</h6>;
}

export default Price;
