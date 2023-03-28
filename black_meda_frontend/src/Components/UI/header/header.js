import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/Header/blackmedalogo.png";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles["header-wrapper"]}>
      <div className={styles["header"]}>
        <Link to="/">
          <img src={logo} alt="missing" className={styles["logo-img"]} />
        </Link>
        <nav className={styles.nav}>
          <Link to="/macro" className={styles["link-item"]}>
            View Macros
          </Link>
          <Link to="/void" className={styles["link-item"]}>
            Void
          </Link>
          <Link to="/finance_news" className={styles["link-item"]}>
            Finance News 
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
