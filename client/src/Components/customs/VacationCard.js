import React from "react";
import { Button, Card } from "react-bootstrap";

export const VacationCard = (props) => {
  return (
    <Button variant="outline-primary" type="submit" to="#randomize">
      <Card>
        <Card.Img variant="top" src={props.src} />
      </Card>
    </Button>
  );
};
