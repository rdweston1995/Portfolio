//Node imports
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//CSS
import "./home.css";

class home extends Component {
    render(){
        return (
            <Row className="homePage">
                <Col className="homePageCol">
                    <h1 id="homePageName" className="text">Robert Weston</h1>
                    <h2 id="homePageTitle" className="text">Full Stack Software Developer</h2>                    
                </Col>
            </Row>
        )
    }
}



export default home;