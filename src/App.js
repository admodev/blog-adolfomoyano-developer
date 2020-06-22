import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio.js";
import Contacto from "./components/Contacto.js";

function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Router>
          <Link to="/">
            <Navbar.Brand href="#home">Adolfo Moyano</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/">
                <Nav.Link href="#home">Mi Historia</Nav.Link>
              </Link>
              <Link to="/">
                <Nav.Link href="#features">Portfolio</Nav.Link>
              </Link>
              <Link to="/">
                <Nav.Link href="#pricing">Contacto</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Switch>
            <Route>
              <Portfolio />
            </Route>
            <Route>
              <About />
            </Route>
            <Route>
              <Contacto />
            </Route>
          </Switch>
        </Router>
      </Navbar>
    </div>
  );
}

export default App;
