import React, {Component} from "react";
import {Styles} from "../styles/courseCategory.js";

class CourseCategory extends Component {
  render() {
    return (
      <Styles>
        {/* Course Tag */}
        <div className="course-category">
          <h5>Visit Kakamega</h5>
          <ul className="category-item list-unstyled">
            <li className="check-btn">
              <label htmlFor="cat1">
                <input type="checkbox" id="cat1" className="check-box" />
                Kakamega Town
              </label>
            </li>
            <li className="check-btn">
              <label htmlFor="cat2">
                <input type="checkbox" id="cat2" className="check-box" />
                Tourism
              </label>
            </li>
            <li className="check-btn">
              <label htmlFor="cat3">
                <input type="checkbox" id="cat3" className="check-box" />
                Manufacturing
              </label>
            </li>
            {/*<li className="check-btn">
                            <label htmlFor="cat4"><input type="checkbox" id="cat4" className="check-box" />React Js Learning</label>
                        </li>
                        <li className="check-btn">
                            <label htmlFor="cat5"><input type="checkbox" id="cat5" className="check-box" />Web Des</label>
                        </li>*/}
          </ul>
        </div>
      </Styles>
    );
  }
}

export default CourseCategory;
