import { createStyles, Grid, SimpleGrid, Stack, Text } from "@mantine/core";
import React from "react";
import { Football } from "../hobbies/football";
import { Gaming } from "../hobbies/gaming";
import { Movies } from "../hobbies/movies";
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
            <Stack>
                <Gaming />
                <Football />
                <Movies />
            </Stack>
            <Grid gutter="md">
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
