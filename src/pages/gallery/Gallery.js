import React, {Component} from "react";
import Datas from "../../data/gallery/gallery-page.json";
import {Col, Container, Row} from "react-bootstrap";
import ModalImage from "react-modal-image";
import Header from "../../components/Header";
import {BreadcrumbBox} from "../../components/common/Breadcrumb";
import Pagination from "./../../components/Pagination";
import FooterTwo from "../../components/FooterTwo";
import {Styles} from "./styles/gallery.js";

class Gallery extends Component {
  render() {
    return (
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper gallery-page">
          {/* Header 2 */}
          <Header/>

          {/* Breadcroumb */}
          <BreadcrumbBox title="Gallery" />

          {/* Gallery Area */}
          <section className="gallery-page-area">
            <Container>
              <Row>
                {Datas.map((data, i) => (
                  <Col lg="4" sm="6" key={i}>
                    <div className="gallery-box">
                      <ModalImage
                        small={
                          process.env.PUBLIC_URL +
                          `/assets/images/${data.galleryImage}`
                        }
                        large={
                          process.env.PUBLIC_URL +
                          `/assets/images/${data.galleryImage}`
                        }
                        alt=""
                      />
                    </div>
                  </Col>
                ))}

                <Col md="12" className="text-center">
                  <Pagination />
                </Col>
              </Row>
            </Container>
          </section>

          {/* Footer 2 */}
          <FooterTwo />
        </div>
      </Styles>
    );
  }
}

export default Gallery;
