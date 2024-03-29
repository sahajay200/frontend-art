/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import LogoTitle from "assets/img/art/logo/pinkbluelogo.png";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("navbar-side")
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-trans");

      }
    };


    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="299"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <img className="logo-icon" src={LogoTitle}/> 
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            target="_blank"
            title="Art by Sahaja"
            tag={Link}
          >
            Art By Sahaja
          </NavbarBrand>
          
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav id="navbar-side" navbar>
            <NavItem>
              <NavLink to="/portfolio" tag={Link}>
                <i className="nc-icon nc-layout-11" /> Portfolio
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink
                href="/contact"
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> Contact Me
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/artbysahaja"
                target="_blank"
                title="Follow me on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/artbysahaja"
                target="_blank"
                title="Art Station"
              >
                <i className="fab fa-facebook"></i>
                <p className="d-lg-none">Facebook</p>

              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="mailto:artbysahaja@gmail.com"
                target="_blank"
                title="Email Me"
              >
                <i className="fa fas fa-envelope" />
                <p className="d-lg-none">Email</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.artstation.com/artbysahaja"
                target="_blank"
                title="Art Station"
              >
                <i className="fab fa-artstation"></i>
                <p className="d-lg-none">Art Station</p>

              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
