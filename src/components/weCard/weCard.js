//Node imports
import React from "react";
import Card from "react-bootstrap/Card";

//CSS
import "./weCard.css";

function weCard () {
    return(
        <Card id="workExpCard">
            <h2>Company Name</h2>
            <h3>Job Title</h3>
            <p>Summary of job responsibilities</p>
        </Card>
    );
}

export default weCard;