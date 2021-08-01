import React, { Component } from "react";

// About Image

class Loader extends Component {
  render() {
    return (
      <div className={`preloader ${this.props.loading ? "" : "preloader-deactivate"}`}>
        <div className="loader">
          <div className="shadow"/>
          {/*<img src={loader} alt="loader"/>*/}
          <div className="box"/>
        </div>
      </div>
    );
  }
}

export default Loader;