import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/home";

class app extends Component {
    render(){
        return (
            // <Home/>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={Home} />
                </Switch>
            </Router>
        )
    }
}

export default app;