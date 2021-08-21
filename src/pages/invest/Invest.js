import React, {Component} from "react";
import HeaderTwo from "../../components/HeaderTwo";
import {BreadcrumbBox} from "../../components/common/Breadcrumb";
import TabBox from "./../../components/TabBox";
import TestimonialSlider from "../../components/TestimonialSlider";
import FaqEvent from "../../components/FaqEvent";
import FooterTwo from "../../components/FooterTwo";
import {Styles} from "./styles/about.js";

class Invest extends Component {
  render() {
    return (
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper about-page">
          {/* Header 2 */}
          <HeaderTwo />

          {/* Breadcroumb */}
          <BreadcrumbBox title="Invest in Kakamega" />

          {/*  About Area
                    <AboutUs />*/}

          {/*  Icon Box Area
                    <IconBox />*/}

          {/* Tab Section */}
          <TabBox />

          {/* Testimonial Slider */}
          <TestimonialSlider />

          {/* Faq & Event Area */}
          <FaqEvent />

          {/* Footer 2 */}
          <FooterTwo />
        </div>
      </Styles>
    );
  }
}

export default Invest;
