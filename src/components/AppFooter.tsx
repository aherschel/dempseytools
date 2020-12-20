import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
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
