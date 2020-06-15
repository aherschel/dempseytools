import React from "react";
import { Navbar } from "react-bootstrap";

/**
 * Component responsible for rendering the nav bar on all app pages.
 */
const AppHeader = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand>Dempsey Tools</Navbar.Brand>
    </Navbar>
  );
};

export default AppHeader;
