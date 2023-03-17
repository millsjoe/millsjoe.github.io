import styles from "./styles.module.css";
import globalStyles from "../../styles/globals.module.css";

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <hr className={globalStyles.divider} />
            <h1>{"I'll add a footer here"}</h1>
        </div>
    );
};