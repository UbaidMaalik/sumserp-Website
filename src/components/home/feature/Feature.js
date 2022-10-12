import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./feature.css";

const Feature = () => {
  return (
    <>
      <section class="section services-section" id="services">
        <Container>
          <Row>
            {/* <!-- feaure box --> */}
            <Col xs={12} sm={6} lg={4}>
              <div className="feature-box-1">
                <div className="icon">
                  <i className="fa fa-desktop"></i>
                </div>
                <div className="feature-content">
                  <h5>Tracking</h5>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites.
                  </p>
                </div>
              </div>
            </Col>
            {/* <!-- / -->
            <!-- feaure box --> */}
            <Col xs={12} sm={6} lg={4}>
              <div className="feature-box-1">
                <div className="icon">
                  <i className="fa fa-user"></i>
                </div>
                <div className="feature-content">
                  <h5>Bills</h5>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites.
                  </p>
                </div>
              </div>
            </Col>
            {/* <!-- / -->
            <!-- feaure box --> */}
            <Col xs={12} sm={6} lg={4}>
              <div className="feature-box-1">
                <div className="icon">
                  <i className="fa fa-comment"></i>
                </div>
                <div className="feature-content">
                  <h5>Documents</h5>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Feature;
