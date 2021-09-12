import React, {Component} from "react";
import HeaderTwo from "./components/Header";
import HeroImage from "./components/HeroImage";
import AboutKakamega from "./components/AboutUsKakamega";
import NumberCounter from "./components/NumberCounter";
import FreeCourse from "./components/FreeCourse";
import TeamSlider from "./components/TeamSlider";
import TestimonialSlider from "./components/TestimonialSlider";
import HomeBlog from "./components/HomeBlog";
import ImageGallery from "./components/ImageGallery";
import FooterTwo from "./components/FooterTwo";
import NewsletterForm from "./components/NewsletterForm";

export default class HomeTwo extends Component {
  render() {
    return (
      <div className="main-wrapper">
        {/* Header 2 */}
        <HeaderTwo />

        {/* Hero Image */}
        <HeroImage />

        {/* About Us 2 */}
        <AboutKakamega />

        {/* Counter Area */}
        <NumberCounter />

        {/* Free Course Area */}
        <FreeCourse />

        {/* Team Slider */}
        <TeamSlider />

        {/* Testimonial Slider */}
        <TestimonialSlider />

        {/* Blog Area */}
        <HomeBlog />

        {/* Image Gallery Area */}
        <ImageGallery />

        {/* Newsletter Form */}
        <NewsletterForm />

        {/* Footer 2 */}
        <FooterTwo />
      </div>
    );
  }
}
