import React from "react";
import styles from "../../styles/Home.module.css";
import { ParallaxLayer } from "@react-spring/parallax";

const Header = () => {
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
                <h1 className={styles.title}>Hi, Im Joe </h1>
                <h2 className={styles.description}>Full stack developer</h2>
            </header>
        </ParallaxLayer>
    );
};

export default React.memo(Header);
