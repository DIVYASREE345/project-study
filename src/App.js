import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation.js";
import background from "./landingpage.jpg";
import Demo from "./components/Demo.js";
import Video from "./components/video.js";
import footer from "./background.jpg";
import Footer from "./components/footer.js";
function App() {
    return (
        <div className="App">
            <Navigation />
            <div
                className="bg"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="container">
                    <Demo />
                    <Video />
                </div>
                <div>
                    <img className="bg2" src={footer} alt="bg2" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
