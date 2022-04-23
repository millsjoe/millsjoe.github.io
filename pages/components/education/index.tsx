import React from "react";
import Qualification from "./qualification";

const Education = (
) => {
    return (

        <div className="qualification__list">

            <Qualification 
            school="University of Leeds"
            grade="First"
            degree="Computer Science"
            degreeLevel="Bsc"
            imgSrc="tbc"
            />

            <Qualification 
            school="Sheffield Hallam University"
            grade="First"
            degree="Digital and Technology Solutions"
            degreeLevel="Msc"
            imgSrc="tbc"
            />
        </div>


    )
}

export default React.memo(Education)