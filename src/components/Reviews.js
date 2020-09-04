import React from "react";

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

function Reviews(id) {

  return (
    <Container id={id.id}>
      <h2 className="reviews-title">Reviews</h2>
      <Row>
        <Col id="center-reviews" lg="4">
          <Card className="card-profile card-plain">
          <div className="card-avatar art-avatar">
              <a onClick={(e) => e.preventDefault()}>
                <img
                  id="art-avatar"
                  alt="..."
                  src={require("assets/img/art/peacock.jpeg")}
                />
              </a>
            </div>
            <h2 className="piece-title"> Peacock </h2>
            <CardBody>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <div className="author">
                  <CardTitle className="customer" tag="h4">Puja G</CardTitle>
                </div>
              </a>
              <p className="card-description-reviews text-center">
                "Customer Quote"
            </p>
            </CardBody>
          </Card>
        </Col>
        <Col id="center-reviews" lg="4">
          <Card className="card-profile card-plain">
            <div className="card-avatar art-avatar">
              <a onClick={(e) => e.preventDefault()}>
                <img
                  alt="..."
                  id="dancer-comm"
                  src={require("assets/img/art/dancer-comm.jpg")}
                />
              </a>
            </div>
            <h2 className="piece-title"> Dancer </h2>
            <CardBody>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <div className="author">
                  <CardTitle className="customer" tag="h4">Radhika G</CardTitle>
                </div>
              </a>
              <p className="card-description-reviews text-center">
                "Customer Quote"
            </p>
            </CardBody>
          </Card>
        </Col>
        <Col id="center-reviews" lg="4">
          <Card className="card-profile card-plain">
            <div className="card-avatar art-avatar">
              <a onClick={(e) => e.preventDefault()}>
                <img
                  alt="..."
                  src={require("assets/img/art/elephant.jpg")}
                />
              </a>
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
