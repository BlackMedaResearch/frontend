import { useSelector } from "react-redux";
import styles from "./styles/NewsDetail.module.css";
const NewsDetail = () => {
  const NewsOBJ = useSelector((state) => state.search.newsOBJ);

  return (
    <div className={styles["wrapper-news-details"]}>
      <img src={NewsOBJ.urlToImage} className={styles["topic-img"]} />
      <h1>{NewsOBJ.url}</h1>
    </div>
  );
};

export default NewsDetail;
