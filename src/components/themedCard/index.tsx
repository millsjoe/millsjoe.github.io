import {
    createStyles,
    Paper,
    Text,
    ThemeIcon,
    useMantineColorScheme,
} from "@mantine/core";
import React from "react";

interface IThemedCard {
    title: string;
    description: string;
    icon: any;
    alignment: "left" | "right" | "center" | "justify" | undefined;
}

export const ThemedCard = ({
    title,
    description,
    icon,
    alignment,
}: IThemedCard) => {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    const useStyles = createStyles((theme) => ({
        card: {
            position: "relative",
            cursor: "pointer",
            overflow: "hidden",
            transition: "transform 150ms ease, box-shadow 100ms ease",
            padding: theme.spacing.xl,
            paddingLeft: theme.spacing.xl * 2,

            "&:hover": {
                boxShadow: theme.shadows.md,
                transform: "scale(1.02)",
            },

            "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                left: alignment === "left" ? 0 : undefined,
                right: 0,
                width: 10,
                backgroundImage: dark
                    ? theme.fn.linearGradient(
                          0,
                          theme.colors.orange[6],
                          theme.colors.red[6]
                      )
                    : theme.fn.linearGradient(
                          0,
                          theme.colors.cyan[6],
                          theme.colors.blue[6]
                      ),
            },
        },
    }));

    const { classes } = useStyles();

    return (
        <Paper withBorder radius="md" className={classes.card}>
            <div style={{ display: "flex", justifyContent: alignment }}>
                <ThemeIcon
                    size="xl"
                    radius="md"
                    variant="gradient"
                    style={{ alignItems: alignment }}
                    gradient={
                        dark
                            ? { deg: 133, from: "red", to: "coral" }
                            : { deg: 133, from: "blue", to: "cyan" }
                    }
                >
                    {icon}
                </ThemeIcon>
            </div>
            <Text size="xl" weight={500} mt="md" align={alignment}>
                {title}
            </Text>
            <Text size="sm" mt="sm" color="dimmed" align={alignment}>
                {description}
            </Text>
        </Paper>
    );
};
