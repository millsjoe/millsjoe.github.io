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
        <div className="qualification_object">
            {/* <Image src={props.imgSrc} width="100px" height="100px" /> */}
            <p>{props.degree}</p>
            <p>{props.degreeLevel}</p>
            <p>{props.school}</p>
        </div>
    );
};

export default React.memo(Qualification);
