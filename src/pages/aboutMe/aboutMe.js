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
                <Row>
                    <Col>
                        <h2>About Me</h2>
                        <p>About me About me</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 className="skillsTitle">Skills</h3>
                        <h4 className="skillsSubTitle">Languages</h4>
                        <ul>
                            {this.state.languages.map(function(lang, i){
                                return(
                                    <ListItem skill={lang} key={i}/>
                                )
                            })}
                        </ul>
                        <h4 className="skillsSubTitle">Databases</h4>
                        <ul>
                            {this.state.databases.map(function(database, i){
                                return(
                                    <ListItem skill={database} key={i}/>
                                )
                            })}
                        </ul>
                        <h4 className="skillsSubTitle">Tools</h4>
                        <ul>
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