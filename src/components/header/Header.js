import React from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="dark"
        className="nav-bg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image src="images/logo.png" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto menu">
              <Link to="features">Features</Link>
              <Link to="features">Docs</Link>
              <Link to="company">Company</Link>
              <Link to="pricing">Pricing</Link>
              <Link to="howto">How To</Link>
              <Link to="faqs">Faq's</Link>
            </Nav>
            <Nav className="menu">
              <Button variant="outline-primary" className="demo">
                DEMO
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
