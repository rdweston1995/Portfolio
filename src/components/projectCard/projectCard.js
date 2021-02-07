import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import loadImages from "../loadImages/loadImages";

//CSS
import "./projectCard.css";

function card(props) {
    return (
        <Card id="projectCard">
            <h2 className="projectTitle text font">{props.title}</h2>
            <img className="websiteImage" src={loadImages[props.image]} alt="project example" />
            <p className="projectText text font">{props.text}</p>
            <div className="projectBtnDiv">
                {/* <Button id="projectWebsite" className="projectBtn text font" href={props.website} target="_blank">Website</Button> */}
                <form action={props.website} target="_blank">
                    <button id="projectWebsite" className="projectBtn text font" href={props.website} target="_blank">Website</button>
                </form>
                {/* <Button id="projectGithub" className="projectBtn text font" href={props.github} target="_blank">Github</Button> */}
                <form action={props.github} target="_blank">
                    <button id="projectWebsite" className="projectBtn text font" href={props.github} target="_blank">Github</button>
                </form>
            </div>
        </Card>
    )
}

export default card;