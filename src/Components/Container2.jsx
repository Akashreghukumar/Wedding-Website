import React from 'react';
// import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { con1image, img2 } from './../constants';
export default function Container2() {
  return (
    <div>
      <Row className="container-2 container-style text-black">
        <Col sm={6} md={12} className="d-flex justify-content-center my-5">
          <Col>
            <h2 className="">How We Met</h2>
            <p className="con2pa">
              lorem gasdkj gasdnglkh adbglabd;g alkgnakdgnand nlknadlkga
              agdsnlgnakl gasdg gag agadsg agdsg agsdgadg agasdghad ahdd ahdh
              adhh gfjs fs f fadf afh ahfhafhah ha fhfdh haf hsdfh t sj yhhjkhj
              t sjghsdgf hsdfhsys ty stysdhsfd h sey ys sdfs rs s h yjdj y jkdkd
              kdkdyik k d ky dk lorem gasdkj gasdnglkh adbglabd;g alkgnakdgnand
              nlknadlkga agdsnlgnakl gasdg gag agadsg agdsg agsdgadg agasdghad
              ahdd ahdh adhh gfjs fs f fadf afh ahfhafhah ha fhfdh haf hsdfh t
              sj yhhjkhj sjghsdgf hsdfhsys ty stysdhsfd h sey ys sdfs rs s h
              yjdj y jkdkd kdkdyik k d ky dk
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
