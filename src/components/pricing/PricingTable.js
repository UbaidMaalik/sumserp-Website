import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PricingTable = () => {
  return (
    <>
      <div class="demo10">
        <Container>
          <h3>Pricing Table</h3>
          <Row>
            <Col xs={12} sm={6} lg={6}>
              <div className="pricingTable10">
                <div className="pricingTable-header">
                  <h3 className="heading">Initial Amount</h3>
                  <span className="price-value">
                    <span className="currency">$285</span>
                    <h3 className="heading">50,000 PKR one time cost</h3>
                  </span>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li>Instalation</li>
                    <li>Free Sub Domain</li>
                    <li>Unlimited Hosting</li>
                    <li>24/7 Support</li>
                    <li>Unlimited Backups</li>
                    <li>Administrator Training</li>
                    <li>Managment Training</li>
                    <li>Faculty Training</li>
                    <li>Student Training</li>
                    <li>Customization</li>
                    <li>
                      {" "}
                      Note: You can customize or change your initial plan.We
                      allow you could remove some features, to decrease initial
                      cost.But we suggest this full plan for amazing result.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={6}>
              <div className="pricingTable10">
                <div className="pricingTable-header">
                  <h3 className="heading">Monthly Subscription</h3>
                  <span className="price-value">
                    <span className="currency">$40</span>
                    <h3 className="heading">7000 PKR MONTHLY INSTALLMENT</h3>
                  </span>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li>Unlimited Support</li>
                    <li>Implementation Support</li>
                    <li>Report Addition</li>
                    <li>Free Bug Fixing</li>
                    <li>Training Of New Modules</li>
                    <li>Free Scalling</li>
                    <li>New Updates</li>
                    <li>Fill Govt. Requirements</li>
                    <li>24/7 Support</li>
                    <li>-</li>
                    <li>
                      {" "}
                      Note: You can't customize or change this plan. Because it
                      will affect your flow of workand generate logical
                      problems. So we fix this plan for best result.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PricingTable;
