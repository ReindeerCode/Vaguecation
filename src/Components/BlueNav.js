import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import { Switch, Route, Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function BlueNav() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          display: "flex",
          marginTop: 10,
        }}
      >
        <Container>
          <Navbar
            style={{
              width: "100%",
              alignContent: "center",
              fontWeight: 900,
            }}
            id="nav-container "
            collapseOnSelect
            expand="lg"
            bg="primary"
            variant="dark"
          >
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto nav-text">
                  <Link smooth={true} to="#home">
                    Home
                  </Link>
                  <Nav.Link href="#what">What?</Nav.Link>
                  <Nav.Link size="lg" href="#randomize">
                    Randomize
                  </Nav.Link>
                  <Link smooth={true} to="#contact">
                    Questions
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>
    </>
  );
}

export default BlueNav;
