//Node imports
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Redirect } from "react-router-dom";

//CSS
import "./home.css";

class home extends Component {
    state = {
        redirect: false
    }

    setRedirect = () => { 
        this.setState({
            redirect: true
        });
    }

    renderRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to="/aboutMe"/>
        }
    }
    
    onClickChangePage = () => {
        // let history = useHistory();
        // return(
        //     <Redirect to="/aboutMe"/>
        // )
        // history.push("/aboutMe");
    }
    render(){
        return (
            <Row className="homePage">
                <Col className="homePageCol">
                    <h1 id="homePageName" className="text">Robert Weston</h1>
                    <h2 id="homePageTitle" className="text">Full Stack Web Developer</h2>                    
                </Col>
            </Row>
        )
    }
}



export default home;