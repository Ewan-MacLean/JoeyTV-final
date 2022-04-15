import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./About.css";

const image1 = window.location.origin + "/assets/Claudia1.jpg";
const image2 = window.location.origin + "/assets/Steve1.jpg";
const image3 = window.location.origin + "/assets/Matt1.jpg";
const image4 = window.location.origin + "/assets/Ewan1.jpg";
const image5 = window.location.origin + "/assets/Kathrine1.jpg";
const image6 = window.location.origin + "/assets/Marvel1.jpg";
const team = window.location.origin + "/assets/team.jpg";

function About() {
  return (
    <div class="about-section">
      <div class="inner-container">
        <h1>About Us</h1>
        <p class="text">
          <h2>
            Joey TV helps parents to choose wholesome movies and TV shows for
            the safe entertainment of their children...
          </h2>
        </p>
        {/* <h2 style="text-align:center">Our Team</h2> */}
        <h1>Our Team</h1>
        <div class="team">
          <Container>
            <Row>
              <Card style={{ width: "87%" }} className="text-center">
                <Card.Img variant="top" src={team} />
                <Card.Body>
                  <Card.Title>
                    <b>Team Wombat</b>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Card style={{ width: "18rem" }} className="text-center">
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title>Claudia Tucunduva Ton</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="text-center">
                <Card.Img variant="top" src={image2} />
                <Card.Body>
                  <Card.Title>Stephen Oshilaja</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="text-center">
                <Card.Img variant="top" src={image3} />
                <Card.Body>
                  <Card.Title>Matt Downie</Card.Title>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Card style={{ width: "18rem" }} className="text-center">
                <Card.Img variant="top" src={image4} />
                <Card.Body>
                  <Card.Title>Ewan MacLean</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="text-center">
                <Card.Img variant="top" src={image5} />
                <Card.Body>
                  <Card.Title>Katherine Cassidy</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="text-center">
                <Card.Img variant="top" src={image6} />
                <Card.Body>
                  <Card.Title>Marvel Monson</Card.Title>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default About;
