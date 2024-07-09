import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import About from "../../pages/About";
import Home from "../../pages/Home";

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Container>
                            <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}
