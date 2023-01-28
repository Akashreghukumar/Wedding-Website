import React from 'react';
// import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { con1image, img3 } from './../constants';
export default function Container3() {
  return (
    <div>
      <Row className="container-style d-flex justify-content-center align-items-center">
        <Col className="" sm={12} md={4}>
          <img className="h-50 w-75 my-1" src={img3} />
        </Col>
        <Col className="" sm={12} md={4}>
          <img className="h-25 w-100 my-1" src={img3} />
        </Col>
        <Col className="" sm={12} md={4}>
          <img className="h-50 w-75 my-1" src={img3} />
        </Col>
      </Row>
    </div>
  );
}
