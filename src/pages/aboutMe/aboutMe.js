import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListItem from "./../../components/listItem";
import UseModal from "./../../components/modal";
import "./aboutMe.css";

class aboutMe extends Component {
    state = {
        languages: ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'SQL'],
        databases: ['MySQL', 'MongoDB', 'DynamoDB'],
        tools: ['Git/Github', 'Node', 'REST API\'s', 'aJax', 'jQuery', 'React']
    }

    render() {
        return (

            <div className="aboutMe">
                {/* <div className="bufferZone"/> */}
                {/* <Row className="aboutMeRow">
                    <Col className="aboutMeCol">
                        <h2 className="aboutMeTitle">About Me</h2>
                        <p className="aboutMeText">About me About me</p>
                    </Col>
                </Row>
                <Row className="skillsRow">
                    <Col className="skillsCol">
                        <h3 className="skillsTitle">Skills</h3>
                        <h4 className="skillsSubTitle">Languages</h4>
                        <ul className="languagesList">
                            {this.state.languages.map(function(lang, i){
                                return(
                                    <ListItem skill={lang} key={i}/>
                                )
                            })}
                        </ul>
                        <h4 className="skillsSubTitle">Databases</h4>
                        <ul className="databasesList">
                            {this.state.databases.map(function(database, i){
                                return(
                                    <ListItem skill={database} key={i}/>
                                )
                            })}
                        </ul>
                        <h4 className="skillsSubTitle">Tools</h4>
                        <ul className="toolsList">
                            {this.state.tools.map(function(tool, i){
                                return(
                                    <ListItem skill={tool} key={i}/>
                                )
                            })}
                        </ul>
                    </Col>
                </Row> */}

                <Row className="aboutMeRow">
                    <h2 className="title">About Me</h2>
                    <Col className="aboutMeCol">
                        <div className="aboutMeSection">
                            <img className="profilePicture" src="https://i.imgur.com/CbfJJZL.jpg" alt="The man the myth the legend" />
                            <p className="aboutMeText" data-toggle="tooltip" data-placement="top" title="tooltip on top">About me About me</p>
                            {/* <Button type="button" className="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="testing">Testing</Button> */}

                        </div>

                    </Col>

                    <Col className="skillsCol">
                        <div className="skillsDiv">
                            <h3 className="skillsTitle">Skills</h3>
                            <div className="skillsList">
                            <h4 className="skillsSubTitle">Languages</h4>
                            <ul className="languagesList">
                                {this.state.languages.map(function (lang, i) {
                                    return (
                                        <ListItem skill={lang} key={i} />
                                    )
                                })}
                            </ul>
                            <h4 className="skillsSubTitle">Databases</h4>
                            <ul className="databasesList">
                                {this.state.databases.map(function (database, i) {
                                    return (
                                        <ListItem skill={database} key={i} />
                                    )
                                })}
                            </ul>
                            <h4 className="skillsSubTitle">Tools</h4>
                            <ul className="toolsList">
                                {this.state.tools.map(function (tool, i) {
                                    return (
                                        <ListItem skill={tool} key={i} />
                                    )
                                })}
                            </ul>
                            </div>
                            <div className="skillsDetails">
                                
                            </div>
                        </div>

                    </Col>
                </Row>
                {/* <Button variant="success" onClick={<Modal />}>Click me to see</Button> */}
                {/* <UseModal /> */}
                {/* <OverlayTrigger trigger="click" placement="right" overlay={Popover}>
                    <Button variant="success">Click me to see</Button>
                </OverlayTrigger> */}
            </div>
        )
    }
}

export default aboutMe;