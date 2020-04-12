import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './app.css';

//Pages
import Home from "./pages/Home/home";
import AboutMe from "./pages/aboutMe/aboutMe";
import Projects from "./pages/Projects/projects";
import ContactMe from "./pages/contactMe/contactMe";

class App extends React.Component {
    render(){
        return (
            
            <Router>
                <Home />
                <AboutMe />
                <Projects />
                <ContactMe />
                {/* <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/aboutMe" component={AboutMe} />
                    <Route exact path="/projects" component={Projects} />
                    <Route component={Home} />
                </Switch> */}
            </Router>
        )
    }
}

export default App;