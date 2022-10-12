import React from "react";
import { Container, Row } from "react-bootstrap";
import data from "./dataFaq";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const QuestionFaq = () => {
  return (
    <>
      <Container>
        <Row>
          <div className="accord">
            <Accordion>
              {data.map((item) => (
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>{item.title}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{item.des}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default QuestionFaq;
