import React, {Component} from "react";
import Header from "../../components/Header";
import {BreadcrumbBox} from "../../components/common/Breadcrumb";
import AboutUs from "../../components/AboutUs";
import TabBox from "./../../components/TabBox";
import TestimonialSlider from "../../components/TestimonialSlider";
import FaqEvent from "../../components/FaqEvent";
import FooterTwo from "../../components/FooterTwo";
import {Styles} from "./styles/about.js";
import IconMission from "../../components/IconMission";
import CoreValuesBox from "../../components/CoreValuesBox";

class About extends Component {
  render() {
    return (
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper about-page">
          {/* Header 2 */}
          <Header/>

          {/* Breadcroumb */}
          <BreadcrumbBox title="About Us" />

          {/* About Area */}
          <AboutUs />

          {/* Icon Box Area */}
          <IconMission />

          {/* Service Box */}
          <CoreValuesBox />

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

export default About;
