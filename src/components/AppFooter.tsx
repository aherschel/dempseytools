import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

const AppFooter = () => {
  return (
    <Navbar sticky="bottom" bg="dark" variant="dark">
      <Container>
        <Nav>
          <Nav.Link href="https://github.com/aherschel/dempseytools">
            View Source <FaGithub />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppFooter;
