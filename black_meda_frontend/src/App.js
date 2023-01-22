import video from "./assets/videos/backround.mp4";
import styles from "./App.module.css";
import Header from "./Components/UI/header/header";
function App() {
  return (
    <div className={styles["wrapper"]}>
      <Header/>
      <video className={styles['backround-video']} src={video} autoPlay loop muted/>

    </div>
  );
}
export default App;
