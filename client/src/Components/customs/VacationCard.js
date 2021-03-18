import React from "react";
import { Button, Card } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -110;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export const VacationCard = (props) => {
  return (
    <Button
      variant="outline-primary"
      type="submit"
      smooth={true}
      to="#randomize"
      scroll={(el) => scrollWithOffset(el)}
    >
      <Card>
        <Card.Img variant="top" src={props.src} />
      </Card>
    </Button>
  );
};
