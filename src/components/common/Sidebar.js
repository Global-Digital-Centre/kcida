import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {Styles} from "./styles/sidebar.js";

function Sidebar() {
  useEffect(() => {
    const sidebarBtn = document.getElementById("sidebar-btn");

    if (sidebarBtn) {
      const sidebarOverlay = document.getElementById("sidebar-overlay");
      const sidebarBody = document.getElementById("sidebar-body");
      const sidebarExit = document.getElementById("close-sidebar");

      sidebarBtn.addEventListener("click", function (e) {
        e.preventDefault();
        sidebarOverlay.classList.add("visible");
        sidebarBody.classList.add("opened");
      });

      sidebarOverlay.addEventListener("click", function (e) {
        e.preventDefault();
        sidebarOverlay.classList.remove("visible");
        sidebarBody.classList.remove("opened");
      });

      sidebarExit.addEventListener("click", function (e) {
        e.preventDefault();
        sidebarOverlay.classList.remove("visible");
        sidebarBody.classList.remove("opened");
      });
    }
  });

  return (
    <Styles>
      {/* Sidebar */}
      <a
        href={process.env.PUBLIC_URL + "/"}
        className="nav-link nav-sidebar"
        id="sidebar-btn"
      >
        <i className="las la-bars" />
      </a>

      <div className="sidebar" id="sidebar-body">
        <div className="side-logo d-flex justify-content-between">
          <div>
            <Link to={process.env.PUBLIC_URL + "/"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/images/logo-171.png"}
                alt=""
              />
            </Link>
          </div>
          <div>
            <a href={process.env.PUBLIC_URL + "/"} id="close-sidebar">
              <i className="las la-times" />
            </a>
          </div>
        </div>
        <div className="side-content">
          <h5>About Us</h5>
          <p>
            KCIDA provides the establishment of a legal and institutional
            framework for promotion and co-ordination of investment by the
            county government of Kakamega and for connected purposes.
          </p>
        </div>
        <div className="side-post">
          <h5>News</h5>
          <div className="post-box d-flex">
            <div className="post-img">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/post-01.jpg"}
                alt=""
              />
            </div>
            <div className="post-title">
              <p>Lorem ipsum dolor sit amet, consecte adipisicing elit.</p>
              <span>March 12, 2021</span>
            </div>
          </div>
          <div className="post-box d-flex">
            <div className="post-img">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/post-02.jpg"}
                alt=""
              />
            </div>
            <div className="post-title">
              <p>Lorem ipsum dolor sit amet, consecte adipisicing elit.</p>
              <span>March 12, 2021</span>
            </div>
          </div>
          <div className="post-box d-flex">
            <div className="post-img">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/post-03.jpg"}
                alt=""
              />
            </div>
            <div className="post-title">
              <p>Lorem ipsum dolor sit amet, consecte adipisicing elit.</p>
              <span>March 12, 2021</span>
            </div>
          </div>
        </div>
        <div className="side-gallery">
          <h5>Gallery</h5>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/gallery-01.jpg"}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/images/gallery-02.jpg"}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/images/gallery-03.jpg"}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/images/gallery-04.jpg"}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/images/gallery-05.jpg"}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/images/gallery-06.jpg"}
            alt=""
          />
        </div>
        <div className="side-contact">
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li>
              <i className="las la-map-marker" />
              Kakamega County, Kenya
            </li>
            <li>
              <i className="las la-phone" />
              +1 (396) 486 4709
            </li>
            <li>
              <i className="las la-envelope" />
              kakamega.go.ke
            </li>
          </ul>
        </div>
        <div className="side-social">
          <ul className="list-unstyled list-inline">
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
                <i className="fab fa-google" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href={process.env.PUBLIC_URL + "/"}>
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href={process.env.PUBLIC_URL + "/"}>
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-overlay" id="sidebar-overlay" />
    </Styles>
  );
}

export default Sidebar;
