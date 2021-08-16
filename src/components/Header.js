import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Dropdown, Row} from 'react-bootstrap';
import Search from './common/Search';
import Sidebar from './common/Sidebar';
import StickyMenu from './common/StickyMenu';
import MobileMenu from './common/MobileMenu';
import {Styles} from "./styles/header.js";

class Header extends Component {
    render() {
        return (
            <Styles>
                {/* Topbar */}
                <section className="top-bar">
                    <Container>
                        <Row>
                            <Col lg="6" md="5">
                                <div className="bar-left">
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item"><i className="las la-map-marker"/>Kakamega County, Kenya.</li>
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/faq"}>Have Questions</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg="6" md="7">
                                <div className="bar-right d-flex justify-content-end">
                                    <ul className="list-unstyled list-inline bar-social">
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"/></a></li>
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"/></a></li>
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"/></a></li>
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-instagram"/></a></li>
                                    </ul>
                                    <ul className="list-unstyled list-inline bar-lang">
                                        <li className="list-inline-item">
                                            <Dropdown>
                                                <Dropdown.Toggle as="a"><img src={process.env.PUBLIC_URL + "/assets/images/us.png"} alt="" />English<i className="las la-angle-down"/></Dropdown.Toggle>
                                                <Dropdown.Menu as="ul">
                                                    <Dropdown.Item as="li"><img src={process.env.PUBLIC_URL + "/assets/images/us.png"} alt="" /> English</Dropdown.Item>
                                                    <Dropdown.Item as="li"><img src={process.env.PUBLIC_URL + "/assets/images/fra.png"} alt="" /> French</Dropdown.Item>
                                                    <Dropdown.Item as="li"><img src={process.env.PUBLIC_URL + "/assets/images/ger.png"} alt="" /> German</Dropdown.Item>
                                                    <Dropdown.Item as="li"><img src={process.env.PUBLIC_URL + "/assets/images/spa.png"} alt="" /> Spanish</Dropdown.Item>
                                                    <Dropdown.Item as="li"><img src={process.env.PUBLIC_URL + "/assets/images/bra.png"} alt="" /> Brazilian</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                    </ul>
                                    {/*<ul className="list-unstyled list-inline bar-login">
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/login"}><i className="las la-user"/>Log In</Link></li>
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/registration"}><i className="las la-user-edit"/>Register</Link></li>
                                    </ul>*/}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Logo Area */}
                <section className="logo-area">
                    <Container>
                        <Row>
                            <Col md="3">
                                <div className="logo">
                                    <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" /></Link>
                                </div>
                            </Col>
                            <Col md="9">
                                <div className="logo-contact-box d-flex justify-content-end">
                                    <div className="emcontact-box d-flex">
                                        <div className="box-icon">
                                            <i className="flaticon-phone-call"/>
                                        </div>
                                        <div className="box-content">
                                            <p>Call Us Now</p>
                                            <span>(908) 875 7678</span>
                                        </div>
                                    </div>
                                    <div className="emcontact-box d-flex">
                                        <div className="box-icon">
                                            <i className="flaticon-envelope"/>
                                        </div>
                                        <div className="box-content">
                                            <p>Enquery Us</p>
                                            <span>kcida@kcida.com</span>
                                        </div>
                                    </div>
                                    <div className="apply-btn">
                                        <Link to={process.env.PUBLIC_URL + "/registration"}><i className="las la-clipboard-list"/>Talk to us</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Navbar */}
                <section className="main-menu">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="main-menu-box">
                                    <div className="menu-box d-flex justify-content-between">
                                        <ul className="nav menu-nav">
                                            <li className="nav-item dropdown active">
                                                <Link className="nav-link dropdown-toggle"
                                                      to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Home <i
                                                    className="las la-angle-down"/></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item active"><Link className="nav-link"
                                                                                          to={process.env.PUBLIC_URL + "/about"}>Vision</Link>
                                                    </li>
                                                    <li className="nav-item active"><Link className="nav-link"
                                                                                          to={process.env.PUBLIC_URL + "/about"}>Mission</Link>
                                                    </li>
                                                    <li className="nav-item active"><Link className="nav-link"
                                                                                          to={process.env.PUBLIC_URL + "/"}>About
                                                        Us</Link></li>
                                                    {/*<li className="nav-item"><Link className="nav-link"
                                                                                   to={process.env.PUBLIC_URL + "/home-two"}>Home
                                                        Style 2</Link></li>*/}
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle"
                                                      to={process.env.PUBLIC_URL + "/about"}
                                                      data-toggle="dropdown">Pages <i
                                                    className="las la-angle-down"/></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link className="nav-link"
                                                                                   to={process.env.PUBLIC_URL + "/about"}>About
                                                        Us</Link></li>
                                                    <li className="nav-item"><Link className="nav-link"
                                                                                   to={process.env.PUBLIC_URL + "/gallery"}>Gallery</Link>
                                                    </li>
                                                    {/*<li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/login"}>Log In</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/registration"}>Registration</Link></li>*/}
                                                    <li className="nav-item"><Link className="nav-link"
                                                                                   to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
                                                    </li>
                                                    <li className="nav-item"><Link className="nav-link"
                                                                                   to={process.env.PUBLIC_URL + "/faq"}>Faq</Link>
                                                    </li>
                                                    {/*<li className="nav-item"><Link className="nav-link"
                                                                                   to={process.env.PUBLIC_URL + "/404"}>404</Link>
                                                    </li>*/}
                                                    {/*<li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/coming-soon"}>Coming Soon</Link></li>*/}
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle"
                                                      to={process.env.PUBLIC_URL + "/course-grid"}
                                                      data-toggle="dropdown">Opportunities<i
                                                    className="las la-angle-down"/></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link className="nav-link"
                                                                                   to={process.env.PUBLIC_URL + "/course-grid"}>Investment
                                                        Opportunities</Link></li>
                                                    <li className="nav-item"><Link className="nav-link"
                                                                                   to={process.env.PUBLIC_URL + "/course-list"}>Other
                                                        Opportunities</Link></li>
                                                    {/*<li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-details"}>Course Details</Link></li>*/}
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle"
                                                      to={process.env.PUBLIC_URL + "/instructor"}
                                                      data-toggle="dropdown">Board <i
                                                    className="las la-angle-down"/></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link className="nav-link"
                                                                                   to={process.env.PUBLIC_URL + "/instructor"}>Board
                                                        Of Directors</Link></li>
                                                    <li className="nav-item"><Link className="nav-link"
                                                                                   to={process.env.PUBLIC_URL + "/instructor"}>Management
                                                        Team</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle"
                                                      to={process.env.PUBLIC_URL + "/events"}
                                                      data-toggle="dropdown">Event <i
                                                    className="las la-angle-down"/></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link className="nav-link"
                                                                                   to={process.env.PUBLIC_URL + "/events"}>Events</Link>
                                                    </li>
                                                    <li className="nav-item"><Link className="nav-link"
                                                                                   to={process.env.PUBLIC_URL + "/event-details"}>Event
                                                        Details</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle"
                                                      to={process.env.PUBLIC_URL + "/blog-classic"}
                                                      data-toggle="dropdown">News <i
                                                    className="las la-angle-down"/></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link className="nav-link"
                                                                                   to={process.env.PUBLIC_URL + "/blog-classic"}>News
                                                        Classic</Link></li>
                                                    <li className="nav-item"><Link className="nav-link"
                                                                                   to={process.env.PUBLIC_URL + "/blog-grid"}>News
                                                        Grid</Link></li>
                                                    <li className="nav-item"><Link className="nav-link"
                                                                                   to={process.env.PUBLIC_URL + "/blog-details"}>Blog
                                                        Details</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle"
                                                      to={process.env.PUBLIC_URL + "/products"}
                                                      data-toggle="dropdown">Projects <i className="las la-angle-down"/></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link className="nav-link"
                                                                                   to={process.env.PUBLIC_URL + "/products"}>Projects</Link>
                                                    </li>
                                                    <li className="nav-item"><Link className="nav-link"
                                                                                   to={process.env.PUBLIC_URL + "/product-details"}>Product
                                                        Details</Link></li>
                                                    <li className="nav-item"><Link className="nav-link"
                                                                                   to={process.env.PUBLIC_URL + "/cart"}>Cart</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul className="nav search-cart-bar">
                                            <li className="nav-item search-box">
                                                <Search />
                                            </li>
                                            {/* <li className="nav-item cart-box">
                                                <Link to={process.env.PUBLIC_URL + "/cart"} className="nav-link nav-cart">
                                                    <i className="las la-shopping-bag"/>
                                                </Link>
                                            </li>*/}
                                            <li className="nav-item side-box">
                                                <Sidebar />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Sticky Menu */}
                <StickyMenu />

                {/* Mobile Menu */}
                <MobileMenu />
            </Styles>
        )
    }
}

export default Header
