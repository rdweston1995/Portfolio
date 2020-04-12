import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "./../../components/card";
import projectsJson from "./../../json/projects.json";
import "./projects.css";

class Projects extends Component{

    render(){
        return(
            <div className="projects">
                <Row className="projectsRow">
                    <h2 className="title">Projects</h2>
                    <Col className="projectsCol">
                        {projectsJson.map(function(project, i) {
                            return (
                                <Card 
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