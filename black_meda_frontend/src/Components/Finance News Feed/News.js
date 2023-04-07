import styles from "./styles/News.module.css";
import { useDispatch } from "react-redux";
import { searchActions,modalActions } from "../../store";

const News = (props) => {
  const dispatch = useDispatch();

  const buttonClickHandler = () => {
    dispatch(
      searchActions.updateOBJ({
        author: props.author,
        content: props.content,
        description: props.description,
        publishedAt: props.publishedAt,
        source: props.source,
        title: props.title,
        url: props.url,
        urlToImage: props.urlToImage,
      })
    );
    dispatch(modalActions.updateShowModal(true));
  };
  return (
    <div className={styles["wrapper-news"]}>
      <img src={props.urlToImage} className={styles["img-wrapper"]} alt="newspicture" />
      <div className={styles["info-wrapper"]}>
        <h2 className={styles["heading"]}>{props.title}</h2>
      </div>
      <div className={styles["wrapper-show-more"]}>
        <button onClick={buttonClickHandler}>
          <div className={styles["text"]}>
            <span>zum</span>
            <span>Artikel</span>
          </div>
          <div className={styles["clone"]}>
            <span>zum</span>
            <span>Artikel</span>
          </div>
          <svg
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default News;
