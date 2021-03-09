import React from "react";
import { Button, Card } from "react-bootstrap";

// const { REACT_APP_UNSPLASH_API_Key } = process.env;

export const VacationCard = (props) => {
  return (
    <Button variant="outline-primary">
      <Card>
        <Card.Img variant="top" src={props.src} />
      </Card>
    </Button>
  );
};
