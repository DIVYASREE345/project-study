import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
function Demo() {
    return (
        <div className="Demo">
            <Jumbotron>
                <h1>JUST4GIVING!</h1>
                <p>you want to donate something or you need something</p>
                <p>
                    <Button className="needer">I need Something</Button>
                    <Button className="needer" variant="primary">
                        I want to donate Something
                    </Button>
                </p>
            </Jumbotron>
        </div>
    );
}
export default Demo;
