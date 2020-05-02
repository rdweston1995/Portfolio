import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//CSS
import "./card.css";

function card(props) {
    return (
        <Card id="projectCard">
            <h2 className="projectTitle text">{props.title}</h2>
            <img className="websiteImage" src={props.image} alt="project example" />
            <p className="projectText text">{props.text}</p>
            <div className="projectBtnDiv">
                <Button id="projectWebsite" className="projectBtn text" href={props.website} target="_blank">Website</Button>
                <Button id="projectGithub" className="projectBtn text" href={props.github} target="_blank">Github</Button>
            </div>
        </Card>
    )
}

export default card;