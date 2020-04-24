//Node Imports
import React from "react";
import Row from "react-bootstrap/Row";

//Components and JSON
import SubHeading from "./../../components/subHeading/subHeading";
import WorkExpCard from "./../../components/weCard/weCard";
import workJSON from "./../../json/workExperience.json";

//CSS
import "./workExperience.css";

class workExperience extends React.Component {
    render() {
        return (
            <div className="workExperience">
                <Row id="workExperienceRow">
                    <SubHeading id="workExperienceHeading" heading="Work Experience" />
                    {workJSON.map(function(work, i) {
                        return (
                            <WorkExpCard
                                companyName={work.company}
                                jobTitle={work.title}
                                summary={work.summary}
                                start={work.start}
                                end={work.end}
                                key={work.key}
                            />
                        )
                    })}
                </Row>
            </div>
        )
    }
}

export default workExperience;