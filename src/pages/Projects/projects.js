//Node Imports
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Components and JSON
import ProjectCard from "./../../components/card/projectCard";
import projectsJson from "./../../json/projects.json";
import SubHeading from "./../../components/subHeading/subHeading";

//CSS
import "./projects.css";

class Projects extends Component{
    render(){
        return(
            <div className="projects">
                <Row className="projectsRow">
                    <SubHeading id="projectsHeading" heading="Projects" />
                    <Col className="projectsCol">
                        {projectsJson.map(function(project, i) {
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