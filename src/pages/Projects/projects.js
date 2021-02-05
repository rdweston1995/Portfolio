//Node Imports
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Components and JSON
import ProjectCard from "./../../components/projectCard/projectCard";
import projectsJson from "./../../json/projects.json";
import SubHeading from "./../../components/subHeading/subHeading";

//CSS
import "./projects.css";

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {
            projects: [{
                "title" : "Just Duet",
                "website" : "https://gentle-brook-97291.herokuapp.com/",
                "text" : "Just Duet is a karaoke app for a user who doesn't know what song they want to sing. Or that wants to look up the lyrics of a song. Using Spotify API and MusixMatch API to gather song and lyrics data for the user.",
                "image" : "require(./../../images/karaoke.jpg",
                "github" : "https://github.com/rdweston1995/JustDuet",
                "key" : 1
            },{
                "title" : "Hiking App",
                "website" : "",
                "text" : "Hiking App is a hike search app for a user that is looking for new hikes in their specified search area. The user can choose if they want to specify the search further with distance from search area, length of hike, and the user rating of the hike. Using the Hiking Project API paired with the Google Geolocation API for converting the users search to coordinates.",
                "image" : "./../../images/karaoke.jpg",
                "github" : "https://github.com/rdweston1995/HikingApp",
                "key" : 2
            }]
        }
    }
    render(){
        return(
            <div className="projects">
                <Row className="projectsRow">
                    <SubHeading id="projectsHeading" heading="Projects" />
                    <Col className="projectsCol">
                        {/* {projectsJson.map(function(project, i) {
                            return (
                                <ProjectCard 
                                    className="projectCard btn-secondary"
                                    title={project.title}
                                    text={project.text}
                                    website={project.website}
                                    github={project.github}
                                    image={project.image}
                                    key={project.key}
                                />
                            )
                        })} */}

                        {this.state.projects.map(function(project, i) {
                            return (
                                <ProjectCard
                                    className="projectCard btn-secondary"
                                    title={project.title}
                                    text={project.text}
                                    website={project.website}
                                    github={project.github}
                                    image={project.image}
                                    key={project.key}
                                />
                            )
                        })}
                    </Col>
                </Row>
            </div>  
        )
    }
}

export default Projects;