import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListItem from "./../../components/listItem";
import "./aboutMe.css";

class aboutMe extends Component{
    state = {
        languages: ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'SQL'],
        databases: ['MySQL', 'MongoDB'],
        tools: ['Git/Github', 'Node', 'REST API\'s', 'aJax', 'jQuery', 'React']
    }

    render(){
        return(
            
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
                <h2 className="aboutMeTitle">About Me</h2>
                    <Col className="aboutMeCol">
                        <p className="aboutMeText">About me About me</p>
                    </Col>

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
                </Row>
            </div>
        )
    }
}

export default aboutMe;