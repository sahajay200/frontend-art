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

function ContactMe(id) {

  return(
    <Container id={id.id}>
      <Row>
        <Col className="ml-auto mr-auto" md="8">
          <h2 className="contact-h2 text-center">Contact Me</h2>
          <Row>
            <Col md="2">
              <h4 class="contact-info"> Email:  </h4>
            </Col>
            <Col md="4">
              <h4 class="contact-link"> <a href="mailto:artbysahaja@gmail.com" > artbysahaja@gmail.com </a> </h4>
            </Col>
            <Col md="3">
              <h4 class="contact-info"> Instagram:  </h4>
            </Col>
            <Col md="3">
              <h4 class="contact-link"> <a href="https://www.instagram.com/artbysahaja/"> @artbysahaja </a> </h4>
            </Col>
          </Row>
          </Col>
        </Row>
      </Container>

  )
}

export default ContactMe;













