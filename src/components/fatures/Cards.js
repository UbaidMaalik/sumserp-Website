import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
import Data from "./cardData";

const cardPerRow = 8;
const Cards = () => {
  const [next, setNext] = useState(cardPerRow);

  const handleMoreCard = () => {
    setNext(next + cardPerRow);
  };

  return (
    <>
      <Container>
        <Row>
          {Data?.slice(0, next)?.map((item, index) => (
            <Col xs={12} sm={3} lg={3}>
              <Card cardData={item} index={index} />
            </Col>
          ))}

          <Col xs={12} sm={12} lg={12} className="card-btn">
            {next < Data?.length && (
              <Button className="mt-4 load-more" onClick={handleMoreCard}>
                Load more
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cards;
