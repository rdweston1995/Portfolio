import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/home";
import AboutMe from "./pages/aboutMe/aboutMe";
import Projects from "./pages/Projects/projects";

class App extends Component {
    render(){
        return (
            
            <Router>
                <Home />
                <AboutMe />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/aboutMe" component={AboutMe} />
                    <Route exact path="/projects" component={Projects} />
                    {/* <Route component={Home} /> */}
                </Switch>
            </Router>
        )
    }
}

export default App;