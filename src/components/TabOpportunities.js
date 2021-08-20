import React, {Component} from 'react';
import {Col, Container, Nav, Row, Tab} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Styles} from "./styles/tabBox.js";

class TabOpportunities extends Component {

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
                                            <Nav.Link eventKey="why"><i
                                                className="las la-arrow-right"/> Agriculture</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="mission"><i className="las la-arrow-right"/> Health
                                                Services</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="vision"><i className="las la-arrow-right"/> Water,
                                                Environment & Natural Resources</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="ranking"><i className="las la-arrow-right"/> Trade,
                                                Industrialization and Tourism</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="research"><i className="las la-arrow-right"/> Lands,
                                                Housing, Urban Areas & Physical Planning</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="roads"><i className="las la-arrow-right"/> Roads, Public
                                                Works & Energy</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="ict"><i className="las la-arrow-right"/> ICT,
                                                E-Government & Communication</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="public"><i className="las la-arrow-right"/>Public
                                                Service & Administration</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="social"><i className="las la-arrow-right"/>Social
                                                Service, Youth, Sports & Culture</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="education"><i className="las la-arrow-right"/>Education,
                                                Science & Technology</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col lg="9" md="8">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="why">
                                            <h4 className="tab-title">Agriculture</h4>
                                            <p className="tab-desc">Kakamega County is an agricultural-based
                                                economy.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"/>A Farm inputs subsidy programme in place
                                                    - Subsidized; farm mechanization, seeds and fertilizer, pest and
                                                    disease control and free agricultural extension services
                                                </li>
                                                <li><i className="fa fa-check"/>Livestock and veterinary services
                                                    - Kakamega Dairy Development Corporation in place
                                                    - One cow initiative program is on course to boost dairy farming
                                                    - Subsidized County Artificial Insemination Service
                                                    - Subsidized Poultry and fish farming
                                                </li>
                                                <li>
                                                    <Link className="learnmore-btn"
                                                          to={process.env.PUBLIC_URL + "/about"}>Download</Link>
                                                </li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="mission">
                                            <h4 className="tab-title">Health Services</h4>

                                            <p className="tab-desc">All sectors open to investors with no
                                                restrictions.Safe, peaceful and attractive location for investors</p>

