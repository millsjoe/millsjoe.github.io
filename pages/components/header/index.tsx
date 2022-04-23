import React from "react";
import styles from "../../../styles/Home.module.css"

const Header = () => {
    return (
        <header className="header" >
           <h1 className={styles.title}>
          Tis the start
        </h1>
        </header>
    )
}

export default React.memo(Header)