import React from "react";
import { IDisplayed, getRandomOssOrGloss } from "./helpers";
import styles from "./styles.module.css";
import oss from "../../../assets/oss.png"
import gloss from "../../../assets/gloss.png"
import Image from "next/image";

export const OssOrGloss = () => {
    const [displayed, setDisplayed] = React.useState(getRandomOssOrGloss());
    const [score, setScore] = React.useState(0);
    const [lives, setLives] = React.useState(3);

    const onPress = ({ type }: Partial<IDisplayed>, selection: string) => {
        if (type === selection) {
            setScore(score + 1);
        } else {
            setLives(lives - 1);
        }

        if (lives === 1) {
            setScore(0);
            setLives(3);
        }
        setDisplayed(getRandomOssOrGloss());
    };

    return (
        <div className={styles.ossOrGloss}>
            <h1 className={styles.displayed}>{displayed.name}</h1>
            <div className={styles.scores}>
                <p>score: {score}</p>
                <p>lives: {lives}</p>
            </div>
            <div className={styles.choices}>
                <div className={styles.makeShiftButton}>

                <Image  height={100} width={100} src={oss} onClick={() => onPress(displayed, "Horse")} />
                </div>
                <div className={styles.makeShiftButton}>

                <Image  height={100} width={100} src={gloss} onClick={() => onPress(displayed, "Gloss")} />
                </div>
            </div>
        </div>
    );
};
