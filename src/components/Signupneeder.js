import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
//import Axios from "axios";
//import { Link } from "react-router-dom";

function Signupneeder() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();

            event.stopPropagation();
        }

        setValidated(true);
        console.log(setValidated);
    };

    return (
        <div className="forms">
            <div className="container">
                <h1 className="text-center"> who are you?</h1>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="firstname">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                minLength="3"
                                maxLength="20"
                            />
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>{" "}
                            <Form.Control.Feedback type="invalid">
                                Atleast 3 letters
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="lastname">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                minLength="3"
                                maxLength="20"
                            />{" "}
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Atleast 3 letters
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control required type="number" />

                            <Form.Control.Feedback type="invalid">
                                Enter age.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCustom01"
                        >
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="+32"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your phone number with anyone
                                else.
                            </Form.Text>
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" required />{" "}
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Enter your street name.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required />{" "}
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Enter email address.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="v">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                className="form-control"
                                minLength="8"
                                maxLength="20"
                                required
                            />{" "}
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Password must be 8 letters
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group
                            as={Col}
                            md="12"
                            controlId="confirmpassword"
                        >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                className="form-control"
                                minLength="8"
                                maxLength="20"
                                required
                            />{" "}
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Password must be 8 letters
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group
                            as={Col}
                            md="12"
                            controlId="confirmpassword"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                required
                            />{" "}
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                        />
                    </Form.Group>

                    <Button type="submit" className="btn-success">
                        Submit form
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Signupneeder;
