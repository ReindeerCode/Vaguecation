import React from "react";
import "./Randomize.css";
import { Container, CardColumns, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function RandomCards() {
  return (
    <>
      <Container id="randomize">
        <CardColumns>
          <Button style={{ marginTop: "2rem" }} variant="outline-primary">
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Button>
          <Button variant="outline-primary">
            <Card className="p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante. I'm typig here
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
          </Button>

          <Button size="lg">Mystery Vaguecation</Button>

          <Card bg="primary" text="white" className="text-center p-3">
            <blockquote className="blockquote mb-0 card-body">
              <h4 style={{ marginTop: "1rem" }}>
                Step 1 - Enter email and Zipcode
              </h4>
              <input style={{ marginTop: "1rem" }} placeholder="Email"></input>
              <input
                style={{ marginTop: "1rem" }}
                placeholder="Zipcode"
              ></input>
              <h4 style={{ marginTop: "1rem" }}>
                Step 2 - Click any image to be emailed a Vaguecation
              </h4>
            </blockquote>
          </Card>

          <Button variant="outline-primary">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">maybe remove this text</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Button>

          <Button variant="outline-primary">
            <Card className="text-right">
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card>
          </Button>

          <Button variant="outline-primary">
            <Card>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">maybe remove this text</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Button>
        </CardColumns>
      </Container>
    </>
  );
}

export default RandomCards;
