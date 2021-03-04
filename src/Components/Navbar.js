import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import Scroll from "react-scroll";
import "./Navbar.css";

function BlueNav() {
  return (
    <>
      <Container className="mt-3">
        <Navbar
          id="nav-bar"
          collapseOnSelect
          expand="lg"
          bg="primary"
          variant="dark"
        >
          <Navbar.Brand href="#home">
            <img
              src="../assets/logo.jpg"
              width="45"
              height="45"
              className="d-inline-block align-top"
              alt="Vaguecation Logo"
            />
          </Navbar.Brand>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto nav-text">
                <Nav.Link href="#landing">Home</Nav.Link>
                <Nav.Link href="#what">What?</Nav.Link>
                <Nav.Link size="lg" href="#randomize">
                  Randomize
                </Nav.Link>
                <Nav.Link href="#contact">Questions</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default BlueNav;
