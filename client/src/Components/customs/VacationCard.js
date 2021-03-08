import React, { useState } from "react";
import { Container, CardColumns, Card } from "react-bootstrap";

const { REACT_APP_UNSPLASH_API_Key } = process.env;

export const VacationCard = (props) => {
  const [photo, setPhoto] = useState("");
  const [unSplashID, setunSplashID] = useState(REACT_APP_UNSPLASH_API_Key);

  // componentDidMount();

  return (
    <Card>
      <Card.Img variant="top" src={props.src} />
      {/* <Card.Body>
        <Card.Title>
          {props.title ? props.title : get_random_quote()}
        </Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body> */}
    </Card>
  );
};
