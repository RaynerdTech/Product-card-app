// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import ProductImage from './components/Image';

const firstName = "Ray"; // Change this or leave it empty ""

function App() {
  return (
    <Container className="mt-5">
      <Card style={{ width: '22rem' }} className="mx-auto shadow">
        <ProductImage />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      
      <div className="text-center mt-4">
        <h4>
          Hello, {firstName ? firstName : "there"}!
        </h4>
        {firstName && (
          <img
            src="https://baseus.com.ng/wp-content/uploads/2024/03/1702022690.jpg"
            alt="Hello"
            className="mt-2 rounded-circle"
          />
        )}
      </div>
    </Container>
  );
}

export default App;
