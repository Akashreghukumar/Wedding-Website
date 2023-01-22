import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Container1 from './Components/Container1';
import Container2 from './Components/Container2';
import Container3 from './Components/Container3';
import Container4 from './Components/Container4';
import Container5 from './Components/Container5';

export default function App() {
  return (
    <div>
      <Container fluid>
        <Row className="bg-">
          {' '}
          <Container1 />
        </Row>
        <Row>
          {' '}
          <Container2 />
        </Row>
        <Row>
          {' '}
          <Container3 />
        </Row>
        <Row>
          <Container4 />
        </Row>
        <Row>
          <Container5 />
        </Row>
      </Container>
    </div>
  );
}
