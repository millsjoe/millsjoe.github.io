import { Grid } from "@mantine/core";
import Image from "next/image";
import React from "react";
import hpe from "../../../public/hpe.png";
import uol from "../../../public/leeds1.png";
import sbg from "../../../public/sbg.png";
import shu from "../../../public/shu.png";

const Experience = () => {
    return (
        <Grid>
            <Grid.Col lg={3} sm={1}>
                <Image src={sbg} />
            </Grid.Col>
            <Grid.Col lg={3} sm={1}>
                <Image src={shu} />
            </Grid.Col>
            <Grid.Col lg={3} sm={1}>
                <Image src={uol} />
            </Grid.Col>
            <Grid.Col lg={3} sm={1}>
                <Image src={hpe} />
            </Grid.Col>
        </Grid>
    );
};

export default React.memo(Experience);
