import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -110;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

function NavBar() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          display: "flex",
          marginTop: 10,
          zIndex: 1,
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
                    <Button variant="primary">Home</Button>
                  </Link>
                  <Link
                    smooth={true}
                    to="#about"
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    <Button variant="primary">About</Button>
                  </Link>
                  <Link
                    smooth={true}
                    to="#randomize"
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    <Button variant="primary">Create Trip</Button>
                  </Link>
                  <Link
                    smooth={true}
                    to="#contact"
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    <Button variant="primary">Contact Us</Button>
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

export default NavBar;
