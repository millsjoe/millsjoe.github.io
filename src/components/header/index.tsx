import React from "react";
import styles from "./styles.module.css";
import globalStyles from "../../styles/globals.module.css";

import { BrandGithub, BrandLinkedin, BrandTwitter } from "tabler-icons-react";
const Header = () => {
    return (
        <div className={styles.header}>
            <h1>{"Hi, I'm Joe"}</h1>

            <h2>Full stack developer</h2>
            <div className={styles.icons}>
                <a href="https://twitter.com/IAmJoeMills">
                    <BrandTwitter />
                </a>
                <a href="https://github.com/millsjoe">
                    <BrandGithub />
                </a>
                <a href="https://www.linkedin.com/in/joemills/">
                    <BrandLinkedin />
                </a>
            </div>
            <hr className={globalStyles.divider} />
        </div>
    );
};

export default React.memo(Header);
