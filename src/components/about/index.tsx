import {
    Grid,
    Col,
    Title,
    SimpleGrid,
    Text,
    createStyles,
} from "@mantine/core";
import React from "react";
import Education from "../education";
import { Experience } from "../experience";
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
    },
}));
const About = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.wrapper}>
            <Grid gutter={80}>
                <Col span={12} md={5} sm={2} lg={5}>
                    <Title className={classes.title} order={2}>
                        Here is some of my experience
                    </Title>
                    <div className={classes.wrapper} />
                    <Experience />
                </Col>
                <Skills />
            </Grid>
        </div>
    );
};

export default React.memo(About);
