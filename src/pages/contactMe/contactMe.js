import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./contactMe.css";

class ContactMe extends Component {
    onSubmit = () => {
        console.log(document.getElementById('email').value);
        console.log(document.getElementById('name').value);
        console.log(document.getElementById('message').value);
        document.getElementById('email').value = "";
        document.getElementById('name').value = "";
        document.getElementById('message').value = "";
    }
    
    render() {
        return(
            <div className="contactMe">
                <Row className="contactMeRow">
                    <h2 className="title">Contact Me</h2>
                    <Col className="contactCol">
                        <form>
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="email"/>
                            <label htmlFor="name">Name: </label> 
                            <input type="text" id="name" name="name"/>
                            <label htmlFor="message">Message:</label>
                            <input type="text" id="message" name="message"/>
                            <button className="contactSubmitBtn" type="button" onClick={((e) => this.onSubmit())}>Send</button>
                        </form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ContactMe;