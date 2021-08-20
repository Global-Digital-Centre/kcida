import React, {useEffect} from 'react';
import {Col, Container, Nav, Row, Tab} from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import {BreadcrumbBox} from '../../components/common/Breadcrumb';
import ReviewForm from './components/ReviewForm';
import PopularCourse from './components/PopularCourse';
import CourseTag from './components/CourseTag';
import FooterTwo from '../../components/FooterTwo';
import {Styles} from './styles/course.js';

function Skills() {
    useEffect(() => {
        const courseButton = document.querySelectorAll(".course-button");
        courseButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "course-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "course-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    });

    return (
        <div className="main-wrapper course-details-page">

            {/* Header 2 */}
            < HeaderTwo/>

            {/* Breadcroumb */}
            < BreadcrumbBox title="Details"/>

            <Styles>
                {/* Course Details */}
                <section className="course-details-area">
                    <Container>
                        <Row>
                            <Col lg="9" md="8" sm="12">
                                <div className="course-details-top">
                                    <div className="heading">
                                        <h4>Kakamega County Investment and Development Agency</h4>
                                    </div>
                                    <div className="course-top-overview">
                                        <div className="d-flex overviews">
                                            <div className="author">
                                                <img
                                                    src={process.env.PUBLIC_URL + `/assets/images/author-280_x_280.png`}
                                                    alt=""/>
                                                <div className="author-name">
                                                    <h6>Author</h6>
                                                    <p>KCIDA</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-details-banner">
                                        <img src={process.env.PUBLIC_URL + `/assets/images/kakamega-town-1920-1161.png`}
                                             alt="" className="img-fluid"/>
                                    </div>
                                    <div className="course-tab-list">
                                        <Tab.Container defaultActiveKey="overview">
                                            <Nav className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="overview">Overview</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="curriculum">Strategic Capacity
                                                        Development</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="instructor">labour market
                                                        interventions</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="review">NSDEPS</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="review">JOB PORTAL</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="review">RESOURCES</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="overview" className="overview-tab">
                                                    <div className="course-desc">
                                                        <h5>Mandate</h5>
                                                        <p>The County Government of Kakamega established the Kakamega
                                                            County Investment
                                                            and Development Agency through an Act of the County Assembly
                                                            of Kakamega
                                                            referred to as the Kakamega County Investment and
                                                            development Agency Act, 2018
                                                            to provide for the establishment of a legal and
                                                            institutional framework for promotion
                                                            and co-ordination of investment by the county government of
                                                            Kakamega and for
                                                            connected purposes.</p>
                                                    </div>
                                                    <div className="course-feature">
                                                        <h5>Vision</h5>
                                                        <p>To be the preferred investment hub in Kenya</p>
                                                        <hr/>
                                                        <h5>Mission</h5>
                                                        <p>To attract, promote and facilitate investments in the
                                                            County.</p>
                                                        <hr/>
                                                        <h5>Core Values</h5>
                                                        <ul className="list-unstyled">
                                                            <li><i className="las la-arrow-right"/> Professionalism
                                                            </li>
                                                            <li><i className="las la-arrow-right"/> Teamwork
                                                            </li>
                                                            <li><i className="las la-arrow-right"/> Integrity
                                                            </li>
                                                            <li><i className="las la-arrow-right"/>
                                                                Diversity
                                                            </li>
                                                            <li><i className="las la-arrow-right"/>

                                                                Investor focused
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="course-learn">
                                                        <h5>Learning Outcome</h5>
                                                        <p>The strategies and objectives set out in this plan aim to
                                                            strengthen the core
                                                            activities of the Agency, as well as invest in strategic
                                                            initiatives that will focus on the
                                                            following priority areas:</p>
                                                        <ul className="list-unstyled">
                                                            <li><i className="fa fa-check"/> Priority Area 1: Investment
                                                                promotion

                                                            </li>
                                                            <li><i className="fa fa-check"/> Priority Area 2: Investment
                                                                services

                                                            </li>
                                                            <li><i className="fa fa-check"/> Priority Area 3: Networking
                                                                and partnerships

                                                            </li>
                                                            <li><i className="fa fa-check"/> Priority Area 4:
                                                                Institutional capacity of the Agency
                                                            </li>
                                                            <li><i className="fa fa-check"/>
                                                                Priority Area 5: Asset management
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="course-share">
                                                        <h5>Share</h5>
                                                        <ul className="social list-unstyled list-inline">
                                                            <li className="list-inline-item"><a
                                                                href={process.env.PUBLIC_URL + "/"}><i
                                                                className="fab fa-facebook-f"/></a></li>
                                                            <li className="list-inline-item"><a
                                                                href={process.env.PUBLIC_URL + "/"}><i
                                                                className="fab fa-twitter"/></a></li>
                                                            <li className="list-inline-item"><a
                                                                href={process.env.PUBLIC_URL + "/"}><i
                                                                className="fab fa-linkedin-in"/></a></li>
                                                            <li className="list-inline-item"><a
                                                                href={process.env.PUBLIC_URL + "/"}><i
                                                                className="fab fa-youtube"/></a></li>
                                                            <li className="list-inline-item"><a
                                                                href={process.env.PUBLIC_URL + "/"}><i
                                                                className="fab fa-dribbble"/></a></li>
                                                        </ul>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="curriculum" className="curriculum-tab">
                                                    <div className="course-curriculum">
                                                        <h5>Strategic Capacity Development</h5>
                                                        <p>The KCIDA Office promotes and coordinates sector skills,
                                                            capacity development strategies and actions to respond to
                                                            private and public sector needs.

                                                        </p>
                                                    </div>
                                                    <div className="course-element">
                                                        <h5>Public Sector Capacity Development</h5>
                                                        <div className="course-item">
                                                            <button className="course-button active">Implementation of
                                                                Capacity Building Fund

                                                                <span>04 Lectures - 30 Min</span></button>
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="play-icon"><i
                                                                            className="las la-play"/> Lecture: 01</span>
                                                                        <span className="lecture-title">Javascript functional components</span>
                                                                        <span className="lecture-duration">02:36</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i
                                                                            className="las la-play"/> Lecture: 02</span>
                                                                        <span className="lecture-title">Javascript api integration</span>
                                                                        <span className="lecture-duration">04:20</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i
                                                                            className="las la-play"/> Lecture: 03</span>
                                                                        <span className="lecture-title">Javscript project Setup</span>
                                                                        <span className="lecture-duration">03:39</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i
                                                                            className="las la-play"/> Lecture: 04</span>
                                                                        <span className="lecture-title">React app setup project</span>
                                                                        <span className="lecture-duration">01:56</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="course-item">
                                                            <button className="course-button active">Private Sector
                                                                Capacity Development <span>03 Lectures - 43 Min</span>
                                                            </button>
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="play-icon"><i
                                                                            className="las la-play"/> Lecture: 01</span>
                                                                        <span className="lecture-title">Javascript functional components</span>
                                                                        <span className="lecture-duration">11:36</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i
                                                                            className="las la-play"/> Lecture: 02</span>
                                                                        <span className="lecture-title">Javascript api integration</span>
                                                                        <span className="lecture-duration">19:20</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i
                                                                            className="las la-play"/> Lecture: 03</span>
                                                                        <span className="lecture-title">Javscript project Setup</span>
                                                                        <span className="lecture-duration">10:39</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="course-item">
                                                            <button className="course-button active">Part 3: React
                                                                Application Setup
                                                                Project <span>04 Lectures - 59 Min</span></button>
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="play-icon"><i
                                                                            className="las la-play"/> Lecture: 01</span>
                                                                        <span className="lecture-title">Javascript functional components</span>
                                                                        <span className="lecture-duration">24:36</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i
                                                                            className="las la-play"/> Lecture: 02</span>
                                                                        <span className="lecture-title">Javascript api integration</span>
                                                                        <span className="lecture-duration">21:20</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i
                                                                            className="las la-play"/> Lecture: 03</span>
                                                                        <span className="lecture-title">Javscript project Setup</span>
                                                                        <span className="lecture-duration">15:39</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="instructor" className="instructor-tab">
                                                    <h5>labour market interventions</h5>
                                                    <div className="instructor-item">
                                                        <Row>
                                                            <Col md="4">
                                                                <div className="instructor-img">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + `/assets/images/instructor-1.jpg`}
                                                                        alt="" className="img-fluid"/>
                                                                </div>
                                                            </Col>
                                                            <Col md="8">
                                                                <div className="instructor-content">
                                                                    <div className="instructor-box">
                                                                        <div
                                                                            className="top-content d-flex justify-content-between">
                                                                            <div className="instructor-name">
                                                                                <h6>Mark Shadow</h6>
                                                                                <p>Senior Lecturer</p>
                                                                            </div>
                                                                            <div className="instructor-social">
                                                                                <ul className="social list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><a
                                                                                        href={process.env.PUBLIC_URL + "/"}><i
                                                                                        className="fab fa-facebook-f"/></a>
                                                                                    </li>
                                                                                    <li className="list-inline-item"><a
                                                                                        href={process.env.PUBLIC_URL + "/"}><i
                                                                                        className="fab fa-twitter"/></a>
                                                                                    </li>
                                                                                    <li className="list-inline-item"><a
                                                                                        href={process.env.PUBLIC_URL + "/"}><i
                                                                                        className="fab fa-linkedin-in"/></a>
                                                                                    </li>
                                                                                    <li className="list-inline-item"><a
                                                                                        href={process.env.PUBLIC_URL + "/"}><i
                                                                                        className="fab fa-youtube"/></a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="instructor-desk">
                                                                            <p>The KCIDA Office facilitates labour
                                                                                market integration through innovative
                                                                                partnerships and interventions through
                                                                                professional internships and the
                                                                                coordination of employment programmes.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <div className="instructor-item">
                                                        <Row>
                                                            <Col md="4">
                                                                <div className="instructor-img">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + `/assets/images/instructor-2.jpg`}
                                                                        alt="" className="img-fluid"/>
                                                                </div>
                                                            </Col>
                                                            <Col md="8">
                                                                <div className="instructor-content">
                                                                    <div className="instructor-box">
                                                                        <div
                                                                            className="top-content d-flex justify-content-between">
                                                                            <div className="instructor-name">
                                                                                <h6>Katrin Kay</h6>
                                                                                <p>Senior Lecturer</p>
                                                                            </div>
                                                                            <div className="instructor-social">
                                                                                <ul className="social list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><a
                                                                                        href={process.env.PUBLIC_URL + "/"}><i
                                                                                        className="fab fa-facebook-f"/></a>
                                                                                    </li>
                                                                                    <li className="list-inline-item"><a
                                                                                        href={process.env.PUBLIC_URL + "/"}><i
                                                                                        className="fab fa-twitter"/></a>
                                                                                    </li>
                                                                                    <li className="list-inline-item"><a
                                                                                        href={process.env.PUBLIC_URL + "/"}><i
                                                                                        className="fab fa-linkedin-in"/></a>
                                                                                    </li>
                                                                                    <li className="list-inline-item"><a
                                                                                        href={process.env.PUBLIC_URL + "/"}><i
                                                                                        className="fab fa-youtube"/></a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="instructor-desk">
                                                                            <p>Lorem ipsum dolor sit amet consectetur
                                                                                adipisicing elit. Quae perferendis
                                                                                delectus voluptate reiciendis animi nisi
                                                                                nemo tenetur sequi cum laudantium sit
                                                                                totam libero quasi ducimus accusantium
                                                                                numquam eaque.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <div className="instructor-item">
                                                        <Row>
                                                            <Col md="4">
                                                                <div className="instructor-img">
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + `/assets/images/instructor-3.jpg`}
                                                                        alt="" className="img-fluid"/>
                                                                </div>
                                                            </Col>
                                                            <Col md="8">
                                                                <div className="instructor-content">
                                                                    <div className="instructor-box">
                                                                        <div
                                                                            className="top-content d-flex justify-content-between">
                                                                            <div className="instructor-name">
                                                                                <h6>David Show</h6>
                                                                                <p>Senior Lecturer</p>
                                                                            </div>
                                                                            <div className="instructor-social">
                                                                                <ul className="social list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><a
                                                                                        href={process.env.PUBLIC_URL + "/"}><i
                                                                                        className="fab fa-facebook-f"/></a>
                                                                                    </li>
                                                                                    <li className="list-inline-item"><a
                                                                                        href={process.env.PUBLIC_URL + "/"}><i
                                                                                        className="fab fa-twitter"/></a>
                                                                                    </li>
                                                                                    <li className="list-inline-item"><a
                                                                                        href={process.env.PUBLIC_URL + "/"}><i
                                                                                        className="fab fa-linkedin-in"/></a>
                                                                                    </li>
                                                                                    <li className="list-inline-item"><a
                                                                                        href={process.env.PUBLIC_URL + "/"}><i
                                                                                        className="fab fa-youtube"/></a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="instructor-desk">
                                                                            <p>Lorem ipsum dolor sit amet consectetur
                                                                                adipisicing elit. Quae perferendis
                                                                                delectus voluptate reiciendis animi nisi
                                                                                nemo tenetur sequi cum laudantium sit
                                                                                totam libero quasi ducimus accusantium
                                                                                numquam eaque.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="review" className="review-tab">
                                                    <Row>
                                                        <Col md="12">
                                                            <div className="review-comments">
                                                                <h5>Course Reviews</h5>
                                                                <div className="comment-box d-flex">
                                                                    <div className="comment-image">
                                                                        <img
                                                                            src={process.env.PUBLIC_URL + `/assets/images/testimonial-2.jpg`}
                                                                            alt=""/>
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <div
                                                                            className="content-title d-flex justify-content-between">
                                                                            <div className="comment-writer">
                                                                                <h6>Mark Shadow</h6>
                                                                                <p>Mar 26, 2020 | 06:30pm</p>
                                                                                <ul className="list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><i
                                                                                        className="las la-star"/></li>
                                                                                    <li className="list-inline-item"><i
                                                                                        className="las la-star"/></li>
                                                                                    <li className="list-inline-item"><i
                                                                                        className="las la-star"/></li>
                                                                                    <li className="list-inline-item"><i
                                                                                        className="las la-star"/></li>
                                                                                    <li className="list-inline-item"><i
                                                                                        className="las la-star-half-alt"/>
                                                                                    </li>
                                                                                    <li className="list-inline-item">(4.5)</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="reply-btn">
                                                                                <button type="button"><i
                                                                                    className="las la-reply-all"/> Reply
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="comment-desc">
                                                                            <p>Lorem ipsum dolor sit amet consectetur
                                                                                adipisicing elit. Architecto laborum
                                                                                quas placeat perspiciatis est, nisi
                                                                                expedita consectetur sit minus illum
                                                                                laudantium nostrum dolore odit
                                                                                asperiores quisquam ad enim iusto
                                                                                laborum quas placeat perspiciatis
                                                                                saepe.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-box d-flex">
                                                                    <div className="comment-image">
                                                                        <img
                                                                            src={process.env.PUBLIC_URL + `/assets/images/testimonial-1.jpg`}
                                                                            alt=""/>
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <div
                                                                            className="content-title d-flex justify-content-between">
                                                                            <div className="comment-writer">
                                                                                <h6>Katrin Kay</h6>
                                                                                <p>Mar 26, 2020 | 06:30pm</p>
                                                                                <ul className="list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><i
                                                                                        className="las la-star"></i>
                                                                                    </li>
                                                                                    <li className="list-inline-item"><i
                                                                                        className="las la-star"></i>
                                                                                    </li>
                                                                                    <li className="list-inline-item"><i
                                                                                        className="las la-star"></i>
                                                                                    </li>
                                                                                    <li className="list-inline-item"><i
                                                                                        className="las la-star"></i>
                                                                                    </li>
                                                                                    <li className="list-inline-item"><i
                                                                                        className="las la-star-half-alt"></i>
                                                                                    </li>
                                                                                    <li className="list-inline-item">(4.5)</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="reply-btn">
                                                                                <button type="button"><i
                                                                                    className="las la-reply-all"></i> Reply
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="comment-desc">
                                                                            <p>Lorem ipsum dolor sit amet consectetur
                                                                                adipisicing elit. Architecto laborum
                                                                                quas placeat perspiciatis est, nisi
                                                                                expedita consectetur sit minus illum
                                                                                laudantium nostrum dolore odit
                                                                                asperiores quisquam ad enim iusto
                                                                                laborum quas placeat perspiciatis
                                                                                saepe.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-box d-flex">
                                                                    <div className="comment-image">
                                                                        <img
                                                                            src={process.env.PUBLIC_URL + `/assets/images/testimonial-2.jpg`}
                                                                            alt=""/>
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <div
                                                                            className="content-title d-flex justify-content-between">
                                                                            <div className="comment-writer">
                                                                                <h6>David Show</h6>
                                                                                <p>Mar 26, 2020 | 06:30pm</p>
                                                                                <ul className="list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><i
                                                                                        className="las la-star"></i>
                                                                                    </li>
                                                                                    <li className="list-inline-item"><i
                                                                                        className="las la-star"></i>
                                                                                    </li>
                                                                                    <li className="list-inline-item"><i
                                                                                        className="las la-star"></i>
                                                                                    </li>
                                                                                    <li className="list-inline-item"><i
                                                                                        className="las la-star"></i>
                                                                                    </li>
                                                                                    <li className="list-inline-item"><i
                                                                                        className="las la-star-half-alt"></i>
                                                                                    </li>
                                                                                    <li className="list-inline-item">(4.5)</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="reply-btn">
                                                                                <button type="button"><i
                                                                                    className="las la-reply-all"></i> Reply
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="comment-desc">
                                                                            <p>Lorem ipsum dolor sit amet consectetur
                                                                                adipisicing elit. Architecto laborum
                                                                                quas placeat perspiciatis est, nisi
                                                                                expedita consectetur sit minus illum
                                                                                laudantium nostrum dolore odit
                                                                                asperiores quisquam ad enim iusto
                                                                                laborum quas placeat perspiciatis
                                                                                saepe.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="review-form">
                                                                <h5>Submit Review</h5>
                                                                <ReviewForm/>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3" md="4" sm="12">
                                <div className="single-details-sidbar">
                                    <Row>
                                        <Col md="12">
                                            <div className="course-details-feature">
                                                <h5 className="title">Course Details</h5>
                                                <ul className="list-unstyled feature-list">
                                                    <li><i className="las la-calendar"/> Start
                                                        Date: <span>August, 2018</span></li>
                                                    <li><i className="las la-clock"/> Duration: <span>4 Year</span></li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col md="12">
                                            <PopularCourse/>
                                        </Col>
                                        <Col md="12">
                                            <CourseTag/>
                                        </Col>
                                    </Row>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>

            {/* Footer 2 */}
            <FooterTwo/>

        </div>
    )
}

export default Skills