import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

function Reviews(id) {

  return (
    <Container id={id.id}>
      <h2 className="reviews-title">Reviews</h2>
      <Row>
        <Col id="center-reviews" lg="4">
          <Card className="card-profile card-plain">
          <div className="card-avatar art-avatar-odd">
                <img
                  id="art-avatar"
                  alt="..."
                  src={require("assets/img/art/peacock.jpg")}
                />
            </div>
            <h2 className="piece-title"> Peacock </h2>
            <CardBody>
                <div className="author">
                  <CardTitle className="customer" tag="h4">Puja G</CardTitle>
                </div>
              <p className="card-description-reviews text-center">
                "Customer Quote"
            </p>
            </CardBody>
          </Card>
        </Col>
        <Col id="center-reviews" lg="4">
          <Card className="card-profile card-plain">
            <div className="card-avatar art-avatar">
                <img
                  alt="..."
                  id="dancer-comm"
                  src={require("assets/img/art/dancer-comm.jpg")}
                />
            </div>
            <h2 className="piece-title"> Dancer </h2>
            <CardBody>
                <div className="author">
                  <CardTitle className="customer" tag="h4">Radhika G</CardTitle>
                </div>
              <p className="card-description-reviews text-center">
                "I absolutely adore this custom piece that Sahaja made for me! I was so impressed with her other wokrs in this style that 
                I couldn't help but order one for myself. I appreciated her keeping me updated on the progress of my order and her flexibility
                when it came time to pick it up! she also included cute, hand drawn stickers that I am very excited to put to use! "
            </p>
            </CardBody>
          </Card>
        </Col>
        <Col id="center-reviews" lg="4">
          <Card className="card-profile card-plain">
            <div className="card-avatar art-avatar-odd">
              {/* <a onClick={(e) => e.preventDefault()}> */}
                <img
                  id="art-avatar"
                  alt="..."
                  src={require("assets/img/art/elephant.jpg")}
                />
              {/* </a> */}
            </div>
            <h2 className="piece-title"> Elephant </h2>
            <CardBody>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <div className="author">
                  <CardTitle className="customer" tag="h4">Ayush</CardTitle>
                </div>
              </a>
              <p className="card-description-reviews text-center">
                "Customer Quote"
            </p>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </Container>

  )
}

export default Reviews;
