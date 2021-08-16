import React, {Component} from 'react';
import Header from '../../components/Header';
import {BreadcrumbBox} from '../../components/common/Breadcrumb';
import AboutUs from '../../components/AboutUs';
import IconBox from '../../components/IconBox';
import TabBox from './../../components/TabBox';
import TestimonialSlider from '../../components/TestimonialSlider';
import FaqEvent from '../../components/FaqEvent';
import FooterTwo from '../../components/FooterTwo';
import {Styles} from "./styles/about.js";
import ServiceBox from "../../components/ServiceBox";

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
                    <AboutUs/>

                    {/* Icon Box Area */}
                    <IconBox/>

                    {/* Tab Section */}
                    <TabBox/>

                    {/* Service Box */}
                    <ServiceBox/>

                    {/* Testimonial Slider */}
                    <TestimonialSlider/>

                    {/* Faq & Event Area */}
                    <FaqEvent/>

                    {/* Footer 2 */}
                    <FooterTwo/>

                </div>
            </Styles>
        )
    }
}

export default About