                                            <ul className="list-unstyled check-list">
                                                <div className="col-md-12">
                                                    <li><i className="fa fa-check"/>Phase 1 of state of art health
                                                        facility - Kakamega Level 6 hospital
                                                        complete
                                                    </li>
                                                    <li><i className="fa fa-check"/>Two Level 4 hospitals; Shiamakhubu &
                                                        Mumias complete.
                                                    </li>
                                                    <li><i className="fa fa-check"/>fya ya Mama na Mtoto Programme -
                                                        Oparanyacare benefits
                                                        over 50,000 vulnarable women.
                                                    </li>
                                                    <li><i className="fa fa-check"/>Increasing county universal health
                                                        insurance cover.
                                                    </li>
                                                </div>

                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="vision">
                                            <h4 className="tab-title"> Water, Environment & Natural Resources</h4>
                                            <p className="tab-desc">Kakamega County Investment and
                                                Development Agency (KCIDA) delivers on its mandate of attracting,
                                                promoting and
                                                facilitating investments in the County..</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"/> Constructed a 5,000m3
                                                    water storage tank in Kakamega town.
                                                </li>
                                                <li><i className="fa fa-check"/>Expanding Mumias town water network
                                                    through Last mile
                                                    connectivity program.
                                                </li>
                                                <li><i className="fa fa-check"/>Transiting from electricity dependence
                                                    to solar energy for
                                                    pumping schemes.
                                                </li>
                                                <li><i className="fa fa-check"/>Undertaking flagship Misango water
                                                    project in Khwisero.
                                                </li>
                                                <li><i className="fa fa-check"/>Creating public awareness on solid waste
                                                    management and
                                                    pollution.
                                                </li>
                                                <li><i className="fa fa-check"/>Acquiring solid waste management sites.
                                                </li>
                                                <li><i className="fa fa-check"/>Establishing a waste to energy plant.
                                                </li>
                                                <li><i className="fa fa-check"/>n efforts to spearhead Access Benefit
                                                    Sharing (ABS) of genetic
                                                    resources; natural resources:- forests, rivers and gold deposits.
                                                </li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="ranking">
                                            <h4 className="tab-title">Trade, Industrialization and Tourism</h4>
                                            <p className="tab-desc"> Kakamega County Investment and
                                                Development Agency (KCIDA) delivers on its mandate of attracting,
                                                promoting and
                                                facilitating investments in the County..</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"/> Constructed 7 modern markets, 5 more
                                                    ongoing
                                                    - To construct 12 open air markets & ultra modern markets
                                                    - Fabricated and distributed modern kiosks to traders
                                                    - Construction of jua kali sheds ongoing.
                                                </li>
                                                <li><i className="fa fa-check"/>Established Kakamega County Micro
                                                    Finance Corporation and
                                                    Kakamega County Investment and Development Agency.
                                                </li>
                                                <li><i className="fa fa-check"/>Industrialization; manufacturing plan on
                                                    course
                                                    - Value addition of crops and animal products
                                                    - Energy production from waste
                                                    - Constructing two factories for tea and dairy products.
                                                </li>
                                                <li><i className="fa fa-check"/>Establishing an Export Processing Zone
                                                    (EPZ) and industrial park.
                                                </li>
                                                <li><i className="fa fa-check"/>Developing and enhancing tourism;
                                                    Heritage sites, Kakamega
                                                    tropical forest, sports like rugby, football, bull and cork fighting
                                                    etc.
                                                </li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="research">
                                            <h4 className="tab-title">Lands, Housing, Urban Areas & Physical
                                                Planning</h4>
                                            <p className="tab-desc"> Kakamega County Investment and
                                                Development Agency (KCIDA) delivers on its mandate of attracting,
                                                promoting and
                                                facilitating investments in the County..</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"/>Improved infrastructure &
                                                    beaautification of Kakamega & Mumias.
                                                </li>
                                                <li><i className="fa fa-check"/>World Bank availed Kshs383M to support
                                                    infrastructure
                                                    development in Kakamega and Mumias towns.
                                                </li>
                                                <li><i className="fa fa-check"/>To ensure promotion of equitable access
                                                    to land.
                                                </li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="roads">
                                            <h4 className="tab-title">Roads, Public Works & Energy</h4>
                                            <p className="tab-desc"> Kakamega County Investment and
                                                Development Agency (KCIDA) delivers on its mandate of attracting,
                                                promoting and
                                                facilitating investments in the County..</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"/>Upgraded 69 Kms of gravel roads to
                                                    bitumen standard.
                                                </li>
                                                <li><i className="fa fa-check"/> Achieved over 600Kms of gravel roads.
                                                </li>
                                                <li><i className="fa fa-check"/>46 structurally sound bridges complete.
                                                </li>
                                                <li><i className="fa fa-check"/>. Installed 48 high mast lamps at main
                                                    market centres
                                                    - Targets to erect 100 high mast lamps by 2022.
                                                </li>
                                                <li><i className="fa fa-check"/>. To achieve reliable and affordable
                                                    access to electricity by the
                                                    citizens by 2022.
                                                </li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="ict">
                                            <h4 className="tab-title">ICT, E-Government & Communication</h4>
                                            <p className="tab-desc"> Kakamega County Investment and
                                                Development Agency (KCIDA) delivers on its mandate of attracting,
                                                promoting and
                                                facilitating investments in the County..</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"/> Linking institutions through County
                                                    Connectivity Project.
                                                </li>
                                                <li><i className="fa fa-check"/>Enhancing County revenue through
                                                    e-Revenue collection system.
                                                </li>
                                                <li><i className="fa fa-check"/> Installing the integrated security
                                                    surveillance system.
                                                </li>
                                                <li><i className="fa fa-check"/> Installing Enterprise Project Planning
                                                    (ERP).
                                                </li>
                                                <li><i className="fa fa-check"/> Constructing a modern production
                                                    studio.
                                                </li>
                                                <li><i className="fa fa-check"/>Effecting e-Government & e-Procurement.
                                                </li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="public">
                                            <h4 className="tab-title">Public Service & Administration</h4>
                                            <p className="tab-desc"> Kakamega County Investment and
                                                Development Agency (KCIDA) delivers on its mandate of attracting,
                                                promoting and
                                                facilitating investments in the County..</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"/>Enhancing public service through
                                                    performance management plan.
                                                </li>
                                                <li><i className="fa fa-check"/>County Government devolved to lowest
                                                    unit - Community Areas.
                                                </li>
                                                <li><i className="fa fa-check"/>Electronic Registration and Head Count
                                                    of county staff .
                                                </li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="social">
                                            <h4 className="tab-title">Social Service, Youth, Sports & Culture</h4>
                                            <p className="tab-desc"> Kakamega County Investment and
                                                Development Agency (KCIDA) delivers on its mandate of attracting,
                                                promoting and
                                                facilitating investments in the County..</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"/>Phase II Construction of an ultra-modern
                                                    international sports
                                                    facility underway - The Kakamega Bukhungu stadium.
                                                </li>
                                                <li><i className="fa fa-check"/>Recruited and deployed 3,000 servicemen
                                                    and women under the
                                                    County Youth Service and Women Empowerment programme
                                                    - The youth and women to acquire technical skills in trades of their
                                                    choice from the nearest County Polytechnics
                                                    - The youth and women enrolled into the NHIF medical scheme and
                                                    a mandatory SACCO.
                                                </li>
                                                <li><i className="fa fa-check"/>Undertaken construction of low cost
                                                    housing units for the elderly,
                                                    widows, widowers, child-led households and other vulnerable
                                                    population, so far 1,080 people have benefited
                                                    - Kakamega is the five time champion in the Kenya National Music
                                                    and Cultural Festivals.
                                                </li>
                                                <li><i className="fa fa-check"/>Annual Governors’ Cup tournament and
                                                    talent search &
                                                    development programs on course.
                                                </li>
                                                <li><i className="fa fa-check"/>Training of motorcyclists and Sacco
                                                    program underway.
                                                </li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="education">
                                            <h4 className="tab-title">Education, Science & Technology</h4>
                                            <p className="tab-desc"> Kakamega County Investment and
                                                Development Agency (KCIDA) delivers on its mandate of attracting,
                                                promoting and
                                                facilitating investments in the County..</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"/>Improved learning environment and
                                                    facilities
                                                    - ECDE Centres with enrollment shot from 76,983 in 2015 to the
                                                    current 112,219 pupils
                                                    - Polytechnics - student enrollment increased from 3,000 in 2015 to
                                                    current 7,186.
                                                </li>
                                                <li><i className="fa fa-check"/>Constructing, staffing and equipping
                                                    county polytechnics.
                                                </li>
                                                <li><i className="fa fa-check"/>Supporting establishment of centres of
                                                    excellence.
                                                </li>
                                                <li><i className="fa fa-check"/>County HELB loan programme and Bursaries
                                                    for needy students.
                                                </li>
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

export default TabOpportunities
