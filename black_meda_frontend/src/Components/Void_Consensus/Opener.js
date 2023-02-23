import styles from "./Opener.module.css";

const Opener = (props) => {
  return (
    <div className={styles.wrapper}>
      <video
        className={styles["video-wrapper"]}
        src={props.vid_src}
        autoPlay
        loop
        muted
      />

      <h1>Void</h1>
      <p>lorem is a lot of lost </p>
    </div>
  );
};
export default Opener;
