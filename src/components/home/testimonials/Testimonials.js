import React from "react";
import { Button, Col, Container, Figure, Image, Row } from "react-bootstrap";
import "./testimonials.css";
const Testimonials = () => {
  return (
    <>
      <section className="testimonials">
        <Container>
          <Row>
            <Col xs={12} sm={12} lg={12}>
              <div className="testi">
                <h3>OUR HAPPY CLIENTS</h3>
                <p>
                  Our proud partners experience remarkable outcomes. Click any
                  logo below for just a few examples of our shared successes.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={4} lg={4} className="cards">
              <Figure className="snip1533">
                <Figure.Caption>
                  <Image src="./images/testimonial-icon.png" className="icon" />
                  <p>
                    SUMS-ERP has been a HUGE time saver for our nursing school.
                    the team here at BeAim Tech and we are really excited to
                    learn even more about the new platform with our upcoming
                    batches.
                  </p>
                  <h3>DIRECTOR</h3>
                  <h4>AHSION</h4>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col xs={12} sm={4} lg={4} className="cards">
              <Figure className="snip1533">
                <Figure.Caption>
                  <Image src="./images/testimonial-icon.png" className="icon" />
                  <p>
                    SUMS-ERP takes the pain out of travel platform development.
                    Their intuitive interface, powerful controls and world-class
                    design are second to none. Just amazing!
                  </p>
                  <h3>DIRECTOR</h3>
                  <h4>HSNAHS</h4>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col xs={12} sm={4} lg={4} className="cards">
              <Figure className="snip1533">
                <Figure.Caption>
                  <Image src="./images/testimonial-icon.png" className="icon" />
                  <p>
                    SUMS-ERP has been a HUGE time saver for our nursing school.
                    the team here at BeAim Tech and we are really excited to
                    learn even more about the new platform with our upcoming
                    batches.
                  </p>
                  <h3>DIRECTOR</h3>
                  <h4>AHSION</h4>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col xs={12} sm={12} lg={12} className="testi-btn">
              <Button variant="light" className="btn-more">
                See More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Testimonials;
