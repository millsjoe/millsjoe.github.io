import styles from "./styles.module.css";

export const Content = () => {
    return (
        <div className={styles.main}>
            <h1>{"You may have noticed this is rather empty"}</h1>
            <h5>
                {"it was in a horrendous state before so im just remaking it (check the git history)"}
            </h5>
        </div>
    );
};
