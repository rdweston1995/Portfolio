import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListItem from "./../../components/listItem";
import skillsJSON from "./../../skills.json";
// import aboutMeText from "./../../aboutMe.txt";
import "./aboutMe.css";

class aboutMe extends Component {
    state = {
        languages: ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'SQL'],
        databases: ['MySQL', 'MongoDB', 'DynamoDB'],
        tools: ['Git/Github', 'Node', 'REST API\'s', 'aJax', 'jQuery', 'React'],
        displayedSkill : ""
    }

    skillOnClick = (e, clickedSkill) => {
        let foundSkill = skillsJSON.filter(skill => skill.skill === clickedSkill)

        this.setState(state => ({
            displayedSkill : foundSkill[0].detail
        }));
    }

    loadAboutMeText = () => {
        let fr = new FileReader();
        fr.onload = function() {
            document.getElementById('aboutMeId').textContent = this.result;
        };
    }

    componentDidMount = () => {
        let fr = new FileReader();
        fr.onload = function(e) {
            // document.getElementById('aboutMeId').textContent = this.result;
            let aboutMe = document.getElementById('aboutMeId');
            aboutMe.innerText = fr.result;
        }

        fr.readAsText('./../../aboutMe.txt');
    }

    render() {
        return (

            <div className="aboutMe">
                <Row className="aboutMeRow">
                    <h2 className="title">About Me</h2>
                    <Col className="aboutMeCol">
                        <div className="aboutMeSection">
                            <img className="profilePicture" src="https://i.imgur.com/CbfJJZL.jpg" alt="The man the myth the legend" />
                            <p className="aboutMeText" id="aboutMeId" data-toggle="tooltip" data-placement="top" title="tooltip on top"></p>
                        </div>
                    </Col>

                    <Col className="skillsCol">
                        <div className="skillsDiv">
                            <h3 className="skillsTitle" >Skills</h3>
                            <div className="skillsList">
                                <h4 className="skillsSubTitle">Languages</h4>
                                <ul className="languagesList">
                                    {this.state.languages.map((lang, i) => {
                                        return (
                                            <ListItem skill={lang} key={i} onClick={((e) => this.skillOnClick(e, lang))} />
                                        )
                                    })}
                                </ul>
                                <h4 className="skillsSubTitle">Databases</h4>
                                <ul className="databasesList">
                                    {this.state.databases.map((database, i) => {
                                        return (
                                            <ListItem skill={database} key={i} onClick={((e) => this.skillOnClick(e, database))} />
                                        )
                                    })}
                                </ul>
                                <h4 className="skillsSubTitle">Tools</h4>
                                <ul className="toolsList">
                                    {this.state.tools.map((tool, i) => {
                                        return (
                                            <ListItem skill={tool} key={i} onClick={((e) => this.skillOnClick(e, tool))} />
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="skillsDetails" onChange={this.changeSkillDetail}>
                                <p className="skillDetailP">
                                    {this.state.displayedSkill}
                                </p>

                            </div>
                        </div>

                    </Col>
                </Row>
            </div>
        )
    }
}

export default aboutMe;