import React from "react";
import background from "../images/landingpage.jpg";
function About() {
    return (
        <div className="bg" style={{ backgroundImage: `url(${background})` }}>
            <p>About us</p>
        </div>
    );
}
export default About;
