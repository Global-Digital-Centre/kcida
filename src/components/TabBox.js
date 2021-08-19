import React, {Component} from 'react';
import {Col, Container, Nav, Row, Tab} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Styles} from "./styles/tabBox.js";

class TabBox extends Component {

    render() {
        return (
            <Styles>
                {/* Tab Box Area */}
                <section className="tab-section">
                    <Container>
                        <Tab.Container defaultActiveKey="why">
                            <Row>
                                <Col lg="3" md="4">
                                    <Nav className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="why"><i className="las la-arrow-right"/> Investment In Kakamega</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="mission"><i className="las la-arrow-right"/> Investment Opportunities</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="vision"><i className="las la-arrow-right"/> Getting Started</Nav.Link>
                                        </Nav.Item>
                                       {/* <Nav.Item>
                                            <Nav.Link eventKey="ranking"><i className="las la-arrow-right"/> Our Ranking</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="research"><i className="las la-arrow-right"/> Our Research</Nav.Link>
                                        </Nav.Item>*/}
                                    </Nav>
                                </Col>
                                <Col lg="9" md="8">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="why">
                                            <h4 className="tab-title">Why Invest In Kakamega</h4>
                                            <p className="tab-desc">Kakamega County is an agricultural-based economy with sugar cane
                                                being the principal cash crop.The county borders Vihiga County to the South, Siaya and Busia Counties to the
                                                West, Bungoma and Trans-Nzoia Counties to the North and Nandi and Uasin Gishu
                                                Counties to the East. It has 12 sub-counties, 60 electoral wards and 400 Community
                                                Areas.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"/>Strategically Located</li>
                                                <li><i className="fa fa-check"/>Market potential</li>
                                                <li><i className="fa fa-check"/>Agriculture</li>
                                                <li><i className="fa fa-check"/>Availability of Natural Resources</li>
                                                <li><i className="fa fa-check"/>Investor Support and Incentives</li>
                                                <li><i className="fa fa-check"/>Good governance</li>
                                                <li><i className="fa fa-check"/>All sectors open to investors with no restrictions.</li>
                                               <li>
                                                   <Link className="readmore-btn" to={process.env.PUBLIC_URL + "/about"}>Download Investment Law</Link>
                                               </li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="mission">
                                            <h4 className="tab-title">Investment Opportunities</h4>

                                            <p className="tab-desc">All sectors open to investors with no restrictions.Safe, peaceful and attractive location for investors</p>

                                            <ul className="list-unstyled check-list">
                                                <div className="col-md-12">
                                                    <li><i className="fa fa-check"/>Agriculture.</li>
                                                    <li><i className="fa fa-check"/>Health Services.</li>
                                                    <li><i className="fa fa-check"/>Water, Environment and Natural Resources.</li>
                                                    <li><i className="fa fa-check"/>Trade, Industrialisation and Tourism.</li>
                                                    <li><i className="fa fa-check"/>Land, Housing, Urban Areas and Physical Planning.</li>
                                                    <li><i className="fa fa-check"/>Roads,Public Works and Energy.</li>
                                                    <li><i className="fa fa-check"/>ICT, E-Government and Communication.</li>
                                                </div>

                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="vision">
                                            <h4 className="tab-title">Getting Started</h4>
                                            <p className="tab-desc">The County Government of Kakamega established the Kakamega County Investment
                                                and Development Agency through an Act of the County Assembly of Kakamega
                                                referred to as the Kakamega County Investment and development Agency Act, 2018
                                                to provide for the establishment of a legal and institutional framework for promotion
                                                and co-ordination of investment by the county government of Kakamega and for
                                                connected purposes.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"/>Entering Kakamega.</li>
                                                <li><i className="fa fa-check"/>Starting a Business.</li>
                                                <li><i className="fa fa-check"/>Hiring in Kakamega.</li>
                                                <li><i className="fa fa-check"/>Paying Taxes.</li>
                                                <li><i className="fa fa-check"/>Visa Information.</li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="ranking">
                                            <h4 className="tab-title">Our Ranking</h4>
                                            <p className="tab-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere a nisi fuga rem quas molestias, eveniet minima molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, recusandae? Assumenda, error. Quam dicta iusto saepe. Odit minus voluptas, fuga ipsum quia debitis totam, tempore laudantium quasi dicta dolorem deleniti.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="research">
                                            <h4 className="tab-title">Our Research</h4>
                                            <p className="tab-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere a nisi fuga rem quas molestias, eveniet minima molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, recusandae? Assumenda, error. Quam dicta iusto saepe. Odit minus voluptas, fuga ipsum quia debitis totam, tempore laudantium quasi dicta dolorem deleniti.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                            </ul>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default TabBox
