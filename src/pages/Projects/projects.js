import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "./../../components/card";
import "./projects.css";

class Projects extends Component{

    render(){
        return(
            <div className="projects">
                <Row className="projectsRow">
                    <h2 className="title">Projects</h2>
                    <Col className="projectsCol">
                        <Card  className="testing"/>
                    </Col>
                </Row>
            </div>
            
        )
    }
}

export default Projects;