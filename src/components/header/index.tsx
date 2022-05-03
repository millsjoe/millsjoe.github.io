import React from "react";
import styles from "../../styles/Home.module.css";
import { ParallaxLayer } from "@react-spring/parallax";
import { createStyles, Title, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    subtitle: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 32,
        fontWeight: 500,
        lineHeight: 1.1,
        marginBottom: theme.spacing.md,
        color: theme.black,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 36,
        fontWeight: 900,
        lineHeight: 1.1,
        marginBottom: theme.spacing.md,
        color: theme.black,
    },
}));
const Header = () => {
    const { classes } = useStyles();
    return (
        <ParallaxLayer
            offset={0}
            speed={2}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <header className="header">
                <Title className={classes.title}>Hi, Im Joe </Title>
                <Text className={classes.subtitle}>Full stack developer</Text>
            </header>
        </ParallaxLayer>
    );
};

export default React.memo(Header);
