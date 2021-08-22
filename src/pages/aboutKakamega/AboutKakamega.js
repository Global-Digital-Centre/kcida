import React, {Component} from "react";
import HeaderTwo from "../../components/HeaderTwo";
import {BreadcrumbBox} from "../../components/common/Breadcrumb";

import IconBox from "../../components/IconBox";

import TestimonialSlider from "../../components/TestimonialSlider";

import FooterTwo from "../../components/FooterTwo";
import {Styles} from "./styles/about.js";
import GoogleMap from "../contact/GoogleMap";

class AboutKakamega extends Component {
  render() {
    return (
        <Styles>
          {/* Main Wrapper */}
          <div className="main-wrapper about-page">
            {/* Header 2 */}
            <HeaderTwo/>

            {/* Breadcroumb */}
            <BreadcrumbBox title="About Kakamega"/>

            {/* About Area */}
            <AboutKakamega/>


            {/* Icon Box Area */}
            <IconBox/>


            {/* Testimonial Slider */}
            <TestimonialSlider/>

            {/*google maps*/}
            <GoogleMap/>

            {/* Footer 2 */}
            <FooterTwo/>
          </div>
        </Styles>
    );
  }
}

export default AboutKakamega;
