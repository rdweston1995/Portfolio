//Node imports
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Components and JSON
import ListItem from "../../components/listItem/listItem";
import skillsJSON from "./../../json/skills.json";
import aboutMeJSON from "./../../json/aboutMe.json";
import SubHeading from "./../../components/subHeading/subHeading";

//CSS
import "./aboutMe.css";

class aboutMe extends Component {
    state = {
        languages: ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'SQL'],
        databases: ['MySQL', 'MongoDB', 'DynamoDB'],
        tools: ['Git/Github', 'Node', 'REST API\'s', 'aJax', 'jQuery', 'React'],
        displayedSkill: ""
    }

    skillOnClick = (e, clickedSkill) => {
        let foundSkill = skillsJSON.filter(skill => skill.skill === clickedSkill)

        this.setState(state => ({
            displayedSkill: foundSkill[0].detail
        }));
    }

    render() {
        return (

            <div className="aboutMe">
                <Row className="aboutMeRow">
                    <SubHeading id="aboutMeHeading" className="text" heading="About Me" />

                    <div className="aboutMeDiv">
                        <img className="profilePicture" src="https://i.imgur.com/CbfJJZL.jpg" alt="The man the myth the legend" />
                        <p className="aboutMeText text" id="aboutMeId" data-toggle="tooltip" data-placement="top" title="tooltip on top">{aboutMeJSON.text}</p>
                    </div>
                </Row>
                
                <Row className="skillsRow">
                        <h3 className="skillsTitle text" >Skills</h3>
                        <Col className="skillsCol">
                            <h4 className="skillsSubTitle text">Languages</h4>
                            <div className="languagesList">
                            {this.state.languages.map((lang, i) => {
                                return (
                                    <p className="text" key={i}>{lang}</p>
                                )
                            })}
                            </div>
                        </Col>
                        <Col className="skillsCol">
                            <h4 className="skillsSubTitle text">Databases</h4>
                            <div className="databasesList">
                                {this.state.databases.map((database, i) => {
                                    return (
                                        <p className="text" key={i}>{database}</p>
                                    )
                                })}
                            </div>
                        </Col>
                        <Col className="skillsCol">
                            <h4 className="skillsSubTitle text">Tools</h4>
                            <div className="toolsList">
                                {this.state.tools.map((tool, i) => {
                                    return(
                                        <p className="text" key={i}>{tool}</p>
                                    )
                                })}
                            </div>
                        </Col>
                    </Row>
            </div>
        )
    }
}

export default aboutMe;