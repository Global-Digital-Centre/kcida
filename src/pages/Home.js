import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Slider from "../components/Slider/SliderTwo";
import Services from "../components/Services/home-one";
import About from "../components/About/home-two";
import WhyChooseUs from "../components/WhyChooseUs";
import Video from "../components/Video";
import Funfact from "../components/FunFact/home-one";
import Gallery from "../components/Gallery/GalleryThree";
import Team from "../components/Team/home-one";
import Blog from "../components/Blog/home-one";
import Testimonial from "../components/Testimonials/home-one";
import LogoContainer from "../components/BrandLogo";
import ContactForm from "../components/ContactForm";
import PricingTable from "../components/PricingTable/home-two";
import Loader from "../components/Shared/Loader";
import GoTop from "../components/Shared/GoTop";


class Home extends Component {
  // Preloader
  state = {
    loading: true
  };

  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>KCIDA | Home</title>
          <meta
            name="description"
            content="KCIDA | Home"
          />
        </MetaTags>

        {/* Preloader */}
        <Loader loading={this.state.loading}/>


        <LayoutOne>

          <Slider/>
          <About/>
          <WhyChooseUs/>
          <Services/>
          <Gallery/>

          {/*<PricingTable/>*/}



          <Video/>
          <Funfact/>

          <Team/>

          <Blog/>
          <Testimonial/>
          <LogoContainer/>
          <ContactForm/>


          {/* Go Top Button */}
          <GoTop scrollStepInPx="50" delayInMs="10.50"/>

        </LayoutOne>
      </Fragment>
    );
  }
}

export default Home;
