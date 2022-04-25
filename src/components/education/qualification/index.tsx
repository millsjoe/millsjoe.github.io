import React from "react";

interface IQualifictation {
    degree: string;
    degreeLevel: string;
    grade: string;
    school: string;
    imgSrc: string;
}
const Qualification = (props: IQualifictation) => {
    return (
        <div className="qualification_object" style={{ padding: "2rem" }}>
            <h2>{props.degree}</h2>
            <h3>{props.degreeLevel}</h3>
            <h4>{props.school}</h4>
        </div>
    );
};

export default React.memo(Qualification);
