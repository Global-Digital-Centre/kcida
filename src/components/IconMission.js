import React, {Component} from "react";
import Datas from "../data/icon-box/icon-mission.json";
import {Col, Container, Row} from "react-bootstrap";
import {Styles} from "./styles/iconMission";

class IconMission extends Component {
    render() {
        return (
            <Styles>
                {/* Icon Box */}
                <section className="icon-box-area">
                    <Container>
                        <Row>
                            {Datas.map((data, i) => (
                                <Col md="4" key={i}>
                                    <div className="full-icon-box d-flex justify-content-between">
                                        <div className="icon-box d-flex justify-content-center">
                                            <div className={data.uniqClass}>
                                                <i className={data.boxIcon} />
                                            </div>
                                            <div className="box-title">
                                                <h6>{data.title}</h6>
                                                <p>{data.subTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            </Styles>
        );
    }
}

export default IconMission;
