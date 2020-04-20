//Node imports
import React from "react";

//CSS
import "./subHeading.css";

function subHeading(props) {
    return (
        <h2 id={props.id} className="subHeading">{props.heading}</h2>
    );
}

export default subHeading;