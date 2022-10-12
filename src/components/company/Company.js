import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import InnerBanner from "../banner/InnerBanner";
import "./styles.css";

const Company = () => {
  return (
    <>
      <InnerBanner title="Company" />
      <Container>
        <Row>
          {/* FIRST SECTION */}
          <Col xs={12} sm={6} lg={6} className="company-content">
            <h3>Everything In One Place</h3>
            <p>
              See your organization stats online, everywhere. All of the
              organization data is available one step away.
            </p>
            <span className="material-icons radio">check</span>
            Access 24/7 <br />
            <span className="material-icons radio">check</span>
            One Screen ERP <br />
            <span className="material-icons radio">check</span>
            Access all statistics information <br />
          </Col>
          <Col xs={12} sm={6} lg={6} className="company-image">
            <Image src="./images/erp.jpg" />
          </Col>
          {/* SECOND SECTION */}
          <Col xs={12} sm={6} lg={6} className="company-image">
            <Image src="./images/paper-work.jpg" />
          </Col>
          <Col xs={12} sm={6} lg={6} className="company-content">
            <h3>Decrease Paper Work</h3>
            <p>
              More of your work is done through SUMS, it will decrease paper
              work, because of online sending system. Store all of your
              information in a
            </p>
            <span className="material-icons radio">check</span>
            Unlimited Cloud Storage <br />
            <span className="material-icons radio">check</span>
            Realtime Communication <br />
            <span className="material-icons radio">check</span>
            Send & Receive online files <br />
          </Col>
          {/* THIRD SECTION */}
          <Col xs={12} sm={6} lg={6} className="company-content">
            <h3>Establish Connectivity</h3>
            <p>
              This is a centralized software on which everyone is connected to
              others. So every user can easily contact with all relevant
              users.Which will decrease miss communication.
            </p>
            <span className="material-icons radio">check</span>
            Unlimited users <br />
            <span className="material-icons radio">check</span>
            Relevant connections <br />
            <span className="material-icons radio">check</span>
            Live Communication <br />
          </Col>
          <Col xs={12} sm={6} lg={6} className="company-image">
            <Image src="./images/connectivity.png" />
          </Col>
          {/* FOURTH SECTION */}
          <Col xs={12} sm={6} lg={6} className="company-image">
            <Image src="./images/productivity.jpg" />
          </Col>
          <Col xs={12} sm={6} lg={6} className="company-content">
            <h3>Increase Productivity</h3>
            <p>
              All managerial staff work is share or integrated with each others.
              So one entry can be used in many modules to increase productivity.
            </p>
            <span className="material-icons radio">radio_button_checked</span>
            40% Feasibility <br />
            <span className="material-icons radio">radio_button_checked</span>
            Integrated Entries <br />
            <span className="material-icons radio">radio_button_checked</span>
            Share common entries <br />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Company;
