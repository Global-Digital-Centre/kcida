import React, { Fragment } from "react";
import ServicesData from "../../../data/Services/service-two.json";
import ServiceItem from "./ServiceItem";
import SectionTitle from "../../SectionTitles/SectionTitleTwo";


const Service = (props) => {


    return (

      <section className="service_section_v2" id="service">
        <div className="container">
          {/* Heading */}
          <SectionTitle
            smallTitle="What We are"
            title="All About"
          />
          {/* End: Heading */}

          <div className="row">

            {
              ServicesData.slice(0, 3).map((service, id) => (

                <Fragment key={id}>
                  <ServiceItem
                    id={service.id}
                    title={service.title}
                    icon={service.icon}
                    shortDesc={service.shortDesc}
                    btnText={service.btnText}
                  />

                </Fragment>
              ))
            }

          </div>
        </div>
      </section>
    );
  }
;

export default Service;