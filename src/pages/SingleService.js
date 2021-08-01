import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import ServiceDetails from "../templates/ServiceDetails/index";

const servicePage = () => {
	return (
		<Fragment>
			<MetaTags>
				<title>KCIDA | Our Projects</title>
				<meta
					name="description"
					content="KCIDA | Our Projects Page"
				/>
			</MetaTags>

			<LayoutOne>

				<ServiceDetails/>

			</LayoutOne>
		</Fragment>
	);
};

export default servicePage;



