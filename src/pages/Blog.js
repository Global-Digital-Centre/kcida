import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import BlogPageContent from "../templates/Blog/index";
import PageHeader from "../components/PageHeader";

const blogPage = () => {
	return (
		<Fragment>
			<MetaTags>
				<title>KCIDA | Blog</title>
				<meta
					name="description"
					content="KCIDA | Blog Page"
				/>
			</MetaTags>

			<LayoutOne>
				<PageHeader
					bgImg={require("../assets/images/page_bg.jpg")}
					title="Our Blog"
				/>

				<BlogPageContent/>

			</LayoutOne>
		</Fragment>
	);
};

export default blogPage;



