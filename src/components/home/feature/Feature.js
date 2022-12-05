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
                    SUMS ERP is applicable to track your daily tasks, online
                    addmission & accounts queries. Tracking all task is very
                    simple in SUMS-ERP.
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
                  <h5>Reports</h5>
                  <p>
                    SUMS ERP generate consolidated & updated, informative
                    reports. Help an educational organization to disclose
                    unknown information & also facilities decision makin
                    process.
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
                    SUMS ERP provide a detailed documentation helps users to
                    improve workflow & solve users queries. Documentation also
                    save time & emergy to find a sloution.
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
