import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./professional.css";

const Professional = () => {
  return (
    <>
      <section className="pro-bg">
        <Container>
          <Row>
            <div className="overlap">
              <Col xs={12} sm={12} lg={12}>
                <Image src="./images/useSums.png" />
              </Col>
            </div>
            <Col xs={12} sm={12} lg={12}>
              <div className="title">
                <h3>3 MILLION+</h3>
                <h4>PROFESSIONALS USE</h4>
                <p>
                  Small, medium, and large educational organizations trust
                  SUMS-ERP, for their institutions
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={4} lg={4} className="managment">
              <span className="material-icons manage">manage_accounts</span>
              <h3>Managment</h3>
              <p>
                Design academics structure, curiclam and other organizational
                affairs
              </p>
            </Col>
            <Col xs={12} sm={4} lg={4} className="student">
              <span className="material-icons person">group</span>
              <h3>Student</h3>
              <p>
                Design academics structure, curiclam and other organizational
                affairs
              </p>
            </Col>
            <Col xs={12} sm={4} lg={4} className="staff">
              <span className="material-icons staff1">school</span>
              <h3>Staff</h3>
              <p>
                Design academics structure, curiclam and other organizational
                affairs
              </p>
            </Col>
            <Col xs={12} sm={12} lg={12} className="pro-btn">
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

export default Professional;
