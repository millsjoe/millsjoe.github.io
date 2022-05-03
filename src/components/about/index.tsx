import {
    Grid,
    Col,
    Title,
    SimpleGrid,
    Text,
    createStyles,
} from "@mantine/core";
import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import Education from "../education";
import { Skills } from "../skills";

const useStyles = createStyles((theme) => ({
    wrapper: {
        padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 36,
        fontWeight: 600,
        lineHeight: 1.1,
        marginBottom: theme.spacing.md,
        color: theme.white,
    },
}));
const About = () => {
    const { classes } = useStyles();
    return (
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
            <div className={classes.wrapper}>
                <Grid gutter={80}>
                    <Col span={12} md={5}>
                        <Title className={classes.title} order={2}>
                            These are some technologies I know about
                        </Title>
                    </Col>
                    <Skills />
                </Grid>
            </div>
        </ParallaxLayer>
    );
};

export default React.memo(About);
