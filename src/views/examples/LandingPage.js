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
import { Link, animateScroll as scroll } from "react-scroll";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import AboutMe from "components/Aboutme.js";
import PurchaseArt from "components/PurchaseArt.js";
import ContactMe from "components/ContactMe.js";
import Carousel from "components/Carousel.js";


class LandingPage extends React.Component {

//   constructor(props){
//     super(props)
//     this.state = {
//        field: value
//     }
//     // creates a reference for your element to use
//     this.myDivToFocus = React.createRef()
//  }

//  handleOnClick = (event) => {
//      //.current is verification that your element has rendered
//      if(this.myDivToFocus.current){
//          this.myDivToFocus.current.scrollIntoView({ 
//             behavior: "smooth", 
//             block: "nearest"
//          })
//      }
//  }


  render() {
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container className="landing-page-container">
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Hello There!</h2>
                <h5 className="description">
                   Thanks for visiting my portfolio page. I don't have a specific type of art I'm restricted to. Always experimenting with new things but I absolutely love portrait oil painting, watercolor prints of animals and mandalas or other art I am inspired by on instagram. I am pretty good at calligraphy and embossing. Reach out to me if you're interested in a commission!
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#contactme"
                  onClick={(e) => e.preventDefault()}
                >
                  Contact Me
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-circle-10" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">About me</h4>
                    <p>
                      Learn more about my artist journey.
                    </p>
                    <Button className="btn-link" color="info">
                      <Link
                          className="btn-link btn btn-info"
                          color="info"
                          activeClass="active"
                          to="aboutme"
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={500}
                      >
                        See more
                      </Link>
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-cart-simple" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Purchase Art</h4>
                    <p>
                      Find links to my etsy shop and rebubble shops to buy either my original pieces or prints, stickers, and other cool items.
                    </p>
                    <Button className="btn-link" color="info">
                      <Link
                          className="btn-link btn btn-info"
                          color="info"
                          activeClass="active"
                          to="purchaseart"
                          spy={true}
                          smooth={true}
                          offset={-160}
                          duration={500}
                      >
                        See more
                      </Link>
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Portfolio</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
             
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-favourite-28" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Reviews</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
             
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <AboutMe id="aboutme" />
        </div>
        <div className="section section-light text-center" id="purchase-div">
          <PurchaseArt id="purchaseart" />
        </div>
        <div className="section section-light text-center" id="carousel">
          <Carousel/>
        </div>
        <div className="section section-dark text-center">
          <ContactMe id="contactme" />  
        </div>

      </div>
      <DemoFooter />
    </>
  );
        }
}

export default LandingPage;
