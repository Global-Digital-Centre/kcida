import React, {Component} from "react";
import MobileMenu from "./common/MobileMenu";
import {Styles} from "./styles/header.js";
import "./styles/Navbar.css";
import Navbar from "./common/navbar";


class Header extends Component {
  render() {
    return (
      <Styles>
        {/* Topbar */}
        <section className="header navbar fixed-top">

            <section className="header-top">

                <section className="header-top__logo">
                    <a href="/" className="header-logo">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/assets/images/logo200*200.png"
                            }
                    className="Logo"
                    alt="logo"
                />
              </a>
            </section>

            <section className="header-top__navbar">
                <section className="header-top__navigation">
                    KAKAMEGA COUNTY INVESTMENT AND DEVELOPMENT AGENCY
                </section>
            </section>
            </section>

            <section className="header-bottom">

                <section className="header-bottom__phone">
                    <Navbar/>
                </section>

            </section>

            <section className="header-bottom__email">
                <a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "https://kakamega.go.ke"} style={{color: "green"}} className="fab fa-internet-explorer"/>
                <a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "https://twitter.com/County037?"} style={{color: "blue"}} className="fab fa-twitter"/>
                <a style={{color: "red"}} className="fab fa-instagram"/>
                <a style={{color: "blue"}} className="fab fa-facebook"/>

            </section>

        </section>

        {/* Sticky Menu */}
        {/*<StickyMenu />*/}

        {/* Mobile Menu */}
        <MobileMenu />

      </Styles>
    );
  }
}

export default Header;
