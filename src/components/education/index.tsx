import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import Qualification from "./qualification";

const Education = () => {
    return (
        <div
            className="qualification__list"
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <p>I have the following qualifications</p>
            <Qualification
                school="University of Leeds"
                grade="First"
                degree="Computer Science"
                degreeLevel="Bsc"
                imgSrc="/uol.png"
            />

            <Qualification
                school="Sheffield Hallam University"
                grade="First"
                degree="Digital and Technology Solutions"
                degreeLevel="Msc"
                imgSrc="/uol.png"
            />
        </div>
    );
};

export default React.memo(Education);
