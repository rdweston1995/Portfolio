import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './app.css';

//Pages
import Home from "./pages/Home/home";
import AboutMe from "./pages/aboutMe/aboutMe";
import Projects from "./pages/Projects/projects";
import WorkExperience from "./pages/workExperience/workExperience";
// import ContactMe from "./pages/contactMe/contactMe";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return (
            <div className="app">
                <Home />
                <AboutMe />
                <WorkExperience />
                <Projects 
                    images={this.state.images}/>
            </div>
            
            // <Router>
            //     <Home />
            //     <AboutMe /> 
            //     <WorkExperience />
            //     <Projects />
            //     <Switch>
            //         <Route exact path="/home" component={Home} />
            //         <Route exact path="/aboutMe" component={AboutMe} />
            //         <Route exact path="/projects" component={Projects} />
            //         {/* <Route component={Home} /> */}
            //     </Switch> 
            // </Router>
        )
    }
}

export default App;