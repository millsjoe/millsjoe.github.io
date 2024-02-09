import styles from "./styles.module.css";
import globalStyles from "../../styles/globals.module.css";

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <hr className={globalStyles.divider} />
            <h6>{"This was meant to be a CV/Portfolio but the game is funnier"}</h6>
        </div>
    );
};