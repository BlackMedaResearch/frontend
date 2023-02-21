import styles from "./Opener.module.css";

const Opener = (props) => {
  return (
    <div className={styles.wrapper}>
      <video className={styles['video-wrapper']} src={props.vid_src} autoPlay loop muted />
    </div>
  );
};
export default Opener;
