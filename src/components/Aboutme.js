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

function Aboutme(id) {
  console.log(id.id)


  return(
    <Container id={id.id}>
    <h2 className="title">Let's talk about us</h2>
    <Row>
      <Col  id="center-aboutme" lg="12">
        <Card className="card-profile card-plain">
          <div className="card-avatar">
            <a onClick={(e) => e.preventDefault()}>
              <img
                alt="..."
                src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
              />
            </a>
          </div>
          <CardBody>
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <div className="author">
                <CardTitle tag="h4">Sahaja Yerramsetti</CardTitle>
                <h6 className="card-category"> Arist, Graphic Designer, and Engineer</h6>
              </div>
            </a>
            <p className="card-description text-center">
              Teamwork is so important that it is virtually impossible
              for you to reach the heights of your capabilities or make
              the money that you want without becoming very good at it.
            </p>
          </CardBody>
          <CardFooter className="text-center">
            <Button
              className="btn-just-icon btn-neutral"
              color="link"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-twitter" />
            </Button>
            <Button
              className="btn-just-icon btn-neutral ml-1"
              color="link"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-google-plus" />
            </Button>
            <Button
              className="btn-just-icon btn-neutral ml-1"
              color="link"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-linkedin" />
            </Button>
          </CardFooter>
        </Card>
      </Col>
  
    </Row>
    </Container> 

  )
}

export default Aboutme;
