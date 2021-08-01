import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (

    <div className="header_top_area">
      <div className="container">
        <div className="row">
          {/* Address / Phone / Email*/}
          <div className="colm">
            <div className="header_wrapper_1">
              <ul>
                <li><i className="icon_phone"/> +254 724 901 350</li>
                <li><i className="icon_mail_alt"/>https://kakamega.go.ke/</li>
              </ul>
            </div>
          </div>

          {/* SOCIAL ICON */}
          <div className="colm">
            <div className="header_social">
              <a href="https://web.facebook.com/Mixdentours">
                <i className="fa fa-facebook"/>
              </a>
              <a href="https://mobile.twitter.com/MixdenTours">
                <i className="fa fa-twitter"/>
              </a>
              <a href="https://www.instagram.com/mixdentours/">
                <i className="fa fa-instagram"/>
              </a>
              <a href="https://www.instagram.com/mixdentours/">
                <i className="fa fa-pinterest"/>
              </a>
            </div>
          </div>

          {/* Quote button */}
          <div className="colm">
            <div className="header_button text-right">
              <Link to="/contact">Talk to Us</Link>
            </div>
          </div>
          {/* End: Quote button */}

        </div>
      </div>
    </div>

  );
};


export default Header;