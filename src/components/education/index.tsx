import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import Qualification from "./qualification";

const Education = () => {
    return (
        <div className="qualification__list">
            <ParallaxLayer
                offset={1}
                speed={0.5}
                style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "nowrap",
                }}
            >
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
            </ParallaxLayer>
        </div>
    );
};

export default React.memo(Education);
