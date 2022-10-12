import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./result.css";
const Result = () => {
  return (
    <>
      <section className="result-bg">
        <Container>
          <Row>
            <Col xs={12} sm={12} lg={12}>
              <div className="result">
                <h3>PROVED RESULT</h3>
                <p>
                  Our proud partners experience remarkable outcomes. Click any
                  logo below for just a few examples of our shared successes
                </p>
              </div>
            </Col>
            <Carousel>
              <Carousel.Item>
                <Image
                  className="d-block slide-redult"
                  src="./images/advanced.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block  slide-redult"
                  src="./images/horizon.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block slide-redult"
                  src="./images/KHYBER.png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block slide-redult"
                  src="./images/riphah.png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block slide-redult"
                  src="./images/swat.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Result;
