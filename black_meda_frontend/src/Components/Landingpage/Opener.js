import { Link } from "react-router-dom";
import styles from "./Opener.module.css";

const Opener = () => {
  return (
    <div className={styles["wrapper-opener"]}>
      <div className={styles.wrapper}>
        <h1 className={styles["title-header"]}>
          Tools um für die besser analyse der Wirtschaft.
        </h1>
        <div className={styles["button-box"]}>
          <Link to="/liveFeed" className={styles["left-button"]}>
            Finance News
          </Link>
          <div className={styles['right-button']}>
            <Link to="/macro" className={styles.link} >View Macros</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opener;
