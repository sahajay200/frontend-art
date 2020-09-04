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

// reactstrap components
import { Button, Container } from "reactstrap";
import { Link, animateScroll as scroll } from "react-scroll";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/landingpage.jpg") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Art by Sahaja</h1>
            {/* <h3>Welcome to my portfolio</h3> */}
            <br />
            {/* <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Portfolio
            </Button> */}
            <Button href="/portfolio" className="btn-round" id="portfolio" color="neutral" outline>
                  Portfolio
            </Button>
            <Button className="btn-round" id="portfolio" color="neutral" outline>
              <Link
                id="portfolio"
                color="info"
                activeClass="active"
                to="aboutme"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Contact Me
              </Link>
            </Button>

          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
