import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation.js";
import Demo from "./components/Demo.js";
import Footer from "./components/footer.js";
function App() {
    return (
        <div className="App">
            <Navigation />
            <Demo />

            <Footer />
        </div>
    );
}

export default App;
