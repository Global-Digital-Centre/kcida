import React, {Component} from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import IconBox from './components/IconBox';
import PlacesFilter from './components/PlacesFilter';
import TestimonialSlider from './components/TestimonialSlider';
import FaqEvent from './components/FaqEvent';
import HelpArea from './components/HelpArea';
import CampusTour from './components/CampusTour';
import TabBox from "./components/TabBox";
import FooterTwo from "./components/FooterTwo";
import ImageGallery from "./components/ImageGallery";
import GoogleMap from "./pages/contact/GoogleMap";

export default class HomeOne extends Component {
    render() {
        return (
            <div className="main-wrapper" >

                {/* Header */}
                < Header />

                {/* Hero Slider */}
                < HeroSlider />

                {/* Faq & Event Area */}
                < FaqEvent />

                {/* Tab Section */}
                <TabBox />

                {/* Icon Box */}
                < IconBox />

                {/* Course Filter */}
                < PlacesFilter/>

                {/* Testimonial Slider */}
                <TestimonialSlider/>

                {/* Image Gallery Area */}
                <ImageGallery/>

                {/* Help Area */}
                < HelpArea/>

                {/* Campus Tour */}
                < CampusTour/>

                {/* Google Map */}
                <GoogleMap/>


                {/*  About Area
                < AboutUs />






                 Team Slider
                < TeamSlider />

                 Help Area
                < HelpArea />

                 Blog Area
                < HomeBlog />*/}



                 {/*Newsletter Form
                < NewsletterForm />*/}

                {/* Footer 2 */}
                <FooterTwo />


            </div >
        )
    }
}
