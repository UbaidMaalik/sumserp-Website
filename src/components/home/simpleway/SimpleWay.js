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
                Establish connectivity around the organization. A lot of tools
                which makes your task easy and fast. <br />
                We design and develop services for customers of all sizes,
                specializing in modern websites and Complete Managment System
                For Collage Institute / University
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
