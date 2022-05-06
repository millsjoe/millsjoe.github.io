import { Grid } from "@mantine/core";
import Image from "next/image";
import hpe from "../../../public/hpe.png";
import uol from "../../../public/leeds1.png";
import sbg from "../../../public/sbg.png";
import shu from "../../../public/shu.png";

export const Experience = () => {
    return (
        <Grid>
            <Grid.Col span={6}>
                <Image src={sbg} />
                <Image src={shu} />
            </Grid.Col>
            <Grid.Col span={6}>
                <Image src={uol} />
                <Image src={hpe} />
            </Grid.Col>
        </Grid>
    );
};
