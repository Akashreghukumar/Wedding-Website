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
          <img
            style={{ height: '200px', width: '300px', margin: '10px' }}
            src={img3}
          />
        </Col>
        <Col className="" sm={12} md={4}>
          <img
            style={{ height: '400px', width: '300px', margin: '10px' }}
            src={img3}
          />
        </Col>
        <Col className="" sm={12} md={4}>
          <img
            style={{ height: '300px', width: '300px', margin: '10px' }}
            src={img3}
          />
        </Col>
      </Row>
    </div>
  );
}
