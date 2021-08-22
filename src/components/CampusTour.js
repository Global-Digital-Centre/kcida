import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import ModalImage from "react-modal-image";
import {Styles} from "./styles/campusTour.js";

class CampusTour extends Component {
  state = {
    secTitle: "We Have Best County In The Region. Let's Explore Our County.",
  };

  render() {
    return (
      <Styles>
        {/* Campus Tour */}
        <section className="campus-tour">
          <Container>
            <Row>
              <Col md="12">
                <div className="sec-title text-center">
                  <h4>{this.state.secTitle}</h4>
                </div>
              </Col>
              <Col lg="2" md="3">
                <div className="tour-box">
                  <ModalImage
                      small={process.env.PUBLIC_URL + "/assets/images/tour-1.png"}
                      large={process.env.PUBLIC_URL + "/assets/images/tour-1.png"}
                      alt=""
                  />
                </div>
                <div className="tour-box">
                  <ModalImage
                      small={process.env.PUBLIC_URL + "/assets/images/tour-2.png"}
                      large={process.env.PUBLIC_URL + "/assets/images/tour-2.png"}
                      alt=""
                  />
                </div>
              </Col>
              <Col lg="4" md="6">
                <Row>
                  <Col lg="6" md="6">
                    <div className="tour-box">
                      <ModalImage
                        small={
                          process.env.PUBLIC_URL + "/assets/images/tour-3.png"
                        }
                        large={
                          process.env.PUBLIC_URL + "/assets/images/tour-3.png"
                        }
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col lg="6" md="6">
                    <div className="tour-box">
                      <ModalImage
                        small={
                          process.env.PUBLIC_URL + "/assets/images/tour-4.png"
                        }
                        large={
                          process.env.PUBLIC_URL + "/assets/images/tour-4.png"
                        }
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col lg="12">
                    <div className="tour-box">
                      <ModalImage
                        small={
                          process.env.PUBLIC_URL + "/assets/images/tour-wt1.png"
                        }
                        large={
                          process.env.PUBLIC_URL + "/assets/images/tour-wt1.png"
                        }
                        alt=""
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg="2" md="3">
                <div className="tour-box">
                  <ModalImage
                    small={
                      process.env.PUBLIC_URL + "/assets/images/tour-ht.png"
                    }
                    large={
                      process.env.PUBLIC_URL + "/assets/images/tour-ht.png"
                    }
                    alt=""
                  />
                </div>
              </Col>
              <Col lg="4" md="12">
                <Row>
                  <Col lg="12" md="6">
                    <div className="tour-box">
                      <ModalImage
                        small={
                          process.env.PUBLIC_URL + "/assets/images/tour-wt2.png"
                        }
                        large={
                          process.env.PUBLIC_URL + "/assets/images/tour-wt2.png"
                        }
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col lg="6" md="3">
                    <div className="tour-box">
                      <ModalImage
                        small={
                          process.env.PUBLIC_URL + "/assets/images/tour-5.png"
                        }
                        large={
                          process.env.PUBLIC_URL + "/assets/images/tour-5.png"
                        }
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col lg="6" md="3">
                    <div className="tour-box">
                      <ModalImage
                        small={
                          process.env.PUBLIC_URL + "/assets/images/tour-6.png"
                        }
                        large={
                          process.env.PUBLIC_URL + "/assets/images/tour-6.png"
                        }
                        alt=""
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </Styles>
    );
  }
}

export default CampusTour;
