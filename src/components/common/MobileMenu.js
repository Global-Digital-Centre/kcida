import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row} from 'react-bootstrap';
import {Styles} from "./styles/mobileMenu.js";

function MobileMenu() {
    useEffect(() => {
        // Mobile Menu
        const hmBtn = document.getElementById("mb-sidebar-btn");

        if (hmBtn) {
            const mdSidebarOverlay = document.getElementById("mb-sidebar-overlay");
            const mdSidebarBody = document.getElementById("mb-sidebar-body");
            const mdSidebarExit = document.getElementById("close-mb-sidebar");

            hmBtn.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.toggle("visible");
                mdSidebarBody.classList.toggle("opened");
            });

            mdSidebarOverlay.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.remove("visible");
                mdSidebarBody.classList.remove("opened");
            });

            mdSidebarExit.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.remove("visible");
                mdSidebarBody.classList.remove("opened");
            });
        }

        // Menu Accordion -----------------
        const menuButton = document.querySelectorAll(".mb-menu-button");
        menuButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "mb-menu-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "mb-menu-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    });

    return (
        <Styles>
            {/* Mobile Menu */}
            <section className="mobile-menu-area">
                <Container>
                    <Row>
                        <Col md="0" sm="12">
                            <div className="mb-topbar d-flex justify-content-between">
                                <div className="topbar-item">
                                    <p><i className="las la-phone"/>+1 (396) 486 4709</p>
                                </div>
                                <div className="topbar-item">
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item"><a href="https://kakamega.go.ke/"
                                                                            target="_blank" rel="noopener noreferrer"><i
                                            className="fab fa-internet-explorer"/>Kakamega Official Site</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="mb-logo-area d-flex justify-content-between">
                                <div className="mb-logo-box d-flex">
                                    <div className="hm-button">
                                        <a href={process.env.PUBLIC_URL + "/"} id="mb-sidebar-btn">
                                            <i className="las la-bars"/>
                                        </a>
                                    </div>
                                    <div className="mb-logo">
                                        <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/f-logo-171.png"} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="mb-search-box">
                                    <form action="#">
                                        <input type="text" name="search" placeholder="Search Here"/>
                                        <button type="submit"><i className="las la-search"/></button>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Mobile Menu Sidebar */}
            <section className="mb-sidebar" id="mb-sidebar-body">
                <div className="mb-sidebar-heading d-flex justify-content-between">
                    <div><h5>Menu</h5></div>
                    <div><a href={process.env.PUBLIC_URL + "/"} id="close-mb-sidebar"><i className="las la-times"/></a>
                    </div>
                </div>
                <div className="mb-sidebar-menu">
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p>Home <i className="las la-plus"/></p>
                        </button>
                        <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/"}>Home</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/about"}>Vision</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/about"}>Mission</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p>Investment Opportunities <i className="las la-plus"/></p>
                        </button>
                        <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                                <li className="nav-item"><Link className="nav-link"
                                                               to={process.env.PUBLIC_URL + "/invest-in-kakamega"}>Invest
                                    in
                                    Kakamega</Link>

                                </li>

                                <li className="nav-item"><Link className="nav-link"
                                                               to={process.env.PUBLIC_URL + "/investment-opportunities"}>Investment
                                    Opportunities</Link></li>
                                <li className="nav-item"><Link className="nav-link"
                                                               to={process.env.PUBLIC_URL + "/invest-in-kakamega"}>One
                                    Shop
                                    Centre</Link></li>
                                <li className="nav-item"><Link className="nav-link"
                                                               to={process.env.PUBLIC_URL + "/contact"}>Contact
                                    Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p>Organisation<i className="las la-plus"/></p>
                        </button>
                        <div className="mb-menu-content show">
                            {/*<ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/course-grid"}>Course Grid</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/course-list"}>Course List</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/course-details"}>Course Details</Link></li>
                            </ul>*/}
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p>Skills<i className="las la-plus"/></p>
                        </button>
                        <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/skills"}>Skills</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p>E-Services<i className="las la-plus"/></p>
                        </button>
                        <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li className="nav-item"><a className="nav-link"
                                                            href="https://www.ecitizen.go.ke/"
                                                            target="_blank"
                                                            rel="noopener noreferrer">E-Services<i
                                    className="las la-angle-right"/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p>About Us <i className="las la-plus"/></p>
                        </button>
                        <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/about"}>About Kakamega</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/about"}>Departments</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/about"}>vision</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
            <div className="mb-sidebar-overlay" id="mb-sidebar-overlay"/>
        </Styles>
    )
}

export default MobileMenu