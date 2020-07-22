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
    <h2 className="title">Let's talk about me</h2>
    <Row>
      <Col  id="center-aboutme" lg="12">
        <Card className="card-profile card-plain">
          <div className="card-avatar">
            <a onClick={(e) => e.preventDefault()}>
              <img
                alt="..."
                src={require("assets/img/me.jpeg")}
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
              By day, I am a data engineer and by night and weekends I am an artist. I have no formal art education besides a couple of electives in high school so it's safe to call myself an auto didact when it comes to art. I love creating new things and was always into art since high school. Though I was more into digital art then, I got deeper into watercolors, oil paintings, and some acrylic paint later in college. I always am open for collaborations and commissions. Also know front end website development and graphic design too!
            </p>
          </CardBody>
          <CardFooter className="text-center">
            <Button
              className="btn-just-icon btn-neutral ml-1"
              color="link"  
              href="http://instagram.com/artbysahaja"
              target="_blank"
              // onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-instagram" />
            </Button>
            <Button
              className="btn-just-icon btn-neutral ml-1"
              color="link"
              href="mailto:sahajaray@gmail.com"
              // onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-envelope" />
            </Button>
            <Button
              className="btn-just-icon btn-neutral ml-1"
              color="link"
              href="linkedinurl"
              // onClick={(e) => e.preventDefault()}
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
