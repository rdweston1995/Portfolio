import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function card(props){
    return(    
        <Card className={props.className} style={{width: "48%", height: "725px", padding: "30px", margin: "15px", float: "left", backgroundColor : "#262626", boxShadow : "2px 2px 5px #000000"}}>
            <h2 className="projectTitle" style={{fontSize : "50px", fontWeight: "bold", color : "#ffffff"}}>{props.title}</h2>
            <img className="websiteImage"  src={props.image} style={{width: "100%", height: "500px", boxShadow: "1px 2px 2px #000000"}} alt="project example"/>
            <p className="cardText" style={{fontSize: "25px", color : "#ffffff"}}>
                {props.text}
            </p>
            <div className="btnDiv" style={{width: "100%", textAlign: "left"}}>
            <Button className="cardWebsiteButton" href={props.website} target="_blank" style={{display: "inline-block", width: "100px", fontSize: "20px", backgroundColor : "#5A5959", borderColor: "transparent"}}>Website</Button>
            <Button className="cardGithubButton" href={props.github} target="_blank" style={{display: "inline-block", width: "100px", margin: "15px", fontSize: "20px", backgroundColor : "#5A5959", borderColor: "transparent"}}>Github</Button>
            </div>
            
        </Card> 
    )
}

export default card;