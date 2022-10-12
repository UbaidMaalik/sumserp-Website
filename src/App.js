import "./App.css";
import Home from "./components/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from "./components/fatures/Features";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Company from "./components/company/Company";
import Price from "./components/pricing/Price";
import HowTo from "./components/howto/HowTo";
import Faqs from "./components/faq/Faqs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="company" element={<Company />} />
        <Route path="pricing" element={<Price />} />
        <Route path="howto" element={<HowTo />} />
        <Route path="faqs" element={<Faqs />} />
        {/* <Route path="/redirect" element={<Navigate to="/home" />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
