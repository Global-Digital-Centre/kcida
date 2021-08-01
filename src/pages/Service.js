import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from "../components/PageHeader";
import Services from "../components/Services/home-one";
import Funfact from "../components/FunFact/home-one";
import Testimonial from "../components/Testimonials/home-one";
import LogoContainer from "../components/BrandLogo";

const servicePage = () => {
	return (
		<Fragment>
			<MetaTags>
				<title>KCIDA | Projects</title>
				<meta
					name="description"
					content="KCIDA | Projects Page"
				/>
			</MetaTags>
			<LayoutOne>
				<div className="service-page">
					<PageHeader
						bgImg={require("../assets/images/page_bg.jpg")}
						title="Our Projects"
					/>
					<Services/>
					<Funfact classes="funfact_serv"/>
					<Testimonial/>
					<LogoContainer/>
				</div>
			</LayoutOne>
		</Fragment>
	);
};

export default servicePage;



