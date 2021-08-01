import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import BlogDetails from "../templates/BlogDetails/index";

const singleBlogPage = () => {
	return (
		<Fragment>
			<MetaTags>
				<title>KCIDA | SingleBlog</title>
				<meta
					name="description"
					content="KCIDA | SingleBlog Page"
				/>
			</MetaTags>
			<LayoutOne>

				<BlogDetails/>

			</LayoutOne>
		</Fragment>
	);
};

export default singleBlogPage;



