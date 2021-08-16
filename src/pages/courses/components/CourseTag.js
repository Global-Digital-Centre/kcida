import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Styles} from '../styles/courseTag.js';

class CourseTag extends Component {
    render() {
        return (
            <Styles>
                {/* Course Tag */}
                <div className="course-tag">
                    <h5>Investment Opportunities Tag</h5>
                    <div className="tag-box">
                        <Link to={process.env.PUBLIC_URL + "/"}>Kakamega</Link>
                        <Link to={process.env.PUBLIC_URL + "/"}>Investments</Link>
                        <Link to={process.env.PUBLIC_URL + "/"}>Other Opportunies</Link>
                        <Link to={process.env.PUBLIC_URL + "/"}>National Development Plans</Link>
                        <Link to={process.env.PUBLIC_URL + "/"}>KCIDA</Link>
                        {/*<Link to={process.env.PUBLIC_URL + "/"}>Wordpress</Link>
                        <Link to={process.env.PUBLIC_URL + "/"}>Bootstrap</Link>
                        <Link to={process.env.PUBLIC_URL + "/"}>Javascript</Link>*/}
                    </div>
                </div>
            </Styles>
        )
    }
}

export default CourseTag
