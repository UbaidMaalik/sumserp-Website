import React from "react";
import ResultAndIntegrated from "../resultIntegrated/ResultAndIntegrated";
import Banner from "../banner/Banner";
import Feature from "./feature/Feature";
import Professional from "./professional/Professional";
import SimpleWay from "./simpleway/SimpleWay";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <SimpleWay />
      <Feature />
      <Professional />
      <ResultAndIntegrated />
      <Testimonials />
    </div>
  );
};

export default Home;
