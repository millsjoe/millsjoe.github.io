import {
    Center,
    ColorScheme,
    ColorSchemeProvider,
    Container,
    MantineProvider,
} from "@mantine/core";
import type { NextPage } from "next";
import { useState } from "react";
import About from "../components/about";
import Header from "../components/header";

const Home: NextPage = () => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{ colorScheme }}
                withGlobalStyles
                withNormalizeCSS
            >
                <Container>
                    <Center>
                        <Header />
                    </Center>
                    <About />
                </Container>
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export default Home;
