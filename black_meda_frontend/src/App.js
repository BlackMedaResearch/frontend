import video from "./assets/videos/backround.mp4";
import styles from "./App.module.css";
function App() {
  return (
    <div className="">
      <video
        src={video}
        autoPlay
        loop
        muted
        className={styles["backround-video"]}
      ></video>
    </div>
  );
}

export default App;
