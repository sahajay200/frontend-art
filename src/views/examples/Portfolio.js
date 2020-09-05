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
// import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import PortfolioPageHeader from "components/Headers/PortfolioPageHeader.js";
// import DemoFooter from "components/Footers/DemoFooter.js";
// import IMAGES from "assets/img/images.json";


// reactstrap components
import {
  // Button,
  // Label,
  // FormGroup,
  // Input,
  // NavItem,
  // NavLink,
  // Nav,
  // TabContent,
  // TabPane,
  // Container,
  // Row,
  // Col,
  // Card,
  // CardImg,
  // CardBody,
  // CardText
} from "reactstrap";


const IMAGES =
  [
    {
      src: require("assets/img/art/pooja.png"),
      thumbnail: require("assets/img/art/pooja.png"),
      thumbnailWidth: 240,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/elephants.jpg"),
      thumbnail: require("assets/img/art/elephants.jpg"),
      thumbnailWidth: 430,
      thumbnailHeight: 300,
    },

    {
      src: require("assets/img/art/sonali.jpg"),
      thumbnail: require("assets/img/art/sonali.jpg"),
      thumbnailWidth: 220,
      thumbnailHeight: 300,
    },

    {
      src: require("assets/img/art/sunset.jpg"),
      thumbnail: require("assets/img/art/sunset.jpg"),
      thumbnailWidth: 445,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/mandala.png"),
      thumbnail: require("assets/img/art/mandala.png"),
      thumbnailWidth: 180,
      thumbnailHeight: 250,
    },
    {
      src: require("assets/img/art/dancepose1.jpg"),
      thumbnail: require("assets/img/art/dancepose1.jpg"),
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/quote2.jpg"),
      thumbnail: require("assets/img/art/quote2.jpg"),
      thumbnailWidth: 200,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/dancepose2.jpg"),
      thumbnail: require("assets/img/art/dancepose2.jpg"),
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/quote1.jpg"),
      thumbnail: require("assets/img/art/quote1.jpg"),
      thumbnailWidth: 200,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/dancepose3.jpg"),
      thumbnail: require("assets/img/art/dancepose3.jpg"),
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/llamaart.jpg"),
      thumbnail: require("assets/img/art/llamaart.jpg"),
      thumbnailWidth: 250,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/ganesha.jpg"),
      thumbnail: require("assets/img/art/ganesha.jpg"),
      thumbnailWidth: 230,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/DancerPose1digi.jpg"),
      thumbnail: require("assets/img/art/DancerPose1digi.jpg"),
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/ananth.png"),
      thumbnail: require("assets/img/art/ananth.png"),
      thumbnailWidth: 220,
      thumbnailHeight: 220,
    },
    {
      src: require("assets/img/art/DancerPose2digi.jpg"),
      thumbnail: require("assets/img/art/DancerPose2digi.jpg"),
      thumbnailWidth: 250,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/appa.jpg"),
      thumbnail: require("assets/img/art/appa.jpg"),
      thumbnailWidth: 220,
      thumbnailHeight: 300,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: require("assets/img/art/DancerPose3digi.jpg"),
      thumbnail: require("assets/img/art/DancerPose3digi.jpg"),
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/joker.png"),
      thumbnail: require("assets/img/art/joker.png"),
      thumbnailWidth: 375,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/ssr.jpg"),
      thumbnail: require("assets/img/art/ssr.jpg"),
      thumbnailWidth: 550,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/lion.jpg"),
      thumbnail: require("assets/img/art/lion.jpg"),
      thumbnailWidth: 360,
      thumbnailHeight: 250,
    },
    {
      src: require("assets/img/art/kitties.png"),
      thumbnail: require("assets/img/art/kitties.png"),
      thumbnailWidth: 220,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/suveer.jpg"),
      thumbnail: require("assets/img/art/suveer.jpg"),
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },

    {
      src: require("assets/img/art/kobe.png"),
      thumbnail: require("assets/img/art/kobe.png"),
      thumbnailWidth: 500,
      thumbnailHeight: 300,
      // tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
      // caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: require("assets/img/art/peacock.jpg"),
      thumbnail: require("assets/img/art/peacock.jpg"),
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/suveer2.jpg"),
      thumbnail: require("assets/img/art/suveer2.jpg"),
      thumbnailWidth: 550,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/alexp.jpg"),
      thumbnail: require("assets/img/art/alexp.jpg"),
      thumbnailWidth: 280,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/llama.jpg"),
      thumbnail: require("assets/img/art/llama.jpg"),
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/chitra.jpg"),
      thumbnail: require("assets/img/art/chitra.jpg"),
      thumbnailWidth: 230,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/Dulquer_Salmaan.png"),
      thumbnail: require("assets/img/art/Dulquer_Salmaan.png"),
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/ganesha2.jpg"),
      thumbnail: require("assets/img/art/ganesha2.jpg"),
      thumbnailWidth: 250,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/katara.jpg"),
      thumbnail: require("assets/img/art/katara.jpg"),
      thumbnailWidth: 320,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/chicken.jpg"),
      thumbnail: require("assets/img/art/chicken.jpg"),
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/quote.jpg"),
      thumbnail: require("assets/img/art/quote.jpg"),
      thumbnailWidth: 300,
      thumbnailHeight: 400,
    },
    {
      src: require("assets/img/art/Watermarked_Shark.jpg"),
      thumbnail: require("assets/img/art/Watermarked_Shark.jpg"),
      thumbnailWidth: 500,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/islamicart.jpg"),
      thumbnail: require("assets/img/art/islamicart.jpg"),
      thumbnailWidth: 230,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/grandparents.jpg"),
      thumbnail: require("assets/img/art/grandparents.jpg"),
      thumbnailWidth: 150,
      thumbnailHeight: 250,
    },
    {
      src: require("assets/img/art/andrew.jpg"),
      thumbnail: require("assets/img/art/andrew.jpg"),
      thumbnailWidth: 520,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/deer.png"),
      thumbnail: require("assets/img/art/deer.png"),
      thumbnailWidth: 350,
      thumbnailHeight: 300,
    },
    {
      src: require("assets/img/art/robinwilliams.png"),
      thumbnail: require("assets/img/art/robinwilliams.png"),
      thumbnailWidth: 350,
      thumbnailHeight: 250,
    },
    {
      src: require("assets/img/art/india.jpg"),
      thumbnail: require("assets/img/art/india.jpg"),
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },

    
  ]

