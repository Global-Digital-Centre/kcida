import React, {Component} from "react";
import Datas from "../data/about-us/about-kakamega.json";
import {Col, Container, Row} from "react-bootstrap";
import {Styles} from "./styles/aboutUsTwo.js";

class AboutUsKakamega extends Component {
  render() {
    return (
      <Styles>
        {/* About Us 2 */}
        <section className="about-us2">
          <Container>
            <Row>
              <Col md="6">
                <div className="about-content">
                  <h4 className="about-title">{Datas.secTitle}</h4>
                  <p className="about-para">{Datas.secDesc}</p>
                  <p className="about-para">{Datas.secDesc2}</p>
                  <p className="about-para">{Datas.secDesc3}</p>

                  {Datas.dataList.map((data, i) => (
                    <div className="cta-box d-flex" key={i}>
                      <div className="cta-icon text-center">
                        <i className="las la-thumbs-up" />
                      </div>
                      <div className="cta-content">
                        <h6>{data.iconTitle}</h6>
                        <p>{data.iconSubtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
              <Col md="6">
                <div className="about-image">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/images/${Datas.aboutImageOne}`
                    }
                    className="main-img1"
                    alt=""
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/images/${Datas.aboutImageTwo}`
                    }
                    className="main-img2"
                    alt=""
                  />
                  <p className="exp-box">
                    <span>
                      {Datas.experianceYear}
                      <i className="las la-plus" />
                    </span>{" "}
                    Population
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Styles>
    );
  }
}

export default AboutUsKakamega;
