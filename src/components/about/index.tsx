import { createStyles, Grid, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import { Experience } from "../experience";
import { Skills } from "../skills";

const useStyles = createStyles((theme) => ({
    wrapper: {
        padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 24,
        fontWeight: 600,
        lineHeight: 1.1,
        marginBottom: theme.spacing.md,
    },
}));
const About = () => {
    const { classes } = useStyles();
    return (
        <SimpleGrid
            cols={2}
            spacing="md"
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
            <Text>
                {
                    "I'm a software engineer and spend a lot of my time using TypeScript, React and NextJS. \
                    I like making things fast, performant and efficient (mainly to make up for my disasterous design skills). \
                    "
                }
            </Text>
            <Grid gutter="md">
                <Grid.Col>
                    <Text className={classes.title}>
                        {"I learnt a lot by working/studying here:"}
                    </Text>
                    <Experience />
                </Grid.Col>
                <Grid.Col span={12}>
                    <Text className={classes.title}>
                        {"These are some technologies I'm familiar with:"}
                    </Text>
                    <Skills />
                </Grid.Col>
            </Grid>
        </SimpleGrid>
    );
};

export default React.memo(About);
