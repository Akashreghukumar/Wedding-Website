import React from 'react';
// import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { con1image, img2 } from './../constants';
export default function Container1() {
  return (
    <div>
      <Container className="d-flex flex-column gap-3">
        <h1>We Can't Wait to Celebrate with You</h1>
        <Row>
          <Col>
            <label>Name</label>
          </Col>
          <Col>
            <input type="text" />
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Email</label>
          </Col>
          <Col>
            <input type="text" />
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Will you being Attending?</label>
          </Col>
          <Col className="d-flex gap-3">
            <label>Yes</label>
            <input type="radio" name="confirm" value="Yes" />
            <label>No</label>
            <input type="radio" name="confirm" value="No" />
            <label>May Be</label>
            <input type="radio" name="confirm" value="Maybe" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
