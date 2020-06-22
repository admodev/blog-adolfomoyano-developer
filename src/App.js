import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Adolfo Moyano</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Portfolio</Nav.Link>
          <Nav.Link href="#features">Mi Historia</Nav.Link>
          <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default App;
