import React from 'react';
// import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { con1image, img2 } from './../constants';
export default function Container2() {
  return (
    <div>
      <Row className="container-2 container-style text-black p-4">
        <Col sm={6} md={12} className="d-flex justify-content-center my-5">
          <Col>
            <h2 className="">How We Met</h2>
            <p className="con2pa">
              Our love story started well before either of us were actually
              born. Our moms became fast and dear friends as young working
              professionals in Chicago, and motherhood came at a similar time
              for them. That's when Ram and I entered the picture. Growing up,
              our families went on countless trips to Disney World, the Rocky
              Mountains, and various campsites together. On our trips, Ram and
              my only brother Srinu were the closest in age, so they bonded
              quickly. (Ram's older brother Krishna befriended me to make sure I
              never felt excluded.) I always remember thinking, Oh, Ram is cute,
              but we grew up in different suburbs, went to different schools,
              and lived very different lives. There was no way our paths would
              ever cross "like that," until they did. My brother Srinu was
              getting married—to one of my mom's other best friend's daughters,
              believe it or not—and I needed a date to the wedding. I happened
              to be on vacation with my mom and Ram's mom—did I mention Ram’s
              mother is also my godmother?—and she casually said, Oh, just go
              with Kev. He's already going to be there, and he'll definitely
              dance with you and tell you look pretty.
            </p>
          </Col>
        </Col>
        {/* <Col className="d-flex justify-content-center align-items-center">
          <img style={{ height: '300px', width: '200px' }} src={img2} />
        </Col> */}
      </Row>
    </div>
  );
}
