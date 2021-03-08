import React, { useState, useEffect } from "react";
import "./Randomize.css";
import { Container, CardColumns, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { VacationCard } from "../customs/VacationCard";
import { UNSPLASH_API, UNSPLASH_API_KEY } from "../Utils/Constants";

function RandomCards() {
  const [results, setResults] = useState();

  useState(() => {
    fetch(UNSPLASH_API)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <>
      <Container id="randomize">
        <CardColumns>
          <Button
            style={{ marginTop: "2rem" }}
            variant="outline-primary"
          ></Button>
          {results
            ? results.map((result, index) => {
                return <VacationCard />;
              })
            : ""}

          <Card bg="primary" text="white" className="text-center p-3">
            <blockquote className="blockquote mb-0 card-body">
              <Button size="lg">Mystery Box</Button>
              <h4 style={{ marginTop: "1rem" }}>
                Step 1 - Enter your Email, Zipcode and how long you'll be
                Vacation.
              </h4>
              <input style={{ marginTop: "1rem" }} placeholder="Email"></input>
              <input
                style={{ marginTop: "1rem" }}
                placeholder="Zipcode"
              ></input>
              <input
                style={{ marginTop: "1rem" }}
                placeholder="Days on Vacation"
              ></input>
              <h4 style={{ marginTop: "1rem" }}>
                Step 2 - Click any image to be emailed a Vaguecation
              </h4>
            </blockquote>
          </Card>
        </CardColumns>
      </Container>
    </>
  );
}

export default RandomCards;
