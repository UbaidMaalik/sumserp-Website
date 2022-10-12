import React from "react";
import "./carousel.css";
import Carousel from "react-bootstrap/Carousel";
import { Container, Image, Row, Col } from "react-bootstrap";

const IntegratedCarousel = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} lg={12}>
            <div className="integrate">
              <h3>INTEGRATED SYSTEMS</h3>
              <p>
                SUMS-ERP have many usueful integrated systesm, which all are
                related and connected
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Carousel>
        <Carousel.Item>
          <Image
            className="d-block slide"
            src="./images/accounting.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block  slide"
            src="./images/liberary.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block slide"
            src="./images/sms.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block slide"
            src="./images/vle.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default IntegratedCarousel;
