import type { NextPage } from "next";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import styles from "../styles/Home.module.css";
import { Colours } from "../styles/colours";
import About from "../components/about";
import Header from "../components/header";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Parallax pages={2}>
                <Header />
                <ParallaxLayer
                    offset={1}
                    speed={2}
                    style={{ backgroundColor: Colours.primary }}
                />
                <About />
            </Parallax>
        </div>
    );
};

export default Home;
