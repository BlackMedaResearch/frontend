import styles from "./Opener.module.css";

const Opener = () => {
  return (
    <div className={styles["wrapper-opener"]}>
      <div className={styles.wrapper}>
        <h1 className={styles["title-header"]}>
          Tools um für die besser analyse der Wirtschaft.
        </h1>
        <div className={styles["button-box"]}>
          <a href="" className={styles["left-button"]}>
            Twitter Feed
          </a>
          <div className={styles['right-button']}>
            <p>View Macros</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opener;
