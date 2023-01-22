import logo from "../../../assets/images/Header/blackmedalogo.png";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles["header-wrapper"]}>
      <div className={styles["header"]}>
        <img src={logo} alt="missing" className={styles["logo-img"]} />
        <nav className={styles.nav}>
          <li className={styles["link-item"]}>Macro Dashboard</li>
          <li className={styles["link-item"]}>Void</li>
          <li className={styles["link-item"]}>Twitter Feed</li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
