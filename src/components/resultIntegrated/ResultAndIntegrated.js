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
          <Col xs={12} sm={6} lg={6} className="intCarousel">
            <IntegratedCarousel />
          </Col>
          <Col xs={12} sm={6} lg={6} className="resCarousel">
            <Result />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ResultAndIntegrated;
