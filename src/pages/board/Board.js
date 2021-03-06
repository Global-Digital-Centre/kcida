import React, {Component} from "react";
import Datas from "../../data/board/board.json";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import Header from "../../components/Header";
import {BreadcrumbBox} from "../../components/common/Breadcrumb";
import Pagination from "./../../components/Pagination";
import FooterTwo from "../../components/FooterTwo";
import {Styles} from "./styles/instructor.js";

class Board extends Component {
  render() {
    return (
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper instructor-page">
          {/* Header 2 */}
          <Header/>

          {/* Breadcroumb */}
          <BreadcrumbBox title="The  Board" />

          {/* Instructor Area */}
          <section className="instructor-area">
            <Container>
              <Row>
                {Datas.map((data, i) => (
                  <Col lg="4" md="6" sm="6" key={i}>
                    <div className="instructor-item">
                      <Link to={process.env.PUBLIC_URL + "/board-details"}>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            `/assets/images/${data.personImage}`
                          }
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="img-content text-center">
                        <h5>
                          <Link
                            to={process.env.PUBLIC_URL + "/instructor-details"}
                          >
                            {data.personName}
                          </Link>
                        </h5>
                        <p>{data.personTitle}</p>
                        <ul className="list-unstyled list-inline">
                          <li className="list-inline-item">
                            <a
                              href={
                                process.env.PUBLIC_URL +
                                data.socialLinks.facebook
                              }
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href={
                                process.env.PUBLIC_URL +
                                data.socialLinks.twitter
                              }
                            >
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href={
                                process.env.PUBLIC_URL +
                                data.socialLinks.youtube
                              }
                            >
                              <i className="fab fa-youtube" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                ))}

                <Col md="12" className="text-center">
                  <Pagination />
                </Col>
              </Row>
            </Container>
          </section>

          {/* Footer 2 */}
          <FooterTwo />
        </div>
      </Styles>
    );
  }
}

export default Board;
