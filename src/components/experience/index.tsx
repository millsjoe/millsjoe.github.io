import { Col, Grid } from "@mantine/core";
import Image from "next/image";

import hpe from "../../../public/hpe.png";
import uol from "../../../public/uol.png";
import shu from "../../../public/shu.png";
import sbg from "../../../public/sbg.png";

export const Experience = () => {
    return (
        <Grid gutter="sm" columns={2}>
            <Col span={1}>
                <Image src={sbg} />
                <Image src={uol} />
            </Col>
            <Col span={1}>
                <Image src={shu} />
                <Image src={hpe} />
            </Col>
        </Grid>
    );
};
