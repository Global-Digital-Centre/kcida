import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ScrollToTop from "./helper/ScrollToTop";
import {GlobalStyle} from "./components/common/styles/global.js";
import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import About from "./pages/about/About";
import CourseGrid from "./pages/courses/CourseGrid";
import CourseList from "./pages/courses/CourseList";
import CourseDetails from "./pages/courses/CourseDetails";
import Board from "./pages/board/Board";
import BoardDetails from "./pages/board/BoardDetails";
import Gallery from "./pages/gallery/Gallery";
import Events from "./pages/events/Events";
import EventDetails from "./pages/events/EventsDetails";
import Login from "./pages/account/Login";
import Register from "./pages/account/Register";
import Contact from "./pages/contact/Contact";
import Faq from "./pages/faq/Faq";
import PageNotFound from "./pages/404/PageNotFound";
import ComingSoon from "./pages/comingsoon/ComingSoon";
import BlogClassic from "./pages/blog/BlogClassic";
import BlogGrid from "./pages/blog/BlogGrid";
import BlogDetails from "./pages/blog/BlogDetails";
import Projects from "./pages/projects/Projects";
import ProjectsDetails from "./pages/projects/ProjectsDetails";
import Cart from "./pages/projects/Cart";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Invest from "./pages/invest/Invest";
import Skills from "./pages/skills/Skills";
import Opportunities from "./pages/opportunities/Opportunities";
import AboutKakamega from "./pages/aboutKakamega/AboutKakamega";
import KommunicateChat from "./Chat";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/"}`}
          component={HomeOne}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/home-two"}`}
          component={HomeTwo}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/about"}`}
          component={About}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/about-kakamega"}`}
          component={AboutKakamega}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/invest-in-kakamega"}`}
          component={Invest}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/investment-opportunities"}`}
          component={Opportunities}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/places-grid"}`}
          component={CourseGrid}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/places-list"}`}
          component={CourseList}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/places-details"}`}
          component={CourseDetails}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/skills"}`}
          component={Skills}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/board"}`}
          component={Board}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/instructor-details"}`}
          component={BoardDetails}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/gallery"}`}
          component={Gallery}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/events"}`}
          component={Events}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/event-details"}`}
          component={EventDetails}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/login"}`}
          component={Login}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/registration"}`}
          component={Register}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/contact"}`}
          component={Contact}
        />
        <Route path={`${process.env.PUBLIC_URL + "/faq"}`} component={Faq} />
        <Route
          path={`${process.env.PUBLIC_URL + "/404"}`}
          component={PageNotFound}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/coming-soon"}`}
          component={ComingSoon}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/blog-classic"}`}
          component={BlogClassic}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/blog-grid"}`}
          component={BlogGrid}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/blog-details"}`}
          component={BlogDetails}
        />
        <Route
            path={`${process.env.PUBLIC_URL + "/projects"}`}
            component={Projects}
        />
        <Route
            path={`${process.env.PUBLIC_URL + "/projects-details"}`}
            component={ProjectsDetails}
        />
        <Route path={`${process.env.PUBLIC_URL + "/cart"}`} component={Cart}/>
      </Switch>

      <KommunicateChat/>

      <MessengerCustomerChat
          pageId="101857828882888"
          appId="891567418072170"
          htmlRef="https://kcdia.netlify.app/"
      />
    </Router>
  );
}

export default App;
