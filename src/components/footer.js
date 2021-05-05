import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Footer() {
    return (
        <div className="margin-t-b">
            <Navbar
                className="m-auto"
                sticky="Bottom"
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Item>
                            <Nav.Link href="#aboutus">Privacy</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#logingiver">
                                Terms and conditions
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
export default Footer;
