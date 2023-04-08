import { useSelector } from "react-redux";
import NewsOutside from "../../UI/helpers/Buttons/NewsOutside";
import Suggestions from "./Suggestions";
import styles from "./styles/NewsDetail.module.css";

const NewsDetail = () => {
  const NewsOBJ = useSelector((state) => state.search.newsOBJ);

  return (
    <div className={styles["wrapper-news-details"]}>
      <div className={styles.container}>
        <img
          src={NewsOBJ.urlToImage}
          className={styles["topic-img"]}
          alt="News"
        />
        <div className={styles["wrapper-info"]}>
          <a
            href={NewsOBJ.url}
            target="_blank"
            className={styles.atag}
            rel="noreferrer"
          >
            <NewsOutside name="zum Artikel" url={NewsOBJ.url} />
          </a>
        </div>
      </div>
      <div className={styles["wrapper-text-content"]}>
        <div>
          <h2 className={styles["title-header"]}>{NewsOBJ.title}</h2>
          <p className={styles["description-p"]}>{NewsOBJ.description}</p>
        </div>
        <div>
          <div className={styles["info-wrapper"]}>
            <span className={styles["info-part"]}>Autor: </span>
            <span className={styles["info-part-data"]}>{NewsOBJ.author}</span>
          </div>
          <div className={styles["info-wrapper"]}>
            <span className={styles["info-part"]}>Quelle: </span>
            <span className={styles["info-part-data"]}>
              {NewsOBJ.source.name}
            </span>
          </div>
        </div>
        <div>
          <h3 className={styles["heading-content"]}>Atrikel: (auszug)</h3>
          <p className={styles["description-p"]}>{NewsOBJ.content}</p>
        </div>
      </div>
      <div className={styles["suggestion-wrapper"]}>
        <Suggestions />
      </div>
    </div>
  );
};

export default NewsDetail;
