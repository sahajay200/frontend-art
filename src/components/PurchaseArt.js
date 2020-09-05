import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  // CardTitle,
  // Form,
  // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

function PurchaseArt(id) {

  return(
    <Container className="primary" id={id.id}>
    <h2 className="title">Buy My Art</h2>
    <Row>
    <Col md="3">
        <Card className="card-profile card-plain">
          <div className="card-avatar">
            <a href="etsy.com" target="_blank">
              <img
                id="purchase-etsy"
                alt="..."
                src={require("assets/img/logo.png")}
              />
            </a>
          </div>
          <CardBody>
            <p className="card-title">
              See originals from my Portfolio!
            </p>
          </CardBody>
          <CardFooter className="text-center">
          <Button href="/portfolio" target="_blank" className="btn-round" id="purchase-button" color="info" outline>
            <i className="fa fa-shopping-cart" />
            Look now
          </Button>
          </CardFooter>
        </Card>
      </Col>
      <Col md="3">
      <Card className="card-profile card-plain">
          <div className="card-avatar">
            <a href="etsy.com" target="_blank">
              <img
                alt="..."
                src={require("assets/img/instagramlogo.png")}
              />
            </a>
          </div>
          <CardBody>
            <p className="card-title">
              Follow me on Instagram!
            </p>
          </CardBody>
          <CardFooter className="text-center">
          <Button href="https://www.redbubble.com/people/zeninked/shop" target="_blank" className="btn-round" id="purchase-button" color="info" outline>
            <i className="fa fa-instagram" />
            Follow
          </Button>
          </CardFooter>
        </Card>
      </Col>
      <Col md="3">
        <Card className="card-profile card-plain">
            <div className="card-avatar">
              <a href="etsy.com" target="_blank">
                <img
                  alt="..."
                  src={require("assets/img/redbubble.png")}
                />
              </a>
            </div>
            <CardBody>
              <p className="card-title">
                Buy & stickers on RedBubble!
              </p>
            </CardBody>
            <CardFooter className="text-center">
            <Button href="https://www.redbubble.com/people/zeninked/shop" target="_blank" className="btn-round" id="purchase-button" color="info" outline>
              <i className="fa fa-registered" />
              Shop now
            </Button>
            </CardFooter>
          </Card>
      </Col>
      <Col md="3">
        <Card className="card-profile card-plain">
            <div className="card-avatar">
              <a href="etsy.com" target="_blank">
                <img
                  alt="..."
                  src={require("assets/img/artstation.png")}
                />
              </a>
            </div>
            <CardBody>
              <p className="card-title">
                Buy prints & posters on Art Station!
              </p>
            </CardBody>
            <CardFooter className="text-center">
            <Button href="https://www.artstation.com/artbysahaja" target="_blank" className="btn-round" id="purchase-button" color="info" outline>
              <i className="fa fa-shopping-cart" />
              Shop now
            </Button>
            </CardFooter>
          </Card>
      </Col>
    </Row>
    </Container> 

  )
}

export default PurchaseArt;
