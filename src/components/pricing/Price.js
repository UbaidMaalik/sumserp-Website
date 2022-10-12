import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import InnerBanner from "../banner/InnerBanner";
import PricingTable from "./PricingTable";
import "./styles.css";

const Price = () => {
  const data = [
    {
      icon: "initial.png",
      title: "Initial Amount",
      para: "SAFE & SECURE",
    },
    {
      icon: "cancel.png",
      title: "Cancellation",
      para: "Cancel with 1 month notice",
    },
    {
      icon: "monthly.png",
      title: "Monthly Subscription",
      para: "24/7 Online Support",
    },
  ];
  return (
    <>
      <InnerBanner title="Pricing" />
      <Container>
        <Row>
          <Col xs={12} sm={12} lg={12} className="pricing-content1">
            <h3>Cheap & Affordable PRICES</h3>
            <p>
              We have a global plan, which will cover all the needs & access to
              ERP
            </p>
          </Col>
          {data.map((item) => (
            <Col xs={12} sm={4} lg={4} className="pricing-card">
              <div className="feature-box-1">
                <div className="icon">
                  <Image src={`./images/${item.icon}`} />
                </div>
                <div className="feature-content">
                  <h3>{item.title}</h3>
                  <p>{item.para}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <PricingTable />
    </>
  );
};

export default Price;
