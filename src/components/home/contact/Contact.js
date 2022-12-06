import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./contact.css";

const Feature = () => {
  return (
    <>
      <section class="contact-section mt-5" id="contact">
        <Container>
          <Row>
            <Col xs={6} sm={6} lg={6}>
            <h3>Contact</h3>
              <form
                id="myForm"
                method="https://api.emailjs.com/api/v1.0/email/send"
                action="javascript:function()"
              >
                <div class="form-group">
                  <input
                    type="text"
                    id="username"
                    required
                    className="form-control mt-3"
                    placeholder="user name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="email"
                    required
                    className="form-control"
                    placeholder="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="subject"
                    required
                    className="form-control"
                    placeholder="subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows="8"
                    className="form-control"
                    required
                    placeholder="description"
                    id="description"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary"
                    id="btn"
                  />
                </div>
              </form>
            </Col>
            <Col xs={6} sm={6} lg={6}>
                <Image src="./images/build.jpg" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Feature;
