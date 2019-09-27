import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/home";
import AboutMe from "./pages/aboutMe/aboutMe";

class app extends Component {
    render(){
        return (
            
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/aboutMe" component={AboutMe} />
                    <Route component={Home} />
                </Switch>
            </Router>
        )
    }
}

export default app;