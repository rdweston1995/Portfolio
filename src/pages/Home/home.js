import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Redirect } from "react-router-dom";
import "./home.css";

class home extends Component {

    onClickChangePage = () => {
        return(
            <Redirect to="/aboutMe"/>
        )
    }
    render(){
        return (
            <Row className="homePage">
                <Col className="homePageCol">
                    <h1 id="homePageName">Robert Weston</h1>
                    <h2 id="homePageTitle">Full Stack Web Developer</h2>

                    <div className="homeNextPageButton" onClick={function changePage(){console.log("testing")}}>></div>
                </Col>
            </Row>
        )
    }
}



export default home;