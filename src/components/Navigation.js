import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo22.png";
function Navigation() {
    return (
        <div className="margin-t-b">
            <Navbar
                style={{ backgroundColor: "#66CBDF" }}
                collapseOnSelect
                expand="lg"
                sticky="top"
            >
                <Navbar>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="90"
                            height="90"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>

                    <Navbar.Brand
                        style={{
                            color: "#E9D366",
                            fontSize: "35px",
                            textShadow: "2px 2px 4px #000000",
                        }}
                        href="#home"
                    >
                        JUST4GIVING
                    </Navbar.Brand>
                </Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav
                        className="row justify-content-end"
                        style={{
                            width: "100%",
                            marginRight: "20px",
                            fontSize: "20px",
                            textShadow: "2px 2px 4px black",
                        }}
                    >
                        <Nav.Item style={{ marginRight: "20px" }}>
                            <Nav.Link
                                style={{ color: "white" }}
                                href="#aboutus"
                            >
                                About Us
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                style={{ color: "white" }}
                                href="#logingiver"
                            >
                                Login
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
export default Navigation;
