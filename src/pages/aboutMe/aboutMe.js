import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./aboutMe.css";

class aboutMe extends Component{
    render(){
        return(
            <div className="aboutMe">
                <Row>
                    <Col>
                        <h2>About Me</h2>
                        <p>About me About me</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Skills</h3>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default aboutMe;