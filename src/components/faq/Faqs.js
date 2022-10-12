import React from "react";
import InnerBanner from "../banner/InnerBanner";
import "./faq.css";
import QuestionFaq from "./QuestionFaq";

const Faqs = () => {
  return (
    <>
      <InnerBanner title="Faq's" />
      <QuestionFaq />
    </>
  );
};

export default Faqs;
