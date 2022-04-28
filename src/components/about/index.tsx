import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import Education from "../education";

const About = () => {
    return (
        <div>
            <ParallaxLayer
                offset={1}
                speed={0.5}
                style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <h1>
                    Here are a few things you might find interesting about me
                </h1>
                <Education />
            </ParallaxLayer>
        </div>
    );
};

export default React.memo(About);
