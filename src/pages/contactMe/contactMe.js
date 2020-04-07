import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./contactMe.css";

class ContactMe extends Component {
    render() {
        return(
            <div className="contactMe">
                <Row className="contactMeRow">
                    <h2 className="title">Contact Me</h2>
                    <Col className="contactCol">
                        <form>
                            <label for="email">Email:</label>
                            <input type="text" id="email" name="email"/>
                            <label for="name">Name: </label> 
                            <input type="text" id="name" name="name"/>
                            <label for="message">Message:</label>
                            <input type="text" id="message" name="message"/>
                        </form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ContactMe;