import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {Styles} from "./styles/stickyMenu.js";

function StickyMenu() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const stickyMenu = document.querySelector(".sticky-menu");

      if (window.scrollY > 160) {
        stickyMenu.classList.add("sticky");
      } else {
        stickyMenu.classList.remove("sticky");
      }
    });
  });

  return (
    <Styles>
      {/* Sticky Menu */}
      <section className="sticky-menu">
        <Container>
          <Row>
            {/*<Col md="3">
              <div className="logo">
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/logo-75.png"}
                    alt=""
                  />
                </Link>
              </div>
            </Col>*/}
            <Col>
              <div className="menu-box d-flex justify-content">
                <ul className="nav menu-nav">
                  <li className="nav-item dropdown active">
                    <Link
                        className="nav-link dropdown-toggle"
                        to={process.env.PUBLIC_URL + "/"}
                        data-toggle="dropdown"
                    >
                      Home <i className="las la-angle-down"/>
                    </Link>
                    <ul className="dropdown list-unstyled">
                      <li className="nav-item active">
                        <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/"}
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/about"}
                        >
                          Vision
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/about"}
                        >
                          Mission
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to={process.env.PUBLIC_URL + "/investment-opportunities"}
                      data-toggle="dropdown"
                    >
                      Investment Opportunities
                      <i className="las la-angle-down" />
                    </Link>
                    <ul className="dropdown list-unstyled">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/invest-in-kakamega"}
                        >
                          Invest in Kakamega
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={
                            process.env.PUBLIC_URL + "/investment-opportunities"
                          }
                        >
                          Investment Opportunities
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/invest-in-kakamega"}
                        >
                          One Shop Centre
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/projects"}
                        >
                          Projects
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/contact"}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                        className="nav-link dropdown-toggle"
                        to={process.env.PUBLIC_URL + "/about"}
                        data-toggle="dropdown"
                    >
                      Organisation
                      <i className="las la-angle-down"/>
                    </Link>
                    <ul className="dropdown list-unstyled">
                      <li className="nav-item">
                        <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/about"}
                        >
                          Structure of Organisation
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                            className="nav-link"
                            to={
                              process.env.PUBLIC_URL + "/about-kakamega"
                            }
                        >
                          About Kakamega
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/about"}
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/board"}
                        >
                          The Board
                        </Link>
                      </li>
                    </ul>
                  </li>


                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to={process.env.PUBLIC_URL + "/"}
                      data-toggle="dropdown"
                    >
                      E-Services <i className="las la-angle-down" />
                    </Link>
                    <ul className="dropdown list-unstyled">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.ecitizen.go.ke/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          E-Services
                          <i className="las la-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to={process.env.PUBLIC_URL + "/news"}
                      data-toggle="dropdown"
                    >
                      News
                      <i className="las la-angle-down" />
                    </Link>
                    <ul className="dropdown list-unstyled">
                      <ul className="dropdown list-unstyled">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="https://www.ecitizen.go.ke/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Announcements
                            <i className="las la-angle-right" />
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </li>
                </ul>

                <div className="apply-btn">
                  <Link to={process.env.PUBLIC_URL + "/contact"}>
                    <i className="las la-clipboard-list" />
                    Talk To Us
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Styles>
  );
}

export default StickyMenu;
