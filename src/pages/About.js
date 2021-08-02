import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from "../components/PageHeader";
import About from "../components/About/home-one";
import Skill from "../components/Skill";
import Team from "../components/Team/home-two";
import Loader from "../components/Shared/Loader";


class Aboutpage extends React.Component {
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
          <title>KCIDA | About</title>
          <meta
            name="description"
            content="KCIDA | About Page"
          />
        </MetaTags>

        {/* Preloader */}
        <Loader loading={this.state.loading}/>

        <LayoutOne>

          <PageHeader
            bgImg={require("../assets/images/page_bg.jpg")}
            title="About Us"
          />

          <About/>
          <Skill/>
          <Team/>

        </LayoutOne>
      </Fragment>

    );
  }
}

export default Aboutpage;   