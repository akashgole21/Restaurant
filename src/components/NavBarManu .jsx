import React from 'react'
import {Link} from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap/";

export default function NavBarManu () {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/restaurant">Resto</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link> */}
                <Nav.Link>
                  <Link to="/restaurant">List</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/create">Add</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/search">Search</Link>
                </Nav.Link>
                {/* <Nav.Link>
                  <Link to="/login">Login</Link>
                </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}
