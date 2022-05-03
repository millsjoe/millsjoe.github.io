import type { NextPage } from "next";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import terminal from "../../public/terminal.png";
import styles from "../styles/Home.module.css";
import { Colours } from "../styles/colours";
import About from "../components/about";
import Header from "../components/header";
import Image from "next/image";
import { MantineProvider } from "@mantine/core";

const Home: NextPage = () => {
    return (
        <MantineProvider>
            <Parallax pages={2} style={{ top: "0", left: "0" }}>
                <ParallaxLayer offset={0} speed={0} />
                <div className={styles.container}>
                    <Header />
                    <ParallaxLayer
                        offset={1}
                        speed={2}
                        style={{ backgroundColor: Colours.darkPrimary }}
                    />
                    <About />
                </div>
            </Parallax>
        </MantineProvider>
    );
};

export default Home;
