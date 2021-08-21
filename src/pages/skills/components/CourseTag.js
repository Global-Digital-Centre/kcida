import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Styles} from "../styles/courseTag.js";

class CourseTag extends Component {
  render() {
    return (
      <Styles>
        {/* Course Tag */}
        <div className="course-tag">
          <h5>Tags</h5>
          <div className="tag-box">
            <Link to={process.env.PUBLIC_URL + "/"}>Kakamega</Link>
            <Link to={process.env.PUBLIC_URL + "/"}>Investments</Link>
            <Link to={process.env.PUBLIC_URL + "/"}>About</Link>
            <Link to={process.env.PUBLIC_URL + "/"}>E-Services</Link>
          </div>
        </div>
      </Styles>
    );
  }
}

export default CourseTag;
