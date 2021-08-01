import React from "react";
import AboutList from "./AboutList";
import SectionTitle from "../../SectionTitles/SectionTitle";
import AboutData from "../../../data/About/about-one";
// About Image
import aboutImg from "../../../assets/images/about.png";

const AboutContent = () => {

    return (

      <section className="about-section" id="about">
          <div className="container">
              <div className="row">
                  <div className="col-md-6 col-sm-12 about_bottom_warp">
                      <div className="about_list">
                        {/* Start: Heading */}
                        <SectionTitle
                          title=" Welcome to KCIDA"
                        />
                        <p>The County Government of Kakamega established the Kakamega County Investment
                          and Development Agency (KCIDA) through an Act of the County Assembly of Kakamega
                          referred to as the Kakamega County Investment and development Agency Act, 2018
                          to provide for the establishment of a legal and institutional framework for promotion
                          and co-ordination of investment by the county government of Kakamega and for
                          connected purposes.
                          <p> The Agency is a semi-autonomous county corporation under the Department of
                            Finance, Economic Planning and ICT. It is a body corporate with perpetual
                            succession
                            and a common seal and shall, in its corporate name.</p>
                        </p>
                      </div>

                      <div className="row about_list_warp">

                          {/*Start:   About List */}
                          {AboutData.map(about => (
                            <AboutList
                              key={about.id}
                              title={about.title}
                              text={about.text}
                              icon={about.icon}
                            />
                          ))}
                          {/*End:  About List*/}

                      </div>
                  </div>

                  {  /*Start: About Image  */}
                  <div className="col-md-6 col-sm-12">

                      { /*  About Right Image  */}
                      <img src={aboutImg} alt=""/>

                  </div>
                  {/*End: About Image  */}


              </div>
              {/* row */}
          </div>
          {/* container */}
      </section>


    );
};

export default AboutContent;
