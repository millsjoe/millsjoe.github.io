import React from "react";
import styles from "./styles.module.css";
import { BrandGithub, BrandLinkedin, BrandTwitter } from "tabler-icons-react";

// subtitle: {
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//     fontSize: 32,
//     fontWeight: 500,
//     lineHeight: 1.1,
//     marginBottom: theme.spacing.md,
//     marginLeft: -8,
// },

// title: {
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//     fontSize: 36,
//     fontWeight: 900,
//     lineHeight: 1.1,
//     marginBottom: theme.spacing.md,
// },
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
            <hr className={styles.divider} />
        </div>
    );
};

export default React.memo(Header);
