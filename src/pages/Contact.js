import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";
import Loader from "../components/Shared/Loader";

class ContactPage extends React.Component {
  // Preloader
  state = {
    loading: true
  };

  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({ loading: false }), 1000);
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
          <title>KCIDA | Contact</title>
          <meta
            name="description"
            content="KCIDA | Contact Page"
          />
        </MetaTags>
        {/* Preloader */}
        <Loader loading={this.state.loading}/>

        <LayoutOne>
          <PageHeader
            bgImg={require("../assets/images/page_bg.jpg")}
            title="Contact Us"
          />

          <ContactForm/>

        </LayoutOne>
      </Fragment>

    );
  }
}


export default ContactPage;   