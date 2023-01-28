import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { con1image, img2 } from './../constants';
export default function Container1() {
  return (
    <div>
      <Container
        fluid
        className="d-flex flex-column gap-3 p-4 background-blue align-items-center my-4"
      >
        <h1>We Can't Wait to Celebrate with You</h1>
        <Row>
          <input type="text" placeholder="Name" />
        </Row>
        <Row>
          <input type="text" placeholder="Email" />
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
}
