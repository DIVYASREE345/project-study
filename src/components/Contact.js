import React from "react";
import background from "../images/landingpage.jpg";
function Contact() {
    return (
        <div className="bg" style={{ backgroundImage: `url(${background})` }}>
            <p>About us</p>
            <button
                type="submit"
                name="learn"
                className="learn"
                value="myimage"
            >
                <p>Tutorials for all</p>
                <img src="https://www.tutorialspoint.com/latest/inter-process-communication.png " />
            </button>
        </div>
    );
}
export default Contact;
