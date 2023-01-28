import React from 'react';
// import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { con1image, img2 } from './../constants';
import { FaGlassCheers } from 'react-icons/fa';
export default function Container4() {
  return (
    <div>
      <Row className="">
        <Container
          sm={12}
          md={12}
          className="d-flex  justify-content-center align-items-center flex-column container-4 container p-4 "
        >
          <Col className="">
            <FaGlassCheers style={{ height: '100px', width: '100px' }} />
          </Col>
          <Col className="my-3">
            <h2>We are Getting Married</h2>
          </Col>
          <Col className="d-flex  justify-content-center align-items-center">
            <p>
              It is my immense pleasure to inform you that I am getting married
              on the <b> 14th of Febuary 2023! </b>I would love for all of you
              to be present at my wedding and grace the day. I look forward to
              seeing you there. Please find the venue details and other
              information below:
            </p>
          </Col>
        </Container>
      </Row>
    </div>
  );
}
