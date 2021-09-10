import React, {Component} from "react";
import HeaderTwo from "../../components/HeaderTwo";
import {BreadcrumbBox} from "../../components/common/Breadcrumb";

import IconBox from "../../components/IconBox";

import TestimonialSlider from "../../components/TestimonialSlider";

import FooterTwo from "../../components/FooterTwo";
import {Styles} from "./styles/about.js";
import GoogleMap from "./GoogleMap";
import PlacesSlider from "../../components/PlacesSlider";
import AboutUsKakamega from "../../components/AboutUsKakamega";

class AboutKakamega extends Component {
  render() {
    return (
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper about-page">
          {/* Header 2 */}
          <HeaderTwo />

          {/* Breadcroumb */}
          <BreadcrumbBox title="About Kakamega" />

          {/* About Area */}
          <AboutUsKakamega />

          {/* Icon Box Area */}
          <IconBox />

          {/* Course Slider */}
          <PlacesSlider />

          {/* Google Map */}
          <GoogleMap />

          {/* Testimonial Slider */}
          <TestimonialSlider />

          {/* Footer 2 */}
          <FooterTwo />
        </div>
      </Styles>
    );
  }
}

export default AboutKakamega;
