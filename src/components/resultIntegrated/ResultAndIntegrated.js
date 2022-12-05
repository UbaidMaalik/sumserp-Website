import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import IntegratedCarousel from "./integrated/IntegratedCarousel";
import Result from "./result/Result";
import "./style.css";
const ResultAndIntegrated = () => {
  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col xs={12} sm={12} lg={12} className="resCarousel">
            <Result />
          </Col>
          <Col xs={12} sm={12} lg={12} className="intCarousel">
            <IntegratedCarousel />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ResultAndIntegrated;
