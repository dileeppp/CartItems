import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import cartImg from '../Locals/cart.jpg'

export class Navhead extends Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={cartImg}
                alt="Brand"
                width={30}
                height={30}
                style={{ borderRadius: "50%", padding: 0 }}
                className="d-inline-block align-top"
              />{" "}
              Dileep's Mart
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Catogories</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Log In</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Log Out
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
  }
}

export default Navhead;
