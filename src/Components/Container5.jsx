import React from 'react';
// import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { con1image, img2 } from './../constants';
export default function Container1() {
  return (
    <div>
      <Container>
        <h1>We Can't Wait to Celebrate with You</h1>
        <Row>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </Row>
      </Container>
    </div>
  );
}
