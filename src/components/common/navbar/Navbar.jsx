import React from "react";

function Navbar() {
  return (
      <section className="navbar">
          <nav className="navbar navbar-inverse navbar-expand-lg">
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                      aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"/>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-lg-5 ">
                      <li className="nav-item active">
                          <a className="nav-link" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "/"}>Home <span
                              className="sr-only">(current)</span></a>
                      </li>

                      <li className="nav-item dropdown fadeOut">
                          <a className="nav-link dropdown-toggle" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "/invest-in-kakamega"}
                             id="navbarDropdownMenuLink"
                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              About Us
                          </a>
                          <div className="dropdown-menu fade-up" aria-labelledby="navbarDropdownMenuLink">
                              <a className="dropdown-item" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "/about"}>Mission</a>
                              <a className="dropdown-item" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "/about"}>Vision</a>
                          </div>
                      </li>

                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "/invest-in-kakamega"}
                             id="navbarDropdownMenuLink"
                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Investment Opportunities
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <a className="dropdown-item" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "/invest-in-kakamega"}>Invest
                                  in Kakamega</a>
                              <a className="dropdown-item" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "/projects"}>Projects</a>
                              <a className="dropdown-item" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "/places-grid"}>One Shop
                                  Centre</a>
                              <a className="dropdown-item" target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "https://kakamega.go.ke/county-budget-documents/"}>COUNTY BUDGET DOCUMENTS</a>
                          </div>
                      </li>

                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href={process.env.PUBLIC_URL + "/about"}
                             id="navbarDropdownMenuLink"
                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Organisation
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <a className="dropdown-item" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "/about"}> Structure of
                                  Organisation</a>
                              <a className="dropdown-item" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "/about-kakamega"}>About
                                  Kakamega</a>
                              <a className="dropdown-item" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "/about"}>About Us</a>
                              <a className="dropdown-item" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "/board"}>The Board</a>
                          </div>
                      </li>


                      <li className="nav-item">
                          <a className="nav-link" href="https://www.ecitizen.go.ke/"
                             target="_blank"
                             rel="noopener noreferrer">E-Services</a>
                      </li>

                      <li className="nav-item">
                          <a className="nav-link" target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "https://kakamega.go.ke/category/news/"}>News</a>
                      </li>

                  </ul>
            </div>
        </nav>
    </section>
  );
}

export default Navbar;
