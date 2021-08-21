import React, {useEffect} from "react";
import Datas from "../data/footer/footer2.json";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import BackToTop from "./common/BackToTop";
import {Styles} from "./styles/footerTwo.js";

function FooterTwo() {
  useEffect(() => {
    const form = document.getElementById("form4");
    const email = document.getElementById("email4");

    form.addEventListener("submit", formSubmit);

    function formSubmit(e) {
      e.preventDefault();

      const emailValue = email.value.trim();

      if (emailValue === "") {
        setError(email, "Email can't be blank");
      } else if (!isEmail(emailValue)) {
        setError(email, "Not a valid email");
      } else {
        setSuccess(email);
      }
    }

    function setError(input, message) {
      const formControl = input.parentElement;
      const errorMsg = formControl.querySelector(".input-msg4");
      formControl.className = "form-control error";
      errorMsg.innerText = message;
    }

    function setSuccess(input) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
    }

    function isEmail(email) {
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    }
  });

  return (
    <Styles>
      {/* Footer Two */}
      <footer
        className="footer2"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.backgroundImage})`,
        }}
      >
        <Container>
          <Row>
            <Col md="3">
              <div className="footer-logo-info">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/f-logo-171.png"}
                  alt=""
                  className="img-fluid"
                />
                <p>
                  {" "}
                  KCIDA provides the establishment of a legal and institutional
                  framework for promotion and co-ordination of investment by the
                  county government of Kakamega and for connected purposes.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="las la-map-marker" />
                    Kakamega County, Kenya
                  </li>
                  <li>
                    <i className="las la-envelope" />
                    kakamega.go.ke
                  </li>
                  <li>
                    <i className="las la-phone" />
                    +1 908 875 7678
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="3">
              <div className="f-links">
                <h5>County</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <i className="las la-angle-right" />
                      Investment Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <i className="las la-angle-right" />
                      Invest in Kakamega
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <i className="las la-angle-right" />
                      Organisation
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <i className="las la-angle-right" />
                      E-Services
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <i className="las la-angle-right" />
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <i className="las la-angle-right" />
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="3">
              <div className="f-links">
                <h5>Government</h5>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://kakamega.go.ke/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="las la-angle-right" />
                      Kakamega County
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.invest.go.ke/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="las la-angle-right" />
                      Kenya Invest
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ecitizen.go.ke/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="las la-angle-right" />
                      Kenya E-Services
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="3">
              <div className="f-newsletter">
                <h5>Newsletter</h5>
                <p>
                  Subscribe to our Newsletter to be upto date with County
                  events, news and Updates.
                </p>

                <form id="form4" className="form">
                  <p className="form-control">
                    <input
                      type="email"
                      placeholder="Enter email here"
                      id="email4"
                    />
                    <span className="input-msg4" />
                  </p>
                  <button>Submit</button>
                </form>
              </div>
            </Col>
            <Col md="12">
              <div className="copytext-area text-center">
                <p>
                  Copyright &copy; 2021 | Designed by{" "}
                  <a
                    href="http://gdc-ltd.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Global Digital Centre{" "}
                  </a>
                </p>
                <ul className="social list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a href={process.env.PUBLIC_URL + "/"}>
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href={process.env.PUBLIC_URL + "/"}>
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href={process.env.PUBLIC_URL + "/"}>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href={process.env.PUBLIC_URL + "/"}>
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href={process.env.PUBLIC_URL + "/"}>
                      <i className="fab fa-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Back To Top  */}
        <BackToTop />
      </footer>
    </Styles>
  );
}

export default FooterTwo;
