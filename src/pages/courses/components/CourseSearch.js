import React, {Component} from "react";
import {Styles} from "../styles/courseSearch.js";

class CourseSearch extends Component {
  render() {
    return (
      <Styles>
        {/* Course Search */}
        <div className="course-search">
          <h5>Search</h5>
          <form action="#">
            <input type="text" name="search" placeholder="Search Here" />
            <button type="submit">
              <i className="las la-search" />
            </button>
          </form>
        </div>
      </Styles>
    );
  }
}

export default CourseSearch;