class Portfolio extends React.Component {

  render() {
    document.getElementById('example-0')
    // const ImageFolder = require.context('../../assets/img', true);

    return (
      <div>
        <ExamplesNavbar />
        <PortfolioPageHeader />
        <div className="section portfolio-content" id="portfolio-section">
          <h1 id="portfolio-h1"> Portfolio </h1>

          <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    overflow: "auto"}}>
          <Gallery id="gallery" images={IMAGES} backdropClosesModal={true} rowHeight={300} margin={5} enableImageSelection={false} />
          </div>
        </div>
      </div>

    );

  }
}
// return (
//   <>
//     <ExamplesNavbar />
//     <ProfilePageHeader />
//     <div className="section profile-content">
//       <Container>
//       <h1 id="portfolio-h1"> Portfolio </h1>


/* <Card style={{width: '20rem'}}>
      <CardImg top src={Appa} alt="..." />
      <CardBody>
          <CardText> Title: Zentangled </CardText>
          <CardText> Dimensions: 9 by 12 </CardText>
          <CardText> Price: $30 </CardText>
      </CardBody>
  </Card> */

/* <div className="owner">
  <div className="avatar">
    <img
      alt="..."
      className="img-circle img-no-padding img-responsive"
      src={require("assets/img/faces/joe-gardner-2.jpg")}
    />
  </div>
  <div className="name">
    <h4 className="title">
      Jane Faker <br />
    </h4>
    <h6 className="description">Music Producer</h6>
  </div>
</div>
<Row>
  <Col className="ml-auto mr-auto text-center" md="6">
    <p>
      An artist of considerable range, Jane Faker — the name taken by
      Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
      and records all of his own music, giving it a warm, intimate
      feel with a solid groove structure.
    </p>
    <br />
    <Button className="btn-round" color="default" outline>
      <i className="fa fa-cog" /> Settings
    </Button>
  </Col>
</Row>
<br />
<div className="nav-tabs-navigation">
  <div className="nav-tabs-wrapper">
    <Nav role="tablist" tabs>
      <NavItem>
        <NavLink
          className={activeTab === "1" ? "active" : ""}
          onClick={() => {
            toggle("1");
          }}
        >
          Follows
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={activeTab === "2" ? "active" : ""}
          onClick={() => {
            toggle("2");
          }}
        >
          Following
        </NavLink>
      </NavItem>
    </Nav>
  </div>
</div>
Tab panes
<TabContent className="following" activeTab={activeTab}>
  <TabPane tabId="1" id="follows">
    <Row>
      <Col className="ml-auto mr-auto" md="6">
        <ul className="list-unstyled follows">
          <li>
            <Row>
              <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                />
              </Col>
              <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                <h6>
                  Flume <br />
                  <small>Musical Producer</small>
                </h6>
              </Col>
              <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                <FormGroup check>
                  <Label check>
                    <Input
                      defaultChecked
                      defaultValue=""
                      type="checkbox"
                    />
                    <span className="form-check-sign" />
                  </Label>
                </FormGroup>
              </Col>
            </Row>
          </li>
          <hr />
          <li>
            <Row>
              <Col className="mx-auto" lg="2" md="4" xs="4">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                />
              </Col>
              <Col lg="7" md="4" xs="4">
                <h6>
                  Banks <br />
                  <small>Singer</small>
                </h6>
              </Col>
              <Col lg="3" md="4" xs="4">
                <FormGroup check>
                  <Label check>
                    <Input defaultValue="" type="checkbox" />
                    <span className="form-check-sign" />
                  </Label>
                </FormGroup>
              </Col>
            </Row>
          </li>
        </ul>
      </Col>
    </Row>
  </TabPane>
  <TabPane className="text-center" tabId="2" id="following">
    <h3 className="text-muted">Not following anyone yet :(</h3>
    <Button className="btn-round" color="warning">
      Find artists
    </Button>
  </TabPane>
</TabContent> */
//         </Container>
//       </div>
//       <DemoFooter />
//     </>
//   );
// }

export default Portfolio;
