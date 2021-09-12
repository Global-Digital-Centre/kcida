import React, {Component} from "react";
import Header from "../../components/Header";
import {BreadcrumbBox} from "../../components/common/Breadcrumb";
import TestimonialSlider from "../../components/TestimonialSlider";
import FaqEvent from "../../components/FaqEvent";
import FooterTwo from "../../components/FooterTwo";
import {Styles} from "./styles/about.js";
import TabOpportunities from "../../components/TabOpportunities";
import IconBox from "../../components/IconBox";

class Opportunities extends Component {
  render() {
    return (
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper about-page">
          {/* Header 2 */}
          <Header/>

          {/* Breadcroumb */}
          <BreadcrumbBox title="Investment Opportunities" />

          {/* Tab Section */}
          <TabOpportunities />

          {/*County Strides*/}
          <IconBox />

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

export default Opportunities;
