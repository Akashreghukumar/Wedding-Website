import React from 'react';
// import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { img2 } from './../constants';
export default function Container1() {
  return (
    <div>
      <Row sm={12} md={12} className="container-style">
        <img className="" style={{ objectFit: 'cover' }} src={img2} />
        <h1 class="centered">Ours Story</h1>
        <h3 class="centered2">When Ram met Janu</h3>
      </Row>
    </div>
  );
}
