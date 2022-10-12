import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import "./innerBanner.css";

const InnerBanner = ({ title }) => {
  return (
    <>
      <div className="backgroundInner">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <Container>
          <Row>
            <Col xs={12} sm={12}>
              <div className="inner-left">
                <h4>{title}</h4>
                <h3>
                  <Typewriter
                    options={{
                      strings: ["SUMS ERP", "Complete Managment "],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default InnerBanner;
