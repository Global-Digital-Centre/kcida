import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from "../components/PageHeader";
import Team from "../components/Team/home-two";
import Loader from "../components/Shared/Loader";


class TeamPage extends React.Component {
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
          <title>KCIDA | Team</title>
          <meta
            name="description"
            content="KCIDA | Team Page"
          />
        </MetaTags>
        {/* Preloader */}
        <Loader loading={this.state.loading}/>

        <LayoutOne>

          <PageHeader
            bgImg={require("../assets/images/page_bg.jpg")}
            title="Our Experts"
          />

          <section className={`team_section team_page`}>
            <div className="container">
              {/* Heading */}
              {/*<SectionTitle
                            title="Meet the team"
                        />*/}
              {/* End: Heading */}

              <Team/>


              {/*<div className="row">

                            {
                                teamData.slice(0,8).map(team=>(
                                    <TeamList
                                        key={team.id}
                                        img={team.img}
                                        name={team.name}
                                        designation={team.designation}
                                        facebookUrl={team.facebookUrl}
                                        twitterUrl={team.twitterUrl}
                                        linkedinUrl={team.linkedinUrl}
                                    />
                                ))
                            }

                        </div>*/}

            </div>
          </section>

        </LayoutOne>
      </Fragment>

    );
  }
}

export default TeamPage;   