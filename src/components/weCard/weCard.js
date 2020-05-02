//Node imports
import React from "react";
import Card from "react-bootstrap/Card";

//CSS
import "./weCard.css";

function weCard (props) {
    return(
        <Card id="workExpCard">
            <h2 id="workExpCompany" className="text">{props.companyName}</h2>
            <h3 id="workExpTitle" className="text">{props.jobTitle}</h3>
            <p id="workExpDuration" className="text">{props.start}  -  {props.end}</p>
            <p id="workExpSummary" className="text">{props.summary}</p>
        </Card>
    );
}

export default weCard;