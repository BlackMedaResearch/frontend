
import video from "../../assets/videos/backround.mp4";
import styles from "./Home.module.css";
import Header from "../../Components/UI/header/header";
import Opener from "../../Components/Landingpage/Opener";

const Home = () =>{
    return(
        <div className={styles["wrapper"]}>
        <Header/>
        <video className={styles['backround-video']} src={video} autoPlay loop muted/>
        <Opener/>
  
      </div>
   )

}
export default Home