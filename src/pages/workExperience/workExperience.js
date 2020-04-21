//Node Imports
import React from "react";
import Row from "react-bootstrap/Row";

//Components
import SubHeading from "./../../components/subHeading/subHeading";

//CSS
import "./workExperience.css";

class workExperience extends React.Component {
    render() {
        return (
            <div className="workExperience">
                <Row id="workExperienceRow">
                    <SubHeading id="workExperienceHeading" heading="Work Experience" />
                </Row>
            </div>
        )
    }
}

export default workExperience;