import React from "react";

import { Container, CardColumns, Card } from "react-bootstrap";

export const get_random_quote = () => {
  return "This place is amazing!";
};

export const VacationCard = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>
          {props.title ? props.title : get_random_quote()}
        </Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
