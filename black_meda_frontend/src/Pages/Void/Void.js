import Opener from "../../Components/Void_Consensus/Opener";
import video from "../../assets/videos/void5.mp4";
import Header from "../../Components/UI/header/header";

const Void = () => {
  return (
    <>
    <Header/>
    <Opener vid_src={video}/>
    </>
  );
};

export default Void;
