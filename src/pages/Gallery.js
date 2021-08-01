import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Gallery from "../components/Gallery/GalleryThree";
import PageHeader from "../components/PageHeader";

const galleryPage = () => {
	return (
		<Fragment>
			<MetaTags>
				<title>KCIDA | Portfolio</title>
				<meta
					name="description"
					content="KCIDA | Portfolio Page"
				/>
			</MetaTags>

			<LayoutOne>
				<PageHeader
					bgImg={require("../assets/images/page_bg.jpg")}
					title="Our Initiatives"
				/>

				<Gallery classes="work_page"/>

			</LayoutOne>
		</Fragment>
	);
};

export default galleryPage;



