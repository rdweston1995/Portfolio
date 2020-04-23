//Node imports
import React from "react";
import Card from "react-bootstrap/Card";

//CSS
import "./weCard.css";

function weCard (props) {
    return(
        <Card id="workExpCard">
            <h2>{props.companyName}</h2>
            <h3>{props.jobTitle}</h3>
            <p>{props.summary}</p>
        </Card>
    );
}

export default weCard;