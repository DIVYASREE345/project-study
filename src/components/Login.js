import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";

function Signupgiver() {
    const url = "";
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });
    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            name: data.name,
            email: data.email,
            password: data.password,
        }).then((res) => {
            console.log(res.data);
        });
    }

    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }
    return (
        <Form onSubmit={(e) => submit(e)}>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    onChangeCapture={(e) => handle(e)}
                    type="text"
                    value={data.name}
                    placeholder="Enter name"
                    minLength="3"
                    maxLength="20"
                />
                <Form.Control.Feedback type="valid"></Form.Control.Feedback>{" "}
                <Form.Control.Feedback type="invalid">
                    Atleast 3 letters
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    onChange={(e) => handle(e)}
                    type="email"
                    value={data.email}
                    placeholder="Enter email"
                />
                <Form.Control.Feedback type="valid"></Form.Control.Feedback>{" "}
                <Form.Control.Feedback type="invalid">
                    Enter correct format
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    onChange={(e) => handle(e)}
                    type="password"
                    value={data.password}
                    placeholder="Password"
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Signupgiver;
