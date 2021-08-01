import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarItem from "../Header/Navbar/NavbarItem";

const MobileMenu = () => {
  useEffect(() => {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(`.subMenu`);
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        `<span class="menuExpand"><i/></span>`
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menuExpand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }
  });

  const sideMenuExpand = e => {
    e.currentTarget.parentElement.classList.toggle("active");
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.remove("active");
  };

  return (
    <div className="offcanvasMobileMenu" id="offcanvas-mobile-menu">
      <button
        className="offcanvasMenuClose"
        id="mobile-menu-close-trigger"
        onClick={() => closeMobileMenu()}
      >
        <i className="icon_close"/>
      </button>

      <div className="offcanvasWrapper">
        <div className="offcanvasInnerContent">

          <nav className="offcanvasNavigation" id="offcanvas-navigation">
            <ul>

              <NavbarItem/>

            </ul>
          </nav>

          {/* Search Form */}
          <div className="offcanvasMobileSearchArea">
            <form action="#">
              <input type="search" placeholder="Search ..."/>
              <button type="submit">
              </button>
            </form>
          </div>

          {/* Contact Info  */}

          <div className="header_top_right list-unstyled">
            <ul>
              <li>
                <i className="fa fa-phone"/> +254 724 901 350
              </li>
              <li>
                <i className="fa fa-envelope"/> https://kakamega.go.ke/
              </li>
              <li>
                <i className="fa fa-globe"/> Nairobi,Kenya
              </li>
            </ul>
          </div>

          {/* Social Icon*/}
          <div className="header_top_left">
            <ul className="header_socil list-inline">
              <li>
                <Link to="https://web.facebook.com/Mixdentours" className="fa fa-facebook"/>
              </li>
              <li>
                <Link to="https://mobile.twitter.com/MixdenTours" className="fa fa-twitter"/>
              </li>
              <li>
                <Link to="https://www.instagram.com/mixdentours/" className="fa fa-instagram"/>
              </li>
              <li>
                <Link to="https://www.instagram.com/mixdentours/" className="fa fa-pinterest"/>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
