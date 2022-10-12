import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  NavLink,
  Row,
} from "react-bootstrap";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <section className="footer-main">
        <Container>
          <Row className="footer-section-row">
            <Col xs={12} sm={4} lg={4}>
              <div className="address">
                <div className="left-icon">
                  <span className="material-icons map">location_on</span>
                </div>
                <div className="right-text">
                  <h3>Address</h3>
                  <p>Near CDC lab, Main Metrovill Road,</p>
                  <p>Oriangi Town SITE Karachi</p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4} lg={4}>
              <div className="address">
                <div className="left-icon">
                  <span className="material-icons email">mail</span>
                </div>
                <div className="right-text">
                  <h3>Mail Id</h3>
                  <p>sums@sumserp.com</p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4} lg={4}>
              <div className="address">
                <div className="left-icon">
                  <span className="material-icons phone">phone_iphone</span>
                </div>
                <div className="right-text">
                  <h3>Phone</h3>
                  <p>+92 3442684447, </p>
                  <p>+92 354445829</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={3} lg={3}>
              <h3 className="footer-title">
                <span className="footer-title-text">Quick Link</span>
                <span className="footer-title-underline"></span>
              </h3>
              <ul className="quick-link-list">
                <NavLink href="#">LMS</NavLink>
                <NavLink href="#">CMS</NavLink>
                <NavLink href="#">VLE</NavLink>
                <NavLink href="#">CML</NavLink>
                <NavLink href="#">CMBAS</NavLink>
              </ul>
            </Col>
            <Col xs={12} sm={3} lg={3}>
              <h3 className="footer-title title-transparent">Quick Link</h3>
              <ul className="quick-link-list">
                <NavLink href="#">Staff</NavLink>
                <NavLink href="#">Non Staff</NavLink>
                <NavLink href="#">Managment</NavLink>
                <NavLink href="#">Administrative</NavLink>
                <NavLink href="#">Student Level</NavLink>
              </ul>
            </Col>
            <Col xs={12} sm={3} lg={3}>
              <h3 className="footer-title title-transparent">Quick Link</h3>
              <ul className="quick-link-list">
                <NavLink href="#">Mission</NavLink>
                <NavLink href="#">Vision</NavLink>
                <NavLink href="#">Blog</NavLink>
                <NavLink href="#">Video</NavLink>
                <NavLink href="#">Gallery</NavLink>
              </ul>
            </Col>
            <Col xs={12} sm={3} lg={3}>
              <h3 className="footer-title">
                <span className="footer-title-text">Get Updates</span>
                <span className="footer-title-underline"></span>
              </h3>
              <p className="newsletter">Signup to Our Newsletter.</p>
              <Form action="">
                <div className="form-group">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="form-control form-control-new"
                  />
                </div>
                <Button type="submit" className="btn btn-primary subscribe">
                  Subscribe
                </Button>
              </Form>
              <div id="social">
                <Image
                  href="#"
                  src="./images/facebook-f.svg"
                  className="facebookBtn smGlobalBtn"
                />
                <Image
                  href="#"
                  src="./images/twitter.svg"
                  className="twitterBtn smGlobalBtn"
                />
                <Image
                  href="#"
                  src="./images/google-plus-g.svg"
                  className="googleplusBtn smGlobalBtn"
                />
                <Image
                  href="#"
                  src="./images/linkedin-in.svg"
                  className="linkedinBtn smGlobalBtn"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="footer-section-bottom">
        <Container>
          <Row>
            <Col xs={12} sm={5} lg={5} className="footer-bottom-left">
              <p>© All Rights Reserved Sums ERP</p>
            </Col>
            <Col xs={12} sm={7} lg={7} className="footer-bottom-right">
              <p>
                Developed by{" "}
                <NavLink href="https://www.beaimtech.com">
                  BeAimTech.com
                </NavLink>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
