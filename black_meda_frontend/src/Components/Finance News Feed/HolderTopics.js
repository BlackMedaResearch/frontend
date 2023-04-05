import styles from "./styles/HolderTopics.module.css";
import sec from "../../assets/videos/Finance News/sec.mp4";
import fed from "../../assets/videos/Finance News/fed.mp4";
import bank from "../../assets/videos/Finance News/bank.mp4";
import crypto from "../../assets/videos/Finance News/crypto.mp4";

const HolderTopics = () => {
  return (
    <div className={styles["wrapper-hottopics"]}>
      <div>
        <h1>Hot Topics</h1>
      </div>
      <div className={styles["holder-images"]}>
        <a>
          <div>
            <video
              className={styles["video-wrapper"]}
              src={sec}
              autoPlay
              loop
              muted
            />
            SEC
          </div>
        </a>
        <a>
          <div>
            <video
              className={styles["video-wrapper"]}
              src={crypto}
              autoPlay
              loop
              muted
            />
            Krypto
          </div>
        </a>

        <a>
          <div>
            <video
              className={styles["video-wrapper"]}
              src={fed}
              autoPlay
              loop
              muted
            />
            FED
          </div>
        </a>
        <a>
          <div>
            <video
              className={styles["video-wrapper"]}
              src={bank}
              autoPlay
              loop
              muted
            />
          </div>
          Bank Collaps
        </a>
      </div>
    </div>
  );
};

export default HolderTopics;
