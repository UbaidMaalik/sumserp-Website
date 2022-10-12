import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./banner.css";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <>
      <div className="background">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <Container>
          <Row>
            <Col xs={12} sm={5}>
              <div className="banner-left">
                <h3>
                  <Typewriter
                    options={{
                      strings: ["SUMS ERP", "Complete Managment "],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h3>
                <h4>
                  The <span>System</span> you need!
                </h4>
                <h5>Establish connectivity around the organization.</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                  corrupti, esse ipsam pariatur reiciendis asperiores labore
                  adipisci enim aut quasi totam dolor eaque, aliquid voluptas
                  facere exercitationem blanditiis.
                </p>
              </div>
              <div className="banner-btn">
                <Button variant="light" className="btn-banner">
                  What SUMS Do
                </Button>
                <Button variant="outline-primary" className="btn-plan">
                  Our Plan $
                </Button>
              </div>
            </Col>
            <Col xs={12} sm={7}>
              <div className="right">
                <Image
                  rounded
                  src="./images/mockup-1.png"
                  className="banner-sums"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Banner;
