import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./simple.css";
const SimpleWay = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <div className="left-side">
              <h3>Simple way for educational tasks</h3>
              <p>
                Establish connectivity around the organization tasks because of
                SUMS ERP digitize complete educational institute such as
                Collage, Nursing Institute, Universities <br />
                SUMS ERP manage save and manipulate all university task in a
                single way. Having a smart & simple.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className="right-side">
              <Image src="./images/mockup.png" className="laptop" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SimpleWay;
