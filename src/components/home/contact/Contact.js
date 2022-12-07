import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./contact.css";

const Feature = () => {
  return (
    <>
      <section class="contact-section mt-5" id="contact">
        <Container>
          <Row>
            <Col xs={12} sm={12} lg={12}>
                <div className="cont">
                  <h3>DROP YOUR LINE</h3>
                  <p>Ask a question</p>
                </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={6} sm={6} lg={6}>
              <form
                id="myForm"
                method="https://api.emailjs.com/api/v1.0/email/send"
                action="javascript:function()"
              >
                <Row>
                  <Col xs={6} sm={6} lg={6}>
                      <div class="form-group">
                        <input
                          type="text"
                          id="username"
                          required
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                  </Col>
                  <Col xs={6} sm={6} lg={6}>
                      <div className="form-group">
                        <input
                          type="text"
                          id="lastname"
                          required
                          className="form-control"
                          placeholder="Last name"
                        />
                      </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} sm={6} lg={6}>
                      <div class="form-group">
                        <input
                          type="email"
                          id="email"
                          required
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                  </Col>
                  <Col xs={6} sm={6} lg={6}>
                      <div className="form-group">
                        <input
                          type="number"
                          id="phone"
                          required
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                  </Col>
                </Row>
                <div className="form-group">
                  <textarea
                    rows="8"
                    className="form-control"
                    required
                    placeholder="Message"
                    id="message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send"
                    id="btn"
                  />
                </div>
              </form>
            </Col>
            <Col xs={6} sm={6} lg={6}>
                <Image src="./images/build.png" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Feature;
