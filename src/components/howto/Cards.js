import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
import data from "./cardData";
const Cards = () => {
  return (
    <>
      <Container>
        <Row>
          {data.map((item, index) => (
            <Col xs={12} sm={6} lg={6}>
              <Card cardData={item} index={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Cards;
