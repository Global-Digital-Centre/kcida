import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import GalleryDetails from "../templates/GalleryDetails/index";

const galleryPage = () => {
	return (
		<Fragment>
			<MetaTags>
				<title>KCIDA | SinglePortfolio</title>
				<meta
					name="description"
					content="KCIDA | Portfolio Page"
				/>
			</MetaTags>
			<LayoutOne>

				<GalleryDetails/>

			</LayoutOne>
		</Fragment>
	);
};

export default galleryPage;



