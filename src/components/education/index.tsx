import React from "react";
import {
    createStyles,
    Title,
    SimpleGrid,
    Text,
    Button,
    ThemeIcon,
    Grid,
    Col,
} from "@mantine/core";

import Qualification from "./qualification";

const Education = () => {
    return (
        <div className="qualification__list">
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
