import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";

const ContactPage = () => {

  return (

    <Fragment>
      <MetaTags>
        <title>KCIDA | Contact</title>
        <meta
          name="description"
          content="KCIDA | Contact Page"
        />
      </MetaTags>

      <LayoutOne>
        <PageHeader
          bgImg={require("../assets/images/page_bg.jpg")}
          title="Contact Us"
        />

        <ContactForm/>

      </LayoutOne>
    </Fragment>

  );
};


export default ContactPage;   