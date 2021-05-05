import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
    return (
        <div className="margin-t-b">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">JUST4GIVING</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav
                        className="row justify-content-end"
                        style={{ width: "100%" }}
                    >
                        <Nav.Item>
                            <Nav.Link href="#aboutus">About Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#logingiver">Login</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
export default Navigation;
