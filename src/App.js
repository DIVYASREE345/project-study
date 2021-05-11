import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation.js";
import Demo from "./components/Demo.js";
import Footer from "./components/footer.js";
import About from "./components/About.js";
import Login from "./components/Login.js";
import Signupneeder from "./components/Signupneeder";
function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={Demo} />
                    <Route path="/aboutus" exact component={About} />
                    <Route path="/login" exact component={Login} />
                    <Route
                        path="/Signupneeder"
                        exact
                        component={Signupneeder}
                    />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
