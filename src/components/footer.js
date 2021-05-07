import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Footer() {
    return (
        <div>
            <Navbar
                className="d-flex justify-content-between"
                style={{
                    backgroundColor: "#E9D366",
                    color: "#0067CF",
                    width: "100%",
                    paddingLeft: "10%",
                    paddingRight: "10%",
                }}
                sticky="Bottom"
                collapseOnSelect
                expand="lg"
            >
                <Nav>
                    <Nav.Item>
                        <Nav.Link style={{ color: "#0067CF" }} href="#privacy">
                            | Privacy Policy | Disclaimer |
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <Nav>
                    Copyright © 2021 Hack Your Future | All Rights Reserved |
                </Nav>

                <Nav>
                    <Nav.Item style={{ color: "#0067CF" }}>
                        <i
                            class="fa fa-envelope-square fa-2x"
                            style={{ paddingRight: "20px" }}
                        ></i>
                        <a href="https://github.com/FortAwesome/Font-Awesome">
                            <i
                                class="fa fa-github fa-2x"
                                style={{ color: "#0067CF" }}
                                aria-hidden="true"
                            ></i>
                        </a>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    );
}
export default Footer;
