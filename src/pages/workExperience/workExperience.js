//Node Imports
import React from "react";
import Row from "react-bootstrap/Row";

//Components and JSON
import SubHeading from "./../../components/subHeading/subHeading";
import WorkExpCard from "./../../components/weCard/weCard";

//CSS
import "./workExperience.css";

class workExperience extends React.Component {
    render() {
        return (
            <div className="workExperience">
                <Row id="workExperienceRow">
                    <SubHeading id="workExperienceHeading" heading="Work Experience" />
                    <WorkExpCard 
                        companyName="testCompany"
                        jobTitle="testJobTitle"
                        summary="testSummary"/>
                </Row>
            </div>
        )
    }
}

export default workExperience;